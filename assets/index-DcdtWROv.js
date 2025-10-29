const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jszip.min-C0L9SgBO.js","assets/ui-vendor-BXvbAVk1.js","assets/vue-vendor--FHcN8mI.js","assets/utils-vendor-C2jMmoQd.js","assets/data-vendor-BRSVhGEn.js"])))=>i.map(i=>d[i]);
var N=Object.defineProperty;var I=(f,e,a)=>e in f?N(f,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[e]=a;var A=(f,e,a)=>I(f,typeof e!="symbol"?e+"":e,a);import{l as g,_ as M}from"./index-DJg1rZ6Y.js";import{t as L,E,g as k,d as R}from"./TrialsView-DvQcdVRy.js";import{TrialBundleExportService as F}from"./trial-bundle.service-BhZg3Xbb.js";import"./vue-vendor--FHcN8mI.js";import"./ui-vendor-BXvbAVk1.js";import"./utils-vendor-C2jMmoQd.js";import"./tauri-vendor-1uBLmS9u.js";import"./toast-C8a3oI2o.js";import"./useCostEstimation-BZl_IkcR.js";import"./useModels-BuA3dIOx.js";import"./useLiveQuery-C6RixDNq.js";import"./ParserSelector-CgLbZxqW.js";import"./parser-C_4vDFR1.js";import"./stream-manager-CvLhIrj4.js";import"./controller-BMnhXVYb.js";import"./common-Brb0k-N6.js";import"./index-BRn9axaC.js";import"./id-generator-Cv_Imc0S.js";import"./useTrialCommands-DtYj3Nfk.js";import"./repository-BQKDR4ff.js";import"./useTrials-Db6-e3-V.js";import"./repository-TaQzu-io.js";import"./useHeatmapStyling-bPN7fji7.js";import"./sanitization-Z1mFM_1P.js";import"./data-vendor-BRSVhGEn.js";class P{getTemplate(){return{id:"simple",name:"Simple Script (Beginner-Friendly)",description:"Simple Python script with CSV/JSON output, basic retries, and clear progress. Best for beginners and quick tests.",pythonVersion:"3.8",requiredImports:["json","requests","jmespath","os","time","datetime"],templateCode:"SIMPLE_TEMPLATE",supportsAnalysis:!1,supportsVisualization:!1}}generateScript(e,a,s={}){const{includeComments:r=!0}=s,o=this.buildResolvedConfigurations(e),t=this.discoverParameterColumns(o);return[this.generateHeader(e,r),this.generateImports(),this.generateSettings(e,r),this.generateParameterColumns(t,r),this.generateModelConfigs(o,r),this.generateFunctions(),this.generateMainFunction(e,t),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const a=[],s=new Map,r=new Map;for(const o of e.configurations){const t=o.modelSnapshot?.displayName||o.modelId;s.set(t,(s.get(t)||0)+1),r.set(t,0)}for(let o=0;o<e.configurations.length;o++){const t=e.configurations[o],n=t.providerSnapshot;if(!n)continue;const i=n.api?.baseUrl||"https://api.example.com",d=n.api?.endpoint||"/v1/api",c={"Content-Type":"application/json",...n.headers};n.auth?.type==="bearer"?c.Authorization="Bearer {{API_KEY}}":n.auth?.type==="header"&&n.auth.header&&(c[n.auth.header]="{{API_KEY}}");const l={model:t.modelId},p=n.bodyConstruction;p?.promptField?p.wrapAsArray?l[p.promptField]=[{role:p.messageRole||"user",content:"{{PROMPT}}"}]:l[p.promptField]="{{PROMPT}}":l.prompt="{{PROMPT}}",Object.assign(l,t.parameters);const _=t.provider.split("-")[0],u=t.modelSnapshot?.displayName||t.modelId;let m=u;if(s.get(u)>1){const h=r.get(u)+1;r.set(u,h),m=`${u} [Config ${h}]`}const b=this.getExtractPaths(t);a.push({config_index:o,name:u,display_name:m,provider:_,url:i+d,headers:c,body:l,parameters:t.parameters||{},extract_paths:b.contentPaths,reasoning_paths:b.reasoningPaths})}return a}getExtractPaths(e){const a=e.providerSnapshot;if(!a)return{contentPaths:["response"],reasoningPaths:[]};const s=a.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const o=[];r.contentPath&&o.push(r.contentPath),r.fallbackPaths&&o.push(...r.fallbackPaths);const t=[];return r.reasoningPath&&t.push(r.reasoningPath),r.reasoningFallbackPaths&&t.push(...r.reasoningFallbackPaths),{contentPaths:o.length>0?o:["response"],reasoningPaths:t}}discoverParameterColumns(e){const a=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>a.add(r));return Array.from(a).sort()}generateParameterColumns(e,a){const s=a?`# All unique parameters found across model configurations
`:"",r=JSON.stringify(e);return`${s}PARAMETER_COLUMNS = ${r}`}generateHeader(e,a){const s="#!/usr/bin/env python3";return a?`${s}
"""
Simple API Testing Script
Requirements: pip install requests jmespath
"""`:s}generateImports(){return`import json
import time
import requests
import jmespath
from datetime import datetime
import os
import sys
import argparse`}generateSettings(e,a){const s=a?`# ============================================
# YOUR EXPERIMENT SETTINGS
# ============================================

`:"",r=new Set;for(const i of e.configurations){const d=i.provider.split("-")[0];r.add(d)}const o=[];for(const i of r)if(i==="ollama")o.push(`    "${i}": "",  # Local, no key needed`);else{const d=`${i.toUpperCase()}_API_KEY`;o.push(`    "${i}": os.getenv("${d}", ""),  # Get from environment or set here`)}let t="";if(e.type==="template"&&e.templateConfig){const{template:i,variables:d}=e.templateConfig,c={};for(const[p,_]of Object.entries(d))"snapshot"in _&&_.snapshot?c[p]=_.snapshot.items.map(u=>u.value):_.type==="value"&&_.values&&(c[p]=[..._.values]);const l=JSON.stringify(c,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");t=`
# What prompt to test (you can use {{variables}} that get replaced)
PROMPT_TEMPLATE = ${JSON.stringify(i)}

# Variables to test (creates all combinations)
VARIABLES = ${l}`}else t=`
# Single prompt test
PROMPT = "Your test prompt here"`;const n=e.repeatCount||e.repeatConfig?.callsPerPrompt||1;return t+=`
REPEAT_COUNT = ${n}  # Number of times to repeat each test`,`${s}# Your API Keys (leave empty for providers you're not using)
# The script will first check environment variables, then use these values if set

API_KEYS = {
${o.join(`,
`)}
}

# You can override environment variables by setting keys here directly
# Example: API_KEYS["openai"] = "sk-..."
${t}`}generateModelConfigs(e,a){const s=a?`# ============================================
# MODELS TO TEST (exported from Auditomatic)
# ============================================

`:"",r=e.map(t=>({config_index:t.config_index,name:t.name,display_name:t.display_name,provider:t.provider,url:t.url,headers:t.headers,body:t.body,parameters:t.parameters,extract_paths:t.extract_paths,reasoning_paths:t.reasoning_paths})),o=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${o}`}generateFunctions(){return`# ============================================
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

        # Extract the actual answer using jmespath
        answer = None
        for path in model_config.get('extract_paths', []):
            try:
                result_raw = jmespath.search(path, result)
                if result_raw is not None:
                    # Unwrap arrays - jmespath filters return lists
                    if isinstance(result_raw, list):
                        answer = ' '.join(str(a) for a in result_raw if a) if result_raw else None
                    else:
                        answer = result_raw
                    if answer:
                        break
            except Exception:
                continue

        # Extract reasoning using jmespath
        reasoning = None
        for path in model_config.get('reasoning_paths', []):
            try:
                reasoning_raw = jmespath.search(path, result)
                if reasoning_raw is not None:
                    # Unwrap arrays - jmespath filters return lists
                    if isinstance(reasoning_raw, list):
                        reasoning = ' '.join(str(r) for r in reasoning_raw if r) if reasoning_raw else None
                    else:
                        reasoning = reasoning_raw
                    if reasoning:
                        break
            except Exception:
                continue

        return {
            'success': True if answer is not None else False,
            'response': answer,
            'reasoning': reasoning,
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
        }`}generateMainFunction(e,a){const s=e.type==="template";return`def main():
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
    ${s?`import itertools
    all_combinations = list(itertools.product(*[VARIABLES[key] for key in VARIABLES]))
    total_tests = len(MODELS) * len(all_combinations) * REPEAT_COUNT`:"total_tests = len(MODELS) * REPEAT_COUNT"}

    print(f"Running {total_tests} total tests${s?" ({len(MODELS)} models × {len(all_combinations)} combinations)":""}")
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

        ${s?`for combo_idx, combination in enumerate(all_combinations):
            # Repeat each combination REPEAT_COUNT times
            for repeat_idx in range(REPEAT_COUNT):
                # Calculate global test index
                global_test_idx = (model_idx * len(all_combinations) + combo_idx) * REPEAT_COUNT + repeat_idx

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
                repeat_suffix = f" (repeat {repeat_idx + 1}/{REPEAT_COUNT})" if REPEAT_COUNT > 1 else ""
                print(f"[{len(results) + 1}/{total_tests}] Testing {model['name']} with {variable_values}{repeat_suffix}")

                # Make the API call
                result = make_api_call(model, prompt, timeout=args.timeout)

                # Save the result with request/response details
                results.append({
                    'config_index': model['config_index'],
                    'model': model['display_name'],
                    'repeat_index': repeat_idx,
                    'parameters': model['parameters'],
                    'variables': variable_values,
                    'prompt': prompt,
                    'request_payload': result.get('request_body'),  # The actual JSON sent
                    'response_payload': result.get('full_response'),  # The full JSON response
                    'success': result['success'],
                    'extracted_answer': result.get('response'),  # The extracted answer
                    'reasoning': result.get('reasoning'),  # The reasoning/thinking content
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
                    json.dump(results, f, indent=2)`:`# Repeat each test REPEAT_COUNT times
        for repeat_idx in range(REPEAT_COUNT):
            # Skip if we already completed this test
            global_test_idx = model_idx * REPEAT_COUNT + repeat_idx
            if global_test_idx < tests_completed:
                model_skipped += 1
                continue

            prompt = PROMPT
            variable_values = {}

            test_counter += 1
            # Show progress
            repeat_suffix = f" (repeat {repeat_idx + 1}/{REPEAT_COUNT})" if REPEAT_COUNT > 1 else ""
            print(f"[{len(results) + 1}/{total_tests}] Testing {model['name']}{repeat_suffix}")

            # Make the API call
            result = make_api_call(model, prompt, timeout=args.timeout)

            # Save the result with request/response details
            results.append({
                'config_index': model['config_index'],
                'model': model['display_name'],
                'repeat_index': repeat_idx,
                'parameters': model['parameters'],
                'variables': variable_values,
                'prompt': prompt,
                'request_payload': result.get('request_body'),  # The actual JSON sent
                'response_payload': result.get('full_response'),  # The full JSON response
                'success': result['success'],
                'extracted_answer': result.get('response'),  # The extracted answer
                'reasoning': result.get('reasoning'),  # The reasoning/thinking content
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
            variable_names = list(${s?"VARIABLES":"{}"}.keys())
            parameter_names = PARAMETER_COLUMNS
            headers = ['config_index', 'model', 'repeat_index'] + [f'param_{p}' for p in parameter_names] + variable_names + ['prompt', 'request_payload', 'response_payload', 'extracted_answer', 'reasoning', 'success', 'error']

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
                    r.get('repeat_index', 0),  # Repeat index
                    *[r['parameters'].get(p, '') for p in parameter_names],  # Each parameter in its own column
                    *[r['variables'].get(v, '') for v in variable_names],  # Each variable in its own column
                    r['prompt'],
                    request_json,  # Full request JSON
                    response_json,  # Full response JSON
                    r.get('extracted_answer', ''),  # The extracted answer
                    r.get('reasoning', ''),  # The reasoning/thinking content
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
    main()`}}class O{getTemplate(){return{id:"production",name:"Production Script (Professional)",description:"Production-grade Python script with SQLite persistence, professional retries, progress bars, and multiple export formats. Best for research and large experiments.",pythonVersion:"3.8",requiredImports:["httpx","aiometer","aiosqlite","jmespath","tenacity","tqdm","pandas"],templateCode:"PRODUCTION_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,a,s={}){const{includeComments:r=!0}=s,o=this.buildResolvedConfigurations(e),t=this.discoverParameterColumns(o);return[this.generateHeader(e,r),this.generateImports(),this.generateSettings(e,r),this.generateParameterColumns(t,r),this.generateModelConfigs(o,r),this.generateDatabaseFunctions(t),this.generateApiCallFunction(),this.generateMainFunction(e),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const a=[],s=new Map,r=new Map;for(const o of e.configurations){const t=o.modelSnapshot?.displayName||o.modelId;s.set(t,(s.get(t)||0)+1),r.set(t,0)}for(let o=0;o<e.configurations.length;o++){const t=e.configurations[o],n=t.providerSnapshot;if(!n)continue;const i=n.api?.baseUrl||"https://api.example.com",d=n.api?.endpoint||"/v1/api",c={"Content-Type":"application/json",...n.headers};n.auth?.type==="bearer"?c.Authorization="Bearer {{API_KEY}}":n.auth?.type==="header"&&n.auth.header&&(c[n.auth.header]="{{API_KEY}}");const l={model:t.modelId},p=n.bodyConstruction;p?.promptField?p.wrapAsArray?l[p.promptField]=[{role:p.messageRole||"user",content:"{{PROMPT}}"}]:l[p.promptField]="{{PROMPT}}":l.prompt="{{PROMPT}}",Object.assign(l,t.parameters);const _=t.provider.split("-")[0],u=t.modelSnapshot?.displayName||t.modelId;let m=u;if(s.get(u)>1){const h=r.get(u)+1;r.set(u,h),m=`${u} [Config ${h}]`}const b=this.getExtractPaths(t);a.push({config_index:o,name:u,display_name:m,provider:_,url:i+d,headers:c,body:l,parameters:t.parameters||{},extract_paths:b.contentPaths,reasoning_paths:b.reasoningPaths})}return a}getExtractPaths(e){const a=e.providerSnapshot;if(!a)return{contentPaths:["response"],reasoningPaths:[]};const s=a.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const o=[];r.contentPath&&o.push(r.contentPath),r.fallbackPaths&&o.push(...r.fallbackPaths);const t=[];return r.reasoningPath&&t.push(r.reasoningPath),r.reasoningFallbackPaths&&t.push(...r.reasoningFallbackPaths),{contentPaths:o.length>0?o:["response"],reasoningPaths:t}}discoverParameterColumns(e){const a=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>a.add(r));return Array.from(a).sort()}generateParameterColumns(e,a){const s=a?`# === DISCOVERED PARAMETERS ===
# These are all unique parameters found across model configurations
`:"",r=JSON.stringify(e);return`${s}PARAMETER_COLUMNS = ${r}`}generateHeader(e,a){const s="#!/usr/bin/env python3";return a?`${s}
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
import threading
from datetime import datetime
from tenacity import retry, stop_after_attempt, wait_exponential
import functools
import pandas as pd
from pathlib import Path`}generateSettings(e,a){const s=a?`# === WHAT WE'RE TESTING ===
`:"";let r="";if(e.type==="template"&&e.templateConfig){const{template:t,variables:n}=e.templateConfig,i={};for(const[c,l]of Object.entries(n))"snapshot"in l&&l.snapshot?i[c]=l.snapshot.items.map(p=>p.value):l.type==="value"&&l.values&&(i[c]=[...l.values]);const d=JSON.stringify(i,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");r=`PROMPT_TEMPLATE = ${JSON.stringify(t)}
VARIABLES = ${d}`}else r='PROMPT = "Your test prompt here"';const o=e.repeatCount||e.repeatConfig?.callsPerPrompt||1;return r+=`
REPEAT_COUNT = ${o}  # Number of times to repeat each test`,`${s}${r}`}generateModelConfigs(e,a){const s=a?`
# === MODELS TO TEST ===
`:"",r=e.map(t=>({config_index:t.config_index,name:t.name,display_name:t.display_name,provider:t.provider,url:t.url,headers:t.headers,body:t.body,parameters:t.parameters,extract_paths:t.extract_paths,reasoning_paths:t.reasoning_paths})),o=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${o}`}generateDatabaseFunctions(e){return`# === DATABASE ===
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
            repeat_index INTEGER,
            prompt TEXT,
            {parameter_columns},
            {variable_columns},
            request_payload TEXT,
            response TEXT,
            extracted TEXT,
            reasoning TEXT,
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

async def save_result(db, task_id, model_config, repeat_index, prompt, variable_values, request_payload, response, extracted, reasoning, success, error):
    """Save a result to the database."""
    # Build dynamic column list and values
    base_columns = ['id', 'config_index', 'model_display_name', 'model', 'endpoint', 'repeat_index', 'prompt']
    parameter_columns = [f'param_{p}' for p in PARAMETER_COLUMNS]
    variable_columns = list(VARIABLES.keys())
    end_columns = ['request_payload', 'response', 'extracted', 'reasoning', 'success', 'error', 'timestamp']

    all_columns = base_columns + parameter_columns + variable_columns + end_columns
    placeholders = ', '.join(['?' for _ in all_columns])

    base_values = [task_id, model_config['config_index'], model_config['display_name'], model_config['name'], model_config['url'], repeat_index, prompt]
    # JSON-stringify any dict/list parameter values for SQLite compatibility
    parameter_values = [json.dumps(v) if isinstance(v, (dict, list)) else v for v in [model_config['parameters'].get(p, '') for p in PARAMETER_COLUMNS]]
    variable_values_list = [variable_values.get(var_name, '') for var_name in variable_columns]
    end_values = [
        json.dumps(request_payload) if request_payload else None,
        json.dumps(response) if response else None,
        extracted, reasoning, success, error, datetime.now().isoformat()
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
async def _call_api_with_retry(client, url, headers, body, extract_paths, model_name, model_config):
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
        extracted_raw = jmespath.search(path, response_data)
        if extracted_raw is not None:
            # Unwrap arrays - jmespath filters return lists
            if isinstance(extracted_raw, list):
                # Join array elements or take first non-empty
                extracted = ' '.join(str(e) for e in extracted_raw if e) if extracted_raw else None
            else:
                extracted = extracted_raw
            if extracted:
                break

    # Try to extract reasoning if paths are provided
    reasoning = None
    reasoning_paths = model_config.get('reasoning_paths', [])
    if reasoning_paths:
        for path in reasoning_paths:
            reasoning_raw = jmespath.search(path, response_data)
            if reasoning_raw is not None:
                # Unwrap arrays - jmespath filters return lists
                if isinstance(reasoning_raw, list):
                    # Join array elements or take first non-empty
                    reasoning = ' '.join(str(r) for r in reasoning_raw if r) if reasoning_raw else None
                else:
                    reasoning = reasoning_raw
                if reasoning:
                    break

    success = extracted is not None
    return {
        'success': success,
        'response_data': response_data,
        'extracted': str(extracted) if extracted else None,
        'reasoning': str(reasoning) if reasoning else None,
        'error': None if success else f"Could not extract answer. Tried: {', '.join(attempted_paths)}",
        'attempted_paths': attempted_paths
    }

async def call_api(client, db, task_id, model_config, repeat_index, prompt, variable_values):
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
            model_config['name'],
            model_config
        )

        # Save the result to database
        await save_result(
            db, task_id, model_config, repeat_index, prompt, variable_values,
            body, result['response_data'], result['extracted'], result.get('reasoning'),
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
        await save_result(db, task_id, model_config, repeat_index, prompt, variable_values, body, None, None, None, False, error_str)

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

            # Repeat each combination REPEAT_COUNT times
            for repeat_idx in range(REPEAT_COUNT):
                # Create task ID using model index + content hash + repeat index
                # Model index ensures different configs of same model are unique
                content_key = json.dumps(variable_values, sort_keys=True)
                stable_hash = hashlib.sha256(content_key.encode()).hexdigest()[:8]
                task_id = f"m{model_idx}_{stable_hash}_r{repeat_idx}"
                tasks.append((task_id, model, repeat_idx, prompt, variable_values))`:`# Repeat each test REPEAT_COUNT times
        prompt = PROMPT
        for repeat_idx in range(REPEAT_COUNT):
            task_id = f"{model['name']}_single_r{repeat_idx}"
            tasks.append((task_id, model, repeat_idx, prompt, {}))`}

    # Check how many we already completed
    already_completed = 0
    for task_id, _, _, _, _ in tasks:
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
            for task_id, model, repeat_idx, prompt, variable_values in tasks:
                if not await already_done(db, task_id):
                    api_calls.append(
                        functools.partial(call_api, client, db, task_id, model, repeat_idx, prompt, variable_values)
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
    asyncio.run(main())`}}function C(f){switch(f){case"simple":return new P;case"production":return new O;case"minimal":case"basic":case"reproduction":case"analysis":return g.info(`Legacy template '${f}' requested, using 'simple' instead`),new P;default:return g.warn(`Unknown template: ${f}, defaulting to 'simple'`),new P}}function q(){return[new P().getTemplate(),new O().getTemplate()]}class j{async generateScript(e,a={}){const s=Date.now();g.info("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:e,template:a.template||"minimal",startTime:s});try{g.info("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:e});const r=await L.loadTrialForExport(e);if(!r.ok){const b=r.error;return{ok:!1,error:new E("GENERATION_FAILED",`Failed to load trial data: ${b.message}`,{trialId:e,originalError:b})}}const{trial:o,apiCalls:t}=r.value,n=this.validateCodeGenOptions(a);if(!n.isValid)return{ok:!1,error:new E("INVALID_FIELDS",`Code generation validation failed: ${n.errors.join(", ")}`,{errors:n.errors})};const i=a.template||"minimal";g.info("EXPORT_DEBUG: PYTHON_GENERATION GETTING_TEMPLATE",{templateId:i});const d=C(i),c=d.getTemplate();g.info("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{templateId:i,apiCallCount:t.length});const l=Date.now(),p=d.generateScript(o,t,{includeComments:a.includeComments!==!1});g.info("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-l,codeLength:p.length,estimatedBytes:k(p)});const _=Date.now()-s,m={filename:this.generateScriptFilename(o.name,i),mimeType:"text/x-python",data:p,metadata:{trialName:o.name,trialId:o.id,exportDate:new Date,callCount:t.length,fieldCount:0,format:"python",estimatedSizeBytes:k(p)},template:i,pythonVersion:c.pythonVersion,requiredPackages:this.extractRequiredPackages(c,a),codeLength:p.length,generationTimeMs:_};return g.info("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:e,templateId:i,filename:m.filename,codeLength:m.codeLength,generationTimeMs:m.generationTimeMs,requiredPackages:m.requiredPackages}),{ok:!0,value:m}}catch(r){const o=r instanceof Error?r:new Error(String(r));return g.info("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",o,{trialId:e,template:a.template||"minimal",generationTimeMs:Date.now()-s}),{ok:!1,error:new E("GENERATION_FAILED",`Python script generation failed: ${o.message}`,{trialId:e,options:a,originalError:r,generationTimeMs:Date.now()-s})}}}getAvailableTemplates(){return q()}validateCodeGenOptions(e){const a=[],s=[];if(e.template){const r=this.getAvailableTemplates().map(o=>o.id);r.includes(e.template)||a.push(`Invalid template: ${e.template}. Available templates: ${r.join(", ")}`)}if(e.pythonVersion){const r=["3.8","3.9","3.10","3.11"];r.includes(e.pythonVersion)||s.push(`Python version ${e.pythonVersion} not explicitly supported. Supported versions: ${r.join(", ")}`)}if(e.includeVisualization){const r=e.template||"minimal";C(r).getTemplate().supportsVisualization||s.push(`Template '${r}' does not support built-in visualization. You can add your own visualization code to the exported script.`)}return{isValid:a.length===0,errors:a,warnings:s}}generateScriptFilename(e,a){const s=e.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",r=a==="minimal"?"":`_${a}`,t=new Date().toISOString().replace("T","_").replace(/:/g,"-").split(".")[0];return`${s}${r}_${t}.py`}extractRequiredPackages(e,a){return["json","requests","itertools","csv"]}}const D=new j;let w=null;async function U(){return w||(w=(await M(async()=>{const{default:f}=await import("./jszip.min-C0L9SgBO.js").then(e=>e.j);return{default:f}},__vite__mapDeps([0,1,2,3,4]))).default),w}class B{constructor(){A(this,"trialBundleService",new F)}async exportBundle(e,a){try{g.info("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:e,bundleType:a.bundleType});const s=await D.generateScript(e,{template:a.template||"simple",includeComments:a.includeComments!==!1});if(!s.ok)return{ok:!1,error:new E("GENERATION_FAILED",s.error?.message||"Failed to generate Python script")};if(a.bundleType==="script-only")return{ok:!0,value:{zipBlob:new Blob([s.value.data],{type:"text/x-python"}),filename:s.value.filename,sizeBytes:s.value.metadata.estimatedSizeBytes,contents:["experiment.py"]}};const r=await U(),o=new r,t=[];o.file("experiment.py",s.value.data),t.push("experiment.py");const n=await this.trialBundleService.exportTrialBundle(e,{includeResults:!0,includeApiCalls:!0,skipDownload:!0});if(n.ok?(o.file("trial_config.json",JSON.stringify(n.value.bundle,null,2)),t.push("trial_config.json")):g.warn("Failed to export trial bundle:",n.error),a.bundleType==="script-config-data"){const _=o.folder("data"),u=await R.getAvailableFields(e);let m=[];if(u.ok){const h=u.value.standardFields.map(y=>y.id).filter(y=>y!=="parameters"&&y!=="variables"),v=u.value.parameterFields.map(y=>y.id),x=(u.value.variableFields||[]).filter(y=>!y.id.startsWith("source_")).map(y=>y.id);m=[...h,...v,...x],g.info("EXPORT_DEBUG: REPRO_BUNDLE using all fields",{total:m.length,standard:h.length,params:v.length,vars:x.length})}else g.warn("Failed to get available fields, using defaults");const b=[{format:"csv",filename:"results.csv"},{format:"excel",filename:"results.xlsx"},{format:"jsonl",filename:"results.jsonl"}];for(const{format:h,filename:v}of b){const x=await R.exportTrialData(e,{format:h,fields:m.length>0?m:void 0,includeHeaders:!0,addBOM:h==="csv"||h==="excel"});if(x.ok){if(h==="excel"&&typeof x.value.data=="string"){const y=atob(x.value.data),S=new Uint8Array(y.length);for(let T=0;T<y.length;T++)S[T]=y.charCodeAt(T);_.file(v,S)}else _.file(v,x.value.data);t.push(`data/${v}`)}else g.warn(`Failed to export ${h}:`,x.error)}}const i=this.generateReadme(a.bundleType,s.value.metadata.trialName,a.template||"simple");o.file("README.md",i),t.push("README.md");const d=await o.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}),c=new Date().toISOString().split("T")[0].replace(/-/g,""),l=a.bundleType==="script-config-data"?"_complete":"_config",p=`${s.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_repro${l}_${c}.zip`;return{ok:!0,value:{zipBlob:d,filename:p,sizeBytes:d.size,contents:t}}}catch(s){return g.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",s),{ok:!1,error:new E("GENERATION_FAILED",s instanceof Error?s.message:"Unknown error creating bundle")}}}generateReadme(e,a,s){const r=new Date().toISOString();let o="";switch(e){case"script-config":o=`## Contents
- \`experiment.py\` - Python script to reproduce the experiment (${s} template)
- \`trial_config.json\` - Complete trial configuration including templates, variables, and model settings
`;break;case"script-config-data":o=`## Contents
- \`experiment.py\` - Python script to reproduce the experiment (${s} template)
- \`trial_config.json\` - Complete trial configuration
- \`data/results.csv\` - Full experimental results in CSV format
- \`data/results.xlsx\` - Full experimental results in Excel format
- \`data/results.jsonl\` - Full experimental results in JSONL format (one JSON object per line)
`;break}const t=s==="production";return`# Reproducibility Bundle: ${a}

Generated: ${r}
Template: **${s}** (${t?"Production-grade with SQLite, retries, progress bars":"Simple beginner-friendly"})

${o}

---

${t?this.generateProductionReadme():this.generateSimpleReadme()}
`}generateSimpleReadme(){return`## Quick Start (Simple Template)

### 1. Install Dependencies

\`\`\`bash
pip install requests
\`\`\`

### 2. Set API Keys

Set your API keys as environment variables (recommended):

\`\`\`bash
export OPENAI_API_KEY="sk-..."
export ANTHROPIC_API_KEY="sk-ant-..."
export OPENROUTER_API_KEY="sk-or-..."
# Add any other providers your experiment uses
\`\`\`

Alternatively, you can edit the \`API_KEYS\` dictionary at the top of \`experiment.py\`.

### 3. Run the Experiment

\`\`\`bash
python experiment.py
\`\`\`

#### Available Options

- \`--timeout SECONDS\` - Set request timeout (default: 90 seconds)

\`\`\`bash
python experiment.py --timeout 120
\`\`\`

---

## Features

### ✅ Checkpoint & Resume
The script automatically saves progress to \`checkpoint.json\` after each test. If interrupted (Ctrl+C), run the script again and it will ask if you want to resume:

\`\`\`
📂 Found checkpoint with 15 completed tests
Resume from checkpoint? (y/n): y
✅ Resuming from test #16
\`\`\`

### ✅ Output Files

When complete, the script generates:
- \`results_YYYYMMDD_HHMMSS.json\` - Full results in JSON format with request/response payloads
- \`results_YYYYMMDD_HHMMSS.csv\` - Results in CSV format (opens in Excel)
  - Each parameter gets its own column (e.g., \`param_temperature\`, \`param_max_tokens\`)
  - Each variable gets its own column
  - Includes full request/response JSON in dedicated columns

### ✅ Basic Retry Logic
- Automatically retries once on temporary failures (429 rate limit, 500/502/503/504 server errors)
- Respects \`Retry-After\` headers from API responses
- Clear error messages for auth failures and other issues

### ✅ Beginner-Friendly
- Clear progress messages showing which model is being tested
- API key validation with helpful error messages
- Models with missing API keys are automatically skipped
- Simple, readable code that's easy to modify

---

## Understanding the Results

### CSV Columns
- \`config_index\` - Index of the model configuration (distinguishes duplicate model names with different settings)
- \`model\` - Model display name (e.g., "GPT-4 [Config 1]" if you have duplicate models)
- \`param_*\` - Individual parameter columns (e.g., \`param_temperature\`, \`param_top_p\`)
- Variable columns - Each variable in your template gets its own column
- \`prompt\` - The actual prompt sent to the API
- \`request_payload\` - Full JSON request body
- \`response_payload\` - Full JSON response from API
- \`extracted_answer\` - The extracted text answer
- \`success\` - True if extraction succeeded
- \`error\` - Error message if failed

### JSON Format
The JSON file contains an array of results with the same information, useful for programmatic analysis.

---

## Troubleshooting

### Missing API Keys
\`\`\`
⚠️  Warning: No API key for openai - GPT-4 will be skipped
\`\`\`
**Fix:** Set the environment variable or edit \`API_KEYS\` in the script

### Rate Limits
\`\`\`
⏸️  Rate limited, waiting 5 seconds...
\`\`\`
**Info:** The script automatically waits and retries once. If you hit rate limits frequently, wait a few minutes before running again.

### Timeouts
\`\`\`
❌ Failed: Request took too long (>90 seconds)
\`\`\`
**Fix:** Increase timeout with \`--timeout 180\`

### Extraction Failures
\`\`\`
❌ Failed: Could not extract answer from response
\`\`\`
**Info:** The API returned data but the script couldn't find the expected field. Check \`response_payload\` in the CSV/JSON to see what was returned.

---

## Tips

- **Start small:** Test with 1-2 models first before running your full experiment
- **Check credits:** Make sure you have sufficient API credits before large runs
- **Monitor costs:** Each API call costs money - review pricing for your providers
- **Interrupt safely:** Press Ctrl+C to stop - checkpoint saves after each test
- **Clean resume:** Delete \`checkpoint.json\` to start fresh
`}generateProductionReadme(){return`## Quick Start (Production Template)

### 1. Install Dependencies

**Required packages:**
\`\`\`bash
pip install httpx aiometer aiosqlite jmespath tenacity tqdm pandas
\`\`\`

**Optional packages** (for additional export formats):
\`\`\`bash
pip install openpyxl    # For Excel export
pip install pyarrow     # For Parquet export
\`\`\`

### 2. Set API Keys (Required)

API keys **must** be set as environment variables:

\`\`\`bash
export OPENAI_API_KEY="sk-..."
export ANTHROPIC_API_KEY="sk-ant-..."
export OPENROUTER_API_KEY="sk-or-..."
# Add any other providers your experiment uses
\`\`\`

The script checks all required keys upfront and will exit if any are missing.

### 3. Run the Experiment

**Basic usage:**
\`\`\`bash
python experiment.py
\`\`\`

**With concurrency and rate limiting:**
\`\`\`bash
python experiment.py --concurrent 10 --rate-limit 5.0
\`\`\`
This runs 10 API calls concurrently, with a maximum of 5 requests per second.

**With custom output format:**
\`\`\`bash
python experiment.py --output excel --concurrent 5
python experiment.py --output parquet --concurrent 5
\`\`\`

---

## Command-Line Options

| Option | Default | Description |
|--------|---------|-------------|
| \`--output\` / \`-o\` | \`csv\` | Output format: \`csv\`, \`tsv\`, \`json\`, \`jsonl\`, \`excel\`, \`parquet\` |
| \`--concurrent\` / \`-c\` | \`10\` | Number of concurrent API requests |
| \`--rate-limit\` / \`-r\` | \`5.0\` | Maximum requests per second |
| \`--timeout\` / \`-t\` | \`90\` | Request timeout in seconds |
| \`--output-file\` / \`-f\` | Auto | Custom output filename |
| \`--resume\` | Off | Resume from existing database |
| \`--db-file\` | Auto | Database file to use/resume from |

**Examples:**

\`\`\`bash
# Fast batch processing
python experiment.py --concurrent 20 --rate-limit 10.0

# Conservative (avoid rate limits)
python experiment.py --concurrent 3 --rate-limit 1.0

# Long-running API calls
python experiment.py --timeout 180

# Resume from previous run
python experiment.py --resume --db-file results_20250128_143022.db

# Export to specific format
python experiment.py --output excel --output-file my_results.xlsx
\`\`\`

---

## Features

### 🔥 Production-Grade Reliability

**Professional Retry Logic:**
- Up to 10 automatic retry attempts with exponential backoff (1s → 30s)
- Smart handling of rate limits (429) and server errors (500/502/503/504)
- Immediate failure on auth errors (401/403) - no wasted retries
- Detailed logging of retry attempts

**SQLite Persistence:**
- All results saved to SQLite database in real-time
- Atomic transactions ensure no data loss
- Query results with standard SQL tools
- Database survives crashes and interruptions

### ⚡ High Performance

**Concurrent Execution:**
- Run multiple API calls simultaneously with \`--concurrent\`
- Built-in rate limiting with \`--rate-limit\` to avoid throttling
- Smart task scheduling with aiometer

**Real-Time Progress:**
- Live progress bar showing completion status
- Success/failure counters updated in real-time
- Last tested model displayed
- ETA based on current rate

\`\`\`
API Calls: 45%|████████      | 450/1000 [03:25<04:11, ✓:445 ✗:5 last:GPT-4]
\`\`\`

### 💾 Multiple Export Formats

Choose your preferred output format:
- **CSV** - Opens in Excel, compatible with all tools
- **TSV** - Tab-separated, better for fields with commas
- **JSON** - Pretty-printed JSON array
- **JSONL** - One JSON object per line (streaming-friendly)
- **Excel** - Native .xlsx with proper formatting
- **Parquet** - Columnar format for big data tools

The database is always saved, export format is just for convenience.

### 🔄 Resume from Interruptions

Press Ctrl+C at any time. To resume:

\`\`\`bash
python experiment.py --resume --db-file results_20250128_143022.db
\`\`\`

The script will:
- Skip all previously successful tests
- Retry any previously failed tests
- Continue from where you left off
- Export with the updated results

### 📊 Smart Output Schema

**Dynamic columns based on your configuration:**
- Each parameter gets its own column: \`param_temperature\`, \`param_max_tokens\`, etc.
- Each variable gets its own column
- Full request/response payloads saved as JSON
- Extracted answers in dedicated column

**Example CSV structure:**
\`\`\`
config_index | model_display_name | param_temperature | param_max_tokens | variable1 | variable2 | extracted | success | error
\`\`\`

### 🎯 API Key Validation

The script validates all API keys upfront:

\`\`\`
🔑 Checking API keys...
✅ OPENAI_API_KEY: Found (enables 3 models)
✅ ANTHROPIC_API_KEY: Found (enables 2 models)
❌ Missing API keys for 1 providers:
   GOOGLE_API_KEY (required for 1 models)

🔧 Please set the missing API keys:
   export GOOGLE_API_KEY='your-key-here'
\`\`\`

### 📈 Detailed Summary

After completion, see results grouped by configuration:

\`\`\`
==================================================
📈 FINAL RESULTS
==================================================
[1] ✅ GPT-4: 100/100 (100%)
[2] ✅ Claude 3 Opus: 98/100 (98%)
[3] ⚠️  Claude 3 Sonnet [Config 1]: 95/100 (95%)
[4] ⚠️  Claude 3 Sonnet [Config 2]: 92/100 (92%)

📊 View results: sqlite3 results_20250128_143022.db
   Example: SELECT * FROM results WHERE success = 0;
\`\`\`

---

## Working with SQLite Database

The database file (\`results_YYYYMMDD_HHMMSS.db\`) contains all results in a structured format.

**Query examples:**

\`\`\`bash
# Open the database
sqlite3 results_20250128_143022.db

# View schema
.schema results

# See all failures
SELECT model_display_name, error, COUNT(*)
FROM results
WHERE success = 0
GROUP BY model_display_name, error;

# Check success rates by model
SELECT model_display_name,
       COUNT(*) as total,
       SUM(success) as successful,
       ROUND(100.0 * SUM(success) / COUNT(*), 1) as success_rate
FROM results
GROUP BY model_display_name;

# Export specific columns to CSV
.mode csv
.output filtered_results.csv
SELECT model_display_name, prompt, extracted, success FROM results;
.quit
\`\`\`

---

## Performance Tuning

### Optimal Concurrency

- **Fast APIs (OpenAI, Anthropic):** \`--concurrent 10-20\`
- **Slower APIs or strict rate limits:** \`--concurrent 3-5\`
- **Local models (Ollama):** \`--concurrent 1-2\`

### Rate Limiting

Calculate based on your API tier:
- **OpenAI Tier 1:** ~500 requests/minute → \`--rate-limit 8.0\`
- **OpenAI Tier 2:** ~5000 requests/minute → \`--rate-limit 80.0\`
- **Anthropic Standard:** ~50 requests/minute → \`--rate-limit 0.8\`

**Formula:** \`rate-limit = (requests_per_minute / 60) * 0.9\` (90% to be safe)

### Balancing Speed and Safety

\`\`\`bash
# Maximum throughput (risk of rate limits)
python experiment.py --concurrent 20 --rate-limit 10.0

# Balanced (recommended)
python experiment.py --concurrent 10 --rate-limit 5.0

# Conservative (guaranteed no rate limits)
python experiment.py --concurrent 3 --rate-limit 1.0
\`\`\`

---

## Troubleshooting

### Rate Limit Errors (429)
\`\`\`
🔄 Retry attempt 3 for GPT-4 after HTTPStatusError: 429 Rate Limit
\`\`\`
**Fix:** Reduce \`--concurrent\` or \`--rate-limit\`, or wait and use \`--resume\`

### Missing Dependencies
\`\`\`
⚠️  Excel export requires 'openpyxl'. Install with: pip install openpyxl
   Falling back to CSV export...
\`\`\`
**Info:** The script automatically falls back to CSV if optional dependencies are missing

### Extraction Failures
\`\`\`
⚠️  GPT-4: Couldn't extract content. Tried: choices[0].message.content, data.content
\`\`\`
**Fix:** Check the API response format in the database (\`response\` column) and update \`extract_paths\` in the script

### Network Timeouts
\`\`\`
🌐 GPT-4: Network error - TimeoutException
\`\`\`
**Fix:** Increase \`--timeout\` or check your network connection

---

## Tips for Large Experiments

1. **Test first:** Run with one model to verify everything works
2. **Use --resume:** For experiments with 1000+ calls, use resume to handle interruptions
3. **Monitor progress:** Watch the progress bar and success/fail counters
4. **Check database during run:** Use \`sqlite3\` to query partial results while script is running
5. **Export after completion:** Re-export to different formats without re-running:
   \`\`\`bash
   python experiment.py --resume --db-file results.db --output excel
   \`\`\`
6. **Adjust based on errors:** If you see many failures, Ctrl+C and adjust settings before resuming

---

## Cost Management

- Each API call costs money - check your provider's pricing
- Use \`--concurrent\` and \`--rate-limit\` to control spending rate
- Monitor the progress bar to estimate total cost during execution
- Consider testing with a small subset first
- Some providers offer usage caps - set them before running large experiments
`}}const fe=new B;export{fe as reproducibilityBundleService};
