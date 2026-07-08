const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jszip.min-BImRqbAm.js","assets/ui-vendor-B_lT7o4_.js","assets/vue-vendor-CPJ68Jbj.js","assets/utils-vendor-_jglodAS.js","assets/data-vendor-CQXUaPH4.js","assets/TrialsView-CPvjwlNf.js","assets/index-Cihymwar.js","assets/tauri-vendor-BdAyolxU.js","assets/index-BKo78Xzj.css","assets/toast-Bj0hHdYv.js","assets/useCostEstimation-BL-so5Hr.js","assets/display-values-D3R-R7BQ.js","assets/costs-Cza48zg-.js","assets/cost-calculation-Dp_zBPLi.js","assets/useModels-CVE8YPbM.js","assets/useLiveQuery-CpOh_4CI.js","assets/index-Bpm66i1o.js","assets/sanitization-D1RCuo0H.js","assets/curl-generator-D6pjq2QY.js","assets/executor-BxOkVi3U.js","assets/useHeatmapStyling-_dxGBOAh.js","assets/tauri-download-utilities-CYOczyLU.js","assets/field-extractor-b3y0zyfw.js","assets/sql-wasm-DcZGS78o.js","assets/ParserSelector-Cr_w6RNa.js","assets/parser-Gx_lLwno.js","assets/ParserSelector-NTDKyrRn.css","assets/useTrialCommands-eJGzpu6R.js","assets/repository-CaBPit14.js","assets/id-generator-Cv_Imc0S.js","assets/controller-Db43rJjt.js","assets/repository-DwWfseU1.js","assets/TrialsView-C1hT02Qo.css"])))=>i.map(i=>d[i]);
var V=Object.defineProperty;var z=(g,e,t)=>e in g?V(g,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):g[e]=t;var C=(g,e,t)=>z(g,typeof e!="symbol"?e+"":e,t);import{l as m,c as H,d as K,_ as q}from"./index-Cihymwar.js";import{t as U,E as P,g as F,d as j}from"./TrialsView-CPvjwlNf.js";import{a as G}from"./index-Bpm66i1o.js";import{TrialBundleExportService as X}from"./trial-bundle.service-C3Prr7tv.js";import"./vue-vendor-CPJ68Jbj.js";import"./ui-vendor-B_lT7o4_.js";import"./utils-vendor-_jglodAS.js";import"./tauri-vendor-BdAyolxU.js";import"./toast-Bj0hHdYv.js";import"./useCostEstimation-BL-so5Hr.js";import"./display-values-D3R-R7BQ.js";import"./costs-Cza48zg-.js";import"./cost-calculation-Dp_zBPLi.js";import"./useModels-CVE8YPbM.js";import"./useLiveQuery-CpOh_4CI.js";import"./sanitization-D1RCuo0H.js";import"./curl-generator-D6pjq2QY.js";import"./executor-BxOkVi3U.js";import"./useHeatmapStyling-_dxGBOAh.js";import"./tauri-download-utilities-CYOczyLU.js";import"./field-extractor-b3y0zyfw.js";import"./data-vendor-CQXUaPH4.js";import"./sql-wasm-DcZGS78o.js";import"./ParserSelector-Cr_w6RNa.js";import"./parser-Gx_lLwno.js";import"./useTrialCommands-eJGzpu6R.js";import"./repository-CaBPit14.js";import"./id-generator-Cv_Imc0S.js";import"./controller-Db43rJjt.js";import"./repository-DwWfseU1.js";class w{getTemplate(){return{id:"simple",name:"Simple Script (Beginner-Friendly)",description:"Simple Python script with CSV/JSON output, basic retries, and clear progress. Best for beginners and quick tests.",pythonVersion:"3.8",requiredImports:["json","requests","jmespath","os","time","datetime"],templateCode:"SIMPLE_TEMPLATE",supportsAnalysis:!1,supportsVisualization:!1}}generateScript(e,t,s={}){const{includeComments:r=!0}=s,a=this.buildResolvedConfigurations(e),n=this.discoverParameterColumns(a);return[this.generateHeader(e,r),this.generateImports(),this.generateSettings(e,r),this.generateParameterColumns(n,r),this.generateModelConfigs(a,r),this.generateFunctions(),this.generateMainFunction(e,n),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const t=[],s=new Map,r=new Map;for(const a of e.configurations){const n=a.modelSnapshot?.displayName||a.modelId;s.set(n,(s.get(n)||0)+1),r.set(n,0)}for(let a=0;a<e.configurations.length;a++){const n=e.configurations[a],o=n.providerSnapshot;if(!o)continue;const i=o.api?.baseUrl||"https://api.example.com",u=o.api?.endpoint||"/v1/api",l={"Content-Type":"application/json",...o.headers};o.auth?.type==="bearer"?l.Authorization="Bearer {{API_KEY}}":o.auth?.type==="header"&&o.auth.header&&(l[o.auth.header]="{{API_KEY}}");const d={model:n.modelId},_=o.bodyConstruction;_?.promptField?_.wrapAsArray?d[_.promptField]=[{role:_.messageRole||"user",content:"{{PROMPT}}"}]:d[_.promptField]="{{PROMPT}}":d.prompt="{{PROMPT}}",Object.assign(d,n.parameters);const h=n.provider.split("-")[0],c=n.modelSnapshot?.displayName||n.modelId;let y=c;if(s.get(c)>1){const p=r.get(c)+1;r.set(c,p),y=`${c} [Config ${p}]`}const b=this.getExtractPaths(n);t.push({config_index:a,name:c,display_name:y,provider:h,url:i+u,headers:l,body:d,parameters:n.parameters||{},extract_paths:b.contentPaths,reasoning_paths:b.reasoningPaths})}return t}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const s=t.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const a=[];r.contentPath&&a.push(r.contentPath),r.fallbackPaths&&a.push(...r.fallbackPaths);const n=[];return r.reasoningPath&&n.push(r.reasoningPath),r.reasoningFallbackPaths&&n.push(...r.reasoningFallbackPaths),{contentPaths:a.length>0?a:["response"],reasoningPaths:n}}discoverParameterColumns(e){const t=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateParameterColumns(e,t){const s=t?`# All unique parameters found across model configurations
`:"",r=JSON.stringify(e);return`${s}PARAMETER_COLUMNS = ${r}`}generateHeader(e,t){const s="#!/usr/bin/env python3";return t?`${s}
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
import argparse`}generateSettings(e,t){const s=t?`# ============================================
# YOUR EXPERIMENT SETTINGS
# ============================================

`:"",r=new Set;for(const i of e.configurations){const u=i.provider.split("-")[0];r.add(u)}const a=[];for(const i of r)if(i==="ollama")a.push(`    "${i}": "",  # Local, no key needed`);else{const u=`${i.toUpperCase()}_API_KEY`;a.push(`    "${i}": os.getenv("${u}", ""),  # Get from environment or set here`)}let n="";if(e.type==="template"&&e.templateConfig){const{template:i,variables:u}=e.templateConfig,l={};for(const[_,h]of Object.entries(u))"snapshot"in h&&h.snapshot?l[_]=h.snapshot.items.map(c=>c.value):h.type==="value"&&h.values&&(l[_]=[...h.values]);const d=JSON.stringify(l,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");n=`
# What prompt to test (you can use {{variables}} that get replaced)
PROMPT_TEMPLATE = ${JSON.stringify(i)}

# Variables to test (creates all combinations)
VARIABLES = ${d}`}else n=`
# Single prompt test
PROMPT = "Your test prompt here"`;const o=e.repeatCount||1;return n+=`
REPEAT_COUNT = ${o}  # Number of times to repeat each test`,`${s}# Your API Keys (leave empty for providers you're not using)
# The script will first check environment variables, then use these values if set

API_KEYS = {
${a.join(`,
`)}
}

# You can override environment variables by setting keys here directly
# Example: API_KEYS["openai"] = "sk-..."
${n}`}generateModelConfigs(e,t){const s=t?`# ============================================
# MODELS TO TEST (exported from Auditomatic)
# ============================================

`:"",r=e.map(n=>({config_index:n.config_index,name:n.name,display_name:n.display_name,provider:n.provider,url:n.url,headers:n.headers,body:n.body,parameters:n.parameters,extract_paths:n.extract_paths,reasoning_paths:n.reasoning_paths})),a=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${a}`}generateFunctions(){return`# ============================================
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
        }`}generateMainFunction(e,t){const s=e.type==="template";return`def main():
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
    main()`}}const L='((t,n)=>{"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).JSONRepair={})})(this,function(t){class x extends Error{constructor(t,n){super(t+" at position "+n),this.position=n}}let r=32,e=10,i=9,f=13,a=160,h=8192,y=8202,O=8239,N=8287,J=12288;function S(t){return"0"<=t&&t<="9"}function j(t){return",:[]/{}()\\n+".includes(t)}function k(t){return"a"<=t&&t<="z"||"A"<=t&&t<="Z"||"_"===t||"$"===t}function C(t){return"a"<=t&&t<="z"||"A"<=t&&t<="Z"||"_"===t||"$"===t||"0"<=t&&t<="9"}let m=/^(http|https|ftp|mailto|file|data|irc):\\/\\/$/,z=/^[A-Za-z0-9-._~:/?#@!$&\'()*+;=]$/;function E(t){return",[]/{}\\n+".includes(t)}function I(t){return _(t)||n.test(t)}let n=/^[[{\\w-]$/;function T(t,n){t=t.charCodeAt(n);return t===r||t===e||t===i||t===f}function Z(t,n){t=t.charCodeAt(n);return t===r||t===i||t===f}function _(t){return F(t)||U(t)}function F(t){return\'"\'===t||"“"===t||"”"===t}function R(t){return\'"\'===t}function U(t){return"\'"===t||"‘"===t||"’"===t||"`"===t||"´"===t}function q(t){return"\'"===t}function B(t,n,r){r=2<arguments.length&&void 0!==r&&r,n=t.lastIndexOf(n);return-1!==n?t.substring(0,n)+(r?"":t.substring(n+1)):t}function D(t,n){let r=t.length;if(!T(t,r-1))return t+n;for(;T(t,r-1);)r--;return t.substring(0,r)+n+t.substring(r)}let G={"\\b":"\\\\b","\\f":"\\\\f","\\n":"\\\\n","\\r":"\\\\r","\\t":"\\\\t"},H={\'"\':\'"\',"\\\\":"\\\\","/":"/",b:"\\b",f:"\\f",n:"\\n",r:"\\r",t:"\\t"};t.JSONRepairError=x,t.jsonrepair=function(g){let d=0,v="";if(n(["```","[```","{```"]),!f())throw new x("Unexpected end of json string",g.length);n(["```","```]","```}"]);var t=u(",");if(t&&b(),I(g[d])&&/[,\\n][ \\t\\r]*$/.test(v)){t||(v=D(v,","));{let t=!0,n=!0;for(;n;)t?t=!1:u(",")||(v=D(v,",")),n=f();v=`[\n${v=n?v:B(v,",")}\n]`}}else t&&(v=B(v,","));for(;"}"===g[d]||"]"===g[d];)d++,b();if(d>=g.length)return v;throw new x("Unexpected character "+JSON.stringify(g[d]),d);function f(){b();var t=(()=>{if("{"!==g[d])return!1;{v+="{",d++,b(),p(",")&&b();let n=!0;for(;d<g.length&&"}"!==g[d];){let t;if(n?(t=!0,n=!1):((t=u(","))||(v=D(v,",")),b()),o(),!(w()||l(!0))){"}"===g[d]||"{"===g[d]||"]"===g[d]||"["===g[d]||void 0===g[d]?v=B(v,","):(()=>{throw new x("Object key expected",d)})();break}b();var r=u(":"),e=d>=g.length,i=(r||(I(g[d])||e?v=D(v,":"):c()),f());i||(r||e?v+="null":c())}return"}"===g[d]?(v+="}",d++):v=D(v,"}"),!0}})()||(()=>{if("["!==g[d])return!1;{v+="[",d++,b(),p(",")&&b();let t=!0;for(;d<g.length&&"]"!==g[d];){t?t=!1:u(",")||(v=D(v,",")),o();var n=f();if(!n){v=B(v,",");break}}return"]"===g[d]?(v+="]",d++):v=D(v,"]"),!0}})()||w()||(()=>{var t,n,r=d;if("-"===g[d]){if(d++,i())return s(r),!0;if(!S(g[d]))return d=r,!1}for(;S(g[d]);)d++;if("."===g[d]){if(d++,i())return s(r),!0;if(!S(g[d]))return d=r,!1;for(;S(g[d]);)d++}if("e"===g[d]||"E"===g[d]){if(d++,"-"!==g[d]&&"+"!==g[d]||d++,i())return s(r),!0;if(!S(g[d]))return d=r,!1;for(;S(g[d]);)d++}if(i()){if(d>r)return t=g.slice(r,d),n=/^0\\d/.test(t),v+=n?`"${t}"`:t,!0}else d=r;return!1})()||r("true","true")||r("false","false")||r("null","null")||r("True","true")||r("False","false")||r("None","null")||l(!1)||(()=>{if("/"===g[d]){var t=d;for(d++;d<g.length&&("/"!==g[d]||"\\\\"===g[d-1]);)d++;return d++,v+=`"${g.substring(t,d)}"`,!0}})();return b(),t}function b(t){var n=!(0<arguments.length&&void 0!==t)||t;d;let r=e(n);for(;r=(r=(()=>{if("/"===g[d]&&"*"===g[d+1]){for(;d<g.length&&!((t,n)=>"*"===t[n]&&"/"===t[n+1])(g,d);)d++;d+=2}else{if("/"!==g[d]||"/"!==g[d+1])return!1;for(;d<g.length&&"\\n"!==g[d];)d++}return!0})())&&e(n););d}function e(t){var n,r,e=t?T:Z;let i="";for(;;){if(e(g,d))i+=g[d];else{if(n=g,r=d,!((n=n.charCodeAt(r))===a||n>=h&&n<=y||n===O||n===N||n===J))break;i+=" "}d++}return 0<i.length&&(v+=i,!0)}function n(t){if((t=>{e(!0);for(var n of t){var r=d+n.length;if(g.slice(d,r)===n)return d=r,1}})(t)){if(k(g[d]))for(;d<g.length&&C(g[d]);)d++;b()}}function u(t){return g[d]===t&&(v+=g[d],d++,!0)}function p(t){return g[d]===t&&(d++,!0)}function o(){b(),"."===g[d]&&"."===g[d+1]&&"."===g[d+2]&&(d+=3,b(),p(","))}function w(t,n){var r=0<arguments.length&&void 0!==t&&t,e=1<arguments.length&&void 0!==n?n:-1;let i="\\\\"===g[d];if(i&&(d++,i=!0),_(g[d])){var f=R(g[d])?R:q(g[d])?q:U(g[d])?U:F,u=d,o=v.length;let n=\'"\';for(d++;;){if(d>=g.length)return l=A(d-1),!r&&j(g.charAt(l))?(d=u,v=v.substring(0,o),w(!0)):(n=D(n,\'"\'),v+=n,!0);if(d===e)return n=D(n,\'"\'),v+=n,!0;if(f(g[d])){var l=d,s=n.length;if(n+=\'"\',d++,v+=n,b(!1),r||d>=g.length||j(g[d])||_(g[d])||S(g[d]))return $(),!0;var c=A(l-1),a=g.charAt(c);if(","===a)return d=u,v=v.substring(0,o),w(!1,c);if(j(a))return d=u,v=v.substring(0,o),w(!0);v=v.substring(0,o),d=l+1,n=n.substring(0,s)+"\\\\"+n.substring(s)}else{if(r&&E(g[d])){if(":"===g[d-1]&&m.test(g.substring(u+1,d+2)))for(;d<g.length&&z.test(g[d]);)n+=g[d],d++;return n=D(n,\'"\'),v+=n,$(),!0}if("\\\\"===g[d]){c=g.charAt(d+1);if(void 0!==H[c])n+=g.slice(d,d+2),d+=2;else if("u"===c){let t=2;for(;t<6&&/^[0-9A-Fa-f]$/.test(g[d+t]);)t++;if(6===t)n+=g.slice(d,d+6),d+=6;else{if(!(d+t>=g.length))throw a=void 0,a=g.slice(d,d+6),new x(`Invalid unicode character "${a}"`,d);d=g.length}}else n+=c,d+=2}else{var h,s=g.charAt(d);if(\'"\'===s&&"\\\\"!==g[d-1])n+="\\\\"+s;else if("\\n"===(h=s)||"\\r"===h||"\\t"===h||"\\b"===h||"\\f"===h)n+=G[s];else{if(!(" "<=s))throw h=void 0,h=s,new x("Invalid character "+JSON.stringify(h),d);n+=s}d++}}i&&p("\\\\")}}return!1}function $(){let t=!1;for(b();"+"===g[d];){t=!0,d++,b();var n=(v=B(v,\'"\',!0)).length,r=w();v=r?(r=v,n=n,e=1,r.substring(0,n)+r.substring(n+e)):D(v,\'"\')}var e;t}function r(t,n){return g.slice(d,d+t.length)===t&&(v+=n,d+=t.length,!0)}function l(t){var n=d;if(k(g[d])){for(;d<g.length&&C(g[d]);)d++;let t=d;for(;T(g,t);)t++;if("("===g[t])return d=t+1,f(),")"===g[d]&&(d++,";"===g[d])&&d++,!0}for(;d<g.length&&!E(g[d])&&!_(g[d])&&(!t||":"!==g[d]);)d++;if(":"===g[d-1]&&m.test(g.substring(n,d+2)))for(;d<g.length&&z.test(g[d]);)d++;if(d>n){for(;T(g,d-1)&&0<d;)d--;n=g.slice(n,d);return v+="undefined"===n?"null":JSON.stringify(n),\'"\'===g[d]&&d++,!0}}function A(t){let n=t;for(;0<n&&T(g,n);)n--;return n}function i(){return d>=g.length||j(g[d])||T(g,d)}function s(t){v+=g.slice(t,d)+"0"}function c(){throw new x("Colon expected",d)}}});',W=`{
  "name": "jsonrepair",
  "version": "3.13.1",
  "description": "Repair broken JSON documents",
  "repository": {
    "type": "git",
    "url": "https://github.com/josdejong/jsonrepair.git"
  },
  "type": "module",
  "main": "lib/cjs/index.js",
  "module": "lib/esm/index.js",
  "browser": "lib/umd/jsonrepair.min.js",
  "types": "lib/types/index.d.ts",
  "sideEffects": false,
  "exports": {
    ".": {
      "import": "./lib/esm/index.js",
      "require": "./lib/cjs/index.js",
      "types": "./lib/types/index.d.ts"
    },
    "./stream": {
      "import": "./lib/esm/stream.js",
      "require": "./lib/cjs/stream.js",
      "types": "./lib/types/stream.d.ts"
    }
  },
  "keywords": [
    "simple",
    "json",
    "repair",
    "fix",
    "invalid",
    "stream",
    "streaming"
  ],
  "bin": {
    "jsonrepair": "./bin/cli.js"
  },
  "scripts": {
    "test": "vitest watch src",
    "test:it": "vitest run src",
    "build": "npm-run-all build:**",
    "build:clean": "del-cli lib",
    "build:esm": "babel src --out-dir lib/esm --extensions \\".ts\\" --source-maps --config-file ./babel.config.json",
    "build:cjs": "babel src --out-dir lib/cjs --extensions \\".ts\\" --source-maps --config-file ./babel-cjs.config.json && cpy tools/cjs lib/cjs --flat",
    "build:umd": "rollup lib/esm/index.js --format umd --name JSONRepair --sourcemap --output.file lib/umd/jsonrepair.js && cpy tools/cjs/package.json lib/umd --flat",
    "build:umd:min": "uglifyjs --compress --mangle --source-map --comments --output lib/umd/jsonrepair.min.js -- lib/umd/jsonrepair.js",
    "build:types": "tsc --project tsconfig-types.json",
    "build:validate": "vitest run test-lib",
    "lint": "biome check",
    "format": "biome check --write",
    "benchmark": "npm run build:esm && node tools/benchmark/run.mjs",
    "build-and-test": "npm run lint && npm run test:it && npm run build",
    "release": "npm-run-all release:**",
    "release:build-and-test": "npm run build-and-test",
    "release:version": "standard-version",
    "release:push": "git push && git push --tag",
    "release:publish": "npm publish",
    "release-dry-run": "npm run build-and-test && standard-version --dry-run",
    "prepare": "husky"
  },
  "files": [
    "README.md",
    "LICENSE.md",
    "lib"
  ],
  "author": "Jos de Jong",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "7.28.3",
    "@babel/core": "7.28.4",
    "@babel/plugin-transform-typescript": "7.28.0",
    "@babel/preset-env": "7.28.3",
    "@babel/preset-typescript": "7.27.1",
    "@biomejs/biome": "2.2.4",
    "@commitlint/cli": "19.8.1",
    "@commitlint/config-conventional": "19.8.1",
    "@types/node": "24.5.2",
    "cpy-cli": "6.0.0",
    "del-cli": "7.0.0",
    "husky": "9.1.7",
    "npm-run-all": "4.1.5",
    "rollup": "4.51.0",
    "standard-version": "9.5.0",
    "tinybench": "5.0.1",
    "ts-node": "10.9.2",
    "typescript": "5.9.2",
    "uglify-js": "3.19.3",
    "vitest": "3.2.4"
  }
}
`,k="auditomatic_jsonrepair.py",N="3.13.1",M="ef309362963000737d35443766d6607090e64f9a80bdfc635fd7e9042db3149f",Q=`The ISC License

Copyright (c) 2020-2025 by Jos de Jong

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND ISC DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;function J(){const g=JSON.parse(W).version;if(g!==N)throw new Error(`jsonrepair runtime version mismatch: expected ${N}, installed ${g}`);if(L.includes('"""'))throw new Error("jsonrepair source contains a Python triple-quote delimiter");return`"""Bundled jsonrepair runtime for Auditomatic JavaScript parsers.

jsonrepair ${N}
SHA-256: ${M}
Source: https://github.com/josdejong/jsonrepair

${Q}
"""

JSONREPAIR_VERSION = "${N}"
JSONREPAIR_SHA256 = "${M}"
JSONREPAIR_SOURCE = r"""${L}"""


def install_jsonrepair(ctx):
    """Install jsonrepair into a MiniRacer context."""
    ctx.eval(JSONREPAIR_SOURCE)
    ctx.eval("var jsonrepair = globalThis.JSONRepair.jsonrepair;")
`}function B(){return`# ============================================================================
# BUNDLED JSONREPAIR RUNTIME
# ============================================================================
# This section is externalized as ${k} in ZIP bundles.

${J()}`}class ${getTemplate(){return{id:"production",name:"Production Script (Professional)",description:"Production-grade Python script with SQLite persistence, professional retries, progress bars, and multiple export formats. Best for research and large experiments.",pythonVersion:"3.8",requiredImports:["httpx","aiometer","aiosqlite","tenacity","tqdm","pandas"],templateCode:"PRODUCTION_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,t,s={}){const{includeComments:r=!0,parser:a,externalizeJsonrepair:n=!1}=s,o=this.buildResolvedConfigurations(e),i=this.discoverParameterColumns(o);return[this.generateHeader(e,r),this.generateImports(a,n),this.generateJsonrepairRuntime(a,n),this.generateSettings(e,r),this.generateParserConfig(a,r),this.generateParameterColumns(i,r),this.generateModelConfigs(o,r),this.generateSchemaComputation(r),this.generateDatabaseFunctions(i,a,r),this.generateParserFunctions(a),this.generateApiCallFunction(a,r),this.generateCliAndUtilities(r),this.generateExportFunction(a),this.generateMainFunction(e,r),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const t=[],s=new Map,r=new Map;for(const a of e.configurations){const n=a.modelSnapshot?.displayName||a.modelId;s.set(n,(s.get(n)||0)+1),r.set(n,0)}for(let a=0;a<e.configurations.length;a++){const n=e.configurations[a],o=n.providerSnapshot;if(!o)continue;const i=o.api?.baseUrl||"https://api.example.com",u=o.api?.endpoint||"/v1/api",l={"Content-Type":"application/json",...o.headers};o.auth?.type==="bearer"?l.Authorization="Bearer {{API_KEY}}":o.auth?.type==="header"&&o.auth.header&&(l[o.auth.header]="{{API_KEY}}");const d="@@AUDITOMATIC_PROMPT@@",_="@@AUDITOMATIC_SYSTEM@@",h=!!e.templateConfig?.systemPrompt,c=G(o,n.modelId,n.parameters||{},d,h?_:void 0),y=JSON.parse(JSON.stringify(c).split(d).join("{{PROMPT}}").split(_).join("{{SYSTEM_PROMPT}}")),b=n.provider.split("-")[0],p=n.modelSnapshot?.displayName||n.modelId;let f=p;if(s.get(p)>1){const E=r.get(p)+1;r.set(p,E),f=`${p} [Config ${E}]`}const v=this.getExtractPaths(n);t.push({config_index:a,name:p,display_name:f,provider:b,url:i+u,headers:l,body:y,parameters:n.parameters||{},extract_paths:v.contentPaths,reasoning_paths:v.reasoningPaths})}return t}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const s=t.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const a=[];r.contentPath&&a.push(r.contentPath),r.fallbackPaths&&a.push(...r.fallbackPaths);const n=[];return r.reasoningPath&&n.push(r.reasoningPath),r.reasoningFallbackPaths&&n.push(...r.reasoningFallbackPaths),{contentPaths:a.length>0?a:["response"],reasoningPaths:n}}discoverParameterColumns(e){const t=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateParameterColumns(e,t){const s=t?`# All unique parameter names found across model configurations
# These become separate columns in the database for analysis
`:"",r=JSON.stringify(e);return`${s}PARAMETER_COLUMNS = ${r}`}generateHeader(e,t){const s="#!/usr/bin/env python3";return t?`${s}
"""
Production API Testing Script

Orchestrates large-scale LLM experiments with professional retry logic,
SQLite persistence for resumable experiments, and concurrent execution.

Key Features:
  - SQLite database with dynamic schema (based on your variables/parameters)
  - Automatic retries with exponential backoff (up to 10 attempts)
  - Rate limiting and concurrent execution (configurable)
  - Progress tracking with real-time success/failure counts
  - Multiple export formats (CSV, TSV, JSON, Excel, Parquet)
  - Parser support (regex, JavaScript, Python) for structured extraction

Requirements: pip install -r requirements.txt

Usage:
  python experiment.py                                    # Run with defaults
  python experiment.py --output excel --concurrent 20     # Custom settings
  python experiment.py --resume --db-file results_*.db    # Resume previous run
"""`:s}generateImports(e,t=!1){const s=`import asyncio
import httpx
import aiosqlite
import aiometer
import json
import os
import argparse
import sys
from datetime import datetime
from tenacity import retry, stop_after_attempt, wait_exponential
import functools
import pandas as pd
from pathlib import Path
import re`;return e?.type==="regex"?s:e?.type==="javascript"?`${s}
try:
    from py_mini_racer import MiniRacer
    JS_AVAILABLE = True
except ImportError:
    JS_AVAILABLE = False
    print("[WARN] py-mini-racer not installed. JavaScript parser will not work.")
    print("       Install with: pip install py-mini-racer")${t?`
from auditomatic_jsonrepair import install_jsonrepair`:""}`:(e?.type==="python",s)}generateJsonrepairRuntime(e,t=!1){return e?.type!=="javascript"||t?null:B()}generateSettings(e,t){const s=t?`# ============================================================================
# EXPERIMENT CONFIGURATION
# ============================================================================
# Define what we're testing: prompt template, variables, and repetitions.
# The script will generate all combinations (Cartesian product) and test each
# combination REPEAT_COUNT times with each model.

`:"";let r="";if(e.type==="template"&&e.templateConfig){const{template:o,variables:i}=e.templateConfig;let u=!1;const l={},d={};for(const[c,y]of Object.entries(i))if("snapshot"in y&&y.snapshot){const b=y.snapshot.items;if(b.some(f=>f.attributes&&Object.keys(f.attributes).length>0)){u=!0,d[c]=b.map(v=>({value:v.value,attributes:v.attributes||{}}));const f=new Set;b.forEach(v=>{v.attributes&&Object.keys(v.attributes).forEach(E=>f.add(E))}),l[c]=Array.from(f).sort()}else d[c]=b.map(f=>f.value)}else y.type==="value"&&y.values&&(d[c]=[...y.values]);const _=JSON.stringify(d,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None"),h=t?`# Variables support two formats:
# 1. Simple: ["value1", "value2", ...]
# 2. Attributed: [{"value": "val", "attributes": {...}}, ...]
#    Attributes are tracked as separate columns in the database for analysis
`:"";if(r=`PROMPT_TEMPLATE = ${JSON.stringify(o)}`,e.templateConfig.systemPrompt&&(r+=`
SYSTEM_PROMPT_TEMPLATE = ${JSON.stringify(e.templateConfig.systemPrompt)}`),r+=`

${h}VARIABLES = ${_}`,u&&Object.keys(l).length>0){const c=JSON.stringify(l,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");r+=`

ATTRIBUTE_KEYS = ${c}`}}else r='PROMPT = "Your test prompt here"';const a=e.repeatCount||1;return r+=`

REPEAT_COUNT = ${a}${t?"  # Number of times to repeat each unique prompt (for measuring variance)":""}`,`${s}${r}`}generateParserConfig(e,t){if(!e)return null;const s=t?`
# Parser configuration - extracts structured data from raw model responses
# Supports: "regex", "javascript", "python"
# If unstack_json=True, JSON output is flattened into separate columns on export
`:`
`,r={id:e.id,name:e.name,type:e.type,output_type:e.outputType,unstack_json:e.unstackJson||!1,config:e.config},a=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}PARSER_CONFIG = ${a}`}generateModelConfigs(e,t){const s=t?`
# Model configurations define:
# - API endpoint and authentication
# - Request body structure (with {{PROMPT}} and {{API_KEY}} placeholders)
# - Parameters (temperature, max_tokens, etc.)
# - Extract paths (dotted/bracket paths to find content in response JSON)
# - Reasoning paths (optional, for chain-of-thought extraction)
`:"",r=e.map(n=>({config_index:n.config_index,name:n.name,display_name:n.display_name,provider:n.provider,url:n.url,headers:n.headers,body:n.body,parameters:n.parameters,extract_paths:n.extract_paths,reasoning_paths:n.reasoning_paths})),a=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${a}`}generateSchemaComputation(e){return`${e?`# ============================================================================
# SCHEMA COMPUTATION
# ============================================================================
# Compute the database schema once based on the current configuration.
# This ensures setup_database() and save_result() use the same column order.
# If you modify VARIABLES or PARAMETER_COLUMNS, the schema adapts automatically.

`:""}def sanitize_column_name(col_name):
${e?`    """
    Make column names SQLite-compatible.

    Rules: alphanumeric + underscore only, can't start with digit
    Examples: "user-name" -> "user_name", "2nd_var" -> "col_2nd_var"
    """`:'    """Sanitize column name for SQLite compatibility."""'}
    sanitized = re.sub(r'[^a-zA-Z0-9_]', '_', str(col_name))
    if sanitized and sanitized[0].isdigit():
        sanitized = 'col_' + sanitized
    return sanitized or 'col_unnamed'


def compute_schema():
    """
    Compute database schema based on current configuration.

    Returns tuple of:
    - param_cols: List of parameter column names
    - var_cols: List of variable column names (sanitized)
    - attr_cols: List of attribute column names
    - original_var_names: Original variable names (for value extraction)
    """
    # Reserved SQL column names to avoid conflicts
    reserved = {
        'id', 'config_index', 'model_display_name', 'model', 'endpoint',
        'repeat_index', 'prompt', 'request_payload', 'response', 'extracted',
        'reasoning', 'parsed_json', 'parsed_content', 'success', 'error', 'timestamp'
    }

    # Parameter columns - one per unique parameter across all models
    param_cols = [f'param_{p}' for p in PARAMETER_COLUMNS]

    # Variable columns - one per variable in VARIABLES (sanitized for SQL)
    var_cols = []
    original_var_names = list(VARIABLES.keys())
    for var_name in original_var_names:
        col = sanitize_column_name(var_name)
        if col.lower() in reserved:
            col = 'var_' + col
        var_cols.append(col)

    # Attribute columns - one per attribute key (if any variables have attributes)
    attr_cols = []
    if 'ATTRIBUTE_KEYS' in globals() and ATTRIBUTE_KEYS:
        for var_name, attr_keys in ATTRIBUTE_KEYS.items():
            for attr_key in attr_keys:
                col = sanitize_column_name(f"attr_{var_name}_{attr_key}")
                attr_cols.append(col)

    return param_cols, var_cols, attr_cols, original_var_names


# Compute schema once at module load time
PARAM_COLS, VAR_COLS, ATTR_COLS, ORIGINAL_VAR_NAMES = compute_schema()
ALL_DYNAMIC_COLS = PARAM_COLS + VAR_COLS + ATTR_COLS


# ============================================================================
# GLOBAL STATE
# ============================================================================
# Counters for real-time progress tracking across concurrent API calls
# Using asyncio.Lock since we're in an async context

success_count = 0
fail_count = 0
progress_bar = None
counter_lock = None  # Initialized in main() to avoid event loop issues`}generateDatabaseFunctions(e,t,s){return`${s?`# ============================================================================
# DATABASE FUNCTIONS
# ============================================================================

`:""}async def setup_database():
${s?`    """
    Create SQLite database with schema from pre-computed columns.

    The schema was computed at module load time by compute_schema().
    If you modify VARIABLES or PARAMETER_COLUMNS, the schema updates automatically.
    """`:'    """Create SQLite database with dynamic schema."""'}
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    db_file = f"results_{timestamp}.db"

    # Build SQL column definitions from pre-computed schema
    dynamic_col_defs = [f'"{col}" TEXT' for col in ALL_DYNAMIC_COLS]
    dynamic_cols_sql = ", ".join(dynamic_col_defs) if dynamic_col_defs else ""
    cols_section = (dynamic_cols_sql + ",") if dynamic_cols_sql else ""

    # Determine parsed column type if parser is configured
    parsed_col = ''
    if 'PARSER_CONFIG' in globals() and PARSER_CONFIG:
        col_name = 'parsed_json' if PARSER_CONFIG.get('unstack_json') else 'parsed_content'
        parsed_col = f',\\n            {col_name} TEXT'

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
            {cols_section}
            request_payload TEXT,
            response TEXT,
            extracted TEXT,
            reasoning TEXT{parsed_col},
            success BOOLEAN,
            error TEXT,
            timestamp TEXT
        )
    ''')
    await db.commit()

    print(f"Database: {db_file}")
    return db, db_file


async def already_done(db, task_id):
${s?`    """Check if task already completed successfully (for resume functionality).

    Returns True only if the task exists AND succeeded.
    Failed tasks will be retried on resume.
    """`:'    """Check if task completed successfully."""'}
    cursor = await db.execute('SELECT success FROM results WHERE id = ?', (task_id,))
    result = await cursor.fetchone()
    return result is not None and result[0]


async def save_result(db, task_id, model_config, repeat_index, prompt, variable_values,
                      variable_attributes, request_payload, response, extracted, reasoning,
                      parsed, success, error):
${s?`    """
    Save API call result to database.

    Uses pre-computed column order from compute_schema() to ensure
    columns match between setup_database() and save_result().
    """`:'    """Save a result to the database."""'}
    # Build column list using pre-computed schema (matches setup_database order)
    base_cols = ['id', 'config_index', 'model_display_name', 'model', 'endpoint', 'repeat_index', 'prompt']

    # Determine end columns based on parser config
    if 'PARSER_CONFIG' in globals() and PARSER_CONFIG:
        if PARSER_CONFIG.get('unstack_json'):
            end_cols = ['request_payload', 'response', 'extracted', 'reasoning', 'parsed_json', 'success', 'error', 'timestamp']
        else:
            end_cols = ['request_payload', 'response', 'extracted', 'reasoning', 'parsed_content', 'success', 'error', 'timestamp']
    else:
        end_cols = ['request_payload', 'response', 'extracted', 'reasoning', 'success', 'error', 'timestamp']

    all_cols = base_cols + list(ALL_DYNAMIC_COLS) + end_cols
    quoted_cols = ', '.join([f'"{col}"' for col in all_cols])
    placeholders = ', '.join(['?' for _ in all_cols])

    # Build values in the same order as columns
    base_vals = [task_id, model_config['config_index'], model_config['display_name'],
                 model_config['name'], model_config['url'], repeat_index, prompt]

    # Extract dynamic column values using pre-computed schema
    param_vals = [
        json.dumps(v) if isinstance(v, (dict, list)) else v
        for v in [model_config['parameters'].get(p, '') for p in PARAMETER_COLUMNS]
    ]

    var_vals = [variable_values.get(orig_var, '') for orig_var in ORIGINAL_VAR_NAMES]

    attr_vals = []
    if 'ATTRIBUTE_KEYS' in globals() and ATTRIBUTE_KEYS:
        for var_name, attr_keys in ATTRIBUTE_KEYS.items():
            for attr_key in attr_keys:
                attr_vals.append(variable_attributes.get(var_name, {}).get(attr_key, ''))

    dynamic_vals = param_vals + var_vals + attr_vals

    # Build end values
    if 'PARSER_CONFIG' in globals() and PARSER_CONFIG:
        end_vals = [
            json.dumps(request_payload) if request_payload else None,
            json.dumps(response) if response else None,
            extracted, reasoning, parsed, success, error, datetime.now().isoformat()
        ]
    else:
        end_vals = [
            json.dumps(request_payload) if request_payload else None,
            json.dumps(response) if response else None,
            extracted, reasoning, success, error, datetime.now().isoformat()
        ]

    all_vals = base_vals + dynamic_vals + end_vals

    # Use INSERT OR REPLACE to handle retrying failed tasks on resume
    await db.execute(f'INSERT OR REPLACE INTO results ({quoted_cols}) VALUES ({placeholders})', all_vals)
    await db.commit()`}generateParserFunctions(e){if(!e)return null;let t="";switch(e.type){case"regex":t=this.generateRegexParserFunction(e.config);break;case"javascript":t=this.generateJavaScriptParserFunction(e.config);break;case"python":t=this.generatePythonParserFunction(e.config);break}const s=this.generateSimplifiedParserDispatcher(e.type);return`# ============================================================================
# PARSER FUNCTIONS
# ============================================================================
# Parser extracts structured data from raw model responses.
# This trial uses a ${e.type} parser.

${t}

${s}`}generateRegexParserFunction(e){return`def apply_regex_parser(content):
    """Apply regex parser with optional JSON parsing."""
    try:
        pattern = PARSER_CONFIG["config"]["pattern"]
        flags_str = PARSER_CONFIG["config"].get("flags") or ""
        capture_group = PARSER_CONFIG["config"].get("captureGroup")

        # Support /pattern/flags form (matches the app's regex executor)
        slash = re.match(r'^/(.+)/([gimsuvy]*)$', pattern, re.DOTALL)
        if slash:
            pattern, flags_str = slash.group(1), slash.group(2)

        # flags is a JS-style string ("gim"), not a numeric bitmask
        re_flags = 0
        if "i" in flags_str: re_flags |= re.IGNORECASE
        if "m" in flags_str: re_flags |= re.MULTILINE
        if "s" in flags_str: re_flags |= re.DOTALL

        match = re.search(pattern, content, re_flags)
        if match:
            group_count = len(match.groups())
            if capture_group is not None and capture_group <= group_count:
                result = match.group(capture_group)
            else:
                # Default: first defined capture group, else whole match
                result = match.group(0)
                for i in range(1, group_count + 1):
                    if match.group(i) is not None:
                        result = match.group(i)
                        break
            if PARSER_CONFIG["output_type"] == "json":
                try:
                    return json.loads(result)
                except:
                    return result
            return result
        return None
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateJavaScriptParserFunction(e){return`def apply_javascript_parser(content):
    """Execute JavaScript parser using PyMiniRacer."""
    if not JS_AVAILABLE:
        return "PARSER_ERROR: py-mini-racer not installed"

    try:
        ctx = MiniRacer()
        install_jsonrepair(ctx)
        ctx.eval(f"var content = {json.dumps(content)};")

        code = PARSER_CONFIG["config"]["code"]
        if 'return ' in code and not code.strip().startswith('(function'):
            code = f"(function() {{ {code} }})()"

        ctx.eval(f"var __parserResult = {code};")

        is_null = ctx.eval("__parserResult === null || __parserResult === undefined")
        if is_null:
            return None

        json_str = ctx.eval("JSON.stringify(__parserResult)")
        return json.loads(json_str)

    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generatePythonParserFunction(e){return`def apply_python_parser(content):
    """Execute Python parser."""
    try:
        code = PARSER_CONFIG["config"]["code"]
        function_name = PARSER_CONFIG["config"].get("functionName", "parse")

        namespace = {
            "content": content,
            "json": json,
            "re": re
        }

        imports = PARSER_CONFIG["config"].get("imports", [])
        for imp in imports:
            try:
                namespace[imp] = __import__(imp)
            except ImportError:
                pass

        exec(code, namespace)
        if function_name in namespace:
            result = namespace[function_name](content)
            return result
        return None
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateSimplifiedParserDispatcher(e){const t=`apply_${e}_parser`;return`# --- Column typing (Type-2) — mirrors the app's shared column-typing policy.
# The parser stores a *faithful* value (Type-1); whether a column is numeric/
# boolean is a separate whole-column decision applied at export, so this script
# reproduces the app instead of coercing per cell. Ambiguous values become null;
# numeric strings count only in canonical form so identifiers ("07030") stay text.
_BOOL_TRUE = {"true", "yes", "1"}
_BOOL_FALSE = {"false", "no", "0"}
# Plain decimal: signed int/decimal, no leading-zero integer part, no exponent,
# no grouping. Accepts "85"/"-5"/"3.14"/"85.50"; rejects "07030"/"1e3"/"1,234".
_PLAIN_DECIMAL = re.compile(r"^-?(?:0|[1-9]\\d*)(?:\\.\\d+)?$")


def _is_empty(v):
    return v is None or v == "" or (isinstance(v, float) and v != v)


def _is_number_like(value):
    if isinstance(value, bool):
        return False
    if isinstance(value, (int, float)):
        return not (value != value or value in (float("inf"), float("-inf")))
    if isinstance(value, str):
        t = value.strip()
        if not _PLAIN_DECIMAL.match(t):
            return False
        try:
            n = float(t)
        except (ValueError, TypeError):
            return False
        return not (n != n or n in (float("inf"), float("-inf")))
    return False


def _is_boolean_like(value):
    if isinstance(value, bool):
        return True
    if isinstance(value, str):
        return value.strip().lower() in (_BOOL_TRUE | _BOOL_FALSE)
    return False


def infer_column_type(values):
    """Whole-column type (not first-value) from a column's faithful values."""
    saw = {"number": False, "boolean": False, "json": False, "other": False}
    saw_any = False
    for v in values:
        if _is_empty(v):
            continue
        saw_any = True
        if _is_number_like(v):
            saw["number"] = True
        elif _is_boolean_like(v):
            saw["boolean"] = True
        elif isinstance(v, (dict, list)):
            saw["json"] = True
        else:
            saw["other"] = True
    if not saw_any:
        return "string"
    for t in ("number", "boolean", "json"):
        if saw[t] and not any(saw[o] for o in saw if o != t):
            return t
    return "string"


def coerce_cell(value, col_type):
    """Cast one faithful value under its column's resolved type."""
    if _is_empty(value):
        return None
    if col_type == "number":
        if isinstance(value, bool):
            return None
        try:
            n = float(value)
        except (ValueError, TypeError):
            return None
        if n != n:
            return None
        return int(n) if n == int(n) else n
    if col_type == "boolean":
        if isinstance(value, bool):
            return value
        t = str(value).strip().lower()
        if t in _BOOL_TRUE:
            return True
        if t in _BOOL_FALSE:
            return False
        return None
    if col_type == "json":
        return value if isinstance(value, (dict, list)) else None
    return value


def apply_parser(content):
    """Apply the ${e} parser to extracted content."""
    if not PARSER_CONFIG or not content:
        return None

    try:
        result = ${t}(content)
        if isinstance(result, str) and result.startswith("PARSER_ERROR"):
            return result
        # Faithful: return exactly what the parser produced. The string->number/
        # boolean decision is made per-column at export (apply_column_typing),
        # never coerced here, matching the app's executors + column-typing.
        return result
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateApiCallFunction(e,t){return`${t?`# ============================================================================
# API CALL FUNCTIONS
# ============================================================================
# These functions handle making API calls with sophisticated error handling
# and retry logic.

`:""}def get_value_at_path(obj, path):
    """Resolve a path like choices[0].message.content or a JSONPath filter
    content[?(@.type=='thinking')].thinking (matches the app's resolver)."""
    if not isinstance(obj, (dict, list)) or not path:
        return None
    try:
        m = re.match(r"^(.+?)\\[\\?\\(@\\.(.+?)==(?:'|\\")(.+?)(?:'|\\")\\)\\]\\.(.+)$", path)
        if m:
            array_path, field, value, result_path = m.group(1), m.group(2), m.group(3), m.group(4)
            arr = get_value_at_path(obj, array_path)
            if not isinstance(arr, list):
                return None
            matched = next((it for it in arr if isinstance(it, dict) and it.get(field) == value), None)
            if matched is None:
                return None
            return get_value_at_path(matched, result_path)
        parts = [p for p in re.split(r"[.\\[\\]]", path) if p]
        current = obj
        for part in parts:
            if current is None:
                return None
            if part.isdigit():
                idx = int(part)
                if not isinstance(current, list) or idx >= len(current):
                    return None
                current = current[idx]
            else:
                if not isinstance(current, dict):
                    return None
                current = current.get(part)
        return current
    except Exception:
        return None


@retry(
    stop=stop_after_attempt(10),
    wait=wait_exponential(min=1, max=30),
    before_sleep=lambda rs: print(f"Retry {rs.attempt_number} for {rs.args[5]} after {rs.outcome.exception()}")
)
async def _call_api_with_retry(client, url, headers, body, extract_paths, model_name, model_config):
${t?`    """
    Make API call with automatic retry on transient failures.

    The @retry decorator from tenacity handles the retry logic:
    - Up to 10 attempts
    - Exponential backoff: wait 1-30 seconds between retries
    - Prints retry attempt number before each retry

    Retry strategy:
    - Network errors (connection, timeout): RETRY (raise exception)
    - Auth errors (401, 403): DON'T RETRY (return error result)
    - Rate limit / server errors (429, 5xx): RETRY (raise exception)
    - Invalid JSON response: DON'T RETRY (return error result)
    - API-level errors: RETRY if 5xx, DON'T RETRY if 4xx
    """`:'    """Make the API call with automatic retries for transient failures."""'}
    try:
        response = await client.post(url, json=body, headers=headers)
    except Exception as e:
        print(f"Network error {model_name}: {str(e)[:100]}")
        raise Exception(f"Network error: {str(e)}")

    status_code = response.status_code
    raw_text = response.text

    # Auth errors - don't retry
    if status_code in [401, 403]:
        print(f"Auth failed {model_name} ({status_code}): {raw_text[:200]}")
        return {
            'success': False,
            'response_data': {"http_status": status_code, "raw_text": raw_text[:1000], "auth_error": "Auth failed"},
            'extracted': None,
            'reasoning': None,
            'error': f"Auth failed ({status_code}) - check API key"
        }

    # Rate limit / server errors - retry
    if status_code in [429, 500, 502, 503, 504]:
        print(f"Retryable error {model_name} ({status_code}): {raw_text[:100]}")
        raise Exception(f"Retryable error ({status_code})")

    # Parse JSON
    try:
        response_data = response.json()
    except json.JSONDecodeError as e:
        print(f"Invalid JSON {model_name} ({status_code}): {raw_text[:200]}")
        return {
            'success': False,
            'response_data': {"http_status": status_code, "raw_text": raw_text[:1000], "json_error": str(e)},
            'extracted': None,
            'reasoning': None,
            'error': f"Invalid JSON ({status_code})"
        }

    # Check for API error
    if response_data and response_data.get('error') is not None:
        error_msg = str(response_data.get('error'))
        if status_code >= 500:
            print(f"Server error {model_name} ({status_code}): {error_msg[:100]}")
            raise Exception(f"Server error: {error_msg}")
        return {
            'success': False,
            'response_data': response_data,
            'extracted': None,
            'reasoning': None,
            'error': f"API error: {error_msg}"
        }

    ${t?`    # Extract content using get_value_at_path (try multiple paths with fallback)
    # Paths are dotted/bracket expressions like choices[0].message.content
    # We try each path in order until one succeeds`:"    # Try to extract the answer"}
    extracted = None
    attempted_paths = []
    for path in extract_paths:
        attempted_paths.append(path)
        extracted_raw = get_value_at_path(response_data, path)
        if extracted_raw is not None:
${t?"            # Filter paths (like [?...]) return lists, so unwrap them":"            # Unwrap arrays - filter paths return lists"}
            if isinstance(extracted_raw, list):
                extracted = ' '.join(str(e) for e in extracted_raw if e) if extracted_raw else None
            else:
                extracted = extracted_raw
            if extracted:
                break

    # Extract reasoning (optional)
    reasoning = None
    for path in model_config.get('reasoning_paths', []):
        reasoning_raw = get_value_at_path(response_data, path)
        if reasoning_raw is not None:
            if isinstance(reasoning_raw, list):
                reasoning = ' '.join(str(r) for r in reasoning_raw if r) if reasoning_raw else None
            else:
                reasoning = reasoning_raw
            if reasoning:
                break

    success = extracted is not None
    if success:
        error = None
    elif (response_data.get('choices') or [{}])[0].get('finish_reason') == 'length':
        error = "Response truncated (finish_reason=length) - increase max_tokens"
    else:
        error = f"Extraction failed. Tried: {', '.join(attempted_paths)}"
    return {
        'success': success,
        'response_data': response_data,
        'extracted': str(extracted) if extracted is not None else None,
        'reasoning': str(reasoning) if reasoning is not None else None,
        'error': error,
        'attempted_paths': attempted_paths
    }


async def call_api(client, db, task_id, model_config, repeat_index, prompt, variable_values, variable_attributes, system_prompt=""):
${t?`    """
    Execute single API call, parse result, and save to database.

    This is the main orchestration function that:
    1. Checks if task already done (for resume functionality)
    2. Gets API key from environment
    3. Builds request (replaces {{PROMPT}} and {{API_KEY}} placeholders)
    4. Calls API with retry logic
    5. Applies parser if configured
    6. Saves result to database
    7. Updates progress counters and bar
    """`:'    """Call one API and save the result."""'}
    global success_count, fail_count, progress_bar

    # Skip if already done successfully (for resume functionality)
    if await already_done(db, task_id):
        return None

    # Get API key from environment
    api_key = ""
    if model_config['provider'] != 'ollama':
        env_var = f"{model_config['provider'].upper()}_API_KEY"
        api_key = os.getenv(env_var, "")

    # Build request (replace {{API_KEY}} and {{PROMPT}} placeholders)
    # We use JSON encoding to safely handle special characters in the prompt.
    # Note: This works because {{PROMPT}} only appears in string values, never in keys.
    headers = {k: v.replace('{{API_KEY}}', api_key) for k, v in model_config['headers'].items()}
    body_str = json.dumps(model_config['body'])
    prompt_escaped = json.dumps(prompt)[1:-1]  # JSON-encode then strip quotes
    body_str = body_str.replace('{{PROMPT}}', prompt_escaped)
    if '{{SYSTEM_PROMPT}}' in body_str:
        system_escaped = json.dumps(str(system_prompt))[1:-1]
        body_str = body_str.replace('{{SYSTEM_PROMPT}}', system_escaped)
    body = json.loads(body_str)

    try:
        # Call API with retry
        result = await _call_api_with_retry(
            client, model_config['url'], headers, body,
            model_config['extract_paths'], model_config['name'], model_config
        )

        # Apply parser if configured
        parsed = None
        if 'PARSER_CONFIG' in globals() and PARSER_CONFIG and result['extracted']:
            parsed = apply_parser(result['extracted'])
            if isinstance(parsed, dict) and PARSER_CONFIG.get('unstack_json'):
                parsed = json.dumps(parsed)
            elif parsed is not None and not isinstance(parsed, str):
                parsed = str(parsed)

        # Save to database
        await save_result(
            db, task_id, model_config, repeat_index, prompt, variable_values, variable_attributes,
            body, result['response_data'], result['extracted'], result.get('reasoning'),
            parsed, result['success'], result['error']
        )

        # Update counters (async-safe)
        async with counter_lock:
            if result['success']:
                success_count += 1
            else:
                fail_count += 1

        # Show failures in progress bar
        if not result['success'] and progress_bar:
            progress_bar.write(f"[WARN] {model_config['name']}: {result['error']}")

        if progress_bar:
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        return 'success' if result['success'] else 'failed'

    except Exception as e:
        # All retries exhausted
        error_str = str(e)
        await save_result(db, task_id, model_config, repeat_index, prompt, variable_values,
                         variable_attributes, body, None, None, None, None, False, error_str)

        async with counter_lock:
            fail_count += 1

        if progress_bar:
            progress_bar.write(f"[ERROR] {model_config['name']}: {error_str[:80]}")
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        return 'failed'`}generateCliAndUtilities(e){return`${e?`# ============================================================================
# CLI AND UTILITIES
# ============================================================================

`:""}def parse_args():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="Production LLM experiment runner")
    parser.add_argument("--output", "-o", choices=["csv", "tsv", "json", "jsonl", "excel", "parquet"],
                       default="csv", help="Export format (default: csv)")
    parser.add_argument("--concurrent", "-c", type=int, default=10,
                       help="Concurrent requests (default: 10)")
    parser.add_argument("--rate-limit", "-r", type=float, default=5.0,
                       help="Max requests/second (default: 5.0)")
    parser.add_argument("--timeout", "-t", type=int, default=90,
                       help="Request timeout seconds (default: 90)")
    parser.add_argument("--output-file", "-f", type=str, help="Output filename (auto-generated if omitted)")
    parser.add_argument("--resume", action="store_true", help="Resume from existing database")
    parser.add_argument("--db-file", type=str, help="Database file to use/resume from")
    return parser.parse_args()


def check_api_keys():
    """Verify all required API keys are available (exits if missing)."""
    print("Checking API keys...")
    required_keys = set()
    missing = []

    for model in MODELS:
        if model['provider'] != 'ollama':
            env_var = f"{model['provider'].upper()}_API_KEY"
            required_keys.add((env_var, model['provider']))

    for env_var, provider in required_keys:
        if os.getenv(env_var):
            count = len([m for m in MODELS if m['provider'] == provider])
            print(f"  {env_var}: OK ({count} models)")
        else:
            missing.append((env_var, provider))

    if missing:
        print(f"\\nMissing API keys:")
        for env_var, provider in missing:
            count = len([m for m in MODELS if m['provider'] == provider])
            print(f"  {env_var} (needed for {count} models)")
        print("\\nSet missing keys:")
        for env_var, _ in missing:
            print(f"  export {env_var}='your-key-here'")
        sys.exit(1)

    print(f"All {len(MODELS)} models ready\\n")


def get_output_filename(args, db_file):
    """Generate output filename from format and timestamp."""
    if args.output_file:
        return args.output_file

    timestamp = db_file.split("results_")[1].split(".db")[0] if "results_" in db_file else datetime.now().strftime("%Y%m%d_%H%M%S")
    ext = {
        "csv": ".csv", "tsv": ".tsv", "json": ".json",
        "jsonl": ".jsonl", "excel": ".xlsx", "parquet": ".parquet"
    }
    return f"results_{timestamp}{ext[args.output]}"`}generateExportFunction(e){return`

def apply_column_typing(df):
    """Re-type parsed_* columns to match the app's whole-column policy: a column
    of faithful string-numbers becomes numeric; identifiers and mixed columns
    stay text. Uses infer_column_type/coerce_cell defined with the parser."""
    if 'infer_column_type' not in globals():
        return df
    for col in [c for c in df.columns if c.startswith('parsed')]:
        col_type = infer_column_type(df[col].tolist())
        if col_type in ('number', 'boolean'):
            df[col] = df[col].apply(lambda v: coerce_cell(v, col_type))
    return df

${e?.unstackJson?`

# Faithful reproduction of the app's discoverParsedFields / extractParsedFieldValue
# (src/export/shared/parsed-content-discovery.ts, field-extractor.ts). NOT
# pd.json_normalize: the app emits a column for EVERY key including parent object
# nodes, recurses plain objects up to depth 4, sorts columns by id, and renders
# object/array values as compact JSON (JSON.stringify), so this must too.
def discover_parsed_columns(records, prefix='parsed', max_depth=4):
    """Union of parsed_<path> column ids across all records, sorted by id.
    Recurses into plain objects (not arrays) up to max_depth, emitting a column
    for each key AND each parent object node (matching the app)."""
    seen = {}

    def collect(obj, path_prefix, depth):
        for key, value in obj.items():
            path = (path_prefix + '.' + key) if path_prefix else key
            seen[prefix + '_' + path] = True
            if depth < max_depth and isinstance(value, dict):
                collect(value, path, depth + 1)

    for rec in records:
        if isinstance(rec, dict):
            collect(rec, '', 1)
    return sorted(seen.keys())


def extract_parsed_cell(record, field_id, prefix='parsed'):
    """One cell for field_id from a single record's parsed object. Walks the
    dot-path; object/array leaves become compact JSON (matching JSON.stringify);
    primitives keep their real type; a missing key yields None (empty cell)."""
    if not isinstance(record, dict):
        return None
    value = record
    for k in field_id[len(prefix) + 1:].split('.'):
        if not isinstance(value, dict):
            return None
        value = value.get(k)
    if value is None:
        return None
    if isinstance(value, (dict, list)):
        return json.dumps(value, separators=(',', ':'), ensure_ascii=False)
    return value


def unstack_json_column(df, col_name):
    """Unstack a JSON column into one column per key, faithfully to the app."""
    try:
        records = [
            json.loads(x) if x and x != 'null' and not str(x).startswith('PARSER_ERROR') else {}
            for x in df[col_name].tolist()
        ]
        columns = discover_parsed_columns(records, 'parsed')
        parsed_df = pd.DataFrame(
            {col: [extract_parsed_cell(rec, col, 'parsed') for rec in records] for col in columns},
            index=df.index,
            columns=columns
        )
        df = pd.concat([df.drop(col_name, axis=1), parsed_df], axis=1)
        print(f"  Unstacked {len(columns)} JSON fields")
        return df
    except Exception as e:
        print(f"[WARN] JSON unstacking failed: {e}")
        return df
`:""}
def sanitize_xlsx_text(value, _xml_bad={c: 0xFFFD for c in [*range(0x00, 0x09), 0x0B, 0x0C, *range(0x0E, 0x20), *range(0xD800, 0xE000), 0xFFFE, 0xFFFF]}):
    """Replace characters that are invalid in XML 1.0 (and so rejected by openpyxl's
    lxml backend when writing .xlsx) with the Unicode replacement character U+FFFD.
    Tab, newline and carriage return are preserved; non-strings pass through."""
    return value.translate(_xml_bad) if isinstance(value, str) else value

async def export_results(db_file, output_format, output_file):
    """Export database results to specified format with graceful fallback."""
    print(f"\\nExporting to {output_file} ({output_format})...")

    try:
        import sqlite3
        conn = sqlite3.connect(db_file)
        df = pd.read_sql_query("SELECT * FROM results ORDER BY timestamp", conn)
        conn.close()

        if df.empty:
            print("No results to export")
            return

        # Unstack JSON parser results if configured
        if 'PARSER_CONFIG' in globals() and PARSER_CONFIG and PARSER_CONFIG.get('unstack_json'):
            if 'parsed_json' in df.columns:
                print("Unstacking JSON fields...")
                df = unstack_json_column(df, 'parsed_json')

        # Type parsed columns once, at read time, matching the app's policy.
        df = apply_column_typing(df)

        # Export with format-specific fallbacks
        success = False
        try:
            if output_format == "csv":
                df.to_csv(output_file, index=False)
                success = True
            elif output_format == "tsv":
                df.to_csv(output_file, sep='\\t', index=False)
                success = True
            elif output_format == "json":
                df.to_json(output_file, orient='records', indent=2)
                success = True
            elif output_format == "jsonl":
                df.to_json(output_file, orient='records', lines=True)
                success = True
            elif output_format == "excel":
                try:
                    df_excel = df.copy()
                    replaced_illegal = False
                    for _col in df_excel.columns:
                        if df_excel[_col].dtype == object:
                            _cleaned = df_excel[_col].map(sanitize_xlsx_text)
                            if not _cleaned.equals(df_excel[_col]):
                                replaced_illegal = True
                            df_excel[_col] = _cleaned
                    if replaced_illegal:
                        print("Note: replaced XML-incompatible characters with U+FFFD for Excel; originals preserved in the database and CSV/JSON exports.")
                    df_excel.to_excel(output_file, index=False, engine='openpyxl')
                    success = True
                except ImportError:
                    print("Excel requires openpyxl. Falling back to CSV...")
                    output_file = output_file.replace('.xlsx', '.csv')
                    df.to_csv(output_file, index=False)
                    success = True
            elif output_format == "parquet":
                try:
                    df.to_parquet(output_file, index=False)
                    success = True
                except ImportError:
                    print("Parquet requires pyarrow. Falling back to CSV...")
                    output_file = output_file.replace('.parquet', '.csv')
                    df.to_csv(output_file, index=False)
                    success = True

            if success and Path(output_file).exists():
                size = Path(output_file).stat().st_size
                print(f"Exported {len(df)} rows to {output_file} ({size:,} bytes)")
                if len(df) > 0 and 'success' in df.columns:
                    rate = df['success'].sum() / len(df) * 100
                    print(f"Success rate: {rate:.1f}% ({df['success'].sum()}/{len(df)})")

        except Exception as e:
            print(f"Export failed: {e}")
            print(f"Data still available in: {db_file}")

    except Exception as e:
        print(f"Database read failed: {e}")`}generateMainFunction(e,t){const s=e.type==="template";return`${t?`# ============================================================================
# MAIN EXECUTION
# ============================================================================

`:""}async def main():
${t?`    """
    Main orchestration function.

    Flow:
    1. Parse CLI arguments and check API keys
    2. Setup or resume database
    3. Generate task list (Cartesian product of models × variables × repeats)
    4. Execute tasks with rate limiting and progress tracking
    5. Show summary and export results
    """`:'    """Run all the API calls."""'}
    global progress_bar, counter_lock

    # Initialize the lock inside the event loop (Python 3.10+ compatibility)
    counter_lock = asyncio.Lock()

    args = parse_args()
    check_api_keys()

    # Setup or resume database
    if args.db_file and args.resume:
        db_file = args.db_file
        print(f"Resuming from: {db_file}")
        if not os.path.exists(db_file):
            print(f"Database not found: {db_file}")
            sys.exit(1)
        db = await aiosqlite.connect(db_file)
    else:
        db, db_file = await setup_database()

    ${t?`    # Generate task list (Cartesian product of models × variables × repeats)
    # Each task is one API call with a specific model, variable combination, and repeat index`:"    # Create all tasks (model + prompt combinations)"}
    print("Generating tasks...")
    tasks = []
    import itertools
    import hashlib

    for model_idx, model in enumerate(MODELS):
        ${s?`${t?`        # Extract values (handle both simple and attributed formats)
        # Simple: ["val1", "val2"]
        # Attributed: [{"value": "val1", "attributes": {...}}, ...]`:"        # Extract values for cartesian product, handling both simple and attributed formats"}
        var_names = list(VARIABLES.keys())
        var_value_lists = []
        for name in var_names:
            var_data = VARIABLES[name]
            if var_data and isinstance(var_data[0], dict) and 'value' in var_data[0]:
                var_value_lists.append([item['value'] for item in var_data])
            else:
                var_value_lists.append(var_data)

        # Generate all combinations (Cartesian product)
        for combination in itertools.product(*var_value_lists):
            # Build prompt by replacing {{variable}} placeholders
            prompt = PROMPT_TEMPLATE
            variable_values = {}
            variable_attributes = {}

            for var_name, value in zip(var_names, combination):
                # Match the app: {{ name }} with optional surrounding whitespace,
                # and coerce non-string values to str.
                _pat = r"\\{\\{\\s*" + re.escape(var_name) + r"\\s*\\}\\}"
                prompt = re.sub(_pat, lambda _m: str(value) if value is not None else "", prompt)
                variable_values[var_name] = value

                # Extract attributes if they exist (for attributed format)
                var_data = VARIABLES[var_name]
                if var_data and isinstance(var_data[0], dict) and 'value' in var_data[0]:
                    matching = next((item for item in var_data if item['value'] == value), None)
                    if matching and 'attributes' in matching:
                        variable_attributes[var_name] = matching['attributes']

            # Resolve the system prompt (if any) with the same variable values
            system_prompt = ""
            if 'SYSTEM_PROMPT_TEMPLATE' in globals():
                system_prompt = SYSTEM_PROMPT_TEMPLATE
                for var_name, value in zip(var_names, combination):
                    _spat = r"\\{\\{\\s*" + re.escape(var_name) + r"\\s*\\}\\}"
                    system_prompt = re.sub(_spat, lambda _m: str(value) if value is not None else "", system_prompt)

            # Repeat each combination REPEAT_COUNT times
            for repeat_idx in range(REPEAT_COUNT):
                ${t?`                # Generate stable task ID (model index + content hash + repeat index)
                # This ensures same task always gets same ID (for resume functionality)`:`                # Create task ID using model index + content hash + repeat index
                # Model index ensures different configs of same model are unique`}
                content_key = json.dumps(variable_values, sort_keys=True)
                stable_hash = hashlib.sha256(content_key.encode()).hexdigest()[:16]
                task_id = f"m{model_idx}_{stable_hash}_r{repeat_idx}"
                tasks.append((task_id, model, repeat_idx, prompt, variable_values, variable_attributes, system_prompt))`:`# Repeat each test REPEAT_COUNT times
        prompt = PROMPT
        for repeat_idx in range(REPEAT_COUNT):
            task_id = f"{model['name']}_single_r{repeat_idx}"
            tasks.append((task_id, model, repeat_idx, prompt, {}, {}, ""))`}

    # Check progress
    already_completed = 0
    for task_id, *_ in tasks:
        if await already_done(db, task_id):
            already_completed += 1
    remaining = len(tasks) - already_completed

    print(f"Total: {len(tasks)} | Done: {already_completed} | Remaining: {remaining}")

    if remaining > 0:
        print(f"\\nRunning {remaining} API calls...")
        print(f"Rate limits: {args.concurrent} concurrent, {args.rate_limit} req/sec\\n")

        from tqdm.asyncio import tqdm
        progress_bar = tqdm(total=remaining, desc="API Calls", unit="call")

        async with httpx.AsyncClient(timeout=httpx.Timeout(connect=5.0, read=float(args.timeout), write=5.0, pool=5.0)) as client:
            # Build list of API calls (skip already done)
            api_calls = []
            for task_id, model, repeat_idx, prompt, variable_values, variable_attributes, system_prompt in tasks:
                if not await already_done(db, task_id):
                    api_calls.append(
                        functools.partial(call_api, client, db, task_id, model, repeat_idx, prompt, variable_values, variable_attributes, system_prompt)
                    )

            await aiometer.run_all(api_calls, max_at_once=args.concurrent, max_per_second=args.rate_limit)

        progress_bar.close()
    else:
        print("All tasks already completed!")

    # Show summary
    print("\\n" + "="*50)
    print("FINAL RESULTS")
    print("="*50)

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
        status = "OK" if rate == 100 else "PARTIAL" if rate > 0 else "FAIL"
        print(f"[{config_idx + 1}] {status:7s} {display_name}: {successful}/{total} ({rate:.0f}%)")

    print(f"\\nDatabase: {db_file}")
    print("  Query: SELECT * FROM results WHERE success = 0;")

    await db.close()

    # Export
    output_file = get_output_filename(args, db_file)
    await export_results(db_file, args.output, output_file)`}generateExecutor(){return`

if __name__ == "__main__":
    asyncio.run(main())`}}class Y{getTemplate(){return{id:"production-spreadsheet",name:"Production Script (Spreadsheet)",description:"Production-grade Python script for spreadsheet trials. Reads dataset from parquet file with SQLite persistence, professional retries, and progress tracking.",pythonVersion:"3.8",requiredImports:["httpx","aiometer","aiosqlite","tenacity","tqdm","pandas"],templateCode:"PRODUCTION_SPREADSHEET_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,t,s={}){if(e.type!=="spreadsheet"||!e.spreadsheetConfig)throw new Error("ProductionSpreadsheetTemplate requires a spreadsheet trial");const{includeComments:r=!0,parser:a,externalizeJsonrepair:n=!1}=s,{promptPattern:o,systemPrompt:i}=e.spreadsheetConfig,u=this.buildResolvedConfigurations(e),l=this.discoverParameterColumns(u);return[this.generateHeader(e,r),this.generateImports(a,n),this.generateJsonrepairRuntime(a,n),this.generateSettings(o,i,e.repeatCount||1,r),this.generateParserConfig(a,r),this.generateParameterColumns(l,r),this.generateModelConfigs(u,r),this.generateDatasetLoading(r),this.generatePromptBuilder(r),this.generateDatabaseFunctions(l,a),this.generateParserFunctions(a),this.generateApiCallFunction(a),this.generateMainFunction(e),this.generateExportFunction(a),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const t=[],s=new Map,r=new Map;for(const a of e.configurations){const n=a.modelSnapshot?.displayName||a.modelId;s.set(n,(s.get(n)||0)+1),r.set(n,0)}for(let a=0;a<e.configurations.length;a++){const n=e.configurations[a],o=n.providerSnapshot;if(!o)continue;const i=o.api?.baseUrl||"https://api.example.com",u=o.api?.endpoint||"/v1/api",l={"Content-Type":"application/json",...o.headers};o.auth?.type==="bearer"?l.Authorization="Bearer {{API_KEY}}":o.auth?.type==="header"&&o.auth.header&&(l[o.auth.header]="{{API_KEY}}");const d="@@AUDITOMATIC_PROMPT@@",_="@@AUDITOMATIC_SYSTEM@@",h=!!e.spreadsheetConfig?.systemPrompt,c=G(o,n.modelId,n.parameters||{},d,h?_:void 0),y=JSON.parse(JSON.stringify(c).split(d).join("{{PROMPT}}").split(_).join("{{SYSTEM_PROMPT}}")),b=n.provider.split("-")[0],p=n.modelSnapshot?.displayName||n.modelId;let f=p;if(s.get(p)>1){const E=r.get(p)+1;r.set(p,E),f=`${p} [Config ${E}]`}const v=this.getExtractPaths(n);t.push({config_index:a,name:p,display_name:f,provider:b,url:i+u,headers:l,body:y,parameters:n.parameters||{},extract_paths:v.contentPaths,reasoning_paths:v.reasoningPaths})}return t}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const s=t.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const a=[];r.contentPath&&a.push(r.contentPath),r.fallbackPaths&&a.push(...r.fallbackPaths);const n=[];return r.reasoningPath&&n.push(r.reasoningPath),r.reasoningFallbackPaths&&n.push(...r.reasoningFallbackPaths),{contentPaths:a.length>0?a:["response"],reasoningPaths:n}}discoverParameterColumns(e){const t=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateHeader(e,t){const s="#!/usr/bin/env python3";return t?`${s}
"""
Production API Testing Script (Spreadsheet Mode)
Reads dataset from data.parquet file
Requirements: pip install httpx aiometer aiosqlite tenacity tqdm pandas
"""`:s}generateImports(e,t=!1){const s=`import asyncio
import httpx
import aiosqlite
import aiometer
import json
import os
import argparse
import sys
import threading
from datetime import datetime
from tenacity import retry, stop_after_attempt, wait_exponential
import functools
import pandas as pd
from pathlib import Path
import re`;return e?.type==="regex"?s:e?.type==="javascript"?`${s}
try:
    from py_mini_racer import MiniRacer
    JS_AVAILABLE = True
except ImportError:
    JS_AVAILABLE = False
    print("WARN:  WARNING: py-mini-racer not installed. JavaScript parser will not work.")
    print("   Install with: pip install py-mini-racer")${t?`
from auditomatic_jsonrepair import install_jsonrepair`:""}`:(e?.type==="python",s)}generateJsonrepairRuntime(e,t=!1){return e?.type!=="javascript"||t?null:B()}generateSettings(e,t,s,r){let n=`${r?`# === EXPERIMENT CONFIGURATION ===
`:""}PROMPT_PATTERN = ${JSON.stringify(e)}`;return t&&(n+=`
SYSTEM_PROMPT_PATTERN = ${JSON.stringify(t)}`),n+=`
REPEAT_COUNT = ${s}  # Number of times to repeat each row`,n}generateParserConfig(e,t){if(!e)return null;const s=t?`
# === PARSER CONFIGURATION ===
# Frozen snapshot of the parser as it ran for this trial (captured at trial creation).
`:`
`,r={id:e.id,name:e.name,type:e.type,output_type:e.outputType,unstack_json:e.unstackJson||!1,config:e.config},a=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}PARSER_CONFIG = ${a}`}generateParameterColumns(e,t){const s=t?`# === DISCOVERED PARAMETERS ===
# These are all unique parameters found across model configurations
`:"",r=JSON.stringify(e);return`${s}PARAMETER_COLUMNS = ${r}`}generateModelConfigs(e,t){const s=t?`
# === MODELS TO TEST ===
`:"",r=JSON.stringify(e,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${r}`}generateDatasetLoading(e){return`${e?`# === LOAD DATASET ===
# Read the dataset from the parquet file
`:""}def load_dataset():
    """Load dataset from data.parquet file."""
    if not os.path.exists('data.parquet'):
        print("ERROR: Error: data.parquet file not found!")
        print("   Make sure data.parquet is in the same directory as this script")
        sys.exit(1)

    df = pd.read_parquet('data.parquet')
    print(f"Stats: Loaded {len(df)} rows with {len(df.columns)} columns: {list(df.columns)}")
    return df`}generatePromptBuilder(e){return`${e?`# === BUILD PROMPTS ===
# Replace {{column}} placeholders with actual row values
`:""}def build_prompt(row, pattern):
    """Replace {{column}} placeholders in pattern with row values."""
    prompt = pattern
    for col, value in row.items():
        # Match the app: {{ col }} with optional surrounding whitespace
        pat = r"\\{\\{\\s*" + re.escape(str(col)) + r"\\s*\\}\\}"
        prompt = re.sub(pat, lambda _m: str(value) if value is not None else "", prompt)
    return prompt`}generateDatabaseFunctions(e,t){let s="";return t&&(t.unstackJson?s=`,
            parsed_json TEXT`:s=`,
            parsed_content TEXT`),`# === DATABASE ===
def sanitize_column_name(col_name):
    """Sanitize column name for SQLite compatibility."""
    # Replace problematic characters with underscores
    import re
    sanitized = re.sub(r'[^a-zA-Z0-9_]', '_', str(col_name))
    # Ensure it doesn't start with a number
    if sanitized and sanitized[0].isdigit():
        sanitized = 'col_' + sanitized
    return sanitized or 'col_unnamed'

async def setup_database(dataset_columns):
    """Create a database to store all results."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    db_file = f"results_{timestamp}.db"

    # Prefix ALL dataset columns with 'dataset_' to avoid any conflicts
    # Build mapping from original column names to database column names
    column_name_mapping = {}  # original -> database column name
    sanitized_dataset_columns = []
    for col in dataset_columns:
        sanitized = sanitize_column_name(col)
        db_col_name = 'dataset_' + sanitized
        sanitized_dataset_columns.append(db_col_name)
        column_name_mapping[col] = db_col_name

    # Build dynamic columns based on PARAMETERS and dataset columns (with quotes for reserved keywords)
    parameter_columns = ", ".join([f'"{sanitize_column_name("param_" + param_name)}" TEXT' for param_name in PARAMETER_COLUMNS])
    dataset_column_defs = ", ".join([f'"{col_name}" TEXT' for col_name in sanitized_dataset_columns])

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
            {dataset_column_defs},
            request_payload TEXT,
            response TEXT,
            extracted TEXT,
            reasoning TEXT${s},
            success BOOLEAN,
            error TEXT,
            timestamp TEXT
        )
    ''')
    await db.commit()

    print(f"Database: Results will be saved to: {db_file}")
    return db, db_file, column_name_mapping

async def already_done(db, task_id):
    """Check if we already completed this task."""
    cursor = await db.execute('SELECT id FROM results WHERE id = ?', (task_id,))
    result = await cursor.fetchone()
    return result is not None

async def save_result(db, column_name_mapping, task_id, model_config, repeat_index, prompt, row_values, request_payload, response, extracted, reasoning, parsed, success, error):
    """Save a result to the database."""
    # Build dynamic column list and values
    base_columns = ['id', 'config_index', 'model_display_name', 'model', 'endpoint', 'repeat_index', 'prompt']
    parameter_columns = [f'param_{p}' for p in PARAMETER_COLUMNS]
    # Use the column_name_mapping to get database column names for dataset columns
    dataset_columns = [column_name_mapping[col] for col in row_values.keys()]

    # Add parsed column if PARSER_CONFIG exists
    if 'PARSER_CONFIG' in globals() and PARSER_CONFIG:
        if PARSER_CONFIG.get('unstack_json'):
            end_columns = ['request_payload', 'response', 'extracted', 'reasoning', 'parsed_json', 'success', 'error', 'timestamp']
        else:
            end_columns = ['request_payload', 'response', 'extracted', 'reasoning', 'parsed_content', 'success', 'error', 'timestamp']
    else:
        end_columns = ['request_payload', 'response', 'extracted', 'reasoning', 'success', 'error', 'timestamp']

    all_columns = base_columns + parameter_columns + dataset_columns + end_columns
    # Quote all column names for SQL
    quoted_columns = ', '.join([f'"{col}"' for col in all_columns])
    placeholders = ', '.join(['?' for _ in all_columns])

    base_values = [task_id, model_config['config_index'], model_config['display_name'], model_config['name'], model_config['url'], repeat_index, prompt]
    parameter_values = [json.dumps(v) if isinstance(v, (dict, list)) else v for v in [model_config['parameters'].get(p, '') for p in PARAMETER_COLUMNS]]
    dataset_values = [row_values[col] for col in row_values.keys()]

    # Build end values with or without parsed content
    if 'PARSER_CONFIG' in globals() and PARSER_CONFIG:
        end_values = [
            json.dumps(request_payload) if request_payload else None,
            json.dumps(response) if response else None,
            extracted, reasoning, parsed, success, error, datetime.now().isoformat()
        ]
    else:
        end_values = [
            json.dumps(request_payload) if request_payload else None,
            json.dumps(response) if response else None,
            extracted, reasoning, success, error, datetime.now().isoformat()
        ]

    all_values = base_values + parameter_values + dataset_values + end_values

    await db.execute(f'INSERT INTO results ({quoted_columns}) VALUES ({placeholders})', all_values)
    await db.commit()

# === GLOBAL TRACKING FOR REAL-TIME UPDATES ===
success_count = 0
fail_count = 0
progress_bar = None
counter_lock = threading.Lock()`}generateApiCallFunction(e){return`# === MAKE API CALLS ===
def get_value_at_path(obj, path):
    """Resolve a path like choices[0].message.content or a JSONPath filter
    content[?(@.type=='thinking')].thinking (matches the app's resolver)."""
    if not isinstance(obj, (dict, list)) or not path:
        return None
    try:
        m = re.match(r"^(.+?)\\[\\?\\(@\\.(.+?)==(?:'|\\")(.+?)(?:'|\\")\\)\\]\\.(.+)$", path)
        if m:
            array_path, field, value, result_path = m.group(1), m.group(2), m.group(3), m.group(4)
            arr = get_value_at_path(obj, array_path)
            if not isinstance(arr, list):
                return None
            matched = next((it for it in arr if isinstance(it, dict) and it.get(field) == value), None)
            if matched is None:
                return None
            return get_value_at_path(matched, result_path)
        parts = [p for p in re.split(r"[.\\[\\]]", path) if p]
        current = obj
        for part in parts:
            if current is None:
                return None
            if part.isdigit():
                idx = int(part)
                if not isinstance(current, list) or idx >= len(current):
                    return None
                current = current[idx]
            else:
                if not isinstance(current, dict):
                    return None
                current = current.get(part)
        return current
    except Exception:
        return None


@retry(stop=stop_after_attempt(10), wait=wait_exponential(min=1, max=30), before_sleep=lambda retry_state: print(f"Retry Retry attempt {retry_state.attempt_number} for {retry_state.args[5]} after {retry_state.outcome.exception()}"))
async def _call_api_with_retry(client, url, headers, body, extract_paths, model_name, model_config):
    """Make the API call with automatic retries for transient failures."""
    try:
        response = await client.post(url, json=body, headers=headers)
    except Exception as e:
        print(f"Network error {model_name}: Network error - {str(e)[:100]}")
        raise Exception(f"Network error: {str(e)}")

    status_code = response.status_code
    raw_response_text = response.text

    if status_code in [401, 403]:
        error_msg = f"Authentication failed ({status_code})"
        print(f"Checking API keys {model_name}: {error_msg} - {raw_response_text[:200]}")
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

    if status_code in [429, 500, 502, 503, 504]:
        error_msg = f"Rate limited or server overload ({status_code})"
        print(f"Retrying {model_name}: {error_msg} - {raw_response_text[:100]}")
        raise Exception(f"{error_msg} - will retry")

    try:
        response_data = response.json()
    except json.JSONDecodeError as e:
        error_msg = f"Invalid JSON response (HTTP {status_code}): {str(e)}"
        print(f"Invalid JSON {model_name}: {error_msg} - Raw: {raw_response_text[:200]}")
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

    if response_data and response_data.get('error') is not None:
        error_msg = str(response_data.get('error'))
        if status_code >= 500:
            print(f"Server error {model_name}: Server error {status_code} - {error_msg[:100]}")
            raise Exception(f"Server error: {error_msg}")
        print(f"WARN:  {model_name}: API error - {error_msg[:100]}")
        return {
            'success': False,
            'response_data': response_data,
            'extracted': None,
            'error': f"API error: {error_msg}"
        }

    extracted = None
    attempted_paths = []
    for path in extract_paths:
        attempted_paths.append(path)
        extracted_raw = get_value_at_path(response_data, path)
        if extracted_raw is not None:
            if isinstance(extracted_raw, list):
                extracted = ' '.join(str(e) for e in extracted_raw if e) if extracted_raw else None
            else:
                extracted = extracted_raw
            if extracted:
                break

    reasoning = None
    reasoning_paths = model_config.get('reasoning_paths', [])
    if reasoning_paths:
        for path in reasoning_paths:
            reasoning_raw = get_value_at_path(response_data, path)
            if reasoning_raw is not None:
                if isinstance(reasoning_raw, list):
                    reasoning = ' '.join(str(r) for r in reasoning_raw if r) if reasoning_raw else None
                else:
                    reasoning = reasoning_raw
                if reasoning:
                    break

    success = extracted is not None
    if success:
        error = None
    elif (response_data.get('choices') or [{}])[0].get('finish_reason') == 'length':
        error = "Response truncated (finish_reason=length) - increase max_tokens"
    else:
        error = f"Could not extract answer. Tried: {', '.join(attempted_paths)}"
    return {
        'success': success,
        'response_data': response_data,
        'extracted': str(extracted) if extracted is not None else None,
        'reasoning': str(reasoning) if reasoning is not None else None,
        'error': error,
        'attempted_paths': attempted_paths
    }

async def call_api(client, db, column_name_mapping, task_id, model_config, repeat_index, prompt, row_values, system_prompt=""):
    """Call one API and save the result."""
    global success_count, fail_count, progress_bar

    cursor = await db.execute('SELECT success FROM results WHERE id = ?', (task_id,))
    result = await cursor.fetchone()
    if result is not None and result[0]:
        return None

    api_key = ""
    if model_config['provider'] != 'ollama':
        env_var = f"{model_config['provider'].upper()}_API_KEY"
        api_key = os.getenv(env_var, "")

    headers = {k: v.replace('{{API_KEY}}', api_key) for k, v in model_config['headers'].items()}

    body_str = json.dumps(model_config['body'])
    prompt_escaped = json.dumps(prompt)[1:-1]
    body_str = body_str.replace('{{PROMPT}}', prompt_escaped)
    if '{{SYSTEM_PROMPT}}' in body_str:
        system_escaped = json.dumps(str(system_prompt))[1:-1]
        body_str = body_str.replace('{{SYSTEM_PROMPT}}', system_escaped)
    body = json.loads(body_str)

    try:
        result = await _call_api_with_retry(
            client,
            model_config['url'],
            headers,
            body,
            model_config['extract_paths'],
            model_config['name'],
            model_config
        )

        # Apply parser if configured
        parsed = None
        if 'PARSER_CONFIG' in globals() and PARSER_CONFIG and result['extracted']:
            parsed = apply_parser(result['extracted'])
            # For JSON unstacking, store as JSON string
            if isinstance(parsed, dict) and PARSER_CONFIG.get('unstack_json'):
                parsed = json.dumps(parsed)
            elif parsed is not None and not isinstance(parsed, str):
                parsed = str(parsed)

        await save_result(
            db, column_name_mapping, task_id, model_config, repeat_index, prompt, row_values,
            body, result['response_data'], result['extracted'], result.get('reasoning'),
            parsed, result['success'], result['error']
        )

        with counter_lock:
            if result['success']:
                success_count += 1
            else:
                fail_count += 1

        if not result['success'] and progress_bar:
            progress_bar.write(f"WARN:  {model_config['name']}: {result['error']}")

        if progress_bar:
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        return 'success' if result['success'] else 'failed'

    except Exception as e:
        error_str = str(e)
        await save_result(db, column_name_mapping, task_id, model_config, repeat_index, prompt, row_values, body, None, None, None, None, False, error_str)

        with counter_lock:
            fail_count += 1

        if progress_bar:
            progress_bar.write(f"ERROR: {model_config['name']}: {error_str[:80]}")
            progress_bar.update(1)
            progress_bar.set_postfix({'✓': success_count, '✗': fail_count, 'last': model_config['name']})

        return 'failed'`}generateMainFunction(e){return`def parse_args():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description="Run API experiments with spreadsheet data")
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
    print("Checking API keys Checking API keys...")

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
            model_count = len([m for m in MODELS if m['provider'] == provider])
            print(f"OK: {env_var}: Found (enables {model_count} models)")
        else:
            missing_keys.append((env_var, provider))

    for model in MODELS:
        provider = model['provider']
        if provider == 'ollama':
            available_models.append(model['name'])
        else:
            env_var = f"{provider.upper()}_API_KEY"
            if os.getenv(env_var):
                available_models.append(model['name'])

    if missing_keys:
        print(f"\\nERROR: Missing API keys for {len(missing_keys)} providers:")
        for env_var, provider in missing_keys:
            model_count = len([m for m in MODELS if m['provider'] == provider])
            print(f"   {env_var} (required for {model_count} models)")

        print("\\nSetup: Please set the missing API keys:")
        for env_var, provider in missing_keys:
            print(f"   export {env_var}='your-key-here'")

        sys.exit(1)
    else:
        print(f"OK: All {len(MODELS)} models available!")

    return available_models

def get_output_filename(args, db_file):
    """Generate output filename based on format and timestamp."""
    if args.output_file:
        return args.output_file

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

def sanitize_xlsx_text(value, _xml_bad={c: 0xFFFD for c in [*range(0x00, 0x09), 0x0B, 0x0C, *range(0x0E, 0x20), *range(0xD800, 0xE000), 0xFFFE, 0xFFFF]}):
    """Replace characters that are invalid in XML 1.0 (and so rejected by openpyxl's
    lxml backend when writing .xlsx) with the Unicode replacement character U+FFFD.
    Tab, newline and carriage return are preserved; non-strings pass through."""
    return value.translate(_xml_bad) if isinstance(value, str) else value

async def export_results(db_file, output_format, output_file):
    """Export results from SQLite to specified format using pandas."""
    print(f"\\nExporting Exporting results to {output_file} ({output_format})...")

    try:
        import sqlite3
        conn = sqlite3.connect(db_file)
        df = pd.read_sql_query("SELECT * FROM results ORDER BY timestamp", conn)
        conn.close()

        if df.empty:
            print("WARN:  No results to export")
            return

        # Unstack JSON if parser has unstack_json flag
        if 'PARSER_CONFIG' in globals() and PARSER_CONFIG and PARSER_CONFIG.get('unstack_json'):
            if 'parsed_json' in df.columns:
                print("Stats: Unstacking JSON fields into separate columns...")
                df = unstack_json_column(df, 'parsed_json')

        # Type parsed columns once at read time, matching the app's policy.
        if 'apply_column_typing' in globals():
            df = apply_column_typing(df)

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
                    df_excel = df.copy()
                    replaced_illegal = False
                    for _col in df_excel.columns:
                        if df_excel[_col].dtype == object:
                            _cleaned = df_excel[_col].map(sanitize_xlsx_text)
                            if not _cleaned.equals(df_excel[_col]):
                                replaced_illegal = True
                            df_excel[_col] = _cleaned
                    if replaced_illegal:
                        print("   Note: replaced XML-incompatible characters with U+FFFD for Excel; originals preserved in the database and CSV/JSON exports.")
                    df_excel.to_excel(output_file, index=False, engine='openpyxl')
                    export_succeeded = True
                except ImportError:
                    print(f"WARN:  Excel export requires 'openpyxl'. Install with: pip install openpyxl")
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
                    print(f"WARN:  Parquet export requires 'pyarrow' or 'fastparquet'. Install with: pip install pyarrow")
                    print(f"   Falling back to CSV export...")
                    fallback_file = output_file.replace('.parquet', '.csv')
                    df.to_csv(fallback_file, index=False)
                    output_file = fallback_file
                    export_succeeded = True

            if export_succeeded and Path(output_file).exists():
                file_size = Path(output_file).stat().st_size
                print(f"OK: Exported {len(df)} rows to {output_file} ({file_size:,} bytes)")

                if len(df) > 0:
                    success_rate = (df['success'].sum() / len(df) * 100) if 'success' in df.columns else 0
                    print(f"   Success rate: {success_rate:.1f}% ({df['success'].sum() if 'success' in df.columns else 0}/{len(df)})")

        except Exception as e:
            print(f"WARN:  Export failed: {e}")
            print(f"   Data remains available in SQLite database: {db_file}")

    except Exception as e:
        print(f"ERROR: Failed to read from database: {e}")
        print(f"   Database file: {db_file}")

# === MAIN RUNNER ===
async def main():
    """Run all the API calls."""
    global progress_bar

    args = parse_args()
    check_api_keys()

    # Load dataset from parquet file
    df = load_dataset()

    # Setup database and get column name mapping
    if args.db_file and args.resume:
        db_file = args.db_file
        print(f"Database: Resuming from database: {db_file}")
        if not os.path.exists(db_file):
            print(f"ERROR: Database file not found: {db_file}")
            sys.exit(1)
        db = await aiosqlite.connect(db_file)
        # Rebuild column_name_mapping for resume (same logic as setup_database)
        column_name_mapping = {}
        for col in df.columns.tolist():
            sanitized = sanitize_column_name(col)
            db_col_name = 'dataset_' + sanitized
            column_name_mapping[col] = db_col_name
    else:
        db, db_file, column_name_mapping = await setup_database(df.columns.tolist())

    # Create all tasks (model + row combinations)
    tasks = []
    import hashlib

    for model_idx, model in enumerate(MODELS):
        for row_idx, row in df.iterrows():
            # Build prompt from pattern
            prompt = build_prompt(row, PROMPT_PATTERN)

            # Build system prompt with the same row values (empty if no pattern)
            system_prompt = build_prompt(row, SYSTEM_PROMPT_PATTERN) if 'SYSTEM_PROMPT_PATTERN' in globals() else ""

            # Convert row to dict for database storage
            row_values = dict(row)

            # Repeat each row REPEAT_COUNT times
            for repeat_idx in range(REPEAT_COUNT):
                # Create stable task ID
                content_key = json.dumps({str(k): str(v) for k, v in row_values.items()}, sort_keys=True)
                stable_hash = hashlib.sha256(content_key.encode()).hexdigest()[:16]
                task_id = f"m{model_idx}_row{row_idx}_{stable_hash}_r{repeat_idx}"
                tasks.append((task_id, model, repeat_idx, prompt, row_values, system_prompt))

    # Check how many we already completed
    already_completed = 0
    for task_id, *_ in tasks:
        if await already_done(db, task_id):
            already_completed += 1

    remaining = len(tasks) - already_completed

    print(f"Stats: Total: {len(tasks)} | Done: {already_completed} | Remaining: {remaining}")

    if remaining == 0:
        print("OK: All tasks already completed!")
    else:
        print(f"\\nRunning Running {remaining} API calls...")
        print(f"   Rate limits: {args.concurrent} concurrent, {args.rate_limit} per second\\n")

    if remaining > 0:
        from tqdm.asyncio import tqdm
        progress_bar = tqdm(total=remaining, desc="API Calls", unit="call")

        async with httpx.AsyncClient(timeout=httpx.Timeout(connect=5.0, read=float(args.timeout), write=5.0, pool=5.0)) as client:
            api_calls = []
            for task_id, model, repeat_idx, prompt, row_values, system_prompt in tasks:
                if not await already_done(db, task_id):
                    api_calls.append(
                        functools.partial(call_api, client, db, column_name_mapping, task_id, model, repeat_idx, prompt, row_values, system_prompt)
                    )

            await aiometer.run_all(
                api_calls,
                max_at_once=args.concurrent,
                max_per_second=args.rate_limit
            )

        progress_bar.close()

    # Show summary
    print("\\n\\n" + "="*50)
    print("FINAL RESULTS FINAL RESULTS")
    print("="*50)

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
        status = "OK:" if rate == 100 else "WARN:" if rate > 0 else "ERROR:"
        print(f"[{config_idx + 1}] {status} {display_name}: {successful}/{total} ({rate:.0f}%)")

    print(f"\\nStats: View results: sqlite3 {db_file}")
    print("   Example: SELECT * FROM results WHERE success = 0;")

    await db.close()

    # Export results to specified format
    output_file = get_output_filename(args, db_file)
    await export_results(db_file, args.output, output_file)`}generateParserFunctions(e){if(!e)return null;const t=[];switch(e.type){case"regex":t.push(this.generateRegexParserFunction(e.config));break;case"javascript":t.push(this.generateJavaScriptParserFunction(e.config));break;case"python":t.push(this.generatePythonParserFunction(e.config));break}return t.push(this.generateBaseParserFunction()),t.join(`

`)}generateRegexParserFunction(e){return`# === REGEX PARSER ===
def apply_regex_parser(content):
    """Apply regex parser to extracted content."""
    try:
        pattern = PARSER_CONFIG["config"]["pattern"]
        flags_str = PARSER_CONFIG["config"].get("flags") or ""
        capture_group = PARSER_CONFIG["config"].get("captureGroup")

        # Support /pattern/flags form (matches the app's regex executor)
        slash = re.match(r'^/(.+)/([gimsuvy]*)$', pattern, re.DOTALL)
        if slash:
            pattern, flags_str = slash.group(1), slash.group(2)

        # flags is a JS-style string ("gim"), not a numeric bitmask
        re_flags = 0
        if "i" in flags_str: re_flags |= re.IGNORECASE
        if "m" in flags_str: re_flags |= re.MULTILINE
        if "s" in flags_str: re_flags |= re.DOTALL

        match = re.search(pattern, content, re_flags)
        if match:
            group_count = len(match.groups())
            if capture_group is not None and capture_group <= group_count:
                result = match.group(capture_group)
            else:
                # Default: first defined capture group, else whole match
                result = match.group(0)
                for i in range(1, group_count + 1):
                    if match.group(i) is not None:
                        result = match.group(i)
                        break
            # Try to parse as JSON if output_type is json
            if PARSER_CONFIG["output_type"] == "json":
                try:
                    return json.loads(result)
                except:
                    return result
            return result
        return None
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateJavaScriptParserFunction(e){return`# === JAVASCRIPT PARSER ===
def apply_javascript_parser(content):
    """Execute JavaScript parser using PyMiniRacer."""
    if not JS_AVAILABLE:
        return "PARSER_ERROR: py-mini-racer not installed"

    try:
        ctx = MiniRacer()
        install_jsonrepair(ctx)
        # Set content variable
        ctx.eval(f"var content = {json.dumps(content)};")

        # Execute parser code - wrap in IIFE if it contains 'return'
        code = PARSER_CONFIG["config"]["code"]
        if 'return ' in code and not code.strip().startswith('(function'):
            code = f"(function() {{ {code} }})()"

        # Store result in a variable so we can JSON.stringify it
        ctx.eval(f"var __parserResult = {code};")

        # Check if result is null/undefined
        is_null = ctx.eval("__parserResult === null || __parserResult === undefined")
        if is_null:
            return None

        # Convert to JSON string then parse to Python
        json_str = ctx.eval("JSON.stringify(__parserResult)")
        return json.loads(json_str)

    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generatePythonParserFunction(e){return`# === PYTHON PARSER ===
def apply_python_parser(content):
    """Execute Python parser."""
    try:
        code = PARSER_CONFIG["config"]["code"]
        function_name = PARSER_CONFIG["config"].get("functionName", "parse")

        # Create safe execution environment
        namespace = {
            "content": content,
            "json": json,
            "re": re
        }

        # Add imports if specified
        imports = PARSER_CONFIG["config"].get("imports", [])
        for imp in imports:
            try:
                namespace[imp] = __import__(imp)
            except ImportError:
                pass  # Silently skip unavailable imports

        # Execute parser code
        exec(code, namespace)
        if function_name in namespace:
            result = namespace[function_name](content)
            return result
        return None
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateBaseParserFunction(){return`# === COLUMN TYPING (Type-2) — mirrors the app's shared column-typing policy.
# Parsers store a faithful value; whether a column is numeric/boolean is a
# whole-column decision applied at export, so this script reproduces the app
# instead of coercing per cell. Numeric strings count only in canonical form so
# identifiers ("07030") stay text; ambiguous values become null.
_BOOL_TRUE = {"true", "yes", "1"}
_BOOL_FALSE = {"false", "no", "0"}
# Plain decimal: signed int/decimal, no leading-zero integer part, no exponent,
# no grouping. Accepts "85"/"-5"/"3.14"/"85.50"; rejects "07030"/"1e3"/"1,234".
_PLAIN_DECIMAL = re.compile(r"^-?(?:0|[1-9]\\d*)(?:\\.\\d+)?$")


def _is_empty(v):
    return v is None or v == "" or (isinstance(v, float) and v != v)


def _is_number_like(value):
    if isinstance(value, bool):
        return False
    if isinstance(value, (int, float)):
        return not (value != value or value in (float("inf"), float("-inf")))
    if isinstance(value, str):
        t = value.strip()
        if not _PLAIN_DECIMAL.match(t):
            return False
        try:
            n = float(t)
        except (ValueError, TypeError):
            return False
        return not (n != n or n in (float("inf"), float("-inf")))
    return False


def _is_boolean_like(value):
    if isinstance(value, bool):
        return True
    if isinstance(value, str):
        return value.strip().lower() in (_BOOL_TRUE | _BOOL_FALSE)
    return False


def infer_column_type(values):
    """Whole-column type (not first-value) from a column's faithful values."""
    saw = {"number": False, "boolean": False, "json": False, "other": False}
    saw_any = False
    for v in values:
        if _is_empty(v):
            continue
        saw_any = True
        if _is_number_like(v):
            saw["number"] = True
        elif _is_boolean_like(v):
            saw["boolean"] = True
        elif isinstance(v, (dict, list)):
            saw["json"] = True
        else:
            saw["other"] = True
    if not saw_any:
        return "string"
    for t in ("number", "boolean", "json"):
        if saw[t] and not any(saw[o] for o in saw if o != t):
            return t
    return "string"


def coerce_cell(value, col_type):
    """Cast one faithful value under its column's resolved type."""
    if _is_empty(value):
        return None
    if col_type == "number":
        if isinstance(value, bool):
            return None
        try:
            n = float(value)
        except (ValueError, TypeError):
            return None
        if n != n:
            return None
        return int(n) if n == int(n) else n
    if col_type == "boolean":
        if isinstance(value, bool):
            return value
        t = str(value).strip().lower()
        if t in _BOOL_TRUE:
            return True
        if t in _BOOL_FALSE:
            return False
        return None
    if col_type == "json":
        return value if isinstance(value, (dict, list)) else None
    return value


def apply_column_typing(df):
    """Re-type parsed_* columns to match the app's whole-column policy."""
    for col in [c for c in df.columns if c.startswith('parsed')]:
        col_type = infer_column_type(df[col].tolist())
        if col_type in ('number', 'boolean'):
            df[col] = df[col].apply(lambda v: coerce_cell(v, col_type))
    return df


# === PARSER DISPATCHER ===
def apply_parser(content):
    """Apply parser to extracted content based on PARSER_CONFIG."""
    if not PARSER_CONFIG:
        return None

    if not content:
        return None

    parser_type = PARSER_CONFIG["type"]

    try:
        if parser_type == "regex":
            result = apply_regex_parser(content)
        elif parser_type == "javascript":
            result = apply_javascript_parser(content)
        elif parser_type == "python":
            result = apply_python_parser(content)
        else:
            return None
        if isinstance(result, str) and result.startswith("PARSER_ERROR"):
            return result
        # Faithful: return exactly what the parser produced; column typing is
        # applied per-column at export (apply_column_typing).
        return result
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateExportFunction(e){return e?.unstackJson?`# === JSON UNSTACKING FOR EXPORT ===
# Faithful reproduction of the app's discoverParsedFields / extractParsedFieldValue
# (src/export/shared/parsed-content-discovery.ts, field-extractor.ts). NOT
# pd.json_normalize: the app emits a column for EVERY key including parent object
# nodes, recurses plain objects up to depth 4, sorts columns by id, and renders
# object/array values as compact JSON (JSON.stringify), so this must too.
def discover_parsed_columns(records, prefix='parsed', max_depth=4):
    """Union of parsed_<path> column ids across all records, sorted by id.
    Recurses into plain objects (not arrays) up to max_depth, emitting a column
    for each key AND each parent object node (matching the app)."""
    seen = {}

    def collect(obj, path_prefix, depth):
        for key, value in obj.items():
            path = (path_prefix + '.' + key) if path_prefix else key
            seen[prefix + '_' + path] = True
            if depth < max_depth and isinstance(value, dict):
                collect(value, path, depth + 1)

    for rec in records:
        if isinstance(rec, dict):
            collect(rec, '', 1)
    return sorted(seen.keys())


def extract_parsed_cell(record, field_id, prefix='parsed'):
    """One cell for field_id from a single record's parsed object. Walks the
    dot-path; object/array leaves become compact JSON (matching JSON.stringify);
    primitives keep their real type; a missing key yields None (empty cell)."""
    if not isinstance(record, dict):
        return None
    value = record
    for k in field_id[len(prefix) + 1:].split('.'):
        if not isinstance(value, dict):
            return None
        value = value.get(k)
    if value is None:
        return None
    if isinstance(value, (dict, list)):
        return json.dumps(value, separators=(',', ':'), ensure_ascii=False)
    return value


def unstack_json_column(df, col_name):
    """Unstack a JSON column into one column per key, faithfully to the app."""
    try:
        records = [
            json.loads(x) if x and x != 'null' and not str(x).startswith('PARSER_ERROR') else {}
            for x in df[col_name].tolist()
        ]
        columns = discover_parsed_columns(records, 'parsed')
        parsed_df = pd.DataFrame(
            {col: [extract_parsed_cell(rec, col, 'parsed') for rec in records] for col in columns},
            index=df.index,
            columns=columns
        )

        # Concatenate with original dataframe (drop the json column)
        result = pd.concat([df.drop(col_name, axis=1), parsed_df], axis=1)

        print(f"   Unstacked {len(columns)} JSON fields: {columns[:5]}...")
        return result
    except Exception as e:
        print(f"WARN:  JSON unstacking failed: {e}")
        return df`:null}generateExecutor(){return`# === RUN IT ===
if __name__ == "__main__":
    asyncio.run(main())`}}function D(g){switch(g){case"simple":return new w;case"production":return new $;case"production-spreadsheet":return new Y;case"minimal":case"basic":case"reproduction":case"analysis":return m.debug(`Legacy template '${g}' requested, using 'simple' instead`),new w;default:return m.warn(`Unknown template: ${g}, defaulting to 'simple'`),new w}}function Z(){return[new w().getTemplate(),new $().getTemplate(),new Y().getTemplate()]}class ee{async generateScript(e,t={}){const s=Date.now();m.debug("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:e,template:t.template||"minimal",startTime:s});try{m.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:e});const r=await U.loadTrialForExport(e);if(!r.ok){const f=r.error;return{ok:!1,error:new P("GENERATION_FAILED",`Failed to load trial data: ${f.message}`,{trialId:e,originalError:f})}}const{trial:a,apiCalls:n}=r.value;m.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_PARSER",{trialId:e});let o;const i=this.getPrimaryParserId(a);if(a.parserSnapshot)o=a.parserSnapshot,m.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_FROM_SNAPSHOT",{parserId:o.id,parserName:o.name,parserType:o.type});else if(i)try{o=await H.getParser(i),o&&m.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOADED",{parserId:i,parserName:o.name,parserType:o.type,unstackJson:o.unstackJson})}catch(f){m.warn("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOAD_FAILED",{parserId:i,error:f})}const u=this.validateCodeGenOptions(t);if(!u.isValid)return{ok:!1,error:new P("INVALID_FIELDS",`Code generation validation failed: ${u.errors.join(", ")}`,{errors:u.errors})};let l=t.template||"minimal";l==="production"&&a.type==="spreadsheet"&&(l="production-spreadsheet",m.debug("EXPORT_DEBUG: Auto-selected production-spreadsheet template for spreadsheet trial")),m.debug("EXPORT_DEBUG: PYTHON_GENERATION GETTING_TEMPLATE",{templateId:l,trialType:a.type});const d=D(l),_=d.getTemplate();m.debug("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{templateId:l,apiCallCount:n.length,hasParser:!!o});const h=Date.now(),c=d.generateScript(a,n,{includeComments:t.includeComments!==!1,parser:o,externalizeJsonrepair:t.externalizeJsonrepair===!0});m.debug("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-h,codeLength:c.length,estimatedBytes:F(c)});const y=Date.now()-s,p={filename:this.generateScriptFilename(a.name,l),mimeType:"text/x-python",data:c,metadata:{trialName:a.name,trialId:a.id,exportDate:new Date,callCount:n.length,fieldCount:0,format:"python",estimatedSizeBytes:F(c)},template:l,pythonVersion:_.pythonVersion,requiredPackages:this.extractRequiredPackages(_,t),auxiliaryFiles:this.generateAuxiliaryFiles(o,l,t.externalizeJsonrepair===!0),codeLength:c.length,generationTimeMs:y};return m.debug("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:e,templateId:l,filename:p.filename,codeLength:p.codeLength,generationTimeMs:p.generationTimeMs,requiredPackages:p.requiredPackages}),{ok:!0,value:p}}catch(r){const a=r instanceof Error?r:new Error(String(r));return m.debug("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",a,{trialId:e,template:t.template||"minimal",generationTimeMs:Date.now()-s}),{ok:!1,error:new P("GENERATION_FAILED",`Python script generation failed: ${a.message}`,{trialId:e,options:t,originalError:r,generationTimeMs:Date.now()-s})}}}getAvailableTemplates(){return Z()}validateCodeGenOptions(e){const t=[],s=[];if(e.template){const r=this.getAvailableTemplates().map(a=>a.id);r.includes(e.template)||t.push(`Invalid template: ${e.template}. Available templates: ${r.join(", ")}`)}if(e.pythonVersion){const r=["3.8","3.9","3.10","3.11"];r.includes(e.pythonVersion)||s.push(`Python version ${e.pythonVersion} not explicitly supported. Supported versions: ${r.join(", ")}`)}if(e.includeVisualization){const r=e.template||"minimal";D(r).getTemplate().supportsVisualization||s.push(`Template '${r}' does not support built-in visualization. You can add your own visualization code to the exported script.`)}return{isValid:t.length===0,errors:t,warnings:s}}getPrimaryParserId(e){if(e.parserId)return e.parserId;if(e.type==="template"&&e.templateConfig?.parserId)return e.templateConfig.parserId;if(e.type==="spreadsheet"&&e.spreadsheetConfig?.parserId)return e.spreadsheetConfig.parserId}generateScriptFilename(e,t){const s=e.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",r=t==="minimal"?"":`_${t}`,n=new Date().toISOString().replace("T","_").replace(/:/g,"-").split(".")[0];return`${s}${r}_${n}.py`}extractRequiredPackages(e,t){return["json","requests","itertools","csv"]}generateAuxiliaryFiles(e,t,s){if(!(!s||!(t==="production"||t==="production-spreadsheet")||e?.type!=="javascript"))return[{filename:k,mimeType:"text/x-python",data:J()}]}}const te=new ee;let O=null;async function re(){return O||(O=(await q(async()=>{const{default:g}=await import("./jszip.min-BImRqbAm.js").then(e=>e.j);return{default:g}},__vite__mapDeps([0,1,2,3,4]))).default),O}class se{constructor(){C(this,"trialBundleService",new X)}async exportBundle(e,t){try{m.debug("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:e,bundleType:t.bundleType});const s=await U.loadTrialForExport(e);if(!s.ok)return{ok:!1,error:new P("GENERATION_FAILED",`Failed to load trial: ${s.error?.message}`)};const{trial:r}=s.value;t.bundleType==="script-only"&&r.type==="spreadsheet"&&t.template==="production"&&(m.debug("EXPORT_DEBUG: Forcing bundle mode for spreadsheet trial with production template"),t.bundleType="script-config-data");const a=await te.generateScript(e,{template:t.template||"simple",includeComments:t.includeComments!==!1,externalizeJsonrepair:t.bundleType!=="script-only"});if(!a.ok)return{ok:!1,error:new P("GENERATION_FAILED",a.error?.message||"Failed to generate Python script")};if(t.bundleType==="script-only")return{ok:!0,value:{zipBlob:new Blob([a.value.data],{type:"text/x-python"}),filename:a.value.filename,sizeBytes:a.value.metadata.estimatedSizeBytes,contents:["experiment.py"]}};const n=await re(),o=new n,i=[];o.file("experiment.py",a.value.data),i.push("experiment.py");for(const p of a.value.auxiliaryFiles||[])o.file(p.filename,p.data),i.push(p.filename);const u=await this.trialBundleService.exportTrialBundle(e,{includeResults:!0,includeApiCalls:!0,skipDownload:!0});if(u.ok?(o.file("trial_config.json",JSON.stringify(u.value.bundle,null,2)),i.push("trial_config.json")):m.warn("Failed to export trial bundle:",u.error),r.type==="spreadsheet"&&a.value.template==="production-spreadsheet"&&await this.addDatasetParquet(o,r,i),t.bundleType==="script-config-data"){const p=o.folder("data"),f=await j.getAvailableFields(e);let v=[];if(f.ok){const R=f.value.standardFields.map(x=>x.id).filter(x=>x!=="parameters"&&x!=="variables"),S=f.value.parameterFields.map(x=>x.id),T=(f.value.variableFields||[]).filter(x=>!x.id.startsWith("source_")).map(x=>x.id);v=[...R,...S,...T],m.debug("EXPORT_DEBUG: REPRO_BUNDLE using all fields",{total:v.length,standard:R.length,params:S.length,vars:T.length})}else m.warn("Failed to get available fields, using defaults");const E=[{format:"csv",filename:"results.csv"},{format:"excel",filename:"results.xlsx"},{format:"jsonl",filename:"results.jsonl"}];for(const{format:R,filename:S}of E){const T=await j.exportTrialData(e,{format:R,fields:v.length>0?v:void 0,includeHeaders:!0,addBOM:R==="csv"||R==="excel"});if(T.ok){if(R==="excel"&&typeof T.value.data=="string"){const x=atob(T.value.data),I=new Uint8Array(x.length);for(let A=0;A<x.length;A++)I[A]=x.charCodeAt(A);p.file(S,I)}else p.file(S,T.value.data);i.push(`data/${S}`)}else m.warn(`Failed to export ${R}:`,T.error)}}const l=this.generateReadme(t.bundleType,a.value.metadata.trialName,t.template||"simple");o.file("README.md",l),i.push("README.md");const d=a.value.auxiliaryFiles?.some(p=>p.filename===k)===!0,_=this.generateRequirementsTxt(t.template||"simple",d);o.file("requirements.txt",_),i.push("requirements.txt");const h=await o.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}),c=new Date().toISOString().split("T")[0].replace(/-/g,""),y=t.bundleType==="script-config-data"?"_complete":"_config",b=`${a.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_repro${y}_${c}.zip`;return{ok:!0,value:{zipBlob:h,filename:b,sizeBytes:h.size,contents:i}}}catch(s){return m.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",s),{ok:!1,error:new P("GENERATION_FAILED",s instanceof Error?s.message:"Unknown error creating bundle")}}}generateReadme(e,t,s){const r=new Date().toISOString();let a="";return e==="script-config-data"?a="## Contents of the ZIP bundle\n- `requirements.txt` - for installing python package dependencies\n- `experiment.py` - Python script to reproduce/re-run the experiment, without needing web/desktop Auditomatic app\n- `trial_config.json` - Complete trial configuration, for importing back to web/desktop Auditomatic app\n- `data/` - Full results from trial in web/desktop Auditomatic app (if trial has been run)\n- `data/results.csv` - CSV format\n- `data/results.xlsx` - Excel format\n- `data/results.jsonl` - JSONL format (one JSON object per line)\n\n## experiment.py will generate:\n- `results_YYYYMMDD_HHMMSS.db` - sqlite3 db for storing results and managing execution\n- `results_YYYYMMDD_HHMMSS.csv` - generated by default after trial is complete\n":a=`## Contents
- \`experiment.py\` - Python script to reproduce the experiment (${s} template)
`,`# Auditomatic Export Reproducibility Bundle

Trial Name: ${t}

Generated: ${r}

${a}

---

${s==="production"?this.generateProductionReadme():this.generateSimpleReadme()}
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
`}generateProductionReadme(){return`## Quick Start

### 1. Install Dependencies

\`\`\`bash
pip install -r requirements.txt
\`\`\`

This installs all required packages plus optional dependencies for Excel and Parquet export.

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

---

## Command-Line Options

| Option                 | Default| Description |
|------------------------|--------|------------------------------------------------------------------|
| \`--output\` / \`-o\`      | \`csv\`  | Output format: \`csv\`, \`tsv\`, \`json\`, \`jsonl\`, \`excel\`, \`parquet\` |
| \`--concurrent\` / \`-c\`  | \`10\`   | Number of concurrent API requests |
| \`--rate-limit\` / \`-r\`  | \`5.0\`  | Maximum requests per second |
| \`--timeout\` / \`-t\`     | \`90\`   | Request timeout in seconds |
| \`--output-file\` / \`-f\` | Auto   | Custom output filename |
| \`--resume\`             | Off    | Resume from existing database |
| \`--db-file\`            | Auto   | Database file to use/resume from |

**Examples:**

\`\`\`bash
# Fast batch processing
python experiment.py --concurrent 20 --rate-limit 10.0

# Conservative (avoid rate limits)
python experiment.py --concurrent 1 --rate-limit 1.0

# Long-running API calls
python experiment.py --timeout 180

# Resume from previous run
python experiment.py --resume --db-file results_20250128_143022.db

# Export to specific format
python experiment.py --output excel --output-file my_results.xlsx
\`\`\`

**With concurrency and rate limiting (enabled by default):**
\`\`\`bash
python experiment.py --concurrent 10 --rate-limit 5.0
\`\`\`
Concurrency is how many simultaneous/parallel API requests are made at a time.
Rate limits are how many completed requests are made per second, on average.
The script tracks both and lets you set limits independently. The default is 10
concurrent requests, max of 5 requests per second.

This command runs 30 API calls concurrently (in parallel), with an additional
maximum of 10 completed requests per second:

\`\`\`bash
python experiment.py --concurrent 30 --rate-limit 10.0
\`\`\`

Or if you are using ollama for a local model on a GPU that cannot handle many
parallel requests, you can set the concurrency to 1 for serial/one-at-a-time mode:

\`\`\`bash
python experiment.py --concurrent 1 --rate-limit 10.0
\`\`\`

**With custom output format:**
By default, it saves results to the sqlite3 db file and exports to CSV on completion.
You can do:
\`\`\`bash
python experiment.py --output excel
python experiment.py --output parquet
\`\`\`

---

## Features

### Reliability

**Retry Logic:**
- Up to 10 automatic retry attempts with exponential backoff (1s → 30s)
- Smart handling of rate limits (429) and server errors (500/502/503/504)
- Immediate failure on auth errors (401/403) - no wasted retries
- Detailed logging of retry attempts

**SQLite Persistence:**
- All results saved to SQLite database in real-time
- Atomic transactions ensure no data loss
- Query results with standard SQL tools
- Database survives crashes and interruptions

### Resume from Interruptions

Press Ctrl+C at any time. To resume you must specify the db generated:

\`\`\`bash
python experiment.py --resume --db-file results_20250128_143022.db
\`\`\`

The script will:
- Skip all previously successful calls
- Retry any previously failed calls
- Continue from where you left off
- Export with the updated results

### Smart Output Schema

**Dynamic columns based on your configuration:**
- Each parameter gets its own column: \`param_temperature\`, \`param_max_tokens\`, etc.
- Each variable gets its own column
- Full request/response payloads saved as JSON
- Extracted answers in dedicated column

**Example CSV structure:**
\`\`\`
config_index | model_display_name | param_temperature | param_max_tokens | variable1 | variable2 | extracted | success | error
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


## Troubleshooting

### Rate Limit Errors (429)
\`\`\`
Retry 3 for GPT-4 after HTTPStatusError: 429 Rate Limit
\`\`\`
**Fix:** Reduce \`--concurrent\` or \`--rate-limit\`, or wait and use \`--resume\`

### Extraction Failures
\`\`\`
[WARN] GPT-4: Extraction failed. Tried: choices[0].message.content, data.content
\`\`\`
**Fix:** Check the API response format in the database (\`response\` column) and update \`extract_paths\` in the script

### Network Timeouts
\`\`\`
Network error GPT-4: TimeoutException
\`\`\`
**Fix:** Increase \`--timeout\` or check your network connection
`}generateRequirementsTxt(e,t){return e==="production"||e==="production-spreadsheet"?`# Production Template Requirements
# Install with: pip install -r requirements.txt

# Core dependencies (required)
httpx>=0.24.0
aiometer>=0.5.0
aiosqlite>=0.19.0
tenacity>=8.2.0
tqdm>=4.65.0
pandas>=2.0.0

# Optional dependencies for export formats
openpyxl>=3.1.0    # For Excel export (.xlsx)
pyarrow>=12.0.0    # For Parquet export (.parquet)

${t?`# Parser dependencies
py-mini-racer>=0.6.0    # For JavaScript parser support
`:""}`:`# Simple Template Requirements
# Install with: pip install -r requirements.txt

requests>=2.28.0
`}async addDatasetParquet(e,t,s){if(!(t.type!=="spreadsheet"||!t.spreadsheetConfig))try{const r=await K.datasets.get(t.spreadsheetConfig.datasetId);if(!r){m.warn("Dataset not found for spreadsheet trial");return}const{parquetGenerator:a}=await q(async()=>{const{parquetGenerator:o}=await import("./TrialsView-CPvjwlNf.js").then(i=>i.i);return{parquetGenerator:o}},__vite__mapDeps([5,6,2,1,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,4,23,24,25,26,27,28,29,30,31,32])),n=a.generate(r);e.file("data.parquet",n),s.push("data.parquet"),m.debug("EXPORT_DEBUG: Added dataset parquet to bundle",{rows:r.rows.length,columns:r.columns.length,sizeBytes:n.byteLength})}catch(r){m.error("Failed to add dataset parquet:",r)}}}const je=new se;export{je as reproducibilityBundleService};
