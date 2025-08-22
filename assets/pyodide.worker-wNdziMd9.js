var ce=Object.defineProperty;var ue=(e,t,r)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var w=(e,t,r)=>ue(e,typeof t!="symbol"?t+"":t,r);var Se=pe((Pe,T)=>{var fe=Object.defineProperty,d=(e,t)=>fe(e,"name",{value:t,configurable:!0}),U=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function M(e){return!isNaN(parseFloat(e))&&isFinite(e)}d(M,"_isNumber");function h(e){return e.charAt(0).toUpperCase()+e.substring(1)}d(h,"_capitalize");function O(e){return function(){return this[e]}}d(O,"_getter");var E=["isConstructor","isEval","isNative","isToplevel"],S=["columnNumber","lineNumber"],j=["fileName","functionName","source"],me=["args"],ye=["evalOrigin"],P=E.concat(S,j,me,ye);function m(e){if(e)for(var t=0;t<P.length;t++)e[P[t]]!==void 0&&this["set"+h(P[t])](e[P[t]])}d(m,"StackFrame");m.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof m)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new m(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",r=this.getColumnNumber()||"",a=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+r+")":"[eval]:"+t+":"+r:a?a+" ("+e+":"+t+":"+r+")":e+":"+t+":"+r}};m.fromString=d(function(e){var t=e.indexOf("("),r=e.lastIndexOf(")"),a=e.substring(0,t),s=e.substring(t+1,r).split(","),i=e.substring(r+1);if(i.indexOf("@")===0)var o=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),n=o[1],l=o[2],c=o[3];return new m({functionName:a,args:s||void 0,fileName:n,lineNumber:l||void 0,columnNumber:c||void 0})},"StackFrame$$fromString");for(_=0;_<E.length;_++)m.prototype["get"+h(E[_])]=O(E[_]),m.prototype["set"+h(E[_])]=function(e){return function(t){this[e]=!!t}}(E[_]);var _;for(b=0;b<S.length;b++)m.prototype["get"+h(S[b])]=O(S[b]),m.prototype["set"+h(S[b])]=function(e){return function(t){if(!M(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(S[b]);var b;for(v=0;v<j.length;v++)m.prototype["get"+h(j[v])]=O(j[v]),m.prototype["set"+h(j[v])]=function(e){return function(t){this[e]=String(t)}}(j[v]);var v,N=m;function B(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:d(function(r){if(r.stack&&r.stack.match(e))return this.parseV8OrIE(r);if(r.stack)return this.parseFFOrSafari(r);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:d(function(r){if(r.indexOf(":")===-1)return[r];var a=/(.+?)(?::(\d+))?(?::(\d+))?$/,s=a.exec(r.replace(/[()]/g,""));return[s[1],s[2]||void 0,s[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:d(function(r){var a=r.stack.split(`
`).filter(function(s){return!!s.match(e)},this);return a.map(function(s){s.indexOf("(eval ")>-1&&(s=s.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var i=s.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),o=i.match(/ (\(.+\)$)/);i=o?i.replace(o[0],""):i;var n=this.extractLocation(o?o[1]:i),l=o&&i||void 0,c=["eval","<anonymous>"].indexOf(n[0])>-1?void 0:n[0];return new N({functionName:l,fileName:c,lineNumber:n[1],columnNumber:n[2],source:s})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:d(function(r){var a=r.stack.split(`
`).filter(function(s){return!s.match(t)},this);return a.map(function(s){if(s.indexOf(" > eval")>-1&&(s=s.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),s.indexOf("@")===-1&&s.indexOf(":")===-1)return new N({functionName:s});var i=/((.*".+"[^@]*)?[^@]*)(?:@)/,o=s.match(i),n=o&&o[1]?o[1]:void 0,l=this.extractLocation(s.replace(i,""));return new N({functionName:n,fileName:l[0],lineNumber:l[1],columnNumber:l[2],source:s})},this)},"ErrorStackParser$$parseFFOrSafari")}}d(B,"ErrorStackParser");var he=new B,ge=he,y=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,C=y&&typeof T<"u"&&typeof T.exports<"u"&&typeof U<"u"&&typeof __dirname<"u",we=y&&!C,_e=typeof Deno<"u",H=!y&&!_e,be=H&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",ve=H&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var q,L,W,z,R;async function D(){if(!y||(q=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,z=await import("./__vite-browser-external-9wXp6ZBx.js"),R=await import("./__vite-browser-external-9wXp6ZBx.js"),W=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,L=await import("./__vite-browser-external-9wXp6ZBx.js"),$=L.sep,typeof U<"u"))return;let e=z,t=await import("./__vite-browser-external-9wXp6ZBx.js"),r=await import("./__vite-browser-external-9wXp6ZBx.js"),a=await import("./__vite-browser-external-9wXp6ZBx.js"),s={fs:e,crypto:t,ws:r,child_process:a};globalThis.require=function(i){return s[i]}}d(D,"initNodeModules");function K(e,t){return L.resolve(t||".",e)}d(K,"node_resolvePath");function V(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}d(V,"browser_resolvePath");var I;y?I=K:I=V;var $;y||($="/");function J(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:R.readFile(e).then(r=>new Uint8Array(r.buffer,r.byteOffset,r.byteLength))}}d(J,"node_getBinaryResponse");function Y(e,t){let r=new URL(e,location);return{response:fetch(r,t?{integrity:t}:{})}}d(Y,"browser_getBinaryResponse");var x;y?x=J:x=Y;async function G(e,t){let{response:r,binary:a}=x(e,t);if(a)return a;let s=await r;if(!s.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await s.arrayBuffer())}d(G,"loadBinaryFile");var F;if(be)F=d(async e=>await import(e),"loadScript");else if(ve)F=d(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(y)F=Q;else throw new Error("Cannot determine runtime environment");async function Q(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?W.runInThisContext(await(await fetch(e)).text()):await import(q.pathToFileURL(e).href)}d(Q,"nodeLoadScript");async function X(e){if(y){await D();let t=await R.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}d(X,"loadLockFile");async function Z(){if(C)return __dirname;let e;try{throw new Error}catch(a){e=a}let t=ge.parse(e)[0].fileName;if(y&&!t.startsWith("file://")&&(t=`file://${t}`),we){let a=await import("./__vite-browser-external-9wXp6ZBx.js");return(await import("./__vite-browser-external-9wXp6ZBx.js")).fileURLToPath(a.dirname(t))}let r=t.lastIndexOf($);if(r===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,r)}d(Z,"calculateDirname");function ee(e){let t=e.FS,r=e.FS.filesystems.MEMFS,a=e.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:function(i){if(!i.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return r.mount.apply(null,arguments)},syncfs:async(i,o,n)=>{try{let l=s.getLocalSet(i),c=await s.getRemoteSet(i),u=o?c:l,f=o?l:c;await s.reconcile(i,u,f),n(null)}catch(l){n(l)}},getLocalSet:i=>{let o=Object.create(null);function n(u){return u!=="."&&u!==".."}d(n,"isRealDir");function l(u){return f=>a.join2(u,f)}d(l,"toAbsolute");let c=t.readdir(i.mountpoint).filter(n).map(l(i.mountpoint));for(;c.length;){let u=c.pop(),f=t.stat(u);t.isDir(f.mode)&&c.push.apply(c,t.readdir(u).filter(n).map(l(u))),o[u]={timestamp:f.mtime,mode:f.mode}}return{type:"local",entries:o}},getRemoteSet:async i=>{let o=Object.create(null),n=await ke(i.opts.fileSystemHandle);for(let[l,c]of n)l!=="."&&(o[a.join2(i.mountpoint,l)]={timestamp:c.kind==="file"?(await c.getFile()).lastModifiedDate:new Date,mode:c.kind==="file"?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:o,handles:n}},loadLocalEntry:i=>{let o=t.lookupPath(i).node,n=t.stat(i);if(t.isDir(n.mode))return{timestamp:n.mtime,mode:n.mode};if(t.isFile(n.mode))return o.contents=r.getFileDataAsTypedArray(o),{timestamp:n.mtime,mode:n.mode,contents:o.contents};throw new Error("node type not supported")},storeLocalEntry:(i,o)=>{if(t.isDir(o.mode))t.mkdirTree(i,o.mode);else if(t.isFile(o.mode))t.writeFile(i,o.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(i,o.mode),t.utime(i,o.timestamp,o.timestamp)},removeLocalEntry:i=>{var o=t.stat(i);t.isDir(o.mode)?t.rmdir(i):t.isFile(o.mode)&&t.unlink(i)},loadRemoteEntry:async i=>{if(i.kind==="file"){let o=await i.getFile();return{contents:new Uint8Array(await o.arrayBuffer()),mode:s.FILE_MODE,timestamp:o.lastModifiedDate}}else{if(i.kind==="directory")return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+i.kind)}},storeRemoteEntry:async(i,o,n)=>{let l=i.get(a.dirname(o)),c=t.isFile(n.mode)?await l.getFileHandle(a.basename(o),{create:!0}):await l.getDirectoryHandle(a.basename(o),{create:!0});if(c.kind==="file"){let u=await c.createWritable();await u.write(n.contents),await u.close()}i.set(o,c)},removeRemoteEntry:async(i,o)=>{await i.get(a.dirname(o)).removeEntry(a.basename(o)),i.delete(o)},reconcile:async(i,o,n)=>{let l=0,c=[];Object.keys(o.entries).forEach(function(p){let g=o.entries[p],k=n.entries[p];(!k||t.isFile(g.mode)&&g.timestamp.getTime()>k.timestamp.getTime())&&(c.push(p),l++)}),c.sort();let u=[];if(Object.keys(n.entries).forEach(function(p){o.entries[p]||(u.push(p),l++)}),u.sort().reverse(),!l)return;let f=o.type==="remote"?o.handles:n.handles;for(let p of c){let g=a.normalize(p.replace(i.mountpoint,"/")).substring(1);if(n.type==="local"){let k=f.get(g),de=await s.loadRemoteEntry(k);s.storeLocalEntry(p,de)}else{let k=s.loadLocalEntry(p);await s.storeRemoteEntry(f,g,k)}}for(let p of u)if(n.type==="local")s.removeLocalEntry(p);else{let g=a.normalize(p.replace(i.mountpoint,"/")).substring(1);await s.removeRemoteEntry(f,g)}}};e.FS.filesystems.NATIVEFS_ASYNC=s}d(ee,"initializeNativeFS");var ke=d(async e=>{let t=[];async function r(s){for await(let i of s.values())t.push(i),i.kind==="directory"&&await r(i)}d(r,"collect"),await r(e);let a=new Map;a.set(".",e);for(let s of t){let i=(await e.resolve(s)).join("/");a.set(i,s)}return a},"getFsHandles");function te(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:ne(e),quit(r,a){throw t.exited={status:r,toThrow:a},a},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:r=>e.indexURL+r,instantiateWasm:se(e.indexURL)};return t}d(te,"createSettings");function re(e){return function(t){let r="/";try{t.FS.mkdirTree(e)}catch(a){console.error(`Error occurred while making a home directory '${e}':`),console.error(a),console.error(`Using '${r}' for a home directory instead`),e=r}t.FS.chdir(e)}}d(re,"createHomeDirectory");function ie(e){return function(t){Object.assign(t.ENV,e)}}d(ie,"setEnvironment");function oe(e){return t=>{for(let r of e)t.FS.mkdirTree(r),t.FS.mount(t.FS.filesystems.NODEFS,{root:r},r)}}d(oe,"mountLocalDirectories");function ae(e){let t=G(e);return r=>{let a=r._py_version_major(),s=r._py_version_minor();r.FS.mkdirTree("/lib"),r.FS.mkdirTree(`/lib/python${a}.${s}/site-packages`),r.addRunDependency("install-stdlib"),t.then(i=>{r.FS.writeFile(`/lib/python${a}${s}.zip`,i)}).catch(i=>{console.error("Error occurred while installing the standard library:"),console.error(i)}).finally(()=>{r.removeRunDependency("install-stdlib")})}}d(ae,"installStdlib");function ne(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[ae(t),re(e.env.HOME),ie(e.env),oe(e._node_mounts),ee]}d(ne,"getFileSystemInitializationFuncs");function se(e){let{binary:t,response:r}=x(e+"pyodide.asm.wasm");return function(a,s){return async function(){try{let i;r?i=await WebAssembly.instantiateStreaming(r,a):i=await WebAssembly.instantiate(await t,a);let{instance:o,module:n}=i;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,n)),s(o,n)}catch(i){console.warn("wasm instantiation failed!"),console.warn(i)}}(),{}}}d(se,"getInstantiateWasmFunc");var A="0.26.4";async function le(e={}){var t,r;await D();let a=e.indexURL||await Z();a=I(a),a.endsWith("/")||(a+="/"),e.indexURL=a;let s={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:a+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:a,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0},i=Object.assign(s,e);(t=i.env).HOME??(t.HOME="/home/pyodide"),(r=i.env).PYTHONINSPECT??(r.PYTHONINSPECT="1");let o=te(i),n=o.API;if(n.lockFilePromise=X(i.lockFileURL),typeof _createPyodideModule!="function"){let p=`${i.indexURL}pyodide.asm.js`;await F(p)}let l;if(e._loadSnapshot){let p=await e._loadSnapshot;ArrayBuffer.isView(p)?l=p:l=new Uint8Array(p),o.noInitialRun=!0,o.INITIAL_MEMORY=l.length}let c=await _createPyodideModule(o);if(o.exited)throw o.exited.toThrow;if(e.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),n.version!==A&&i.checkAPIVersion)throw new Error(`Pyodide version does not match: '${A}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=p=>{throw new Error("Didn't expect to load any more file_packager files!")};let u;l&&(u=n.restoreSnapshot(l));let f=n.finalizeBootstrap(u);return n.sys.path.insert(0,n.config.env.HOME),f.version.includes("dev")||n.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${f.version}/full/`),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(i.stdin,i.stdout,i.stderr),f}d(le,"loadPyodide");class Ee{constructor(){w(this,"pyodide",null);w(this,"isInitialized",!1);w(this,"initPromise",null);w(this,"stdoutBuffer",[]);w(this,"stderrBuffer",[]);w(this,"interruptBuffer",null);self.addEventListener("message",this.handleMessage.bind(this))}async handleMessage(t){const r=t.data;try{switch(r.type){case"init":await this.initialize(r.indexURL,r.packages);break;case"execute":await this.execute(r);break;case"loadPackages":await this.loadPackages(r.packages);break;case"setupNLTK":await this.setupNLTK(r.dataPath);break;case"interrupt":this.interrupt();break;default:this.sendError("Unknown message type",void 0)}}catch(a){this.sendError(a instanceof Error?a.message:"Unknown error",r.id)}}async initialize(t,r){if(this.isInitialized){this.send({type:"ready"});return}if(this.initPromise){await this.initPromise;return}this.initPromise=this.doInitialize(t,r),await this.initPromise}async doInitialize(t,r){try{const a=n=>{this.stdoutBuffer.push(n),this.send({type:"stdout",data:n})},s=n=>{this.stderrBuffer.push(n),this.send({type:"stderr",data:n})};this.pyodide=await le({indexURL:t||"/assets",stdout:a,stderr:s,fullStdLib:!1}),self.crossOriginIsolated&&(this.interruptBuffer=new Uint8Array(new SharedArrayBuffer(1)),this.pyodide.setInterruptBuffer(this.interruptBuffer));const o=r||["micropip","numpy","regex"];await this.pyodide.loadPackage(o),await this.pyodide.runPythonAsync(`
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
      `),r?.includes("nltk")&&await this.loadNLTK(),this.isInitialized=!0,this.send({type:"ready"})}catch(a){throw console.error("Failed to initialize Pyodide:",a),this.sendError(`Pyodide initialization failed: ${a instanceof Error?a.message:"Unknown error"}`,void 0),a}}async loadPackages(t){if(!this.pyodide)throw new Error("Pyodide not initialized");try{await this.pyodide.loadPackage(t),this.send({type:"packages_loaded",packages:t})}catch(r){throw new Error(`Failed to load packages: ${r}`)}}async loadNLTK(){if(this.pyodide)try{await this.pyodide.runPythonAsync(`
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
      `),this.send({type:"nltk_ready"})}catch(r){throw new Error(`NLTK setup failed: ${r}`)}}async execute(t){if(!this.pyodide)throw new Error("Pyodide not initialized");const{id:r,code:a,functionName:s,args:i}=t;try{this.stdoutBuffer=[],this.stderrBuffer=[],await this.pyodide.loadPackagesFromImports(a),this.pyodide.globals.set("_parser_input",i[0]);const o=`
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
${a}

# Now execute the function
try:
    # Get the function
    func = ${s}
    
    # Get input from globals (already passed from JS)
    input_data = _parser_input
    
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
      `,n=await this.pyodide.runPythonAsync(o);this.pyodide.globals.delete("_parser_input");let l=n;n&&typeof n.toJs=="function"&&(l=n.toJs({dict_converter:Object.fromEntries})),l.stdout&&this.send({type:"stdout",id:r,data:l.stdout}),l.stderr&&this.send({type:"stderr",id:r,data:l.stderr}),l.success?this.send({type:"result",id:r,data:l.value}):(console.error("Python execution error:",{type:l.error_type,message:l.error_message,traceback:l.error}),this.send({type:"error",id:r,error:l.error||l.error_message||"Unknown error"}))}catch(o){let n=o instanceof Error?o.message:String(o);if(this.pyodide)try{const l=await this.pyodide.runPythonAsync(`
import sys
import traceback

error_msg = ""
if hasattr(sys, 'last_value'):
    error_msg = ''.join(traceback.format_exception(type(sys.last_value), sys.last_value, sys.last_value.__traceback__))
error_msg
          `);l&&(n=l)}catch{}console.error("Python execution error:",n),this.send({type:"error",id:r,error:n})}}interrupt(){this.interruptBuffer&&this.pyodide?(this.interruptBuffer[0]=2,this.send({type:"result",data:"Interrupted"})):this.sendError("Interrupts not available (requires cross-origin isolation)",void 0)}send(t){self.postMessage(t)}sendError(t,r){this.send({type:"error",id:r,error:t})}}new Ee});export default Se();
