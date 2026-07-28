var f=Object.defineProperty;var h=(l,t,e)=>t in l?f(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var a=(l,t,e)=>h(l,typeof t!="symbol"?t+"":t,e);self.importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");class m{constructor(){a(this,"pyodide",null);a(this,"isInitialized",!1);a(this,"initPromise",null);a(this,"stdoutBuffer",[]);a(this,"stderrBuffer",[]);a(this,"interruptBuffer",null);a(this,"memoryMonitorInterval",null);a(this,"executionCount",0);self.addEventListener("message",this.handleMessage.bind(this))}async handleMessage(t){const e=t.data;try{switch(e.type){case"init":await this.initialize(e.indexURL,e.packages);break;case"execute":await this.execute(e);break;case"loadPackages":await this.loadPackages(e.packages);break;case"setupNLTK":await this.setupNLTK(e.dataPath);break;case"interrupt":this.interrupt();break;default:this.sendError("Unknown message type",void 0)}}catch(i){this.sendError(i instanceof Error?i.message:"Unknown error",e.id)}}async initialize(t,e){if(this.isInitialized){this.send({type:"ready"});return}if(this.initPromise){await this.initPromise;return}this.initPromise=this.doInitialize(t,e),await this.initPromise}async doInitialize(t,e){try{const i=r=>{this.stdoutBuffer.push(r),this.send({type:"stdout",data:r})},n=r=>{this.stderrBuffer.push(r),this.send({type:"stderr",data:r})};this.pyodide=await loadPyodide({stdout:i,stderr:n,fullStdLib:!1}),self.crossOriginIsolated&&(this.interruptBuffer=new Uint8Array(new SharedArrayBuffer(1)),this.pyodide.setInterruptBuffer(this.interruptBuffer));const c=e||["micropip","numpy","regex"];console.log("[Pyodide Worker] Loading micropip, numpy, packaging, regex");try{await this.pyodide.loadPackage(c),console.log("[Pyodide Worker] Packages loaded successfully")}catch(r){console.error("[Pyodide Worker] Failed to load packages:",r)}await this.pyodide.runPythonAsync(`
        import micropip
        import sys
        import json
        import traceback
        
        # Helper to install packages from PyPI
        async def install_package(package_name):
            """Install a package from PyPI using micropip."""
            await micropip.install(package_name)
            print(f"Installed {package_name} from PyPI")
        
        # Set up proper error handling
        def format_exception(e):
            """Format Python exceptions with full traceback."""
            return ''.join(traceback.format_exception(type(e), e, e.__traceback__))
        
        # Helper function for JSON serialization of complex Python objects
        def to_json_serializable(obj):
            """Convert Python objects to JSON-serializable format."""
            try:
                import numpy as np
                import pandas as pd
                
                if isinstance(obj, np.ndarray):
                    return obj.tolist()
                elif isinstance(obj, pd.DataFrame):
                    return obj.to_dict('records')
                elif isinstance(obj, pd.Series):
                    return obj.to_dict()
                elif isinstance(obj, np.integer):
                    return int(obj)
                elif isinstance(obj, np.floating):
                    return float(obj)
                elif isinstance(obj, np.bool_):
                    return bool(obj)
            except ImportError:
                pass  # NumPy/pandas not loaded yet
            
            if isinstance(obj, (str, int, float, bool, type(None))):
                return obj
            elif isinstance(obj, (list, tuple)):
                return [to_json_serializable(item) for item in obj]
            elif isinstance(obj, dict):
                return {key: to_json_serializable(value) for key, value in obj.items()}
            elif isinstance(obj, set):
                return list(obj)
            elif hasattr(obj, '__dict__'):
                return to_json_serializable(obj.__dict__)
            else:
                return str(obj)
        
        # Store in global namespace for later use
        sys.modules['__main__'].format_exception = format_exception
        sys.modules['__main__'].to_json_serializable = to_json_serializable
        
        print("Python environment initialized with full error handling and serialization")
      `),e?.includes("nltk")&&await this.loadNLTK(),this.isInitialized=!0,this.startMemoryMonitoring(),this.send({type:"ready"})}catch(i){throw console.error("[Pyodide Worker] Failed to initialize Pyodide:",i),this.sendError(`Pyodide initialization failed: ${i instanceof Error?i.message:"Unknown error"}`,void 0),i}}async loadPackages(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.loadPackage(t),this.send({type:"packages_loaded",packages:t})}catch(e){throw new Error(`Failed to load packages: ${e}`)}}async loadNLTK(){if(this.pyodide)try{await this.pyodide.runPythonAsync(`
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
      `),this.send({type:"nltk_ready"})}catch(e){throw new Error(`NLTK setup failed: ${e}`)}}async execute(t){if(!this.pyodide)throw new Error("Pyodide not initialized");const{id:e,code:i,functionName:n,args:c}=t;try{this.stdoutBuffer=[],this.stderrBuffer=[],await this.pyodide.loadPackagesFromImports(i);const r=c.map((s,d)=>`_parser_arg_${e}_${d}`);try{for(let s=0;s<c.length;s++){const d=r[s];if(this.pyodide.globals.set(d,c[s]),this.pyodide.globals.get(d)===void 0)throw new Error(`Failed to verify ${d} was set in globals`)}}catch(s){for(const d of r)this.pyodide.globals.delete(d);throw console.error("[Pyodide Worker] Failed to set function arguments in Pyodide globals:",s),new Error(`Failed to set Python function arguments: ${s}`)}const u=r.map(s=>`globals()[${JSON.stringify(s)}]`).join(", "),y=`
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
    func = ${n}
    
    # Get all arguments from globals (already passed from JS with unique names).
    # Square-bracket lookup distinguishes a legitimate None argument from a
    # missing transport value.
    call_args = [${u}]
    
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
      `;let p;try{p=await this.pyodide.runPythonAsync(y)}finally{for(const s of r)this.pyodide.globals.delete(s)}let o=p;p&&typeof p.toJs=="function"&&(o=p.toJs({dict_converter:Object.fromEntries})),o.stdout&&this.send({type:"stdout",id:e,data:o.stdout}),o.stderr&&this.send({type:"stderr",id:e,data:o.stderr}),o.success?this.send({type:"result",id:e,data:o.value}):(console.error("[Pyodide Worker] Python execution error:",{type:o.error_type,message:o.error_message,traceback:o.error}),this.send({type:"error",id:e,error:o.error||o.error_message||"Unknown error"})),this.cleanupExecution(e)}catch(r){let u=r instanceof Error?r.message:String(r);if(this.pyodide)try{const y=await this.pyodide.runPythonAsync(`
import sys
import traceback

error_msg = ""
if hasattr(sys, 'last_value'):
    error_msg = ''.join(traceback.format_exception(type(sys.last_value), sys.last_value, sys.last_value.__traceback__))
error_msg
          `);y&&(u=y)}catch{}console.error("[Pyodide Worker] Python execution error:",u),this.send({type:"error",id:e,error:u}),this.cleanupExecution(e)}}interrupt(){this.interruptBuffer&&this.pyodide?(this.interruptBuffer[0]=2,this.send({type:"result",data:"Interrupted"})):this.sendError("Interrupts not available (requires cross-origin isolation)",void 0),this.memoryMonitorInterval&&(clearInterval(this.memoryMonitorInterval),this.memoryMonitorInterval=null)}send(t){self.postMessage(t)}sendError(t,e){this.send({type:"error",id:e,error:t})}startMemoryMonitoring(){this.memoryMonitorInterval=self.setInterval(()=>{this.checkMemoryUsage()},3e4),this.executionCount%10===0&&this.checkMemoryUsage()}async checkMemoryUsage(){try{if(performance.memory){const t=performance.memory.usedJSHeapSize,e=t/1e6;console.log(`[Pyodide Worker] Memory: ${e.toFixed(2)}MB`),t>5e7&&this.pyodide&&(console.log("[Pyodide Worker] Running Python garbage collection..."),await this.pyodide.runPythonAsync(`
            import gc
            collected = gc.collect()
            print(f"Python GC collected {collected} objects")
          `)),t>1e8&&(console.warn(`[Pyodide Worker] High memory usage: ${e.toFixed(2)}MB`),this.send({type:"error",error:`HIGH_MEMORY: ${e.toFixed(2)}MB - Consider recycling worker`}))}}catch(t){console.error("[Pyodide Worker] Memory monitoring error:",t)}}cleanupExecution(t){const e=this.stdoutBuffer.filter(n=>!n.includes(t)),i=this.stderrBuffer.filter(n=>!n.includes(t));this.stdoutBuffer=e.slice(-100),this.stderrBuffer=i.slice(-100),this.executionCount++}}new m;
