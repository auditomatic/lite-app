const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jszip.min-C0L9SgBO.js","assets/ui-vendor-BXvbAVk1.js","assets/vue-vendor--FHcN8mI.js","assets/utils-vendor-C2jMmoQd.js","assets/data-vendor-BRSVhGEn.js"])))=>i.map(i=>d[i]);
var I=Object.defineProperty;var C=(f,e,a)=>e in f?I(f,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[e]=a;var A=(f,e,a)=>C(f,typeof e!="symbol"?e+"":e,a);import{l as _,_ as M}from"./index-CA_0Aj0n.js";import{t as L,E as x,g as P,d as R}from"./TrialsView-AmYdmJ8s.js";import{TrialBundleExportService as q}from"./trial-bundle.service-BDQtd_xg.js";import"./vue-vendor--FHcN8mI.js";import"./ui-vendor-BXvbAVk1.js";import"./utils-vendor-C2jMmoQd.js";import"./tauri-vendor-1uBLmS9u.js";import"./toast-C8a3oI2o.js";import"./useCostEstimation-CeNOYuz1.js";import"./useModels-LI9YiHpn.js";import"./useLiveQuery-C6RixDNq.js";import"./ParserSelector-Bw8I4DQT.js";import"./parser-D8U8d-1-.js";import"./stream-manager-BspCjtXc.js";import"./controller-9qigp8zf.js";import"./common-Brb0k-N6.js";import"./index-CavbZIWt.js";import"./id-generator-Cv_Imc0S.js";import"./useTrialCommands-5cze95bI.js";import"./repository-DxtJU_cE.js";import"./useTrials-Cmdn9UrR.js";import"./repository-eEH_nth8.js";import"./useHeatmapStyling-bPN7fji7.js";import"./sanitization-CYDG_eCJ.js";import"./data-vendor-BRSVhGEn.js";class S{getTemplate(){return{id:"simple",name:"Simple Script (Beginner-Friendly)",description:"Simple Python script with CSV/JSON output, basic retries, and clear progress. Best for beginners and quick tests.",pythonVersion:"3.8",requiredImports:["json","requests","os","time","datetime"],templateCode:"SIMPLE_TEMPLATE",supportsAnalysis:!1,supportsVisualization:!1}}generateScript(e,a,r={}){const{includeComments:t=!0}=r,o=this.buildResolvedConfigurations(e),s=this.discoverParameterColumns(o);return[this.generateHeader(e,t),this.generateImports(),this.generateSettings(e,t),this.generateParameterColumns(s,t),this.generateModelConfigs(o,t),this.generateFunctions(),this.generateMainFunction(e,s),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const a=[],r=new Map,t=new Map;for(const o of e.configurations){const s=o.modelSnapshot?.displayName||o.modelId;r.set(s,(r.get(s)||0)+1),t.set(s,0)}for(let o=0;o<e.configurations.length;o++){const s=e.configurations[o],n=s.providerSnapshot;if(!n)continue;const p=n.api?.baseUrl||"https://api.example.com",c=n.api?.endpoint||"/v1/api",l={"Content-Type":"application/json",...n.headers};n.auth?.type==="bearer"?l.Authorization="Bearer {{API_KEY}}":n.auth?.type==="header"&&n.auth.header&&(l[n.auth.header]="{{API_KEY}}");const d={model:s.modelId},i=n.bodyConstruction;i?.promptField?i.wrapAsArray?d[i.promptField]=[{role:i.messageRole||"user",content:"{{PROMPT}}"}]:d[i.promptField]="{{PROMPT}}":d.prompt="{{PROMPT}}",Object.assign(d,s.parameters);const h=s.provider.split("-")[0],u=s.modelSnapshot?.displayName||s.modelId;let m=u;if(r.get(u)>1){const y=t.get(u)+1;t.set(u,y),m=`${u} [Config ${y}]`}a.push({config_index:o,name:u,display_name:m,provider:h,url:p+c,headers:l,body:d,parameters:s.parameters||{},extract_paths:this.getExtractPaths(s)})}return a}getExtractPaths(e){const a=e.providerSnapshot;if(!a)return["response"];const r=a.responseModes?.text;if(!r)return["response"];const t=r.responseTransform;if(!t)return["response"];const o=[];return t.contentPath&&o.push(t.contentPath),t.fallbackPaths&&o.push(...t.fallbackPaths),o.length>0?o:["response"]}discoverParameterColumns(e){const a=new Set;for(const r of e)r.parameters&&Object.keys(r.parameters).forEach(t=>a.add(t));return Array.from(a).sort()}generateParameterColumns(e,a){const r=a?`# All unique parameters found across model configurations
`:"",t=JSON.stringify(e);return`${r}PARAMETER_COLUMNS = ${t}`}generateHeader(e,a){const r="#!/usr/bin/env python3";return a?`${r}
"""
Simple API Testing Script
Requirement: pip install requests
"""`:r}generateImports(){return`import json
import time
import requests
from datetime import datetime
import os
import sys
import argparse`}generateSettings(e,a){const r=a?`# ============================================
# YOUR EXPERIMENT SETTINGS
# ============================================

`:"",t=new Set;for(const n of e.configurations){const p=n.provider.split("-")[0];t.add(p)}const o=[];for(const n of t)if(n==="ollama")o.push(`    "${n}": "",  # Local, no key needed`);else{const p=`${n.toUpperCase()}_API_KEY`;o.push(`    "${n}": os.getenv("${p}", ""),  # Get from environment or set here`)}let s="";if(e.type==="template"&&e.templateConfig){const{template:n,variables:p}=e.templateConfig,c={};for(const[d,i]of Object.entries(p))"snapshot"in i&&i.snapshot?c[d]=i.snapshot.items.map(h=>h.value):i.type==="value"&&i.values&&(c[d]=[...i.values]);const l=JSON.stringify(c,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");s=`
# What prompt to test (you can use {{variables}} that get replaced)
PROMPT_TEMPLATE = ${JSON.stringify(n)}

# Variables to test (creates all combinations)
VARIABLES = ${l}`}else s=`
# Single prompt test
PROMPT = "Your test prompt here"`;return`${r}# Your API Keys (leave empty for providers you're not using)
# The script will first check environment variables, then use these values if set

API_KEYS = {
${o.join(`,
`)}
}

# You can override environment variables by setting keys here directly
# Example: API_KEYS["openai"] = "sk-..."
${s}`}generateModelConfigs(e,a){const r=a?`# ============================================
# MODELS TO TEST (exported from Auditomatic)
# ============================================

`:"",t=e.map(s=>({config_index:s.config_index,name:s.name,display_name:s.display_name,provider:s.provider,url:s.url,headers:s.headers,body:s.body,parameters:s.parameters,extract_paths:s.extract_paths})),o=JSON.stringify(t,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${r}MODELS = ${o}`}generateFunctions(){return`# ============================================
# MAIN SCRIPT (you probably don't need to edit below here)
# ============================================

def make_api_call(model_config, prompt, timeout=90):
    """Call one API and return the response."""

    # Get the API key for this provider
    api_key = API_KEYS.get(model_config['provider'], "")
    if not api_key and model_config['provider'] != 'ollama':
        return {
            'success': False,
            'error': f"Missing API key for {model_config['provider']}. Add it at the top of this script.",
            'request_body': None,
            'full_response': None
        }

    # Prepare the request
    headers = {}
    for key, value in model_config['headers'].items():
        headers[key] = value.replace('{{API_KEY}}', api_key)

    # Safely replace prompt in body (handle newlines and special chars)
    body_str = json.dumps(model_config['body'])
    # Escape the prompt for JSON
    prompt_escaped = json.dumps(prompt)[1:-1]  # Remove outer quotes
    body_str = body_str.replace('{{PROMPT}}', prompt_escaped)
    body = json.loads(body_str)

    # Make the API call
    try:
        response = requests.post(
            model_config['url'],
            json=body,
            headers=headers,
            timeout=(5, timeout)  # 5s connect, configurable read timeout
        )

        # Simple retry for common temporary failures
        if response.status_code in [429, 500, 502, 503, 504]:
            # Check for Retry-After header
            retry_after = response.headers.get('Retry-After')
            if response.status_code == 429 and retry_after:
                try:
                    wait_time = min(int(retry_after), 10)  # Cap at 10 seconds
                except (ValueError, TypeError):
                    wait_time = 5  # Default fallback if parsing fails
                print(f"  ⏸️  Rate limited, server says wait {wait_time} seconds...")
            else:
                # Simple exponential backoff: 2s for first retry
                wait_time = 2 if response.status_code == 429 else 5
                if response.status_code == 429:
                    print(f"  ⏸️  Rate limited, waiting {wait_time} seconds...")
                else:
                    print(f"  ⏸️  Server busy ({response.status_code}), waiting {wait_time} seconds...")

            time.sleep(wait_time)

            # Try once more
            response = requests.post(
                model_config['url'],
                json=body,
                headers=headers,
                timeout=(5, timeout)  # 5s connect, configurable read timeout
            )

        # Try to get the response
        result = response.json()

        # Check for API errors
        if 'error' in result and result['error'] is not None:
            return {
                'success': False,
                'error': str(result['error']),
                'request_body': body,
                'full_response': result
            }

        # Extract the actual answer using the paths provided
        answer = None
        for path in model_config.get('extract_paths', []):
            try:
                # Simple extraction - handles basic paths like choices[0].message.content
                parts = path.replace('[', '.').replace(']', '').split('.')
                current = result
                for part in parts:
                    if part.isdigit():
                        current = current[int(part)]
                    else:
                        current = current[part]
                if current is not None:
                    answer = current
                    break
            except (KeyError, IndexError, TypeError):
                continue

        return {
            'success': True if answer is not None else False,
            'response': answer,
            'full_response': result,
            'request_body': body
        }

    except requests.exceptions.Timeout:
        return {
            'success': False,
            'error': f'Request took too long (>{timeout} seconds)',
            'request_body': body,
            'full_response': None
        }
    except json.JSONDecodeError as e:
        # Capture response context for debugging
        body_preview = response.text[:1000] if 'response' in locals() else ''
        return {
            'success': False,
            'error': f'Invalid JSON (HTTP {response.status_code}): {str(e)}. Body preview: {body_preview[:200]}',
            'request_body': body,
            'full_response': {'raw_text': body_preview, 'status_code': response.status_code}
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e),
            'request_body': body,
            'full_response': None
        }`}generateMainFunction(e,a){const r=e.type==="template";return`def main():
    """Run the experiment."""

    # Parse command line arguments
    parser = argparse.ArgumentParser(description='Run API experiments')
    parser.add_argument('--timeout', '-t', type=int, default=90,
                       help='Request timeout in seconds (default: 90)')
    args = parser.parse_args()

    print("🚀 Starting API tests...\\n")

    # Check for checkpoint file to resume from
    results = []
    tests_completed = 0  # Simple counter for resuming

    # Look for checkpoint file
    if os.path.exists('checkpoint.json'):
        try:
            with open('checkpoint.json', 'r') as f:
                existing_results = json.load(f)
                tests_completed = len(existing_results)

                if existing_results:
                    print(f"📂 Found checkpoint with {tests_completed} completed tests")
                    if sys.stdin.isatty():
                        resume = input("Resume from checkpoint? (y/n): ").lower().strip() == 'y'
                    else:
                        resume = True  # Auto-resume in non-interactive mode
                        print("Non-interactive mode detected, auto-resuming from checkpoint")
                    if resume:
                        results = existing_results
                        print(f"✅ Resuming from test #{tests_completed + 1}\\n")
                    else:
                        tests_completed = 0
                        os.remove('checkpoint.json')  # Clean up if not resuming
        except:
            pass  # If file is corrupted, start fresh

    # Check API keys first
    missing_keys = set()
    for model in MODELS:
        provider = model.get('provider', '')
        if provider != 'ollama' and not API_KEYS.get(provider):
            missing_keys.add(provider)
            print(f"⚠️  Warning: No API key for {provider} - {model['name']} will be skipped")

    if missing_keys:
        print(f"\\n💡 Tip: Add your API keys at the top of this script\\n")

    # Create all test combinations
    ${r?`import itertools
    all_combinations = list(itertools.product(*[VARIABLES[key] for key in VARIABLES]))
    total_tests = len(MODELS) * len(all_combinations)`:"total_tests = len(MODELS)"}

    print(f"Running {total_tests} total tests${r?" ({len(MODELS)} models × {len(all_combinations)} combinations)":""}")
    if results:
        print(f"Resuming from test {len(results) + 1}\\n")
    else:
        print()

    # Track statistics
    success_count = 0
    fail_count = 0

    # Run each test
    test_counter = 0
    for model_idx, model in enumerate(MODELS):
        model_successes = 0
        model_failures = 0
        model_skipped = 0

        ${r?`for combo_idx, combination in enumerate(all_combinations):
            # Calculate global test index
            global_test_idx = model_idx * len(all_combinations) + combo_idx

            # Skip if we already completed this test
            if global_test_idx < tests_completed:
                model_skipped += 1
                continue

            # Build the prompt and variables
            prompt = PROMPT_TEMPLATE
            variable_values = {}
            for i, var_name in enumerate(VARIABLES.keys()):
                prompt = prompt.replace(f"{{{{{var_name}}}}}", combination[i])
                variable_values[var_name] = combination[i]

            test_counter += 1
            # Show progress
            print(f"[{len(results) + 1}/{total_tests}] Testing {model['name']} with {variable_values}")

            # Make the API call
            result = make_api_call(model, prompt, timeout=args.timeout)`:`# Single test per model
        # Skip if we already completed this test
        if model_idx < tests_completed:
            model_skipped += 1
            continue

        prompt = PROMPT
        variable_values = {}

        test_counter += 1
        # Show progress
        print(f"[{len(results) + 1}/{total_tests}] Testing {model['name']}")

        # Make the API call
        result = make_api_call(model, prompt, timeout=args.timeout)

        # Save the result with request/response details
        results.append({
            'config_index': model['config_index'],
            'model': model['display_name'],
            'parameters': model['parameters'],
            'variables': variable_values,
            'prompt': prompt,
            'request_payload': result.get('request_body'),  # The actual JSON sent
            'response_payload': result.get('full_response'),  # The full JSON response
            'success': result['success'],
            'extracted_answer': result.get('response'),  # The extracted answer
            'error': result.get('error')
        })

        # Show result
        if result['success']:
            print(f"  ✅ Got response: {result['response']}")
            success_count += 1
            model_successes += 1
        else:
            print(f"  ❌ Failed: {result['error']}")
            fail_count += 1
            model_failures += 1

        # Save checkpoint after EVERY test (for Ctrl-C safety)
        with open('checkpoint.json', 'w') as f:
            json.dump(results, f, indent=2)`}

            # Save the result with request/response details
            results.append({
                'config_index': model['config_index'],
                'model': model['display_name'],
                'parameters': model['parameters'],
                'variables': variable_values,
                'prompt': prompt,
                'request_payload': result.get('request_body'),  # The actual JSON sent
                'response_payload': result.get('full_response'),  # The full JSON response
                'success': result['success'],
                'extracted_answer': result.get('response'),  # The extracted answer
                'error': result.get('error')
            })

            # Show result
            if result['success']:
                print(f"  ✅ Got response: {result['response']}")
                success_count += 1
                model_successes += 1
            else:
                print(f"  ❌ Failed: {result['error']}")
                fail_count += 1
                model_failures += 1

            # Save checkpoint after EVERY test (for Ctrl-C safety)
            with open('checkpoint.json', 'w') as f:
                json.dump(results, f, indent=2)

        # Show model summary
        if model_successes + model_failures + model_skipped > 0:
            if model_skipped > 0:
                print(f"\\n📊 {model['name']}: {model_successes}/{model_successes + model_failures} new tests succeeded ({model_skipped} skipped)\\n")
            elif model_successes + model_failures > 0:
                success_rate = (model_successes / (model_successes + model_failures)) * 100
                print(f"\\n📊 {model['name']}: {model_successes}/{model_successes + model_failures} succeeded ({success_rate:.1f}%)\\n")

    # Generate timestamp once at the beginning
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # Save results to file
    output_file = f"results_{timestamp}.json"

    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)

    # Also save as CSV for Excel (using csv module for safety)
    csv_file = f"results_{timestamp}.csv"
    import csv
    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        if results:
            # Write header with parameters and variables as separate columns
            variable_names = list(${r?"VARIABLES":"{}"}.keys())
            parameter_names = PARAMETER_COLUMNS
            headers = ['config_index', 'model'] + [f'param_{p}' for p in parameter_names] + variable_names + ['prompt', 'request_payload', 'response_payload', 'extracted_answer', 'success', 'error']

            writer = csv.writer(f, quoting=csv.QUOTE_ALL)
            writer.writerow(headers)

            # Write data
            for r in results:
                # Prepare JSON columns
                request_json = json.dumps(r.get('request_payload')) if r.get('request_payload') else ''
                response_json = json.dumps(r.get('response_payload')) if r.get('response_payload') else ''

                row = [
                    r['config_index'],
                    r['model'],
                    *[r['parameters'].get(p, '') for p in parameter_names],  # Each parameter in its own column
                    *[r['variables'].get(v, '') for v in variable_names],  # Each variable in its own column
                    r['prompt'],
                    request_json,  # Full request JSON
                    response_json,  # Full response JSON
                    r.get('extracted_answer', ''),  # The extracted answer
                    str(r['success']),
                    r.get('error', '')
                ]
                writer.writerow(row)

    print(f"\\n✅ Done! Results saved to:")
    print(f"   📄 {output_file} (JSON format)")
    print(f"   📊 {csv_file} (CSV for Excel)")

    # Clean up checkpoint file if we completed successfully
    if os.path.exists('checkpoint.json'):
        os.remove('checkpoint.json')

    # Show summary
    print(f"\\n📈 Summary:")
    print(f"   Total tests in results: {len(results)}/{total_tests}")

    # Count successes/failures in ALL results (including resumed)
    total_success = sum(1 for r in results if r.get('success'))
    total_fail = len(results) - total_success

    if len(results) > 0:
        print(f"   Successful: {total_success}/{len(results)} ({(total_success/len(results)*100):.1f}%)")
        print(f"   Failed: {total_fail}/{len(results)} ({(total_fail/len(results)*100):.1f}%)")

    if fail_count > 0:
        print("\\n💡 If tests failed, common fixes:")
        print("   - Check your API keys at the top of this script")
        print("   - Make sure you have credits/quota with the provider")
        print("   - Try running with fewer models or combinations")
        print("   - Wait a bit if you hit rate limits")

    # Show models skipped due to missing keys
    if missing_keys:
        skipped_models = [m['name'] for m in MODELS if m.get('provider') in missing_keys]
        if skipped_models:
            print(f"\\n⚠️  Models skipped due to missing API keys: {', '.join(skipped_models)}")`}generateExecutor(){return`if __name__ == "__main__":
    main()`}}class O{getTemplate(){return{id:"production",name:"Production Script (Professional)",description:"Production-grade Python script with SQLite persistence, professional retries, progress bars, and multiple export formats. Best for research and large experiments.",pythonVersion:"3.8",requiredImports:["httpx","aiometer","aiosqlite","jmespath","tenacity","tqdm","pandas"],templateCode:"PRODUCTION_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,a,r={}){const{includeComments:t=!0}=r,o=this.buildResolvedConfigurations(e),s=this.discoverParameterColumns(o);return[this.generateHeader(e,t),this.generateImports(),this.generateSettings(e,t),this.generateParameterColumns(s,t),this.generateModelConfigs(o,t),this.generateDatabaseFunctions(s),this.generateApiCallFunction(),this.generateMainFunction(e),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const a=[],r=new Map,t=new Map;for(const o of e.configurations){const s=o.modelSnapshot?.displayName||o.modelId;r.set(s,(r.get(s)||0)+1),t.set(s,0)}for(let o=0;o<e.configurations.length;o++){const s=e.configurations[o],n=s.providerSnapshot;if(!n)continue;const p=n.api?.baseUrl||"https://api.example.com",c=n.api?.endpoint||"/v1/api",l={"Content-Type":"application/json",...n.headers};n.auth?.type==="bearer"?l.Authorization="Bearer {{API_KEY}}":n.auth?.type==="header"&&n.auth.header&&(l[n.auth.header]="{{API_KEY}}");const d={model:s.modelId},i=n.bodyConstruction;i?.promptField?i.wrapAsArray?d[i.promptField]=[{role:i.messageRole||"user",content:"{{PROMPT}}"}]:d[i.promptField]="{{PROMPT}}":d.prompt="{{PROMPT}}",Object.assign(d,s.parameters);const h=s.provider.split("-")[0],u=s.modelSnapshot?.displayName||s.modelId;let m=u;if(r.get(u)>1){const y=t.get(u)+1;t.set(u,y),m=`${u} [Config ${y}]`}a.push({config_index:o,name:u,display_name:m,provider:h,url:p+c,headers:l,body:d,parameters:s.parameters||{},extract_paths:this.getExtractPaths(s)})}return a}getExtractPaths(e){const a=e.providerSnapshot;if(!a)return["response"];const r=a.responseModes?.text;if(!r)return["response"];const t=r.responseTransform;if(!t)return["response"];const o=[];return t.contentPath&&o.push(t.contentPath),t.fallbackPaths&&o.push(...t.fallbackPaths),o.length>0?o:["response"]}discoverParameterColumns(e){const a=new Set;for(const r of e)r.parameters&&Object.keys(r.parameters).forEach(t=>a.add(t));return Array.from(a).sort()}generateParameterColumns(e,a){const r=a?`# === DISCOVERED PARAMETERS ===
# These are all unique parameters found across model configurations
`:"",t=JSON.stringify(e);return`${r}PARAMETER_COLUMNS = ${t}`}generateHeader(e,a){const r="#!/usr/bin/env python3";return a?`${r}
"""
Production API Testing Script
Requirements: pip install httpx aiometer aiosqlite jmespath tenacity tqdm pandas
"""`:r}generateImports(){return`import asyncio
import httpx
import aiosqlite
import aiometer
import jmespath
import json
import os
import argparse
import sys
import threading
from datetime import datetime
from tenacity import retry, stop_after_attempt, wait_exponential
import functools
import pandas as pd
from pathlib import Path`}generateSettings(e,a){const r=a?`# === WHAT WE'RE TESTING ===
`:"";let t="";if(e.type==="template"&&e.templateConfig){const{template:o,variables:s}=e.templateConfig,n={};for(const[c,l]of Object.entries(s))"snapshot"in l&&l.snapshot?n[c]=l.snapshot.items.map(d=>d.value):l.type==="value"&&l.values&&(n[c]=[...l.values]);const p=JSON.stringify(n,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");t=`PROMPT_TEMPLATE = ${JSON.stringify(o)}
VARIABLES = ${p}`}else t='PROMPT = "Your test prompt here"';return`${r}${t}`}generateModelConfigs(e,a){const r=a?`
# === MODELS TO TEST ===
`:"",t=e.map(s=>({config_index:s.config_index,name:s.name,display_name:s.display_name,provider:s.provider,url:s.url,headers:s.headers,body:s.body,parameters:s.parameters,extract_paths:s.extract_paths})),o=JSON.stringify(t,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${r}MODELS = ${o}`}generateDatabaseFunctions(e){return`# === DATABASE ===
async def setup_database():
    """Create a database to store all results."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    db_file = f"results_{timestamp}.db"

    # Build dynamic columns based on PARAMETERS and VARIABLES
    parameter_columns = ", ".join([f"param_{param_name} TEXT" for param_name in PARAMETER_COLUMNS])
    variable_columns = ", ".join([f"{var_name} TEXT" for var_name in VARIABLES.keys()])

    db = await aiosqlite.connect(db_file)
    await db.execute(f'''
        CREATE TABLE IF NOT EXISTS results (
            id TEXT PRIMARY KEY,
            config_index INTEGER,
            model_display_name TEXT,
            model TEXT,
            endpoint TEXT,
            prompt TEXT,
            {parameter_columns},
            {variable_columns},
            request_payload TEXT,
            response TEXT,
            extracted TEXT,
            success BOOLEAN,
            error TEXT,
            timestamp TEXT
        )
    ''')
    await db.commit()

    print(f"📂 Results will be saved to: {db_file}")
    return db, db_file

async def already_done(db, task_id):
    """Check if we already completed this task."""
    cursor = await db.execute('SELECT id FROM results WHERE id = ?', (task_id,))
    result = await cursor.fetchone()
    return result is not None

async def save_result(db, task_id, model_config, prompt, variable_values, request_payload, response, extracted, success, error):
    """Save a result to the database."""
    # Build dynamic column list and values
    base_columns = ['id', 'config_index', 'model_display_name', 'model', 'endpoint', 'prompt']
    parameter_columns = [f'param_{p}' for p in PARAMETER_COLUMNS]
    variable_columns = list(VARIABLES.keys())
    end_columns = ['request_payload', 'response', 'extracted', 'success', 'error', 'timestamp']

    all_columns = base_columns + parameter_columns + variable_columns + end_columns
    placeholders = ', '.join(['?' for _ in all_columns])

    base_values = [task_id, model_config['config_index'], model_config['display_name'], model_config['name'], model_config['url'], prompt]
    # JSON-stringify any dict/list parameter values for SQLite compatibility
    parameter_values = [json.dumps(v) if isinstance(v, (dict, list)) else v for v in [model_config['parameters'].get(p, '') for p in PARAMETER_COLUMNS]]
    variable_values_list = [variable_values.get(var_name, '') for var_name in variable_columns]
    end_values = [
        json.dumps(request_payload) if request_payload else None,
        json.dumps(response) if response else None,
        extracted, success, error, datetime.now().isoformat()
    ]

    all_values = base_values + parameter_values + variable_values_list + end_values

    await db.execute(f'INSERT INTO results VALUES ({placeholders})', all_values)
    await db.commit()

# === GLOBAL TRACKING FOR REAL-TIME UPDATES ===
success_count = 0
fail_count = 0
progress_bar = None
counter_lock = threading.Lock()`}generateApiCallFunction(){return`# === MAKE API CALLS ===
@retry(stop=stop_after_attempt(10), wait=wait_exponential(min=1, max=30), before_sleep=lambda retry_state: print(f"🔄 Retry attempt {retry_state.attempt_number} for {retry_state.args[5]} after {retry_state.outcome.exception()}"))
async def _call_api_with_retry(client, url, headers, body, extract_paths, model_name):
    """Make the API call with automatic retries for transient failures."""
    try:
        # Make the API call (timeout already set on client)
        response = await client.post(
            url,
            json=body,
            headers=headers
        )
    except Exception as e:
        # Network errors, connection issues, timeouts
        print(f"🌐 {model_name}: Network error - {str(e)[:100]}")
        raise Exception(f"Network error: {str(e)}")

    # ALWAYS capture status code and raw response FIRST
    status_code = response.status_code
    raw_response_text = response.text

    # Auth errors - don't retry
    if status_code in [401, 403]:
        error_msg = f"Authentication failed ({status_code})"
        print(f"🔑 {model_name}: {error_msg} - {raw_response_text[:200]}")
        return {
            'success': False,
            'response_data': {
                "http_status": status_code,
                "raw_text": raw_response_text[:1000],
                "auth_error": error_msg
            },
            'extracted': None,
            'error': f"{error_msg} - Check API key"
        }

    # Check for rate limiting or server overload - these should retry
    if status_code in [429, 500, 502, 503, 504]:
        error_msg = f"Rate limited or server overload ({status_code})"
        print(f"⏳ {model_name}: {error_msg} - {raw_response_text[:100]}")
        raise Exception(f"{error_msg} - will retry")

    # Try to parse JSON
    try:
        response_data = response.json()
    except json.JSONDecodeError as e:
        # Invalid JSON - not retryable
        error_msg = f"Invalid JSON response (HTTP {status_code}): {str(e)}"
        print(f"📛 {model_name}: {error_msg} - Raw: {raw_response_text[:200]}")
        return {
            'success': False,
            'response_data': {
                "http_status": status_code,
                "raw_text": raw_response_text[:1000],
                "json_decode_error": str(e)
            },
            'extracted': None,
            'error': error_msg
        }

    # Check if API returned an error - retry on server errors
    if response_data and response_data.get('error') is not None:
        error_msg = str(response_data.get('error'))
        # Retry on server errors, not on client errors
        if status_code >= 500:
            print(f"🔥 {model_name}: Server error {status_code} - {error_msg[:100]}")
            raise Exception(f"Server error: {error_msg}")
        print(f"⚠️  {model_name}: API error - {error_msg[:100]}")
        return {
            'success': False,
            'response_data': response_data,
            'extracted': None,
            'error': f"API error: {error_msg}"
        }

    # Try to extract the answer
    extracted = None
    attempted_paths = []
    for path in extract_paths:
        attempted_paths.append(path)
        extracted = jmespath.search(path, response_data)
        if extracted is not None:
            break

    success = extracted is not None
    return {
        'success': success,
        'response_data': response_data,
        'extracted': str(extracted) if extracted else None,
        'error': None if success else f"Could not extract answer. Tried: {', '.join(attempted_paths)}",
        'attempted_paths': attempted_paths
    }

async def call_api(client, db, task_id, model_config, prompt, variable_values):
    """Call one API and save the result."""
    global success_count, fail_count, progress_bar

    # Skip if already done successfully
    cursor = await db.execute('SELECT success FROM results WHERE id = ?', (task_id,))
    result = await cursor.fetchone()
    if result is not None and result[0]:  # Only skip if previously successful
        return None

    # Get API key if needed
    api_key = ""
    if model_config['provider'] != 'ollama':
        env_var = f"{model_config['provider'].upper()}_API_KEY"
        api_key = os.getenv(env_var, "")

    # Build the request
    headers = {k: v.replace('{{API_KEY}}', api_key) for k, v in model_config['headers'].items()}

    # Safely replace prompt in body (handle newlines and special chars)
    body_str = json.dumps(model_config['body'])
    # Escape the prompt for JSON
    prompt_escaped = json.dumps(prompt)[1:-1]  # Remove outer quotes
    body_str = body_str.replace('{{PROMPT}}', prompt_escaped)
    body = json.loads(body_str)

    try:
        # Call API with retry logic
        result = await _call_api_with_retry(
            client,
            model_config['url'],
            headers,
            body,
            model_config['extract_paths'],
            model_config['name']
        )

        # Save the result to database
        await save_result(
            db, task_id, model_config, prompt, variable_values,
            body, result['response_data'], result['extracted'],
            result['success'], result['error']
        )

        # Update counters
        with counter_lock:
            if result['success']:
                success_count += 1
            else:
                fail_count += 1

        # Show extraction failures with attempted paths
        if not result['success'] and progress_bar:
            if 'attempted_paths' in result and result['attempted_paths']:
                paths_str = ', '.join(result['attempted_paths'][:3])
                if len(result['attempted_paths']) > 3:
                    paths_str += f' (+{len(result["attempted_paths"])-3} more)'
                progress_bar.write(f"⚠️  {model_config['name']}: Couldn't extract content. Tried: {paths_str}")
            else:
                progress_bar.write(f"❌ {model_config['name']}: {result['error'][:80]}")

        if progress_bar:
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        return 'success' if result['success'] else 'failed'

    except Exception as e:
        # All retries exhausted - save final failure
        error_str = str(e)
        await save_result(db, task_id, model_config, prompt, variable_values, body, None, None, False, error_str)

        with counter_lock:
            fail_count += 1

        # Show error immediately
        if progress_bar:
            progress_bar.write(f"❌ {model_config['name']}: {error_str[:80]}")
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        return 'failed'`}generateMainFunction(e){return`def parse_args():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="Run API experiments with multiple models")
    parser.add_argument("--output", "-o",
                       choices=["csv", "tsv", "json", "jsonl", "excel", "parquet"],
                       default="csv",
                       help="Output format (default: csv)")
    parser.add_argument("--concurrent", "-c", type=int, default=10,
                       help="Number of concurrent requests (default: 10)")
    parser.add_argument("--rate-limit", "-r", type=float, default=5.0,
                       help="Max requests per second (default: 5.0)")
    parser.add_argument("--timeout", "-t", type=int, default=90,
                       help="Request timeout in seconds (default: 90)")
    parser.add_argument("--output-file", "-f", type=str,
                       help="Output filename (auto-generated if not specified)")
    parser.add_argument("--resume", action="store_true",
                       help="Resume from existing database")
    parser.add_argument("--db-file", type=str,
                       help="Database file to use/resume from")
    return parser.parse_args()

def check_api_keys():
    """Check that all required API keys are available."""
    print("🔑 Checking API keys...")

    required_keys = set()
    available_models = []
    missing_keys = []

    for model in MODELS:
        provider = model['provider']
        if provider != 'ollama':
            env_var = f"{provider.upper()}_API_KEY"
            required_keys.add((env_var, provider))

    for env_var, provider in required_keys:
        api_key = os.getenv(env_var, "")
        if api_key:
            # Count models that can use this key
            model_count = len([m for m in MODELS if m['provider'] == provider])
            print(f"✅ {env_var}: Found (enables {model_count} models)")
        else:
            missing_keys.append((env_var, provider))

    # Count available models
    for model in MODELS:
        provider = model['provider']
        if provider == 'ollama':
            available_models.append(model['name'])
        else:
            env_var = f"{provider.upper()}_API_KEY"
            if os.getenv(env_var):
                available_models.append(model['name'])

    if missing_keys:
        print(f"\\n❌ Missing API keys for {len(missing_keys)} providers:")
        for env_var, provider in missing_keys:
            model_count = len([m for m in MODELS if m['provider'] == provider])
            print(f"   {env_var} (required for {model_count} models)")

        print("\\n🔧 Please set the missing API keys:")
        for env_var, provider in missing_keys:
            print(f"   export {env_var}='your-key-here'")

        sys.exit(1)
    else:
        print(f"✅ All {len(MODELS)} models available!")

    return available_models

def get_output_filename(args, db_file):
    """Generate output filename based on format and timestamp."""
    if args.output_file:
        return args.output_file

    # Extract timestamp from db_file or use current
    if "results_" in db_file:
        timestamp = db_file.split("results_")[1].split(".db")[0]
    else:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    extensions = {
        "csv": ".csv",
        "tsv": ".tsv",
        "json": ".json",
        "jsonl": ".jsonl",
        "excel": ".xlsx",
        "parquet": ".parquet"
    }

    return f"results_{timestamp}{extensions[args.output]}"

async def export_results(db_file, output_format, output_file):
    """Export results from SQLite to specified format using pandas."""
    print(f"\\n📤 Exporting results to {output_file} ({output_format})...")

    try:
        # Load data from SQLite using sqlite3 directly (no SQLAlchemy dependency)
        import sqlite3
        conn = sqlite3.connect(db_file)
        df = pd.read_sql_query("SELECT * FROM results ORDER BY timestamp", conn)
        conn.close()

        if df.empty:
            print("⚠️  No results to export")
            return

        # Keep JSON columns as JSON strings for cleaner export
        # Don't expand them into hundreds of columns

        # Export based on format - graceful degradation for missing dependencies
        export_succeeded = False
        try:
            if output_format == "csv":
                df.to_csv(output_file, index=False)
                export_succeeded = True
            elif output_format == "tsv":
                df.to_csv(output_file, sep='\\t', index=False)
                export_succeeded = True
            elif output_format == "json":
                df.to_json(output_file, orient='records', indent=2)
                export_succeeded = True
            elif output_format == "jsonl":
                df.to_json(output_file, orient='records', lines=True)
                export_succeeded = True
            elif output_format == "excel":
                try:
                    df.to_excel(output_file, index=False, engine='openpyxl')
                    export_succeeded = True
                except ImportError:
                    print(f"⚠️  Excel export requires 'openpyxl'. Install with: pip install openpyxl")
                    print(f"   Falling back to CSV export...")
                    fallback_file = output_file.replace('.xlsx', '.csv')
                    df.to_csv(fallback_file, index=False)
                    output_file = fallback_file
                    export_succeeded = True
            elif output_format == "parquet":
                try:
                    df.to_parquet(output_file, index=False)
                    export_succeeded = True
                except ImportError:
                    print(f"⚠️  Parquet export requires 'pyarrow' or 'fastparquet'. Install with: pip install pyarrow")
                    print(f"   Falling back to CSV export...")
                    fallback_file = output_file.replace('.parquet', '.csv')
                    df.to_csv(fallback_file, index=False)
                    output_file = fallback_file
                    export_succeeded = True

            if export_succeeded and Path(output_file).exists():
                file_size = Path(output_file).stat().st_size
                print(f"✅ Exported {len(df)} rows to {output_file} ({file_size:,} bytes)")

                # Show quick summary
                if len(df) > 0:
                    success_rate = (df['success'].sum() / len(df) * 100) if 'success' in df.columns else 0
                    print(f"   Success rate: {success_rate:.1f}% ({df['success'].sum() if 'success' in df.columns else 0}/{len(df)})")

        except Exception as e:
            print(f"⚠️  Export failed: {e}")
            print(f"   Data remains available in SQLite database: {db_file}")

    except Exception as e:
        print(f"❌ Failed to read from database: {e}")
        print(f"   Database file: {db_file}")

# === MAIN RUNNER ===
async def main():
    """Run all the API calls."""
    global progress_bar

    # Parse command line arguments
    args = parse_args()

    # Check API keys upfront (exits if any missing)
    check_api_keys()

    # Setup database
    if args.db_file and args.resume:
        db_file = args.db_file
        print(f"📂 Resuming from database: {db_file}")
        if not os.path.exists(db_file):
            print(f"❌ Database file not found: {db_file}")
            sys.exit(1)
        db = await aiosqlite.connect(db_file)
    else:
        db, db_file = await setup_database()

    # Create all tasks (model + prompt combinations)
    tasks = []
    import itertools
    import hashlib

    for model_idx, model in enumerate(MODELS):
        ${e.type==="template"?`# Create all combinations of variable values
        var_names = list(VARIABLES.keys())
        var_value_lists = [VARIABLES[name] for name in var_names]

        for combination_idx, combination in enumerate(itertools.product(*var_value_lists)):
            # Build prompt by replacing all variables
            prompt = PROMPT_TEMPLATE
            variable_values = {}

            for var_name, value in zip(var_names, combination):
                prompt = prompt.replace(f"{{{{{var_name}}}}}", value)
                variable_values[var_name] = value

            # Create task ID using model index + content hash
            # Model index ensures different configs of same model are unique
            content_key = json.dumps(variable_values, sort_keys=True)
            stable_hash = hashlib.sha256(content_key.encode()).hexdigest()[:8]
            task_id = f"m{model_idx}_{stable_hash}"
            tasks.append((task_id, model, prompt, variable_values))`:`# Single test
        prompt = PROMPT
        task_id = f"{model['name']}_single"
        tasks.append((task_id, model, prompt, {}))`}

    # Check how many we already completed
    already_completed = 0
    for task_id, _, _, _ in tasks:
        if await already_done(db, task_id):
            already_completed += 1

    remaining = len(tasks) - already_completed

    print(f"📊 Total: {len(tasks)} | Done: {already_completed} | Remaining: {remaining}")

    if remaining == 0:
        print("✅ All tasks already completed!")
    else:
        # Run the API calls with rate limiting
        print(f"\\n🚀 Running {remaining} API calls...")
        print(f"   Rate limits: {args.concurrent} concurrent, {args.rate_limit} per second\\n")

    if remaining > 0:
        # Create progress bar
        from tqdm.asyncio import tqdm
        progress_bar = tqdm(total=remaining, desc="API Calls", unit="call")

        # Create client with explicit timeouts (use CLI arg for read timeout)
        async with httpx.AsyncClient(timeout=httpx.Timeout(connect=5.0, read=float(args.timeout), write=5.0, pool=5.0)) as client:
            # Create partial functions for aiometer
            api_calls = []
            for task_id, model, prompt, variable_values in tasks:
                if not await already_done(db, task_id):
                    api_calls.append(
                        functools.partial(call_api, client, db, task_id, model, prompt, variable_values)
                    )

            # Run with rate limiting
            await aiometer.run_all(
                api_calls,
                max_at_once=args.concurrent,
                max_per_second=args.rate_limit
            )

        # Close progress bar
        progress_bar.close()

    # Show summary
    print("\\n\\n" + "="*50)
    print("📈 FINAL RESULTS")
    print("="*50)

    # Group by config_index to properly distinguish duplicate model names
    cursor = await db.execute('''
        SELECT config_index, model_display_name, model,
               COUNT(*) as total,
               SUM(CASE WHEN success THEN 1 ELSE 0 END) as successful
        FROM results
        GROUP BY config_index
        ORDER BY config_index
    ''')

    async for row in cursor:
        config_idx, display_name, model, total, successful = row
        rate = (successful/total*100) if total > 0 else 0
        status = "✅" if rate == 100 else "⚠️" if rate > 0 else "❌"
        print(f"[{config_idx + 1}] {status} {display_name}: {successful}/{total} ({rate:.0f}%)")

    print(f"\\n📊 View results: sqlite3 {db_file}")
    print("   Example: SELECT * FROM results WHERE success = 0;")

    await db.close()

    # Export results to specified format
    output_file = get_output_filename(args, db_file)
    await export_results(db_file, args.output, output_file)`}generateExecutor(){return`# === RUN IT ===
if __name__ == "__main__":
    asyncio.run(main())`}}function N(f){switch(f){case"simple":return new S;case"production":return new O;case"minimal":case"basic":case"reproduction":case"analysis":return _.info(`Legacy template '${f}' requested, using 'simple' instead`),new S;default:return _.warn(`Unknown template: ${f}, defaulting to 'simple'`),new S}}function j(){return[new S().getTemplate(),new O().getTemplate()]}class F{async generateScript(e,a={}){const r=Date.now();_.info("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:e,template:a.template||"minimal",startTime:r});try{_.info("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:e});const t=await L.loadTrialForExport(e);if(!t.ok){const y=t.error;return{ok:!1,error:new x("GENERATION_FAILED",`Failed to load trial data: ${y.message}`,{trialId:e,originalError:y})}}const{trial:o,apiCalls:s}=t.value,n=this.validateCodeGenOptions(a);if(!n.isValid)return{ok:!1,error:new x("INVALID_FIELDS",`Code generation validation failed: ${n.errors.join(", ")}`,{errors:n.errors})};const p=a.template||"minimal";_.info("EXPORT_DEBUG: PYTHON_GENERATION GETTING_TEMPLATE",{templateId:p});const c=N(p),l=c.getTemplate();_.info("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{templateId:p,apiCallCount:s.length});const d=Date.now(),i=c.generateScript(o,s,{includeComments:a.includeComments!==!1});_.info("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-d,codeLength:i.length,estimatedBytes:P(i)});const h=Date.now()-r,m={filename:this.generateScriptFilename(o.name,p),mimeType:"text/x-python",data:i,metadata:{trialName:o.name,trialId:o.id,exportDate:new Date,callCount:s.length,fieldCount:0,format:"python",estimatedSizeBytes:P(i)},template:p,pythonVersion:l.pythonVersion,requiredPackages:this.extractRequiredPackages(l,a),codeLength:i.length,generationTimeMs:h};return _.info("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:e,templateId:p,filename:m.filename,codeLength:m.codeLength,generationTimeMs:m.generationTimeMs,requiredPackages:m.requiredPackages}),{ok:!0,value:m}}catch(t){const o=t instanceof Error?t:new Error(String(t));return _.info("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",o,{trialId:e,template:a.template||"minimal",generationTimeMs:Date.now()-r}),{ok:!1,error:new x("GENERATION_FAILED",`Python script generation failed: ${o.message}`,{trialId:e,options:a,originalError:t,generationTimeMs:Date.now()-r})}}}getAvailableTemplates(){return j()}validateCodeGenOptions(e){const a=[],r=[];if(e.template){const t=this.getAvailableTemplates().map(o=>o.id);t.includes(e.template)||a.push(`Invalid template: ${e.template}. Available templates: ${t.join(", ")}`)}if(e.pythonVersion){const t=["3.8","3.9","3.10","3.11"];t.includes(e.pythonVersion)||r.push(`Python version ${e.pythonVersion} not explicitly supported. Supported versions: ${t.join(", ")}`)}if(e.includeVisualization){const t=e.template||"minimal";N(t).getTemplate().supportsVisualization||r.push(`Template '${t}' does not support built-in visualization. You can add your own visualization code to the exported script.`)}return{isValid:a.length===0,errors:a,warnings:r}}generateScriptFilename(e,a){const r=e.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",t=a==="minimal"?"":`_${a}`,s=new Date().toISOString().replace("T","_").replace(/:/g,"-").split(".")[0];return`${r}${t}_${s}.py`}extractRequiredPackages(e,a){return["json","requests","itertools","csv"]}}const D=new F;let w=null;async function B(){return w||(w=(await M(async()=>{const{default:f}=await import("./jszip.min-C0L9SgBO.js").then(e=>e.j);return{default:f}},__vite__mapDeps([0,1,2,3,4]))).default),w}class ${constructor(){A(this,"trialBundleService",new q)}async exportBundle(e,a){try{_.info("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:e,bundleType:a.bundleType});const r=await D.generateScript(e,{template:a.template||"simple",includeComments:a.includeComments!==!1});if(!r.ok)return{ok:!1,error:new x("GENERATION_FAILED",r.error?.message||"Failed to generate Python script")};if(a.bundleType==="script-only")return{ok:!0,value:{zipBlob:new Blob([r.value.data],{type:"text/x-python"}),filename:r.value.filename,sizeBytes:r.value.metadata.estimatedSizeBytes,contents:["experiment.py"]}};const t=await B(),o=new t,s=[];o.file("experiment.py",r.value.data),s.push("experiment.py");const n=await this.trialBundleService.exportTrialBundle(e,{includeResults:!0,includeApiCalls:!0,skipDownload:!0});if(n.ok?(o.file("trial_config.json",JSON.stringify(n.value.bundle,null,2)),s.push("trial_config.json")):_.warn("Failed to export trial bundle:",n.error),a.bundleType==="script-config-data"){const h=o.folder("data"),u=await R.getAvailableFields(e);let m=[];if(u.ok){const v=u.value.standardFields.map(g=>g.id).filter(g=>g!=="parameters"&&g!=="variables"),E=u.value.parameterFields.map(g=>g.id),b=(u.value.variableFields||[]).filter(g=>!g.id.startsWith("source_")).map(g=>g.id);m=[...v,...E,...b],_.info("EXPORT_DEBUG: REPRO_BUNDLE using all fields",{total:m.length,standard:v.length,params:E.length,vars:b.length})}else _.warn("Failed to get available fields, using defaults");const y=[{format:"csv",filename:"results.csv"},{format:"excel",filename:"results.xlsx"},{format:"jsonl",filename:"results.jsonl"}];for(const{format:v,filename:E}of y){const b=await R.exportTrialData(e,{format:v,fields:m.length>0?m:void 0,includeHeaders:!0,addBOM:v==="csv"||v==="excel"});if(b.ok){if(v==="excel"&&typeof b.value.data=="string"){const g=atob(b.value.data),k=new Uint8Array(g.length);for(let T=0;T<g.length;T++)k[T]=g.charCodeAt(T);h.file(E,k)}else h.file(E,b.value.data);s.push(`data/${E}`)}else _.warn(`Failed to export ${v}:`,b.error)}}const p=this.generateReadme(a.bundleType,r.value.metadata.trialName);o.file("README.md",p),s.push("README.md");const c=await o.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}),l=new Date().toISOString().split("T")[0].replace(/-/g,""),d=a.bundleType==="script-config-data"?"_complete":"_config",i=`${r.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_repro${d}_${l}.zip`;return{ok:!0,value:{zipBlob:c,filename:i,sizeBytes:c.size,contents:s}}}catch(r){return _.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",r),{ok:!1,error:new x("GENERATION_FAILED",r instanceof Error?r.message:"Unknown error creating bundle")}}}generateReadme(e,a){const r=new Date().toISOString();let t="";switch(e){case"script-config":t="\n## Contents\n- `experiment.py` - Minimal Python script to reproduce the experiment\n- `trial_config.json` - Complete trial configuration including templates, variables, and model settings\n";break;case"script-config-data":t="\n## Contents\n- `experiment.py` - Minimal Python script to reproduce the experiment  \n- `trial_config.json` - Complete trial configuration\n- `data/results.csv` - Full experimental results in CSV format\n- `data/results.xlsx` - Full experimental results in Excel format\n- `data/results.jsonl` - Full experimental results in JSONL format (one JSON object per line)\n";break}return`# Reproducibility Bundle: ${a}

Generated: ${r}

${t}

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
`}}const fe=new $;export{fe as reproducibilityBundleService};
