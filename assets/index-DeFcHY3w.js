const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jszip.min-GFMVU_us.js","assets/ui-vendor-IRGmExUJ.js","assets/vue-vendor-DPw1dQYc.js","assets/utils-vendor-B76-F3_P.js","assets/data-vendor-BIyl9aCN.js"])))=>i.map(i=>d[i]);
var A=Object.defineProperty;var I=(p,e,r)=>e in p?A(p,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[e]=r;var w=(p,e,r)=>I(p,typeof e!="symbol"?e+"":e,r);import{a as c,_ as j}from"./index-B-vGjx5F.js";import{t as C,E,g as R,d as S}from"./TrialsViewV3-B818DIux.js";import{TrialBundleExportService as D}from"./trial-bundle.service-D-XoDBFD.js";import"./vue-vendor-DPw1dQYc.js";import"./ui-vendor-IRGmExUJ.js";import"./utils-vendor-B76-F3_P.js";import"./toast-CdlfWUDp.js";import"./useCostEstimation-B0mGYT_P.js";import"./ParserSelector-DGXvE05F.js";import"./parser.store-DAnFDjIz.js";import"./trial-stream-manager-v4-YO2eDFOt.js";import"./execution-control-v4-IuLCjGpH.js";import"./useV4TrialCommands-CQ3HwgdO.js";import"./useHeatmapStylingV3-CCIdVOn4.js";import"./data-vendor-BIyl9aCN.js";import"./useV4Models-06SmJgzv.js";import"./useV4LiveQuery-Do0jdBW3.js";class O{getTemplate(){return{id:"minimal",name:"Minimal Experiment Script",description:"Minimal Python script with clear experimental design and pre-built requests",pythonVersion:"3.8",requiredImports:["json","requests","itertools","csv"],templateCode:"MINIMAL_TEMPLATE",supportsAnalysis:!1,supportsVisualization:!1}}generateScript(e,r,t={}){const{includeComments:s=!0}=t,n=this.buildResolvedConfigurations(e);return[this.generateHeader(e,s),this.generateImports(),this.generateExperimentSection(e,s),this.generateResolvedConfigsSection(n,s),this.generateMinimalUtilities(),this.generateExecutionSection(e,s)].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const r=[];for(const[t,s]of e.configurations.entries())r.push(this.buildResolvedConfig(s,t));return r}buildResolvedConfig(e,r){const t=e.providerSnapshot;if(!t)return this.buildFallbackConfig(e,r);const s=t.api?.baseUrl||"https://api.example.com",n=t.api?.endpoint||"/v1/api",a={"Content-Type":"application/json",...t.headers};t.auth?.type==="bearer"?a.Authorization="Bearer {{API_KEY}}":t.auth?.type==="header"&&t.auth.header&&(a[t.auth.header]="{{API_KEY}}");const i={model:e.modelId},o=t.requestTransform;if(o?.promptKey?o.wrapPrompt?i[o.promptKey]=[{role:o.messageRole||"user",content:"{{PROMPT}}"}]:i[o.promptKey]="{{PROMPT}}":i.prompt="{{PROMPT}}",o?.nestParams){const f=o.rootLevelParams||[],u={},d={};for(const[m,h]of Object.entries(e.parameters))f.includes(m)?d[m]=h:u[m]=h;Object.keys(u).length>0&&(i[o.nestParams]=u),Object.assign(i,d)}else Object.assign(i,e.parameters);if(t.requestTransforms){for(const f of t.requestTransforms)if(f.type==="field_transform"&&f.config){const{field:u,transform:d,transformConfig:m}=f.config;u in i&&d==="string_to_object"&&m?.objectWrapper&&typeof i[u]=="string"&&(i[u]={[m.objectWrapper]:i[u]})}}const g=e.provider.split("-")[0];return{index:r,name:e.modelSnapshot?.displayName||e.modelId,provider:e.provider,providerGroup:g,url:s+n,headers:a,bodyTemplate:i,responsePath:this.getResponsePath(e)}}getResponsePath(e){const r=e.providerSnapshot;if(!r)return"response";const t=r.responseModes?.text;if(!t)return"response";const s=t.responseTransform;if(!s)return"response";const n=[];return s.contentPath&&n.push(s.contentPath),s.fallbackPaths&&Array.isArray(s.fallbackPaths)&&n.push(...s.fallbackPaths),n.length>0?n:"response"}buildFallbackConfig(e,r){const t=e.providerSnapshot,s=t?.api?.baseUrl||"https://api.example.com",n=t?.api?.endpoint||"/v1/api",a=e.provider.split("-")[0];return{index:r,name:e.modelSnapshot?.displayName||e.modelId,provider:e.provider,providerGroup:a,url:s+n,headers:{"Content-Type":"application/json",Authorization:"{{API_KEY}}"},bodyTemplate:{model:e.modelId,prompt:"{{PROMPT}}",...e.parameters},responsePath:"response"}}generateHeader(e,r){const t="#!/usr/bin/env python3";return r?`${t}
"""
Minimal Experiment Script - ${e.name}
Generated: ${new Date().toISOString()}

This script contains ONLY what's needed for your specific experiment.
No generic boilerplate, no unused provider functions.
"""`:t}generateImports(){return`import json
import requests
import itertools
import csv
import sys
import os
import argparse
from datetime import datetime
from typing import Dict, List, Any, Optional
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading`}generateExperimentSection(e,r){const t=r?`# === EXPERIMENTAL DESIGN ===
`:"";if(e.type!=="template"||!e.templateConfig)return`${t}# Non-template trial - no factorial design`;const{template:s,variables:n}=e.templateConfig,a={};for(const[i,o]of Object.entries(n))"snapshot"in o&&o.snapshot?a[i]=o.snapshot.items.map(g=>g.value):o.type==="value"&&o.values&&(a[i]=[...o.values]);return`${t}# Template with variables
template = ${JSON.stringify(s)}

# Variables (${Object.keys(a).length} dimensions)
variables = ${this.toPythonJson(a)}`}generateResolvedConfigsSection(e,r){return`${r?`# === MODEL CONFIGURATIONS ===
# Pre-built requests with all transforms applied
`:""}model_configs = ${this.toPythonJson(e)}`}generateExecutionSection(e,r){const t=r?`# === EXECUTION ===
`:"";if(e.type!=="template")return`${t}# Non-template execution not yet implemented`;const s=new Set;for(const a of e.configurations){const i=a.provider.split("-")[0];s.add(i)}const n=[];for(const a of s){const i=`${a.toUpperCase()}_API_KEY`;a==="ollama"?n.push(`    "${a}": "",  # No key needed for local`):n.push(`    "${a}": os.getenv("${i}", "")`)}return`${t}# Parse command line arguments
parser = argparse.ArgumentParser(description='Run LLM experiment')
parser.add_argument('--replace', action='store_true', help='Replace existing results file')
parser.add_argument('--output', default='experiment_results.jsonl', help='Output file path')
parser.add_argument('--api-keys-file', help='JSON file with API keys')
parser.add_argument('--concurrent', type=int, default=1, help='Number of concurrent API calls (default: 1)')
args = parser.parse_args()

# Output file handling
output_file = args.output
checkpoint_file = output_file.replace('.jsonl', '_checkpoint.json')

# Check for existing results
completed_calls = set()
if os.path.exists(output_file) and not args.replace:
    print(f"Resuming from existing results in {output_file}")
    with open(output_file, 'r') as f:
        for line in f:
            try:
                result = json.loads(line)
                # Use the same ID format as new calls
                config_idx = result.get('config_index', 0)
                call_idx = result.get('call_index', '')
                call_id = f"config{config_idx}_call{call_idx}"
                completed_calls.add(call_id)
            except:
                pass
    print(f"Found {len(completed_calls)} completed calls")
    mode = 'a'  # Append mode
else:
    if os.path.exists(output_file):
        print(f"Replacing existing results file: {output_file}")
    mode = 'w'  # Write mode
    completed_calls = set()

# API Keys (for all providers used in this experiment)
API_KEYS = {
${n.join(`,
`)}
}

# Load API keys from file if provided
if args.api_keys_file and os.path.exists(args.api_keys_file):
    with open(args.api_keys_file, 'r') as f:
        API_KEYS.update(json.load(f))

# Calculate total calls
total_combinations = list(itertools.product(*[variables[k] for k in variables]))
total_calls = len(model_configs) * len(total_combinations)
print(f"\\nTotal API calls to make: {total_calls}")
print(f"Concurrent workers: {args.concurrent}")

# Thread-safe file writing
file_lock = threading.Lock()
completed_count = len(completed_calls)

def execute_api_call(task):
    """Execute a single API call task."""
    config, combination, call_index, total_calls = task
    call_id = f"config{config['index']}_call{call_index}"
    
    # Skip if already completed
    if call_id in completed_calls:
        return None
    
    # Build variable dictionary
    var_names = list(variables.keys())
    var_dict = dict(zip(var_names, combination))
    
    # Substitute variables in template
    prompt = template
    for var_name, var_value in var_dict.items():
        prompt = prompt.replace(f"{{{{{var_name}}}}}", str(var_value))
    
    # Build request from pre-built template (safe replacement)
    request_body = safe_json_replace(
        config['bodyTemplate'],
        {'{{PROMPT}}': prompt}
    )
    
    # Get API key for this provider
    provider_group = config.get('providerGroup', config['provider'].split('-')[0])
    api_key = API_KEYS.get(provider_group, '')
    
    headers = {}
    for key, value in config['headers'].items():
        headers[key] = value.replace('{{API_KEY}}', api_key)
    
    # Prepare result record
    result = {
        'timestamp': datetime.now().isoformat(),
        'call_index': call_index,
        'config_index': config['index'],
        'model': config['name'],
        'provider': config['provider'],
        **var_dict,
        'prompt': prompt,
        'request': {
            'url': config['url'],
            'headers': {k: v if k != 'Authorization' and not k.endswith('-key') else '***' for k, v in headers.items()},
            'body': request_body
        }
    }
    
    # Make API call
    print(f"[{call_index}/{total_calls}] Calling {config['name']} with {var_dict}...")
    
    try:
        response = requests.post(
            config['url'],
            headers=headers,
            json=request_body,
            timeout=90
        )
        
        result['response_status'] = response.status_code
        result['response_headers'] = dict(response.headers)
        
        try:
            response_json = response.json()
            result['response_body'] = response_json
            
            if response.ok:
                content = extract_at_path(response_json, config['responsePath'])
                result['success'] = True
                result['extracted_content'] = content
                print(f"  ✓ [{call_index}] Success: {str(content)[:100]}...")
            else:
                result['success'] = False
                result['error'] = f"HTTP {response.status_code}"
                result['error_details'] = response_json
                print(f"  ✗ [{call_index}] HTTP {response.status_code}")
                
        except json.JSONDecodeError:
            result['success'] = False
            result['error'] = 'Invalid JSON response'
            result['response_text'] = response.text[:1000]
            print(f"  ✗ [{call_index}] Invalid JSON")
            
    except requests.exceptions.Timeout:
        result['success'] = False
        result['error'] = 'Request timeout'
        print(f"  ✗ [{call_index}] Timeout after 90 seconds")
        
    except requests.exceptions.RequestException as e:
        result['success'] = False
        result['error'] = str(e)
        print(f"  ✗ [{call_index}] Request failed: {e}")
        
    except Exception as e:
        result['success'] = False
        result['error'] = str(e)
        result['error_type'] = type(e).__name__
        print(f"  ✗ [{call_index}] Unexpected error: {e}")
    
    return result

# Build task list
tasks = []
call_index = 0
for config in model_configs:
    for combination in total_combinations:
        call_index += 1
        tasks.append((config, combination, call_index, total_calls))

# Open output file for writing/appending
with open(output_file, mode) as f:
    if args.concurrent == 1:
        # Sequential execution (original behavior)
        for task in tasks:
            result = execute_api_call(task)
            if result:
                json.dump(result, f)
                f.write('\\n')
                f.flush()
                completed_count += 1
                
                # Save checkpoint
                checkpoint = {
                    'last_call_index': result['call_index'],
                    'completed': completed_count,
                    'total': total_calls,
                    'timestamp': datetime.now().isoformat()
                }
                with open(checkpoint_file, 'w') as cf:
                    json.dump(checkpoint, cf, indent=2)
    else:
        # Concurrent execution
        with ThreadPoolExecutor(max_workers=args.concurrent) as executor:
            # Submit all tasks
            future_to_task = {executor.submit(execute_api_call, task): task for task in tasks}
            
            # Process results as they complete
            for future in as_completed(future_to_task):
                result = future.result()
                if result:
                    # Thread-safe file writing
                    with file_lock:
                        json.dump(result, f)
                        f.write('\\n')
                        f.flush()
                        completed_count += 1
                        
                        # Save checkpoint
                        checkpoint = {
                            'last_call_index': result['call_index'],
                            'completed': completed_count,
                            'total': total_calls,
                            'timestamp': datetime.now().isoformat()
                        }
                        with open(checkpoint_file, 'w') as cf:
                            json.dump(checkpoint, cf, indent=2)

print(f"\\nExperiment complete! Results saved to {output_file}")

# Show summary
show_summary(output_file)`}generateMinimalUtilities(){return`# === UTILITIES ===

def safe_json_replace(obj, replacements):
    """Safely replace placeholders in a nested object structure.
    
    This avoids JSON injection vulnerabilities by replacing in the object,
    not in the JSON string representation.
    """
    if isinstance(obj, dict):
        return {k: safe_json_replace(v, replacements) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [safe_json_replace(item, replacements) for item in obj]
    elif isinstance(obj, str):
        result = obj
        for key, value in replacements.items():
            result = result.replace(key, value)
        return result
    else:
        return obj

def extract_at_path(data: Dict, paths) -> Any:
    """Extract value from nested dict using path(s) like 'choices[0].message.content'
    
    Args:
        data: The response dictionary
        paths: Either a single path string or a list of paths to try
    
    Returns:
        The extracted value from the first successful path, or None
    """
    if not paths or not data:
        return data if not paths else None
    
    # Handle both single path and list of paths
    if isinstance(paths, str):
        paths = [paths]
    
    # Try each path until one works
    for path in paths:
        if not path:
            continue
            
        parts = path.replace('[', '.').replace(']', '').split('.')
        current = data
        
        try:
            for part in parts:
                if part.isdigit():
                    part = int(part)
                current = current[part]
            
            # If we got here without exception and have a non-None value, return it
            if current is not None:
                return current
        except (KeyError, IndexError, TypeError):
            # Try next path
            continue
    
    return None

def show_summary(results_file):
    """Show a simple summary of results."""
    if not os.path.exists(results_file):
        return
    
    results = []
    with open(results_file, 'r') as f:
        for line in f:
            try:
                results.append(json.loads(line))
            except:
                pass
    
    if not results:
        return
    
    total = len(results)
    successful = sum(1 for r in results if r.get('success'))
    failed = total - successful
    
    print(f"\\n{'='*50}")
    print(f"SUMMARY: {successful}/{total} successful ({successful/total*100:.1f}%)")
    if failed > 0:
        print(f"Failed: {failed} calls")
    
    # Group by configuration index
    by_config = {}
    for r in results:
        config_idx = r.get('config_index', 'unknown')
        model = r.get('model', 'unknown')
        provider = r.get('provider', 'unknown')
        key = (config_idx, model, provider)
        if key not in by_config:
            by_config[key] = {'success': 0, 'fail': 0}
        if r.get('success'):
            by_config[key]['success'] += 1
        else:
            by_config[key]['fail'] += 1
    
    print(f"\\nBy Configuration Index:")
    for (idx, model, provider), stats in sorted(by_config.items()):
        total_config = stats['success'] + stats['fail']
        success_rate = stats['success']/total_config*100 if total_config > 0 else 0
        print(f"  [{idx}] {model} via {provider}: {stats['success']}/{total_config} ({success_rate:.1f}%)")
    print(f"{'='*50}\\n")`}toPythonJson(e){return JSON.stringify(e,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None")}}function N(p){switch(p){case"minimal":case"basic":case"reproduction":case"analysis":return new O;default:throw new Error(`Unknown template: ${p}`)}}function G(){return[new O().getTemplate()]}class ${async generateScript(e,r={}){const t=Date.now();r.template;try{const s=await C.loadTrialForExport(e);if(!s.ok){const b=s.error;return{ok:!1,error:new E("GENERATION_FAILED",`Failed to load trial data: ${b.message}`,{trialId:e,originalError:b})}}const{trial:n,apiCalls:a}=s.value,i=this.validateCodeGenOptions(r);if(!i.isValid)return{ok:!1,error:new E("INVALID_FIELDS",`Code generation validation failed: ${i.errors.join(", ")}`,{errors:i.errors})};const o=r.template||"minimal",g=N(o),f=g.getTemplate();a.length;const u=Date.now(),d=g.generateScript(n,a,{includeComments:r.includeComments!==!1});Date.now()-u,d.length,R(d);const m=Date.now()-t,_={filename:this.generateScriptFilename(n.name,o),mimeType:"text/x-python",data:d,metadata:{trialName:n.name,trialId:n.id,exportDate:new Date,callCount:a.length,fieldCount:0,format:"python",estimatedSizeBytes:R(d)},template:o,pythonVersion:f.pythonVersion,requiredPackages:this.extractRequiredPackages(f,r),codeLength:d.length,generationTimeMs:m};return _.filename,_.codeLength,_.generationTimeMs,_.requiredPackages,{ok:!0,value:_}}catch(s){const n=s instanceof Error?s:new Error(String(s));return r.template,Date.now()-t,{ok:!1,error:new E("GENERATION_FAILED",`Python script generation failed: ${n.message}`,{trialId:e,options:r,originalError:s,generationTimeMs:Date.now()-t})}}}getAvailableTemplates(){return G()}validateCodeGenOptions(e){const r=[],t=[];if(e.template){const s=this.getAvailableTemplates().map(n=>n.id);s.includes(e.template)||r.push(`Invalid template: ${e.template}. Available templates: ${s.join(", ")}`)}if(e.pythonVersion){const s=["3.8","3.9","3.10","3.11"];s.includes(e.pythonVersion)||t.push(`Python version ${e.pythonVersion} not explicitly supported. Supported versions: ${s.join(", ")}`)}if(e.includeVisualization){const s=e.template||"minimal";N(s).getTemplate().supportsVisualization||t.push(`Template '${s}' does not support built-in visualization. You can add your own visualization code to the exported script.`)}return{isValid:r.length===0,errors:r,warnings:t}}generateScriptFilename(e,r){const t=e.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",s=r==="minimal"?"":`_${r}`,n=new Date().toISOString().split("T")[0];return`${t}${s}_${n}.py`}extractRequiredPackages(e,r){return["json","requests","itertools","csv"]}}const B=new $;let k=null;async function F(){return k||(k=(await j(async()=>{const{default:p}=await import("./jszip.min-GFMVU_us.js").then(e=>e.j);return{default:p}},__vite__mapDeps([0,1,2,3,4]))).default),k}class L{constructor(){w(this,"trialBundleService",new D)}async exportBundle(e,r){try{r.bundleType;const t=await B.generateScript(e,{template:"minimal",includeComments:r.includeComments!==!1});if(!t.ok)return{ok:!1,error:new E("GENERATION_FAILED",t.error?.message||"Failed to generate Python script")};if(r.bundleType==="script-only")return{ok:!0,value:{zipBlob:new Blob([t.value.data],{type:"text/x-python"}),filename:t.value.filename,sizeBytes:t.value.metadata.estimatedSizeBytes,contents:["experiment.py"]}};const s=await F(),n=new s,a=[];n.file("experiment.py",t.value.data),a.push("experiment.py");const i=await this.trialBundleService.exportTrialBundle(e,{includeResults:!0,includeApiCalls:!0,skipDownload:!0});if(i.ok?(n.file("trial_config.json",JSON.stringify(i.value.bundle,null,2)),a.push("trial_config.json")):c.warn("Failed to export trial bundle:",i.error),r.bundleType==="script-config-data"){const m=n.folder("data"),h=await S.getAvailableFields(e);let _=[];if(h.ok){const y=h.value.standardFields.map(l=>l.id).filter(l=>l!=="parameters"&&l!=="variables"),x=h.value.parameterFields.map(l=>l.id),v=(h.value.variableFields||[]).filter(l=>!l.id.startsWith("source_")).map(l=>l.id);_=[...y,...x,...v],_.length,y.length,x.length,v.length}else c.warn("Failed to get available fields, using defaults");const b=[{format:"csv",filename:"results.csv"},{format:"excel",filename:"results.xlsx"},{format:"jsonl",filename:"results.jsonl"}];for(const{format:y,filename:x}of b){const v=await S.exportTrialData(e,{format:y,fields:_.length>0?_:void 0,includeHeaders:!0,addBOM:y==="csv"||y==="excel"});if(v.ok){if(y==="excel"&&typeof v.value.data=="string"){const l=atob(v.value.data),P=new Uint8Array(l.length);for(let T=0;T<l.length;T++)P[T]=l.charCodeAt(T);m.file(x,P)}else m.file(x,v.value.data);a.push(`data/${x}`)}else c.warn(`Failed to export ${y}:`,v.error)}}const o=this.generateReadme(r.bundleType,t.value.metadata.trialName);n.file("README.md",o),a.push("README.md");const g=await n.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}),f=new Date().toISOString().split("T")[0].replace(/-/g,""),u=r.bundleType==="script-config-data"?"_complete":"_config",d=`${t.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_repro${u}_${f}.zip`;return{ok:!0,value:{zipBlob:g,filename:d,sizeBytes:g.size,contents:a}}}catch(t){return c.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",t),{ok:!1,error:new E("GENERATION_FAILED",t instanceof Error?t.message:"Unknown error creating bundle")}}}generateReadme(e,r){const t=new Date().toISOString();let s="";switch(e){case"script-config":s="\n## Contents\n- `experiment.py` - Minimal Python script to reproduce the experiment\n- `trial_config.json` - Complete trial configuration including templates, variables, and model settings\n";break;case"script-config-data":s="\n## Contents\n- `experiment.py` - Minimal Python script to reproduce the experiment  \n- `trial_config.json` - Complete trial configuration\n- `data/results.csv` - Full experimental results in CSV format\n- `data/results.xlsx` - Full experimental results in Excel format\n- `data/results.jsonl` - Full experimental results in JSONL format (one JSON object per line)\n";break}return`# Reproducibility Bundle: ${r}

Generated: ${t}

${s}

## Usage

### Running the Experiment

1. Install required packages:
   \`\`\`bash
   pip install requests
   \`\`\`

2. Set your API keys:
   \`\`\`bash
   export OPENAI_API_KEY="your-key"
   export ANTHROPIC_API_KEY="your-key"
   export OPENROUTER_API_KEY="your-key"
   \`\`\`

3. Run the experiment:
   \`\`\`bash
   python experiment.py
   \`\`\`

   With concurrent API calls (e.g., 5 workers):
   \`\`\`bash
   python experiment.py --concurrent 5
   \`\`\`

   Or to replace existing results:
   \`\`\`bash
   python experiment.py --replace --concurrent 5
   \`\`\`

### Analyzing Results

The script can also analyze its own results:
\`\`\`bash
python experiment.py experiment_results.jsonl
\`\`\`

## Notes

- The experiment script includes checkpoint/resume capability
- Results are saved to JSONL format with full request/response logging
- Use \`--replace\` flag to overwrite existing results
- Use \`--concurrent N\` to run N API calls in parallel (default: 1 for sequential)
- Thread-safe file writing ensures results are not corrupted during concurrent execution
`}}const ae=new L;export{ae as reproducibilityBundleService};
