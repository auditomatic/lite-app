var g=Object.defineProperty;var k=(y,t,e)=>t in y?g(y,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):y[t]=e;var d=(y,t,e)=>k(y,typeof t!="symbol"?t+"":t,e);const w={punkt_tab:{subdir:"tokenizers"},stopwords:{subdir:"corpora"},vader_lexicon:{subdir:"sentiment"},opinion_lexicon:{subdir:"corpora"},names:{subdir:"corpora"},universal_tagset:{subdir:"taggers"},tagsets_json:{subdir:"help"},nonbreaking_prefixes:{subdir:"corpora"},large_grammars:{subdir:"grammars"},book_grammars:{subdir:"grammars"},sample_grammars:{subdir:"grammars"},swadesh:{subdir:"corpora"},rslp:{subdir:"stemmers"},spanish_grammars:{subdir:"grammars"},basque_grammars:{subdir:"grammars"},paradigms:{subdir:"corpora"}},b=Object.keys(w),_="/vendor/pyodide/0.29.4/";async function P(){return await import(new URL(_+"pyodide.mjs",self.location.href).href)}const E=`
import micropip

async def install_package(package_name):
    """Install a package from PyPI using micropip."""
    await micropip.install(package_name)
    print(f"Installed {package_name} from PyPI")
`,x={micropip:!0};let h=!1;function m(){h||(h=!0,self.postMessage({type:"optional_tier_signal"}))}const f={"typing-extensions":"typing_extensions",beautifulsoup4:"bs4","json-repair":"json_repair"};class v{constructor(){d(this,"pyodide",null);d(this,"isInitialized",!1);d(this,"initPromise",null);d(this,"stdoutBuffer",[]);d(this,"stderrBuffer",[]);d(this,"interruptBuffer",null);d(this,"memoryMonitorInterval",null);d(this,"executionCount",0);d(this,"nltkReadyResources",new Set);d(this,"nltkHydrationPromise",null);d(this,"operationQueue",Promise.resolve());self.addEventListener("message",this.handleMessage.bind(this))}async handleMessage(t){const e=t.data;try{switch(e.type){case"init":await this.enqueueOperation(()=>this.initialize(e.indexURL,e.packages,e.environmentSetup));break;case"execute":await this.enqueueOperation(()=>this.execute(e));break;case"loadPackages":await this.enqueueOperation(()=>this.loadPackages(e.packages));break;case"setupNLTK":await this.enqueueOperation(()=>this.setupNLTK(e.dataPath));break;case"interrupt":this.interrupt();break;default:this.sendError("Unknown message type",void 0)}}catch(o){this.sendError(o instanceof Error?o.message:"Unknown error",e.id)}}enqueueOperation(t){const e=this.operationQueue.then(t,t);return this.operationQueue=e.catch(()=>{}),e}async initialize(t,e,o){if(this.isInitialized){this.send({type:"ready"});return}if(this.initPromise){await this.initPromise;return}this.initPromise=this.doInitialize(t,e,o).catch(r=>{throw this.initPromise=null,r}),await this.initPromise}async doInitialize(t,e,o){try{const r=i=>{this.stdoutBuffer.push(i),this.send({type:"stdout",data:i})},c=i=>{this.stderrBuffer.push(i),this.send({type:"stderr",data:i})},{loadPyodide:n}=await P();this.pyodide=await n({indexURL:_,stdout:r,stderr:c,fullStdLib:!1}),self.crossOriginIsolated&&(this.interruptBuffer=new Uint8Array(new SharedArrayBuffer(1)),this.pyodide.setInterruptBuffer(this.interruptBuffer));const l=this.pyodide.loadPackage.bind(this.pyodide);this.pyodide.loadPackage=async(i,a)=>{const s=Array.isArray(i)?i:[String(i)];for(const p of s)x[p]||m();return l(i,a)};const u=e||["micropip"];if(console.log("[Pyodide Worker] Loading",u.join(", ")),await this.pyodide.loadPackage(u),await this.verifyPackageImports(u.map(i=>f[i]||i),u),console.log("[Pyodide Worker] Packages loaded successfully"),!o)throw new Error("init message carried no environmentSetup source");await this.pyodide.runPythonAsync(E),await this.pyodide.runPythonAsync(o),e?.includes("nltk")&&await this.loadNLTK(),this.isInitialized=!0,this.startMemoryMonitoring(),this.send({type:"ready"})}catch(r){throw console.error("[Pyodide Worker] Failed to initialize Pyodide:",r),new Error(`Pyodide initialization failed: ${r instanceof Error?r.message:"Unknown error"}`)}}async loadPackages(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.loadPackage(t),await this.verifyPackageImports(t.map(e=>f[e]||e),t),this.send({type:"packages_loaded",packages:t})}catch(e){throw new Error(`Failed to load packages: ${e}`)}}async verifyPackageImports(t,e){if(!this.pyodide||t.length===0)return;const o=[...new Set(t.filter(Boolean))];let r=null;try{r=await this.pyodide.runPythonAsync(`
import importlib
_missing_package_imports = []
for _module_name in ${JSON.stringify(o)}:
    try:
        importlib.import_module(_module_name)
    except Exception as _error:
        _missing_package_imports.append((_module_name, type(_error).__name__, str(_error)))
_missing_package_imports
      `);const c=r&&typeof r.toJs=="function"?r.toJs({dict_converter:Object.fromEntries}):r;if(c&&c.length){const n=c.map(l=>`${l[0]} (${l[1]}: ${l[2]})`).join("; ");throw new Error(`PACKAGE_LOAD_ERROR: package "${e.join(", ")}" did not provide import ${n}`)}}finally{r&&typeof r.destroy=="function"&&r.destroy()}}async hydrateNltkData(t="punkt_tab"){if(!(!this.pyodide||!t||this.nltkReadyResources.has(t))){if(this.nltkHydrationPromise)return this.nltkHydrationPromise;this.nltkHydrationPromise=(async()=>{await this.pyodide.runPythonAsync(`
import hashlib, io, json, os, shutil, zipfile
from pyodide.http import pyfetch

NLTK_VENDOR_ROOT = "/vendor/nltk-data/"
NLTK_INSTALL_DIR = "/nltk_data"
_wanted_resource = ${JSON.stringify(t)}
index_resp = await pyfetch(NLTK_VENDOR_ROOT + "index.json")
if not getattr(index_resp, "ok", False):
    raise RuntimeError("NLTK manifest fetch failed with HTTP " + str(getattr(index_resp, "status", "unknown")))
index = json.loads(await index_resp.string())
entry = next((item for item in index.get("packages", [])
              if item.get("path", "").rstrip("/").split("/")[-1] == _wanted_resource + ".zip"), None)
if entry is None:
    raise RuntimeError("NLTK resource not vendored: " + _wanted_resource)
resource_resp = await pyfetch(entry["path"])
if not getattr(resource_resp, "ok", False):
    raise RuntimeError("NLTK resource fetch failed for " + _wanted_resource + " with HTTP " + str(getattr(resource_resp, "status", "unknown")))
buf = await resource_resp.bytes()
if len(buf) != int(entry["sizeBytes"]):
    raise RuntimeError("NLTK resource size mismatch for " + _wanted_resource)
digest = hashlib.sha256(buf).hexdigest()
if digest.lower() != str(entry["sha256"]).lower():
    raise RuntimeError("NLTK resource SHA-256 mismatch for " + _wanted_resource)

category = entry["path"].rstrip("/").split("/")[-2]
resources_dir = os.path.join(NLTK_INSTALL_DIR, "resources")
os.makedirs(resources_dir, exist_ok=True)
final_root = os.path.join(resources_dir, _wanted_resource + "-" + digest[:16])
tmp_root = final_root + ".tmp"
if os.path.exists(tmp_root): shutil.rmtree(tmp_root)
tmp_category = os.path.join(tmp_root, category)
os.makedirs(tmp_category, exist_ok=True)
try:
    zf = zipfile.ZipFile(io.BytesIO(buf))
    for member in zf.namelist():
        target = os.path.abspath(os.path.join(tmp_category, member))
        if not target.startswith(os.path.abspath(tmp_category) + os.sep):
            raise RuntimeError("unsafe NLTK archive path")
        if member.endswith("/"):
            os.makedirs(target, exist_ok=True)
        else:
            os.makedirs(os.path.dirname(target), exist_ok=True)
            with zf.open(member) as src, open(target, "wb") as dst:
                dst.write(src.read())
    if os.path.exists(final_root):
        shutil.rmtree(tmp_root)
    else:
        os.replace(tmp_root, final_root)
finally:
    if os.path.exists(tmp_root): shutil.rmtree(tmp_root)

import nltk
if final_root not in nltk.data.path:
    nltk.data.path.append(final_root)
      `),this.nltkReadyResources.add(t),console.log(`[Pyodide Worker] NLTK resource hydrated: ${t}`)})();try{await this.nltkHydrationPromise}catch(e){throw console.warn("[Pyodide Worker] NLTK data hydration failed:",e),new Error(`NLTK_RESOURCE_ERROR: ${e instanceof Error?e.message:String(e)}`)}finally{this.nltkHydrationPromise=null}}}async loadNLTK(){if(this.pyodide)try{await this.pyodide.runPythonAsync(`import nltk
print("NLTK loaded successfully")`)}catch(t){console.warn("[Pyodide Worker] NLTK loading failed:",t)}}async setupNLTK(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.runPythonAsync(`
        import nltk
        import os

        # Custom data path if provided
        ${t?`if '${t}' not in nltk.data.path: nltk.data.path.append('${t}')`:""}
        if '/nltk_data' not in nltk.data.path: nltk.data.path.append('/nltk_data')
        print(f"NLTK data paths: {nltk.data.path}")
      `),this.send({type:"nltk_ready"})}catch(e){throw new Error(`NLTK setup failed: ${e}`)}}async execute(t){if(!this.pyodide)throw new Error("Pyodide not initialized");const{id:e,code:o,functionName:r,args:c}=t;try{if(this.stdoutBuffer=[],this.stderrBuffer=[],await this.pyodide.loadPackagesFromImports(o),await this.pyodide.runPythonAsync("resolve_optional_modules()"),/\bnltk\b/.test(o)){m();for(const s of b)await this.hydrateNltkData(s)}const n=c.map((s,p)=>`_parser_arg_${e}_${p}`);try{for(let s=0;s<c.length;s++){const p=n[s];if(this.pyodide.globals.set(p,c[s]),this.pyodide.globals.get(p)===void 0)throw new Error(`Failed to verify ${p} was set in globals`)}}catch(s){for(const p of n)this.pyodide.globals.delete(p);throw console.error("[Pyodide Worker] Failed to set function arguments in Pyodide globals:",s),new Error(`Failed to set Python function arguments: ${s}`)}const l=n.map(s=>`globals()[${JSON.stringify(s)}]`).join(", "),u=`
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

try:
    # Compile and execute user source inside the protected region. A syntax
    # error must still reach the finally block that restores stdout/stderr.
    exec(${JSON.stringify(o)}, globals())

    # Now execute the function
    # Get the function
    func = ${r}
    
    # Get all arguments from globals (already passed from JS with unique names).
    # Square-bracket lookup distinguishes a legitimate None argument from a
    # missing transport value.
    call_args = [${l}]
    
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
      `;let i;try{i=await this.pyodide.runPythonAsync(u)}finally{for(const s of n)this.pyodide.globals.delete(s)}let a=i;try{i&&typeof i.toJs=="function"&&(a=i.toJs({dict_converter:Object.fromEntries}))}finally{i&&typeof i.destroy=="function"&&i.destroy()}a.stdout&&this.send({type:"stdout",id:e,data:a.stdout}),a.stderr&&this.send({type:"stderr",id:e,data:a.stderr}),a.success?this.send({type:"result",id:e,data:a.value}):(console.error("[Pyodide Worker] Python execution error:",{type:a.error_type,message:a.error_message,traceback:a.error}),this.send({type:"error",id:e,error:a.error||a.error_message||"Unknown error"})),this.cleanupExecution(e)}catch(n){let l=n instanceof Error?n.message:String(n);if(this.pyodide)try{const u=await this.pyodide.runPythonAsync(`
import sys
import traceback

error_msg = ""
if hasattr(sys, 'last_value'):
    error_msg = ''.join(traceback.format_exception(type(sys.last_value), sys.last_value, sys.last_value.__traceback__))
error_msg
          `);u&&(l=u)}catch{}console.error("[Pyodide Worker] Python execution error:",l),this.send({type:"error",id:e,error:l}),this.cleanupExecution(e)}}interrupt(){this.interruptBuffer&&this.pyodide?(this.interruptBuffer[0]=2,this.send({type:"result",data:"Interrupted"})):this.sendError("Interrupts not available (requires cross-origin isolation)",void 0),this.memoryMonitorInterval&&(clearInterval(this.memoryMonitorInterval),this.memoryMonitorInterval=null)}send(t){self.postMessage(t)}sendError(t,e){this.send({type:"error",id:e,error:t})}startMemoryMonitoring(){this.memoryMonitorInterval=self.setInterval(()=>{this.enqueueOperation(()=>this.checkMemoryUsage())},3e4)}async checkMemoryUsage(){try{if(performance.memory){const t=performance.memory.usedJSHeapSize,e=t/1e6;console.log(`[Pyodide Worker] Memory: ${e.toFixed(2)}MB`),t>5e7&&this.pyodide&&(console.log("[Pyodide Worker] Running Python garbage collection..."),await this.pyodide.runPythonAsync(`
            import gc
            collected = gc.collect()
            print(f"Python GC collected {collected} objects")
          `)),t>1e8&&(console.warn(`[Pyodide Worker] High memory usage: ${e.toFixed(2)}MB`),this.send({type:"memory",data:{usedHeapMB:Number(e.toFixed(2))}}))}}catch(t){console.error("[Pyodide Worker] Memory monitoring error:",t)}}cleanupExecution(t){const e=this.stdoutBuffer.filter(r=>!r.includes(t)),o=this.stderrBuffer.filter(r=>!r.includes(t));this.stdoutBuffer=e.slice(-100),this.stderrBuffer=o.slice(-100),this.executionCount++,this.executionCount%10===0&&this.enqueueOperation(()=>this.checkMemoryUsage())}}new v;
