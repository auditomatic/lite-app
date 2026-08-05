var h=Object.defineProperty;var f=(c,t,e)=>t in c?h(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var d=(c,t,e)=>f(c,typeof t!="symbol"?t+"":t,e);self.importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");const m=`
import micropip

async def install_package(package_name):
    """Install a package from PyPI using micropip."""
    await micropip.install(package_name)
    print(f"Installed {package_name} from PyPI")
`;class g{constructor(){d(this,"pyodide",null);d(this,"isInitialized",!1);d(this,"initPromise",null);d(this,"stdoutBuffer",[]);d(this,"stderrBuffer",[]);d(this,"interruptBuffer",null);d(this,"memoryMonitorInterval",null);d(this,"executionCount",0);self.addEventListener("message",this.handleMessage.bind(this))}async handleMessage(t){const e=t.data;try{switch(e.type){case"init":await this.initialize(e.indexURL,e.packages,e.environmentSetup);break;case"execute":await this.execute(e);break;case"loadPackages":await this.loadPackages(e.packages);break;case"setupNLTK":await this.setupNLTK(e.dataPath);break;case"interrupt":this.interrupt();break;default:this.sendError("Unknown message type",void 0)}}catch(i){this.sendError(i instanceof Error?i.message:"Unknown error",e.id)}}async initialize(t,e,i){if(this.isInitialized){this.send({type:"ready"});return}if(this.initPromise){await this.initPromise;return}this.initPromise=this.doInitialize(t,e,i).catch(r=>{throw this.initPromise=null,r}),await this.initPromise}async doInitialize(t,e,i){try{const r=s=>{this.stdoutBuffer.push(s),this.send({type:"stdout",data:s})},u=s=>{this.stderrBuffer.push(s),this.send({type:"stderr",data:s})};this.pyodide=await loadPyodide({stdout:r,stderr:u,fullStdLib:!1}),self.crossOriginIsolated&&(this.interruptBuffer=new Uint8Array(new SharedArrayBuffer(1)),this.pyodide.setInterruptBuffer(this.interruptBuffer));const n=e||["micropip","numpy","regex"];console.log("[Pyodide Worker] Loading micropip, numpy, packaging, regex");try{await this.pyodide.loadPackage(n),console.log("[Pyodide Worker] Packages loaded successfully")}catch(s){console.error("[Pyodide Worker] Failed to load packages:",s)}if(!i)throw new Error("init message carried no environmentSetup source");await this.pyodide.runPythonAsync(m),await this.pyodide.runPythonAsync(i),e?.includes("nltk")&&await this.loadNLTK(),this.isInitialized=!0,this.startMemoryMonitoring(),this.send({type:"ready"})}catch(r){throw console.error("[Pyodide Worker] Failed to initialize Pyodide:",r),new Error(`Pyodide initialization failed: ${r instanceof Error?r.message:"Unknown error"}`)}}async loadPackages(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.loadPackage(t),this.send({type:"packages_loaded",packages:t})}catch(e){throw new Error(`Failed to load packages: ${e}`)}}async loadNLTK(){if(this.pyodide)try{await this.pyodide.runPythonAsync(`
        import micropip
        await micropip.install('nltk')
        
        import nltk
        # NLTK is now available, but data needs to be loaded separately
        print("NLTK loaded successfully")
      `)}catch(t){console.warn("[Pyodide Worker] NLTK loading failed:",t)}}async setupNLTK(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.runPythonAsync(`
        import nltk
        import os
        
        # Set custom data path if provided
        ${t?`nltk.data.path.append('${t}')`:""}
        
        # Try to download minimal required data
        # In browser context, this needs to be pre-staged
        try:
            # These would need to be pre-downloaded and served
            # For now, just set up the structure
            nltk.data.path.append('/nltk_data')
            print(f"NLTK data paths: {nltk.data.path}")
        except Exception as e:
            print(f"NLTK setup warning: {e}")
      `),this.send({type:"nltk_ready"})}catch(e){throw new Error(`NLTK setup failed: ${e}`)}}async execute(t){if(!this.pyodide)throw new Error("Pyodide not initialized");const{id:e,code:i,functionName:r,args:u}=t;try{this.stdoutBuffer=[],this.stderrBuffer=[],await this.pyodide.loadPackagesFromImports(i);const n=u.map((a,l)=>`_parser_arg_${e}_${l}`);try{for(let a=0;a<u.length;a++){const l=n[a];if(this.pyodide.globals.set(l,u[a]),this.pyodide.globals.get(l)===void 0)throw new Error(`Failed to verify ${l} was set in globals`)}}catch(a){for(const l of n)this.pyodide.globals.delete(l);throw console.error("[Pyodide Worker] Failed to set function arguments in Pyodide globals:",a),new Error(`Failed to set Python function arguments: ${a}`)}const s=n.map(a=>`globals()[${JSON.stringify(a)}]`).join(", "),y=`
import sys
import json
import traceback
import io
import asyncio

# Capture stdout/stderr
_stdout_capture = io.StringIO()
_stderr_capture = io.StringIO()
_original_stdout = sys.stdout
_original_stderr = sys.stderr

# Redirect output
sys.stdout = _stdout_capture
sys.stderr = _stderr_capture

# User-provided code (at module level, not indented)
${i}

# Now execute the function
try:
    # Get the function
    func = ${r}
    
    # Get all arguments from globals (already passed from JS with unique names).
    # Square-bracket lookup distinguishes a legitimate None argument from a
    # missing transport value.
    call_args = [${s}]
    
    # Execute the function (handle both sync and async)
    import inspect
    if inspect.iscoroutinefunction(func):
        result = await func(*call_args)
    else:
        result = func(*call_args)
    
    # Convert result to JSON-serializable format
    serialized = to_json_serializable(result)
    
    _parser_result = {
        'success': True,
        'value': serialized,
        'stdout': _stdout_capture.getvalue(),
        'stderr': _stderr_capture.getvalue()
    }
except Exception as e:
    _parser_result = {
        'success': False,
        'error': format_exception(e),
        'error_type': type(e).__name__,
        'error_message': str(e),
        'stdout': _stdout_capture.getvalue(),
        'stderr': _stderr_capture.getvalue()
    }
    
finally:
    # Restore stdout/stderr
    sys.stdout = _original_stdout
    sys.stderr = _original_stderr

_parser_result
      `;let p;try{p=await this.pyodide.runPythonAsync(y)}finally{for(const a of n)this.pyodide.globals.delete(a)}let o=p;p&&typeof p.toJs=="function"&&(o=p.toJs({dict_converter:Object.fromEntries})),o.stdout&&this.send({type:"stdout",id:e,data:o.stdout}),o.stderr&&this.send({type:"stderr",id:e,data:o.stderr}),o.success?this.send({type:"result",id:e,data:o.value}):(console.error("[Pyodide Worker] Python execution error:",{type:o.error_type,message:o.error_message,traceback:o.error}),this.send({type:"error",id:e,error:o.error||o.error_message||"Unknown error"})),this.cleanupExecution(e)}catch(n){let s=n instanceof Error?n.message:String(n);if(this.pyodide)try{const y=await this.pyodide.runPythonAsync(`
import sys
import traceback

error_msg = ""
if hasattr(sys, 'last_value'):
    error_msg = ''.join(traceback.format_exception(type(sys.last_value), sys.last_value, sys.last_value.__traceback__))
error_msg
          `);y&&(s=y)}catch{}console.error("[Pyodide Worker] Python execution error:",s),this.send({type:"error",id:e,error:s}),this.cleanupExecution(e)}}interrupt(){this.interruptBuffer&&this.pyodide?(this.interruptBuffer[0]=2,this.send({type:"result",data:"Interrupted"})):this.sendError("Interrupts not available (requires cross-origin isolation)",void 0),this.memoryMonitorInterval&&(clearInterval(this.memoryMonitorInterval),this.memoryMonitorInterval=null)}send(t){self.postMessage(t)}sendError(t,e){this.send({type:"error",id:e,error:t})}startMemoryMonitoring(){this.memoryMonitorInterval=self.setInterval(()=>{this.checkMemoryUsage()},3e4)}async checkMemoryUsage(){try{if(performance.memory){const t=performance.memory.usedJSHeapSize,e=t/1e6;console.log(`[Pyodide Worker] Memory: ${e.toFixed(2)}MB`),t>5e7&&this.pyodide&&(console.log("[Pyodide Worker] Running Python garbage collection..."),await this.pyodide.runPythonAsync(`
            import gc
            collected = gc.collect()
            print(f"Python GC collected {collected} objects")
          `)),t>1e8&&(console.warn(`[Pyodide Worker] High memory usage: ${e.toFixed(2)}MB`),this.send({type:"memory",data:{usedHeapMB:Number(e.toFixed(2))}}))}}catch(t){console.error("[Pyodide Worker] Memory monitoring error:",t)}}cleanupExecution(t){const e=this.stdoutBuffer.filter(r=>!r.includes(t)),i=this.stderrBuffer.filter(r=>!r.includes(t));this.stdoutBuffer=e.slice(-100),this.stderrBuffer=i.slice(-100),this.executionCount++,this.executionCount%10===0&&this.checkMemoryUsage()}}new g;
