var u=Object.defineProperty;var y=(n,t,e)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var o=(n,t,e)=>y(n,typeof t!="symbol"?t+"":t,e);self.importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");class f{constructor(){o(this,"pyodide",null);o(this,"isInitialized",!1);o(this,"initPromise",null);o(this,"stdoutBuffer",[]);o(this,"stderrBuffer",[]);o(this,"interruptBuffer",null);self.addEventListener("message",this.handleMessage.bind(this))}async handleMessage(t){const e=t.data;try{switch(e.type){case"init":await this.initialize(e.indexURL,e.packages);break;case"execute":await this.execute(e);break;case"loadPackages":await this.loadPackages(e.packages);break;case"setupNLTK":await this.setupNLTK(e.dataPath);break;case"interrupt":this.interrupt();break;default:this.sendError("Unknown message type",void 0)}}catch(i){this.sendError(i instanceof Error?i.message:"Unknown error",e.id)}}async initialize(t,e){if(this.isInitialized){this.send({type:"ready"});return}if(this.initPromise){await this.initPromise;return}this.initPromise=this.doInitialize(t,e),await this.initPromise}async doInitialize(t,e){try{const i=r=>{this.stdoutBuffer.push(r),this.send({type:"stdout",data:r})},p=r=>{this.stderrBuffer.push(r),this.send({type:"stderr",data:r})};this.pyodide=await loadPyodide({stdout:i,stderr:p,fullStdLib:!1}),self.crossOriginIsolated&&(this.interruptBuffer=new Uint8Array(new SharedArrayBuffer(1)),this.pyodide.setInterruptBuffer(this.interruptBuffer));const l=e||["micropip","numpy","regex"];try{await this.pyodide.loadPackage(l)}catch(r){console.error("Failed to load packages:",r)}await this.pyodide.runPythonAsync(`
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
      `),e?.includes("nltk")&&await this.loadNLTK(),this.isInitialized=!0,this.send({type:"ready"})}catch(i){throw console.error("Failed to initialize Pyodide:",i),this.sendError(`Pyodide initialization failed: ${i instanceof Error?i.message:"Unknown error"}`,void 0),i}}async loadPackages(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.loadPackage(t),this.send({type:"packages_loaded",packages:t})}catch(e){throw new Error(`Failed to load packages: ${e}`)}}async loadNLTK(){if(this.pyodide)try{await this.pyodide.runPythonAsync(`
        import micropip
        await micropip.install('nltk')
        
        import nltk
        # NLTK is now available, but data needs to be loaded separately
        print("NLTK loaded successfully")
      `)}catch(t){console.warn("NLTK loading failed:",t)}}async setupNLTK(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.runPythonAsync(`
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
      `),this.send({type:"nltk_ready"})}catch(e){throw new Error(`NLTK setup failed: ${e}`)}}async execute(t){if(!this.pyodide)throw new Error("Pyodide not initialized");const{id:e,code:i,functionName:p,args:l}=t;try{this.stdoutBuffer=[],this.stderrBuffer=[],await this.pyodide.loadPackagesFromImports(i);const r=`_parser_input_${e}`;try{const c=l[0];if(this.pyodide.globals.set(r,c),this.pyodide.globals.get(r)===void 0)throw new Error(`Failed to verify ${r} was set in globals`)}catch(c){throw console.error(`Failed to set ${r} in Pyodide globals:`,c,"args[0]:",l[0]),new Error(`Failed to set parser input: ${c}`)}const d=`
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
    func = ${p}
    
    # Get input from globals (already passed from JS with unique name)
    try:
        # Access from globals() using the unique variable name for this execution
        input_data = globals().get('${r}')
        if input_data is None:
            raise RuntimeError("${r} is None in globals")
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
      `,a=await this.pyodide.runPythonAsync(d);this.pyodide.globals.delete(r);let s=a;a&&typeof a.toJs=="function"&&(s=a.toJs({dict_converter:Object.fromEntries})),s.stdout&&this.send({type:"stdout",id:e,data:s.stdout}),s.stderr&&this.send({type:"stderr",id:e,data:s.stderr}),s.success?this.send({type:"result",id:e,data:s.value}):(console.error("Python execution error:",{type:s.error_type,message:s.error_message,traceback:s.error}),this.send({type:"error",id:e,error:s.error||s.error_message||"Unknown error"}))}catch(r){let d=r instanceof Error?r.message:String(r);if(this.pyodide)try{const a=await this.pyodide.runPythonAsync(`
import sys
import traceback

error_msg = ""
if hasattr(sys, 'last_value'):
    error_msg = ''.join(traceback.format_exception(type(sys.last_value), sys.last_value, sys.last_value.__traceback__))
error_msg
          `);a&&(d=a)}catch{}console.error("Python execution error:",d),this.send({type:"error",id:e,error:d})}}interrupt(){this.interruptBuffer&&this.pyodide?(this.interruptBuffer[0]=2,this.send({type:"result",data:"Interrupted"})):this.sendError("Interrupts not available (requires cross-origin isolation)",void 0)}send(t){self.postMessage(t)}sendError(t,e){this.send({type:"error",id:e,error:t})}}new f;
