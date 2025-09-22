const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jszip.min-nqt1oJi1.js","assets/ui-vendor-Bkt23l9R.js","assets/vue-vendor-BhiovUD0.js","assets/utils-vendor-Bfx2yPd7.js","assets/data-vendor-DBPIMjWg.js"])))=>i.map(i=>d[i]);
var I=Object.defineProperty;var C=(u,t,r)=>t in u?I(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r;var k=(u,t,r)=>C(u,typeof t!="symbol"?t+"":t,r);import{l as d,_ as L}from"./index-BXVhlPxc.js";import{t as M,E,g as A,d as R}from"./TrialsView-CvKDs_b8.js";import{TrialBundleExportService as j}from"./trial-bundle.service-BWSk2fUD.js";import"./vue-vendor-BhiovUD0.js";import"./ui-vendor-Bkt23l9R.js";import"./utils-vendor-Bfx2yPd7.js";import"./tauri-vendor-1uBLmS9u.js";import"./toast-B3ma7y9R.js";import"./useCostEstimation-BqnF4RsV.js";import"./useModels-BrRX8pZ1.js";import"./useLiveQuery-Cmpe7aPg.js";import"./ParserSelector-Ws4wA_Fs.js";import"./parser-qKtDYV_H.js";import"./stream-manager-DhjGeQZ1.js";import"./controller-COYXJS06.js";import"./common-Brb0k-N6.js";import"./index-CgJtw2V3.js";import"./id-generator-Cv_Imc0S.js";import"./useTrialCommands-CJWEUN5G.js";import"./repository-DwhjVhsb.js";import"./useTrials-BHOoYNd0.js";import"./repository-BdqQ1beE.js";import"./useHeatmapStyling-Hhj7LDVh.js";import"./sanitization-CV1p9crA.js";import"./data-vendor-DBPIMjWg.js";class S{getTemplate(){return{id:"simple",name:"Simple Script (Beginner-Friendly)",description:"Simple Python script with CSV/JSON output, basic retries, and clear progress. Best for beginners and quick tests.",pythonVersion:"3.8",requiredImports:["json","requests","os","time","datetime"],templateCode:"SIMPLE_TEMPLATE",supportsAnalysis:!1,supportsVisualization:!1}}generateScript(t,r,s={}){const{includeComments:e=!0}=s,a=this.buildResolvedConfigurations(t);return[this.generateHeader(t,e),this.generateImports(),this.generateSettings(t,e),this.generateModelConfigs(a,e),this.generateFunctions(),this.generateMainFunction(t),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(t){const r=[];for(const s of t.configurations){const e=s.providerSnapshot;if(!e)continue;const a=e.api?.baseUrl||"https://api.example.com",o=e.api?.endpoint||"/v1/api",n={"Content-Type":"application/json",...e.headers};e.auth?.type==="bearer"?n.Authorization="Bearer {{API_KEY}}":e.auth?.type==="header"&&e.auth.header&&(n[e.auth.header]="{{API_KEY}}");const i={model:s.modelId},l=e.bodyConstruction;l?.promptField?l.wrapAsArray?i[l.promptField]=[{role:l.messageRole||"user",content:"{{PROMPT}}"}]:i[l.promptField]="{{PROMPT}}":i.prompt="{{PROMPT}}",Object.assign(i,s.parameters);const p=s.provider.split("-")[0];r.push({name:s.modelSnapshot?.displayName||s.modelId,provider:p,url:a+o,headers:n,body:i,extract_paths:this.getExtractPaths(s)})}return r}getExtractPaths(t){const r=t.providerSnapshot;if(!r)return["response"];const s=r.responseModes?.text;if(!s)return["response"];const e=s.responseTransform;if(!e)return["response"];const a=[];return e.contentPath&&a.push(e.contentPath),e.fallbackPaths&&a.push(...e.fallbackPaths),a.length>0?a:["response"]}generateHeader(t,r){const s="#!/usr/bin/env python3";return r?`${s}
"""
Simple API Testing Script
Requirement: pip install requests
"""`:s}generateImports(){return`import json
import time
import requests
from datetime import datetime
import os`}generateSettings(t,r){const s=r?`# ============================================
# YOUR EXPERIMENT SETTINGS
# ============================================

`:"",e=new Set;for(const n of t.configurations){const i=n.provider.split("-")[0];e.add(i)}const a=[];for(const n of e)if(n==="ollama")a.push(`    "${n}": "",  # Local, no key needed`);else{const i=`${n.toUpperCase()}_API_KEY`;a.push(`    "${n}": os.getenv("${i}", ""),  # Get from environment or set here`)}let o="";if(t.type==="template"&&t.templateConfig){const{template:n,variables:i}=t.templateConfig,l={};for(const[_,c]of Object.entries(i))"snapshot"in c&&c.snapshot?l[_]=c.snapshot.items.map(v=>v.value):c.type==="value"&&c.values&&(l[_]=[...c.values]);const p=JSON.stringify(l,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");o=`
# What prompt to test (you can use {{variables}} that get replaced)
PROMPT_TEMPLATE = ${JSON.stringify(n)}

# Variables to test (creates all combinations)
VARIABLES = ${p}`}else o=`
# Single prompt test
PROMPT = "Your test prompt here"`;return`${s}# Your API Keys (leave empty for providers you're not using)
# The script will first check environment variables, then use these values if set

API_KEYS = {
${a.join(`,
`)}
}

# You can override environment variables by setting keys here directly
# Example: API_KEYS["openai"] = "sk-..."
${o}`}generateModelConfigs(t,r){const s=r?`# ============================================
# MODELS TO TEST (exported from Auditomatic)
# ============================================

`:"",e=JSON.stringify(t,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${e}`}generateFunctions(){return`# ============================================
# MAIN SCRIPT (you probably don't need to edit below here)
# ============================================

def make_api_call(model_config, prompt):
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
            timeout=30
        )

        # Simple retry for common temporary failures
        if response.status_code in [429, 502, 503]:
            # Rate limited or server overloaded - wait and try again
            wait_time = 5
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
                timeout=30
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
            'error': 'Request took too long (>30 seconds)',
            'request_body': body,
            'full_response': None
        }
    except json.JSONDecodeError:
        return {
            'success': False,
            'error': f'Invalid JSON response (HTTP {response.status_code})',
            'request_body': body,
            'full_response': None
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e),
            'request_body': body,
            'full_response': None
        }`}generateMainFunction(t){const r=t.type==="template";return`def main():
    """Run the experiment."""

    print("🚀 Starting API tests...\\n")

    # Check for checkpoint file to resume from
    results = []
    completed_indices = set()  # Track by INDEX not by values!

    # Look for checkpoint file
    if os.path.exists('checkpoint.json'):
        try:
            with open('checkpoint.json', 'r') as f:
                existing_results = json.load(f)
                # Track which test indices we've already done
                completed_indices = set(range(len(existing_results)))
                if existing_results:
                    print(f"📂 Found checkpoint with {len(existing_results)} completed tests")
                    resume = input("Resume from checkpoint? (y/n): ").lower().strip() == 'y'
                    if resume:
                        results = existing_results
                        print(f"✅ Resuming from test #{len(existing_results) + 1}\\n")
                    else:
                        completed_indices = set()
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

    # Global test counter across all models and combinations
    global_test_index = 0

    # Run each test
    for model_idx, model in enumerate(MODELS):
        model_successes = 0
        model_failures = 0
        model_skipped = 0

        ${r?`for combo_idx, combination in enumerate(all_combinations):
            # Calculate the global index for this test
            global_test_index = model_idx * len(all_combinations) + combo_idx

            # Skip if we already completed this test index
            if global_test_index < len(results):
                model_skipped += 1
                continue

            # Build the prompt
            prompt = PROMPT_TEMPLATE
            variable_values = {}
            for i, var_name in enumerate(VARIABLES.keys()):
                prompt = prompt.replace(f"{{{{{var_name}}}}}", combination[i])
                variable_values[var_name] = combination[i]

            # Show progress (1-indexed for display)
            print(f"[{global_test_index + 1}/{total_tests}] Testing {model['name']} with {variable_values}")`:`# Single test per model
            global_test_index = model_idx

            # Skip if already completed
            if global_test_index < len(results):
                model_skipped += 1
                continue

            prompt = PROMPT
            variable_values = {}

            # Show progress
            print(f"[{global_test_index + 1}/{total_tests}] Testing {model['name']}")`}

            # Make the API call
            result = make_api_call(model, prompt)

            # Save the result with request/response details
            results.append({
                'model': model['name'],
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

    # Also save as CSV for Excel
    csv_file = f"results_{timestamp}.csv"
    with open(csv_file, 'w') as f:
        if results:
            # Write header with variables as separate columns
            variable_names = list(${r?"VARIABLES":"{}"}.keys())
            headers = ['model'] + variable_names + ['prompt', 'request_payload', 'response_payload', 'extracted_answer', 'success', 'error']
            f.write(','.join(headers) + '\\n')

            # Write data
            for r in results:
                # Prepare JSON columns (escape quotes for CSV)
                request_json = json.dumps(r.get('request_payload')) if r.get('request_payload') else ''
                response_json = json.dumps(r.get('response_payload')) if r.get('response_payload') else ''

                # Escape quotes in JSON for CSV
                request_json = request_json.replace('"', '""')
                response_json = response_json.replace('"', '""')

                row = [
                    r['model'],
                    *[r['variables'].get(v, '') for v in variable_names],  # Each variable in its own column
                    f'"{r["prompt"]}"',
                    f'"{request_json}"',  # Full request JSON
                    f'"{response_json}"',  # Full response JSON
                    f'"{r.get("extracted_answer", "")}"',  # The extracted answer
                    str(r['success']),
                    f'"{r.get("error", "")}"'
                ]
                f.write(','.join(row) + '\\n')

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
        print("   - Wait a bit if you hit rate limits")`}generateExecutor(){return`if __name__ == "__main__":
    main()`}}class O{getTemplate(){return{id:"production",name:"Production Script (Professional)",description:"Production-grade Python script with SQLite persistence, professional retries, progress bars, and multiple export formats. Best for research and large experiments.",pythonVersion:"3.8",requiredImports:["httpx","aiometer","aiosqlite","jmespath","tenacity","tqdm","pandas"],templateCode:"PRODUCTION_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(t,r,s={}){const{includeComments:e=!0}=s,a=this.buildResolvedConfigurations(t);return[this.generateHeader(t,e),this.generateImports(),this.generateSettings(t,e),this.generateModelConfigs(a,e),this.generateDatabaseFunctions(),this.generateApiCallFunction(),this.generateMainFunction(t),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(t){const r=[];for(const s of t.configurations){const e=s.providerSnapshot;if(!e)continue;const a=e.api?.baseUrl||"https://api.example.com",o=e.api?.endpoint||"/v1/api",n={"Content-Type":"application/json",...e.headers};e.auth?.type==="bearer"?n.Authorization="Bearer {{API_KEY}}":e.auth?.type==="header"&&e.auth.header&&(n[e.auth.header]="{{API_KEY}}");const i={model:s.modelId},l=e.bodyConstruction;l?.promptField?l.wrapAsArray?i[l.promptField]=[{role:l.messageRole||"user",content:"{{PROMPT}}"}]:i[l.promptField]="{{PROMPT}}":i.prompt="{{PROMPT}}",Object.assign(i,s.parameters);const p=s.provider.split("-")[0];r.push({name:s.modelSnapshot?.displayName||s.modelId,provider:p,url:a+o,headers:n,body:i,extract_paths:this.getExtractPaths(s)})}return r}getExtractPaths(t){const r=t.providerSnapshot;if(!r)return["response"];const s=r.responseModes?.text;if(!s)return["response"];const e=s.responseTransform;if(!e)return["response"];const a=[];return e.contentPath&&a.push(e.contentPath),e.fallbackPaths&&a.push(...e.fallbackPaths),a.length>0?a:["response"]}generateHeader(t,r){const s="#!/usr/bin/env python3";return r?`${s}
"""
Production API Testing Script
Requirements: pip install httpx aiometer aiosqlite jmespath tenacity tqdm pandas
"""`:s}generateImports(){return`import asyncio
import httpx
import aiosqlite
import aiometer
import jmespath
import json
import os
import argparse
import sys
from datetime import datetime
from tenacity import retry, stop_after_attempt, wait_exponential
import functools
import pandas as pd
from pathlib import Path`}generateSettings(t,r){const s=r?`# === WHAT WE'RE TESTING ===
`:"";let e="";if(t.type==="template"&&t.templateConfig){const{template:a,variables:o}=t.templateConfig,n={};for(const[l,p]of Object.entries(o))"snapshot"in p&&p.snapshot?n[l]=p.snapshot.items.map(_=>_.value):p.type==="value"&&p.values&&(n[l]=[...p.values]);const i=JSON.stringify(n,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");e=`PROMPT_TEMPLATE = ${JSON.stringify(a)}
VARIABLES = ${i}`}else e='PROMPT = "Your test prompt here"';return`${s}${e}`}generateModelConfigs(t,r){const s=r?`
# === MODELS TO TEST ===
`:"",e=t.map(o=>({name:o.name,provider:o.provider,url:o.url,headers:o.headers,body:o.body,extract_paths:o.extract_paths})),a=JSON.stringify(e,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${a}`}generateDatabaseFunctions(){return`# === DATABASE ===
async def setup_database():
    """Create a database to store all results."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    db_file = f"results_{timestamp}.db"

    # Build dynamic columns based on VARIABLES
    variable_columns = ", ".join([f"{var_name} TEXT" for var_name in VARIABLES.keys()])

    db = await aiosqlite.connect(db_file)
    await db.execute(f'''
        CREATE TABLE IF NOT EXISTS results (
            id TEXT PRIMARY KEY,
            model_config_name TEXT,
            model TEXT,
            endpoint TEXT,
            prompt TEXT,
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

async def save_result(db, task_id, model_config_name, model, endpoint, prompt, variable_values, request_payload, response, extracted, success, error):
    """Save a result to the database."""
    # Build dynamic column list and values
    base_columns = ['id', 'model_config_name', 'model', 'endpoint', 'prompt']
    variable_columns = list(VARIABLES.keys())
    end_columns = ['request_payload', 'response', 'extracted', 'success', 'error', 'timestamp']

    all_columns = base_columns + variable_columns + end_columns
    placeholders = ', '.join(['?' for _ in all_columns])

    base_values = [task_id, model_config_name, model, endpoint, prompt]
    variable_values_list = [variable_values.get(var_name, '') for var_name in variable_columns]
    end_values = [
        json.dumps(request_payload) if request_payload else None,
        json.dumps(response) if response else None,
        extracted, success, error, datetime.now().isoformat()
    ]

    all_values = base_values + variable_values_list + end_values

    await db.execute(f'INSERT INTO results VALUES ({placeholders})', all_values)
    await db.commit()

# === GLOBAL TRACKING FOR REAL-TIME UPDATES ===
success_count = 0
fail_count = 0
progress_bar = None`}generateApiCallFunction(){return`# === MAKE API CALLS ===
@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=10))
async def call_api(client, db, task_id, model_config, prompt, variable_values):
    """Call one API and save the result."""
    global success_count, fail_count, progress_bar

    # Skip if already done
    if await already_done(db, task_id):
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
        # Make the API call
        response = await client.post(
            model_config['url'],
            json=body,
            headers=headers,
            timeout=30
        )

        # ALWAYS capture status code and raw response FIRST
        status_code = response.status_code
        raw_response_text = response.text

        # Check for rate limiting or server overload
        if status_code in [429, 502]:
            error_msg = f"Rate limited or server overload ({status_code})"
            if progress_bar:
                progress_bar.write(f"⏳ {model_config['name']}: {error_msg} - {raw_response_text[:80]}")
            raise Exception(f"{error_msg} - will retry")

        # Try to parse JSON, but keep raw data either way
        try:
            response_data = response.json()
        except json.JSONDecodeError as e:
            # Store the raw response so we can see what the API actually returned
            error_msg = f"Invalid JSON response (HTTP {status_code}): {str(e)}"
            raw_response = {
                "http_status": status_code,
                "raw_text": raw_response_text[:1000],  # First 1000 chars
                "json_decode_error": str(e)
            }
            await save_result(db, task_id, model_config['name'], model_config['name'], model_config['url'],
                            prompt, variable_values, body, raw_response, None, False, error_msg)
            fail_count += 1
            if progress_bar:
                progress_bar.write(f"❌ {model_config['name']}: HTTP {status_code} - {raw_response_text[:100]}")
                progress_bar.update(1)
                progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})
            raise Exception(error_msg)

        # Check if API returned an error
        if response_data and response_data.get('error') is not None:
            error_msg = str(response_data.get('error'))
            await save_result(db, task_id, model_config['name'], model_config['name'], model_config['url'],
                            prompt, variable_values, body, response_data, None, False, error_msg)
            fail_count += 1
            if progress_bar:
                progress_bar.write(f"❌ {model_config['name']}: API error - {error_msg[:80]}")
                progress_bar.update(1)
                progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})
            raise Exception(f"API error: {error_msg}")

        # Try to extract the answer
        extracted = None
        for path in model_config['extract_paths']:
            extracted = jmespath.search(path, response_data)
            if extracted is not None:
                break

        # Save the result
        success = extracted is not None
        if success:
            success_count += 1
        else:
            fail_count += 1
            # Show extraction failures too
            if progress_bar:
                progress_bar.write(f"⚠️  {model_config['name']}: Couldn't extract content from response")

        await save_result(db, task_id, model_config['name'], model_config['name'], model_config['url'],
                         prompt, variable_values, body, response_data, str(extracted) if extracted else None, success,
                         None if success else "Could not extract answer")

        if progress_bar:
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        return 'success' if success else 'failed'

    except Exception as e:
        # Save and show the error
        error_str = str(e)
        await save_result(db, task_id, model_config['name'], model_config['name'], model_config['url'],
                         prompt, variable_values, body, None, None, False, error_str)
        fail_count += 1

        # Show error immediately (tqdm handles clearing the line)
        if progress_bar:
            progress_bar.write(f"❌ {model_config['name']}: {error_str[:80]}")
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        # Retry ANY failure as requested
        raise`}generateMainFunction(t){return`def parse_args():
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
        # Load data from SQLite
        df = pd.read_sql_query("SELECT * FROM results ORDER BY timestamp", f"sqlite:///{db_file}")

        if df.empty:
            print("⚠️  No results to export")
            return

        # Keep JSON columns as JSON strings for cleaner export
        # Don't expand them into hundreds of columns

        # Export based on format
        if output_format == "csv":
            df.to_csv(output_file, index=False)
        elif output_format == "tsv":
            df.to_csv(output_file, sep='\\t', index=False)
        elif output_format == "json":
            df.to_json(output_file, orient='records', indent=2)
        elif output_format == "jsonl":
            df.to_json(output_file, orient='records', lines=True)
        elif output_format == "excel":
            df.to_excel(output_file, index=False, engine='openpyxl')
        elif output_format == "parquet":
            df.to_parquet(output_file, index=False)

        file_size = Path(output_file).stat().st_size
        print(f"✅ Exported {len(df)} rows to {output_file} ({file_size:,} bytes)")

        # Show quick summary
        if len(df) > 0:
            success_rate = (df['success'].sum() / len(df) * 100) if 'success' in df.columns else 0
            print(f"   Success rate: {success_rate:.1f}% ({df['success'].sum() if 'success' in df.columns else 0}/{len(df)})")

    except Exception as e:
        print(f"❌ Export failed: {e}")
        sys.exit(1)

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

    for model in MODELS:
        ${t.type==="template"?`# Create all combinations of variable values
        var_names = list(VARIABLES.keys())
        var_value_lists = [VARIABLES[name] for name in var_names]

        for combination_idx, combination in enumerate(itertools.product(*var_value_lists)):
            # Build prompt by replacing all variables
            prompt = PROMPT_TEMPLATE
            variable_values = {}

            for var_name, value in zip(var_names, combination):
                prompt = prompt.replace(f"{{{{{var_name}}}}}", value)
                variable_values[var_name] = value

            task_id = f"{model['name']}_combo{combination_idx}"
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
        await db.close()
        return

    # Run the API calls with rate limiting
    print(f"\\n🚀 Running {remaining} API calls...")
    print(f"   Rate limits: {args.concurrent} concurrent, {args.rate_limit} per second\\n")

    # Create progress bar
    from tqdm.asyncio import tqdm
    progress_bar = tqdm(total=remaining, desc="API Calls", unit="call")

    async with httpx.AsyncClient() as client:
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

    cursor = await db.execute('''
        SELECT model_config_name,
               COUNT(*) as total,
               SUM(CASE WHEN success THEN 1 ELSE 0 END) as successful
        FROM results
        GROUP BY model_config_name
    ''')

    async for row in cursor:
        model, total, successful = row
        rate = (successful/total*100) if total > 0 else 0
        status = "✅" if rate == 100 else "⚠️" if rate > 0 else "❌"
        print(f"{status} {model}: {successful}/{total} ({rate:.0f}%)")

    print(f"\\n📊 View results: sqlite3 {db_file}")
    print("   Example: SELECT * FROM results WHERE success = 0;")

    await db.close()

    # Export results to specified format
    output_file = get_output_filename(args, db_file)
    await export_results(db_file, args.output, output_file)`}generateExecutor(){return`# === RUN IT ===
if __name__ == "__main__":
    asyncio.run(main())`}}function N(u){switch(u){case"simple":return new S;case"production":return new O;case"minimal":case"basic":case"reproduction":case"analysis":return d.info(`Legacy template '${u}' requested, using 'simple' instead`),new S;default:return d.warn(`Unknown template: ${u}, defaulting to 'simple'`),new S}}function q(){return[new S().getTemplate(),new O().getTemplate()]}class F{async generateScript(t,r={}){const s=Date.now();d.info("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:t,template:r.template||"minimal",startTime:s});try{d.info("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:t});const e=await M.loadTrialForExport(t);if(!e.ok){const T=e.error;return{ok:!1,error:new E("GENERATION_FAILED",`Failed to load trial data: ${T.message}`,{trialId:t,originalError:T})}}const{trial:a,apiCalls:o}=e.value,n=this.validateCodeGenOptions(r);if(!n.isValid)return{ok:!1,error:new E("INVALID_FIELDS",`Code generation validation failed: ${n.errors.join(", ")}`,{errors:n.errors})};const i=r.template||"minimal";d.info("EXPORT_DEBUG: PYTHON_GENERATION GETTING_TEMPLATE",{templateId:i});const l=N(i),p=l.getTemplate();d.info("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{templateId:i,apiCallCount:o.length});const _=Date.now(),c=l.generateScript(a,o,{includeComments:r.includeComments!==!1});d.info("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-_,codeLength:c.length,estimatedBytes:A(c)});const v=Date.now()-s,f={filename:this.generateScriptFilename(a.name,i),mimeType:"text/x-python",data:c,metadata:{trialName:a.name,trialId:a.id,exportDate:new Date,callCount:o.length,fieldCount:0,format:"python",estimatedSizeBytes:A(c)},template:i,pythonVersion:p.pythonVersion,requiredPackages:this.extractRequiredPackages(p,r),codeLength:c.length,generationTimeMs:v};return d.info("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:t,templateId:i,filename:f.filename,codeLength:f.codeLength,generationTimeMs:f.generationTimeMs,requiredPackages:f.requiredPackages}),{ok:!0,value:f}}catch(e){const a=e instanceof Error?e:new Error(String(e));return d.info("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",a,{trialId:t,template:r.template||"minimal",generationTimeMs:Date.now()-s}),{ok:!1,error:new E("GENERATION_FAILED",`Python script generation failed: ${a.message}`,{trialId:t,options:r,originalError:e,generationTimeMs:Date.now()-s})}}}getAvailableTemplates(){return q()}validateCodeGenOptions(t){const r=[],s=[];if(t.template){const e=this.getAvailableTemplates().map(a=>a.id);e.includes(t.template)||r.push(`Invalid template: ${t.template}. Available templates: ${e.join(", ")}`)}if(t.pythonVersion){const e=["3.8","3.9","3.10","3.11"];e.includes(t.pythonVersion)||s.push(`Python version ${t.pythonVersion} not explicitly supported. Supported versions: ${e.join(", ")}`)}if(t.includeVisualization){const e=t.template||"minimal";N(e).getTemplate().supportsVisualization||s.push(`Template '${e}' does not support built-in visualization. You can add your own visualization code to the exported script.`)}return{isValid:r.length===0,errors:r,warnings:s}}generateScriptFilename(t,r){const s=t.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",e=r==="minimal"?"":`_${r}`,a=new Date().toISOString().split("T")[0];return`${s}${e}_${a}.py`}extractRequiredPackages(t,r){return["json","requests","itertools","csv"]}}const D=new F;let w=null;async function B(){return w||(w=(await L(async()=>{const{default:u}=await import("./jszip.min-nqt1oJi1.js").then(t=>t.j);return{default:u}},__vite__mapDeps([0,1,2,3,4]))).default),w}class ${constructor(){k(this,"trialBundleService",new j)}async exportBundle(t,r){try{d.info("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:t,bundleType:r.bundleType});const s=await D.generateScript(t,{template:r.template||"simple",includeComments:r.includeComments!==!1});if(!s.ok)return{ok:!1,error:new E("GENERATION_FAILED",s.error?.message||"Failed to generate Python script")};if(r.bundleType==="script-only")return{ok:!0,value:{zipBlob:new Blob([s.value.data],{type:"text/x-python"}),filename:s.value.filename,sizeBytes:s.value.metadata.estimatedSizeBytes,contents:["experiment.py"]}};const e=await B(),a=new e,o=[];a.file("experiment.py",s.value.data),o.push("experiment.py");const n=await this.trialBundleService.exportTrialBundle(t,{includeResults:!0,includeApiCalls:!0,skipDownload:!0});if(n.ok?(a.file("trial_config.json",JSON.stringify(n.value.bundle,null,2)),o.push("trial_config.json")):d.warn("Failed to export trial bundle:",n.error),r.bundleType==="script-config-data"){const v=a.folder("data"),b=await R.getAvailableFields(t);let f=[];if(b.ok){const g=b.value.standardFields.map(m=>m.id).filter(m=>m!=="parameters"&&m!=="variables"),y=b.value.parameterFields.map(m=>m.id),h=(b.value.variableFields||[]).filter(m=>!m.id.startsWith("source_")).map(m=>m.id);f=[...g,...y,...h],d.info("EXPORT_DEBUG: REPRO_BUNDLE using all fields",{total:f.length,standard:g.length,params:y.length,vars:h.length})}else d.warn("Failed to get available fields, using defaults");const T=[{format:"csv",filename:"results.csv"},{format:"excel",filename:"results.xlsx"},{format:"jsonl",filename:"results.jsonl"}];for(const{format:g,filename:y}of T){const h=await R.exportTrialData(t,{format:g,fields:f.length>0?f:void 0,includeHeaders:!0,addBOM:g==="csv"||g==="excel"});if(h.ok){if(g==="excel"&&typeof h.value.data=="string"){const m=atob(h.value.data),P=new Uint8Array(m.length);for(let x=0;x<m.length;x++)P[x]=m.charCodeAt(x);v.file(y,P)}else v.file(y,h.value.data);o.push(`data/${y}`)}else d.warn(`Failed to export ${g}:`,h.error)}}const i=this.generateReadme(r.bundleType,s.value.metadata.trialName);a.file("README.md",i),o.push("README.md");const l=await a.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}),p=new Date().toISOString().split("T")[0].replace(/-/g,""),_=r.bundleType==="script-config-data"?"_complete":"_config",c=`${s.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_repro${_}_${p}.zip`;return{ok:!0,value:{zipBlob:l,filename:c,sizeBytes:l.size,contents:o}}}catch(s){return d.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",s),{ok:!1,error:new E("GENERATION_FAILED",s instanceof Error?s.message:"Unknown error creating bundle")}}}generateReadme(t,r){const s=new Date().toISOString();let e="";switch(t){case"script-config":e="\n## Contents\n- `experiment.py` - Minimal Python script to reproduce the experiment\n- `trial_config.json` - Complete trial configuration including templates, variables, and model settings\n";break;case"script-config-data":e="\n## Contents\n- `experiment.py` - Minimal Python script to reproduce the experiment  \n- `trial_config.json` - Complete trial configuration\n- `data/results.csv` - Full experimental results in CSV format\n- `data/results.xlsx` - Full experimental results in Excel format\n- `data/results.jsonl` - Full experimental results in JSONL format (one JSON object per line)\n";break}return`# Reproducibility Bundle: ${r}

Generated: ${s}

${e}

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
