var f=Object.defineProperty;var h=(u,e,t)=>e in u?f(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var l=(u,e,t)=>h(u,typeof e!="symbol"?e+"":e,t);class y{constructor(){l(this,"isProd",!0)}sanitize(e){if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(r=>this.sanitize(r));const t={};for(const[r,s]of Object.entries(e)){const o=r.toLowerCase();this.isSensitiveField(o)?t[r]=this.redactValue(s):typeof s=="object"&&s!==null?t[r]=this.sanitize(s):t[r]=s}return t}isSensitiveField(e){return["apikey","api_key","api-key","authorization","auth","secret","bearer","x-api-key","x-auth-token"].some(r=>e.includes(r))}redactValue(e){return typeof e!="string"?"[REDACTED]":e.startsWith("Bearer ")?`Bearer ${e.substring(7).substring(0,8)}...REDACTED`:e.length>8?`${e.substring(0,8)}...REDACTED`:"[REDACTED]"}formatMessage(e,t,r){const s=new Date().toISOString(),o=`[V3:${e}] ${s}`,i=typeof t=="string"?t:this.safeStringify(t);if(r){const d=this.sanitize(r);return`${o} ${i} ${JSON.stringify(d,null,2)}`}return`${o} ${i}`}safeStringify(e){try{return typeof e=="string"?e:JSON.stringify(e)}catch{return String(e)}}normalizeArgs(e){if(!e||e.length===0)return null;if(e.length===1)return{message:e[0]};const t=e[0],r=e.length===2?e[1]:e.slice(1);return{message:t,data:r}}debug(...e){if(this.isProd)return;const t=this.normalizeArgs(e);t&&console.debug(this.formatMessage("DEBUG",t.message,t.data))}info(...e){if(this.isProd)return;const t=this.normalizeArgs(e);t&&console.info(this.formatMessage("INFO",t.message,t.data))}warn(...e){if(this.isProd)return;const t=this.normalizeArgs(e);t&&console.warn(this.formatMessage("WARN",t.message,t.data))}error(...e){if(!e||e.length===0)return;let t=e[0],r=e.slice(1);if(t instanceof Error){const d=t;t=d.message;const c=r.length===0?{stack:d.stack}:{stack:d.stack,data:r.length===1?r[0]:r};console.error(this.formatMessage("ERROR",t,c));return}let s;r[0]instanceof Error&&(s=r[0],r=r.slice(1));const o=r.length===0?void 0:r.length===1?r[0]:r,i=s?{message:s.message,stack:s.stack,data:o}:o;console.error(this.formatMessage("ERROR",t,i))}}const a=new y;self.importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");class m{constructor(){l(this,"pyodide",null);l(this,"isInitialized",!1);l(this,"initPromise",null);l(this,"stdoutBuffer",[]);l(this,"stderrBuffer",[]);l(this,"interruptBuffer",null);l(this,"memoryMonitorInterval",null);l(this,"executionCount",0);self.addEventListener("message",this.handleMessage.bind(this))}async handleMessage(e){const t=e.data;try{switch(t.type){case"init":await this.initialize(t.indexURL,t.packages);break;case"execute":await this.execute(t);break;case"loadPackages":await this.loadPackages(t.packages);break;case"setupNLTK":await this.setupNLTK(t.dataPath);break;case"interrupt":this.interrupt();break;default:this.sendError("Unknown message type",void 0)}}catch(r){this.sendError(r instanceof Error?r.message:"Unknown error",t.id)}}async initialize(e,t){if(this.isInitialized){this.send({type:"ready"});return}if(this.initPromise){await this.initPromise;return}this.initPromise=this.doInitialize(e,t),await this.initPromise}async doInitialize(e,t){try{const r=i=>{this.stdoutBuffer.push(i),this.send({type:"stdout",data:i})},s=i=>{this.stderrBuffer.push(i),this.send({type:"stderr",data:i})};this.pyodide=await loadPyodide({stdout:r,stderr:s,fullStdLib:!1}),self.crossOriginIsolated&&(this.interruptBuffer=new Uint8Array(new SharedArrayBuffer(1)),this.pyodide.setInterruptBuffer(this.interruptBuffer));const o=t||["micropip","numpy","regex"];a.debug("Loading micropip, numpy, packaging, regex");try{await this.pyodide.loadPackage(o),a.debug("Packages loaded successfully")}catch(i){a.error("Failed to load packages:",i)}await this.pyodide.runPythonAsync(`
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
      `),t?.includes("nltk")&&await this.loadNLTK(),this.isInitialized=!0,this.startMemoryMonitoring(),this.send({type:"ready"})}catch(r){throw a.error("Failed to initialize Pyodide:",r),this.sendError(`Pyodide initialization failed: ${r instanceof Error?r.message:"Unknown error"}`,void 0),r}}async loadPackages(e){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.loadPackage(e),this.send({type:"packages_loaded",packages:e})}catch(t){throw new Error(`Failed to load packages: ${t}`)}}async loadNLTK(){if(this.pyodide)try{await this.pyodide.runPythonAsync(`
        import micropip
        await micropip.install('nltk')
        
        import nltk
        # NLTK is now available, but data needs to be loaded separately
        print("NLTK loaded successfully")
      `)}catch(e){a.warn("NLTK loading failed:",e)}}async setupNLTK(e){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.runPythonAsync(`
        import nltk
        import os
        
        # Set custom data path if provided
        ${e?`nltk.data.path.append('${e}')`:""}
        
        # Try to download minimal required data
        # In browser context, this needs to be pre-staged
        try:
            # These would need to be pre-downloaded and served
            # For now, just set up the structure
            nltk.data.path.append('/nltk_data')
            print(f"NLTK data paths: {nltk.data.path}")
        except Exception as e:
            print(f"NLTK setup warning: {e}")
      `),this.send({type:"nltk_ready"})}catch(t){throw new Error(`NLTK setup failed: ${t}`)}}async execute(e){if(!this.pyodide)throw new Error("Pyodide not initialized");const{id:t,code:r,functionName:s,args:o}=e;try{this.stdoutBuffer=[],this.stderrBuffer=[],await this.pyodide.loadPackagesFromImports(r);const i=`_parser_input_${t}`;try{const p=o[0];if(this.pyodide.globals.set(i,p),this.pyodide.globals.get(i)===void 0)throw new Error(`Failed to verify ${i} was set in globals`)}catch(p){throw a.error(`Failed to set ${i} in Pyodide globals:`,p,"args[0]:",o[0]),new Error(`Failed to set parser input: ${p}`)}const d=`
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
${r}

# Now execute the function
try:
    # Get the function
    func = ${s}
    
    # Get input from globals (already passed from JS with unique name)
    try:
        # Access from globals() using the unique variable name for this execution
        input_data = globals().get('${i}')
        if input_data is None:
            raise RuntimeError("${i} is None in globals")
    except Exception as e:
        raise RuntimeError(f"Parser input not found in globals: {e}. This is an internal error.")
    
    # Execute the function (handle both sync and async)
    import inspect
    if inspect.iscoroutinefunction(func):
        result = await func(input_data)
    else:
        result = func(input_data)
    
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
      `,c=await this.pyodide.runPythonAsync(d);this.pyodide.globals.delete(i);let n=c;c&&typeof c.toJs=="function"&&(n=c.toJs({dict_converter:Object.fromEntries})),n.stdout&&this.send({type:"stdout",id:t,data:n.stdout}),n.stderr&&this.send({type:"stderr",id:t,data:n.stderr}),n.success?this.send({type:"result",id:t,data:n.value}):(a.error("Python execution error:",{type:n.error_type,message:n.error_message,traceback:n.error}),this.send({type:"error",id:t,error:n.error||n.error_message||"Unknown error"})),this.cleanupExecution(t)}catch(i){let d=i instanceof Error?i.message:String(i);if(this.pyodide)try{const c=await this.pyodide.runPythonAsync(`
import sys
import traceback

error_msg = ""
if hasattr(sys, 'last_value'):
    error_msg = ''.join(traceback.format_exception(type(sys.last_value), sys.last_value, sys.last_value.__traceback__))
error_msg
          `);c&&(d=c)}catch{}a.error("Python execution error:",d),this.send({type:"error",id:t,error:d}),this.cleanupExecution(t)}}interrupt(){this.interruptBuffer&&this.pyodide?(this.interruptBuffer[0]=2,this.send({type:"result",data:"Interrupted"})):this.sendError("Interrupts not available (requires cross-origin isolation)",void 0),this.memoryMonitorInterval&&(clearInterval(this.memoryMonitorInterval),this.memoryMonitorInterval=null)}send(e){self.postMessage(e)}sendError(e,t){this.send({type:"error",id:t,error:e})}startMemoryMonitoring(){this.memoryMonitorInterval=self.setInterval(()=>{this.checkMemoryUsage()},3e4),this.executionCount%10===0&&this.checkMemoryUsage()}async checkMemoryUsage(){try{if(performance.memory){const e=performance.memory.usedJSHeapSize,t=e/1e6;a.debug(`Pyodide Worker Memory: ${t.toFixed(2)}MB`),e>5e7&&this.pyodide&&(a.debug("Running Python garbage collection..."),await this.pyodide.runPythonAsync(`
            import gc
            collected = gc.collect()
            print(f"Python GC collected {collected} objects")
          `)),e>1e8&&(a.warn(`High memory usage in Pyodide worker: ${t.toFixed(2)}MB`),this.send({type:"error",error:`HIGH_MEMORY: ${t.toFixed(2)}MB - Consider recycling worker`}))}}catch(e){a.error("Memory monitoring error:",e)}}cleanupExecution(e){const t=this.stdoutBuffer.filter(s=>!s.includes(e)),r=this.stderrBuffer.filter(s=>!s.includes(e));this.stdoutBuffer=t.slice(-100),this.stderrBuffer=r.slice(-100),this.executionCount++}}new m;
