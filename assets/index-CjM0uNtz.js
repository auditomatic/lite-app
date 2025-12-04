const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jszip.min-D2M0PaQz.js","assets/ui-vendor-DAUGyC0h.js","assets/vue-vendor-B9kxdhiN.js","assets/utils-vendor-pFqI4y6K.js","assets/data-vendor-BJdHtKRr.js","assets/TrialsView-BVKrmwzM.js","assets/index-C3kxukcV.js","assets/tauri-vendor-1uBLmS9u.js","assets/index-DsqsXYse.css","assets/toast-CLbu3pTJ.js","assets/useCostEstimation-BkeKyZKm.js","assets/useModels-R95VZaVf.js","assets/useLiveQuery-B8gK8WVR.js","assets/curl-generator-2mCpysSw.js","assets/ParserSelector-BfKY0sEN.js","assets/parser-q2MKj2YH.js","assets/ParserSelector-DbffjY7a.css","assets/stream-manager-CaRkiuZW.js","assets/controller-DiKehw4O.js","assets/common-Brb0k-N6.js","assets/index-CSEOiUjQ.js","assets/id-generator-Cv_Imc0S.js","assets/useTrialCommands-C0m5KnCJ.js","assets/repository-DLi46XyZ.js","assets/sanitization-CznGKZEB.js","assets/useTrials-DKMLyBIi.js","assets/repository-Dr84Hxug.js","assets/useHeatmapStyling-C8eShZJ4.js","assets/tauri-download-utilities-DBJq5sNZ.js","assets/TrialsView-BKqKx2oS.css"])))=>i.map(i=>d[i]);
var D=Object.defineProperty;var G=(y,e,t)=>e in y?D(y,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):y[e]=t;var O=(y,e,t)=>G(y,typeof e!="symbol"?e+"":e,t);import{l as m,c as U,d as B,_ as M}from"./index-C3kxukcV.js";import{t as L,E as T,g as C,d as I}from"./TrialsView-BVKrmwzM.js";import{TrialBundleExportService as $}from"./trial-bundle.service-CNywF5ii.js";import"./vue-vendor-B9kxdhiN.js";import"./ui-vendor-DAUGyC0h.js";import"./utils-vendor-pFqI4y6K.js";import"./tauri-vendor-1uBLmS9u.js";import"./toast-CLbu3pTJ.js";import"./useCostEstimation-BkeKyZKm.js";import"./useModels-R95VZaVf.js";import"./useLiveQuery-B8gK8WVR.js";import"./curl-generator-2mCpysSw.js";import"./ParserSelector-BfKY0sEN.js";import"./parser-q2MKj2YH.js";import"./stream-manager-CaRkiuZW.js";import"./controller-DiKehw4O.js";import"./common-Brb0k-N6.js";import"./index-CSEOiUjQ.js";import"./id-generator-Cv_Imc0S.js";import"./useTrialCommands-C0m5KnCJ.js";import"./repository-DLi46XyZ.js";import"./sanitization-CznGKZEB.js";import"./useTrials-DKMLyBIi.js";import"./repository-Dr84Hxug.js";import"./useHeatmapStyling-C8eShZJ4.js";import"./tauri-download-utilities-DBJq5sNZ.js";import"./data-vendor-BJdHtKRr.js";class S{getTemplate(){return{id:"simple",name:"Simple Script (Beginner-Friendly)",description:"Simple Python script with CSV/JSON output, basic retries, and clear progress. Best for beginners and quick tests.",pythonVersion:"3.8",requiredImports:["json","requests","jmespath","os","time","datetime"],templateCode:"SIMPLE_TEMPLATE",supportsAnalysis:!1,supportsVisualization:!1}}generateScript(e,t,s={}){const{includeComments:r=!0}=s,n=this.buildResolvedConfigurations(e),a=this.discoverParameterColumns(n);return[this.generateHeader(e,r),this.generateImports(),this.generateSettings(e,r),this.generateParameterColumns(a,r),this.generateModelConfigs(n,r),this.generateFunctions(),this.generateMainFunction(e,a),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const t=[],s=new Map,r=new Map;for(const n of e.configurations){const a=n.modelSnapshot?.displayName||n.modelId;s.set(a,(s.get(a)||0)+1),r.set(a,0)}for(let n=0;n<e.configurations.length;n++){const a=e.configurations[n],o=a.providerSnapshot;if(!o)continue;const l=o.api?.baseUrl||"https://api.example.com",d=o.api?.endpoint||"/v1/api",p={"Content-Type":"application/json",...o.headers};o.auth?.type==="bearer"?p.Authorization="Bearer {{API_KEY}}":o.auth?.type==="header"&&o.auth.header&&(p[o.auth.header]="{{API_KEY}}");const c={model:a.modelId},u=o.bodyConstruction;u?.promptField?u.wrapAsArray?c[u.promptField]=[{role:u.messageRole||"user",content:"{{PROMPT}}"}]:c[u.promptField]="{{PROMPT}}":c.prompt="{{PROMPT}}",Object.assign(c,a.parameters);const _=a.provider.split("-")[0],i=a.modelSnapshot?.displayName||a.modelId;let f=i;if(s.get(i)>1){const g=r.get(i)+1;r.set(i,g),f=`${i} [Config ${g}]`}const E=this.getExtractPaths(a);t.push({config_index:n,name:i,display_name:f,provider:_,url:l+d,headers:p,body:c,parameters:a.parameters||{},extract_paths:E.contentPaths,reasoning_paths:E.reasoningPaths})}return t}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const s=t.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const n=[];r.contentPath&&n.push(r.contentPath),r.fallbackPaths&&n.push(...r.fallbackPaths);const a=[];return r.reasoningPath&&a.push(r.reasoningPath),r.reasoningFallbackPaths&&a.push(...r.reasoningFallbackPaths),{contentPaths:n.length>0?n:["response"],reasoningPaths:a}}discoverParameterColumns(e){const t=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateParameterColumns(e,t){const s=t?`# All unique parameters found across model configurations
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

`:"",r=new Set;for(const l of e.configurations){const d=l.provider.split("-")[0];r.add(d)}const n=[];for(const l of r)if(l==="ollama")n.push(`    "${l}": "",  # Local, no key needed`);else{const d=`${l.toUpperCase()}_API_KEY`;n.push(`    "${l}": os.getenv("${d}", ""),  # Get from environment or set here`)}let a="";if(e.type==="template"&&e.templateConfig){const{template:l,variables:d}=e.templateConfig,p={};for(const[u,_]of Object.entries(d))"snapshot"in _&&_.snapshot?p[u]=_.snapshot.items.map(i=>i.value):_.type==="value"&&_.values&&(p[u]=[..._.values]);const c=JSON.stringify(p,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");a=`
# What prompt to test (you can use {{variables}} that get replaced)
PROMPT_TEMPLATE = ${JSON.stringify(l)}

# Variables to test (creates all combinations)
VARIABLES = ${c}`}else a=`
# Single prompt test
PROMPT = "Your test prompt here"`;const o=e.repeatCount||e.repeatConfig?.callsPerPrompt||1;return a+=`
REPEAT_COUNT = ${o}  # Number of times to repeat each test`,`${s}# Your API Keys (leave empty for providers you're not using)
# The script will first check environment variables, then use these values if set

API_KEYS = {
${n.join(`,
`)}
}

# You can override environment variables by setting keys here directly
# Example: API_KEYS["openai"] = "sk-..."
${a}`}generateModelConfigs(e,t){const s=t?`# ============================================
# MODELS TO TEST (exported from Auditomatic)
# ============================================

`:"",r=e.map(a=>({config_index:a.config_index,name:a.name,display_name:a.display_name,provider:a.provider,url:a.url,headers:a.headers,body:a.body,parameters:a.parameters,extract_paths:a.extract_paths,reasoning_paths:a.reasoning_paths})),n=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${n}`}generateFunctions(){return`# ============================================
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
    main()`}}class q{getTemplate(){return{id:"production",name:"Production Script (Professional)",description:"Production-grade Python script with SQLite persistence, professional retries, progress bars, and multiple export formats. Best for research and large experiments.",pythonVersion:"3.8",requiredImports:["httpx","aiometer","aiosqlite","jmespath","tenacity","tqdm","pandas"],templateCode:"PRODUCTION_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,t,s={}){const{includeComments:r=!0,parser:n}=s,a=this.buildResolvedConfigurations(e),o=this.discoverParameterColumns(a);return[this.generateHeader(e,r),this.generateImports(n),this.generateSettings(e,r),this.generateParserConfig(n,r),this.generateParameterColumns(o,r),this.generateModelConfigs(a,r),this.generateSchemaComputation(r),this.generateDatabaseFunctions(o,n,r),this.generateParserFunctions(n),this.generateApiCallFunction(n,r),this.generateCliAndUtilities(r),this.generateExportFunction(n),this.generateMainFunction(e,r),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const t=[],s=new Map,r=new Map;for(const n of e.configurations){const a=n.modelSnapshot?.displayName||n.modelId;s.set(a,(s.get(a)||0)+1),r.set(a,0)}for(let n=0;n<e.configurations.length;n++){const a=e.configurations[n],o=a.providerSnapshot;if(!o)continue;const l=o.api?.baseUrl||"https://api.example.com",d=o.api?.endpoint||"/v1/api",p={"Content-Type":"application/json",...o.headers};o.auth?.type==="bearer"?p.Authorization="Bearer {{API_KEY}}":o.auth?.type==="header"&&o.auth.header&&(p[o.auth.header]="{{API_KEY}}");const c={model:a.modelId},u=o.bodyConstruction;u?.promptField?u.wrapAsArray?c[u.promptField]=[{role:u.messageRole||"user",content:"{{PROMPT}}"}]:c[u.promptField]="{{PROMPT}}":c.prompt="{{PROMPT}}",Object.assign(c,a.parameters);const _=a.provider.split("-")[0],i=a.modelSnapshot?.displayName||a.modelId;let f=i;if(s.get(i)>1){const g=r.get(i)+1;r.set(i,g),f=`${i} [Config ${g}]`}const E=this.getExtractPaths(a);t.push({config_index:n,name:i,display_name:f,provider:_,url:l+d,headers:p,body:c,parameters:a.parameters||{},extract_paths:E.contentPaths,reasoning_paths:E.reasoningPaths})}return t}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const s=t.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const n=[];r.contentPath&&n.push(r.contentPath),r.fallbackPaths&&n.push(...r.fallbackPaths);const a=[];return r.reasoningPath&&a.push(r.reasoningPath),r.reasoningFallbackPaths&&a.push(...r.reasoningFallbackPaths),{contentPaths:n.length>0?n:["response"],reasoningPaths:a}}discoverParameterColumns(e){const t=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateParameterColumns(e,t){const s=t?`# All unique parameter names found across model configurations
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
"""`:s}generateImports(e){const t=`import asyncio
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
from pathlib import Path`;return e?.type==="regex"?`${t}
import re`:e?.type==="javascript"?`${t}
import re
try:
    from py_mini_racer import MiniRacer
    JS_AVAILABLE = True
except ImportError:
    JS_AVAILABLE = False
    print("[WARN] py-mini-racer not installed. JavaScript parser will not work.")
    print("       Install with: pip install py-mini-racer")`:e?.type==="python"?`${t}
import re`:t}generateSettings(e,t){const s=t?`# ============================================================================
# EXPERIMENT CONFIGURATION
# ============================================================================
# Define what we're testing: prompt template, variables, and repetitions.
# The script will generate all combinations (Cartesian product) and test each
# combination REPEAT_COUNT times with each model.

`:"";let r="";if(e.type==="template"&&e.templateConfig){const{template:o,variables:l}=e.templateConfig;let d=!1;const p={},c={};for(const[i,f]of Object.entries(l))if("snapshot"in f&&f.snapshot){const E=f.snapshot.items;if(E.some(h=>h.attributes&&Object.keys(h.attributes).length>0)){d=!0,c[i]=E.map(b=>({value:b.value,attributes:b.attributes||{}}));const h=new Set;E.forEach(b=>{b.attributes&&Object.keys(b.attributes).forEach(w=>h.add(w))}),p[i]=Array.from(h).sort()}else c[i]=E.map(h=>h.value)}else f.type==="value"&&f.values&&(c[i]=[...f.values]);const u=JSON.stringify(c,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None"),_=t?`# Variables support two formats:
# 1. Simple: ["value1", "value2", ...]
# 2. Attributed: [{"value": "val", "attributes": {...}}, ...]
#    Attributes are tracked as separate columns in the database for analysis
`:"";if(r=`PROMPT_TEMPLATE = ${JSON.stringify(o)}

${_}VARIABLES = ${u}`,d&&Object.keys(p).length>0){const i=JSON.stringify(p,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");r+=`

ATTRIBUTE_KEYS = ${i}`}}else r='PROMPT = "Your test prompt here"';const n=e.repeatCount||e.repeatConfig?.callsPerPrompt||1;return r+=`

REPEAT_COUNT = ${n}${t?"  # Number of times to repeat each unique prompt (for measuring variance)":""}`,`${s}${r}`}generateParserConfig(e,t){if(!e)return null;const s=t?`
# Parser configuration - extracts structured data from raw model responses
# Supports: "regex", "javascript", "python"
# If unstack_json=True, JSON output is flattened into separate columns on export
`:`
`,r={id:e.id,name:e.name,type:e.type,output_type:e.outputType,unstack_json:e.unstackJson||!1,config:e.config},n=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}PARSER_CONFIG = ${n}`}generateModelConfigs(e,t){const s=t?`
# Model configurations define:
# - API endpoint and authentication
# - Request body structure (with {{PROMPT}} and {{API_KEY}} placeholders)
# - Parameters (temperature, max_tokens, etc.)
# - Extract paths (JMESPath expressions to find content in response JSON)
# - Reasoning paths (optional, for chain-of-thought extraction)
`:"",r=e.map(a=>({config_index:a.config_index,name:a.name,display_name:a.display_name,provider:a.provider,url:a.url,headers:a.headers,body:a.body,parameters:a.parameters,extract_paths:a.extract_paths,reasoning_paths:a.reasoning_paths})),n=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}MODELS = ${n}`}generateSchemaComputation(e){return`${e?`# ============================================================================
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
    """`:'"""Sanitize column name for SQLite compatibility."""'}
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
    """`:'"""Create SQLite database with dynamic schema."""'}
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
    """`:'"""Save a result to the database."""'}
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
        flags = PARSER_CONFIG["config"].get("flags", 0)
        capture_group = PARSER_CONFIG["config"].get("captureGroup", 0)

        # Convert bit flags to re module flags
        re_flags = 0
        if flags & 1: re_flags |= re.IGNORECASE
        if flags & 2: re_flags |= re.MULTILINE
        if flags & 4: re_flags |= re.DOTALL

        match = re.search(pattern, content, re_flags)
        if match:
            result = match.group(capture_group)
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
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateSimplifiedParserDispatcher(e){const t=`apply_${e}_parser`;return`def apply_parser(content):
    """Apply the ${e} parser to extracted content."""
    if not PARSER_CONFIG or not content:
        return None

    try:
        return ${t}(content)
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateApiCallFunction(e,t){return`${t?`# ============================================================================
# API CALL FUNCTIONS
# ============================================================================
# These functions handle making API calls with sophisticated error handling
# and retry logic.

`:""}@retry(
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
    """`:'"""Make the API call with automatic retries for transient failures."""'}
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

    ${t?`    # Extract content using JMESPath (try multiple paths with fallback)
    # JMESPath is a query language for JSON (like XPath for XML)
    # We try each path in order until one succeeds`:"    # Try to extract the answer"}
    extracted = None
    attempted_paths = []
    for path in extract_paths:
        attempted_paths.append(path)
        extracted_raw = jmespath.search(path, response_data)
        if extracted_raw is not None:
${t?"            # JMESPath filters (like [?...]) return lists, so unwrap them":"            # Unwrap arrays - jmespath filters return lists"}
            if isinstance(extracted_raw, list):
                extracted = ' '.join(str(e) for e in extracted_raw if e) if extracted_raw else None
            else:
                extracted = extracted_raw
            if extracted:
                break

    # Extract reasoning (optional)
    reasoning = None
    for path in model_config.get('reasoning_paths', []):
        reasoning_raw = jmespath.search(path, response_data)
        if reasoning_raw is not None:
            if isinstance(reasoning_raw, list):
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
        'error': None if success else f"Extraction failed. Tried: {', '.join(attempted_paths)}",
        'attempted_paths': attempted_paths
    }


async def call_api(client, db, task_id, model_config, repeat_index, prompt, variable_values, variable_attributes):
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
    """`:'"""Call one API and save the result."""'}
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
            if 'attempted_paths' in result and result['attempted_paths']:
                paths = ', '.join(result['attempted_paths'][:3])
                if len(result['attempted_paths']) > 3:
                    paths += f' (+{len(result["attempted_paths"])-3} more)'
                progress_bar.write(f"[WARN] {model_config['name']}: Extraction failed. Tried: {paths}")
            else:
                progress_bar.write(f"[ERROR] {model_config['name']}: {result['error'][:80]}")

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
    return f"results_{timestamp}{ext[args.output]}"`}generateExportFunction(e){return`${e?.unstackJson?`

def unstack_json_column(df, col_name):
    """Unstack JSON column into separate columns with parsed_ prefix."""
    try:
        parsed_series = df[col_name].apply(
            lambda x: json.loads(x) if x and x != 'null' and not str(x).startswith('PARSER_ERROR') else {}
        )
        parsed_df = pd.json_normalize(parsed_series)
        parsed_df.columns = ['parsed_' + col for col in parsed_df.columns]
        df = pd.concat([df.drop(col_name, axis=1), parsed_df], axis=1)
        print(f"  Unstacked {len(parsed_df.columns)} JSON fields")
        return df
    except Exception as e:
        print(f"[WARN] JSON unstacking failed: {e}")
        return df
`:""}
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
                    df.to_excel(output_file, index=False, engine='openpyxl')
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
    """`:'"""Run all the API calls."""'}
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
                prompt = prompt.replace(f"{{{{{var_name}}}}}", value)
                variable_values[var_name] = value

                # Extract attributes if they exist (for attributed format)
                var_data = VARIABLES[var_name]
                if var_data and isinstance(var_data[0], dict) and 'value' in var_data[0]:
                    matching = next((item for item in var_data if item['value'] == value), None)
                    if matching and 'attributes' in matching:
                        variable_attributes[var_name] = matching['attributes']

            # Repeat each combination REPEAT_COUNT times
            for repeat_idx in range(REPEAT_COUNT):
                ${t?`                # Generate stable task ID (model index + content hash + repeat index)
                # This ensures same task always gets same ID (for resume functionality)`:`                # Create task ID using model index + content hash + repeat index
                # Model index ensures different configs of same model are unique`}
                content_key = json.dumps(variable_values, sort_keys=True)
                stable_hash = hashlib.sha256(content_key.encode()).hexdigest()[:8]
                task_id = f"m{model_idx}_{stable_hash}_r{repeat_idx}"
                tasks.append((task_id, model, repeat_idx, prompt, variable_values, variable_attributes))`:`# Repeat each test REPEAT_COUNT times
        prompt = PROMPT
        for repeat_idx in range(REPEAT_COUNT):
            task_id = f"{model['name']}_single_r{repeat_idx}"
            tasks.append((task_id, model, repeat_idx, prompt, {}, {}))`}

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
            for task_id, model, repeat_idx, prompt, variable_values, variable_attributes in tasks:
                if not await already_done(db, task_id):
                    api_calls.append(
                        functools.partial(call_api, client, db, task_id, model, repeat_idx, prompt, variable_values, variable_attributes)
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
    asyncio.run(main())`}}class j{getTemplate(){return{id:"production-spreadsheet",name:"Production Script (Spreadsheet)",description:"Production-grade Python script for spreadsheet trials. Reads dataset from parquet file with SQLite persistence, professional retries, and progress tracking.",pythonVersion:"3.8",requiredImports:["httpx","aiometer","aiosqlite","jmespath","tenacity","tqdm","pandas"],templateCode:"PRODUCTION_SPREADSHEET_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,t,s={}){if(e.type!=="spreadsheet"||!e.spreadsheetConfig)throw new Error("ProductionSpreadsheetTemplate requires a spreadsheet trial");const{includeComments:r=!0,parser:n}=s,{promptPattern:a,systemPrompt:o}=e.spreadsheetConfig,l=this.buildResolvedConfigurations(e),d=this.discoverParameterColumns(l);return[this.generateHeader(e,r),this.generateImports(n),this.generateSettings(a,o,e.repeatCount||1,r),this.generateParserConfig(n,r),this.generateParameterColumns(d,r),this.generateModelConfigs(l,r),this.generateDatasetLoading(r),this.generatePromptBuilder(r),this.generateDatabaseFunctions(d,n),this.generateParserFunctions(n),this.generateApiCallFunction(n),this.generateMainFunction(e),this.generateExportFunction(n),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const t=[],s=new Map,r=new Map;for(const n of e.configurations){const a=n.modelSnapshot?.displayName||n.modelId;s.set(a,(s.get(a)||0)+1),r.set(a,0)}for(let n=0;n<e.configurations.length;n++){const a=e.configurations[n],o=a.providerSnapshot;if(!o)continue;const l=o.api?.baseUrl||"https://api.example.com",d=o.api?.endpoint||"/v1/api",p={"Content-Type":"application/json",...o.headers};o.auth?.type==="bearer"?p.Authorization="Bearer {{API_KEY}}":o.auth?.type==="header"&&o.auth.header&&(p[o.auth.header]="{{API_KEY}}");const c={model:a.modelId},u=o.bodyConstruction;u?.promptField?u.wrapAsArray?c[u.promptField]=[{role:u.messageRole||"user",content:"{{PROMPT}}"}]:c[u.promptField]="{{PROMPT}}":c.prompt="{{PROMPT}}",Object.assign(c,a.parameters);const _=a.provider.split("-")[0],i=a.modelSnapshot?.displayName||a.modelId;let f=i;if(s.get(i)>1){const g=r.get(i)+1;r.set(i,g),f=`${i} [Config ${g}]`}const E=this.getExtractPaths(a);t.push({config_index:n,name:i,display_name:f,provider:_,url:l+d,headers:p,body:c,parameters:a.parameters||{},extract_paths:E.contentPaths,reasoning_paths:E.reasoningPaths})}return t}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const s=t.responseModes?.text;if(!s)return{contentPaths:["response"],reasoningPaths:[]};const r=s.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const n=[];r.contentPath&&n.push(r.contentPath),r.fallbackPaths&&n.push(...r.fallbackPaths);const a=[];return r.reasoningPath&&a.push(r.reasoningPath),r.reasoningFallbackPaths&&a.push(...r.reasoningFallbackPaths),{contentPaths:n.length>0?n:["response"],reasoningPaths:a}}discoverParameterColumns(e){const t=new Set;for(const s of e)s.parameters&&Object.keys(s.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateHeader(e,t){const s="#!/usr/bin/env python3";return t?`${s}
"""
Production API Testing Script (Spreadsheet Mode)
Reads dataset from data.parquet file
Requirements: pip install httpx aiometer aiosqlite jmespath tenacity tqdm pandas
"""`:s}generateImports(e){const t=`import asyncio
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
from pathlib import Path`;return e?.type==="regex"?`${t}
import re`:e?.type==="javascript"?`${t}
import re
try:
    from py_mini_racer import MiniRacer
    JS_AVAILABLE = True
except ImportError:
    JS_AVAILABLE = False
    print("WARN:  WARNING: py-mini-racer not installed. JavaScript parser will not work.")
    print("   Install with: pip install py-mini-racer")`:e?.type==="python"?`${t}
import re`:t}generateSettings(e,t,s,r){let a=`${r?`# === EXPERIMENT CONFIGURATION ===
`:""}PROMPT_PATTERN = ${JSON.stringify(e)}`;return t&&(a+=`
SYSTEM_PROMPT_PATTERN = ${JSON.stringify(t)}`),a+=`
REPEAT_COUNT = ${s}  # Number of times to repeat each row`,a}generateParserConfig(e,t){if(!e)return null;const s=t?`
# === PARSER CONFIGURATION ===
# TODO: Parser snapshots - consider snapshotting parser config in trial for reproducibility
`:`
`,r={id:e.id,name:e.name,type:e.type,output_type:e.outputType,unstack_json:e.unstackJson||!1,config:e.config},n=JSON.stringify(r,null,4).replace(/: false/g,": False").replace(/: true/g,": True").replace(/: null/g,": None");return`${s}PARSER_CONFIG = ${n}`}generateParameterColumns(e,t){const s=t?`# === DISCOVERED PARAMETERS ===
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
        placeholder = f"{{{{{col}}}}}"
        if placeholder in prompt:
            prompt = prompt.replace(placeholder, str(value))
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
        extracted_raw = jmespath.search(path, response_data)
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
            reasoning_raw = jmespath.search(path, response_data)
            if reasoning_raw is not None:
                if isinstance(reasoning_raw, list):
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

async def call_api(client, db, column_name_mapping, task_id, model_config, repeat_index, prompt, row_values):
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
            if 'attempted_paths' in result and result['attempted_paths']:
                paths_str = ', '.join(result['attempted_paths'][:3])
                if len(result['attempted_paths']) > 3:
                    paths_str += f' (+{len(result["attempted_paths"])-3} more)'
                progress_bar.write(f"WARN:  {model_config['name']}: Couldn't extract content. Tried: {paths_str}")
            else:
                progress_bar.write(f"ERROR: {model_config['name']}: {result['error'][:80]}")

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
            prompt = build_prompt(row, PROMPT_PATTERN)${!!e.spreadsheetConfig?.systemPrompt?`

            # Build system prompt if pattern exists
            system_prompt = build_prompt(row, SYSTEM_PROMPT_PATTERN) if 'SYSTEM_PROMPT_PATTERN' in globals() else None`:""}

            # Convert row to dict for database storage
            row_values = dict(row)

            # Repeat each row REPEAT_COUNT times
            for repeat_idx in range(REPEAT_COUNT):
                # Create stable task ID
                content_key = json.dumps({str(k): str(v) for k, v in row_values.items()}, sort_keys=True)
                stable_hash = hashlib.sha256(content_key.encode()).hexdigest()[:8]
                task_id = f"m{model_idx}_{stable_hash}_r{repeat_idx}"
                tasks.append((task_id, model, repeat_idx, prompt, row_values))

    # Check how many we already completed
    already_completed = 0
    for task_id, _, _, _, _ in tasks:
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
            for task_id, model, repeat_idx, prompt, row_values in tasks:
                if not await already_done(db, task_id):
                    api_calls.append(
                        functools.partial(call_api, client, db, column_name_mapping, task_id, model, repeat_idx, prompt, row_values)
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
        flags = PARSER_CONFIG["config"].get("flags", 0)
        capture_group = PARSER_CONFIG["config"].get("captureGroup", 0)

        # Convert flags
        re_flags = 0
        if flags & 1: re_flags |= re.IGNORECASE
        if flags & 2: re_flags |= re.MULTILINE
        if flags & 4: re_flags |= re.DOTALL

        match = re.search(pattern, content, re_flags)
        if match:
            result = match.group(capture_group)
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
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateBaseParserFunction(){return`# === PARSER DISPATCHER ===
def apply_parser(content):
    """Apply parser to extracted content based on PARSER_CONFIG."""
    if not PARSER_CONFIG:
        return None

    if not content:
        return None

    parser_type = PARSER_CONFIG["type"]

    try:
        if parser_type == "regex":
            return apply_regex_parser(content)
        elif parser_type == "javascript":
            return apply_javascript_parser(content)
        elif parser_type == "python":
            return apply_python_parser(content)
        return None
    except Exception as e:
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateExportFunction(e){return e?.unstackJson?`# === JSON UNSTACKING FOR EXPORT ===
def unstack_json_column(df, col_name):
    """Unstack JSON column into separate columns with parsed_ prefix."""
    try:
        # Parse JSON strings
        parsed_series = df[col_name].apply(
            lambda x: json.loads(x) if x and x != 'null' and not str(x).startswith('PARSER_ERROR') else {}
        )

        # Normalize into columns
        parsed_df = pd.json_normalize(parsed_series)
        parsed_df.columns = ['parsed_' + col for col in parsed_df.columns]

        # Concatenate with original dataframe (drop the json column)
        result = pd.concat([df.drop(col_name, axis=1), parsed_df], axis=1)

        print(f"   Unstacked {len(parsed_df.columns)} JSON fields: {list(parsed_df.columns)[:5]}...")
        return result
    except Exception as e:
        print(f"WARN:  JSON unstacking failed: {e}")
        return df`:null}generateExecutor(){return`# === RUN IT ===
if __name__ == "__main__":
    asyncio.run(main())`}}function F(y){switch(y){case"simple":return new S;case"production":return new q;case"production-spreadsheet":return new j;case"minimal":case"basic":case"reproduction":case"analysis":return m.info(`Legacy template '${y}' requested, using 'simple' instead`),new S;default:return m.warn(`Unknown template: ${y}, defaulting to 'simple'`),new S}}function Y(){return[new S().getTemplate(),new q().getTemplate(),new j().getTemplate()]}class J{async generateScript(e,t={}){const s=Date.now();m.info("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:e,template:t.template||"minimal",startTime:s});try{m.info("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:e});const r=await L.loadTrialForExport(e);if(!r.ok){const h=r.error;return{ok:!1,error:new T("GENERATION_FAILED",`Failed to load trial data: ${h.message}`,{trialId:e,originalError:h})}}const{trial:n,apiCalls:a}=r.value;m.info("EXPORT_DEBUG: PYTHON_GENERATION LOADING_PARSER",{trialId:e});let o;const l=this.getPrimaryParserId(n);if(l)try{o=await U.getParser(l),o&&m.info("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOADED",{parserId:l,parserName:o.name,parserType:o.type,unstackJson:o.unstackJson})}catch(h){m.warn("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOAD_FAILED",{parserId:l,error:h})}const d=this.validateCodeGenOptions(t);if(!d.isValid)return{ok:!1,error:new T("INVALID_FIELDS",`Code generation validation failed: ${d.errors.join(", ")}`,{errors:d.errors})};let p=t.template||"minimal";p==="production"&&n.type==="spreadsheet"&&(p="production-spreadsheet",m.info("EXPORT_DEBUG: Auto-selected production-spreadsheet template for spreadsheet trial")),m.info("EXPORT_DEBUG: PYTHON_GENERATION GETTING_TEMPLATE",{templateId:p,trialType:n.type});const c=F(p),u=c.getTemplate();m.info("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{templateId:p,apiCallCount:a.length,hasParser:!!o});const _=Date.now(),i=c.generateScript(n,a,{includeComments:t.includeComments!==!1,parser:o});m.info("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-_,codeLength:i.length,estimatedBytes:C(i)});const f=Date.now()-s,g={filename:this.generateScriptFilename(n.name,p),mimeType:"text/x-python",data:i,metadata:{trialName:n.name,trialId:n.id,exportDate:new Date,callCount:a.length,fieldCount:0,format:"python",estimatedSizeBytes:C(i)},template:p,pythonVersion:u.pythonVersion,requiredPackages:this.extractRequiredPackages(u,t),codeLength:i.length,generationTimeMs:f};return m.info("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:e,templateId:p,filename:g.filename,codeLength:g.codeLength,generationTimeMs:g.generationTimeMs,requiredPackages:g.requiredPackages}),{ok:!0,value:g}}catch(r){const n=r instanceof Error?r:new Error(String(r));return m.info("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",n,{trialId:e,template:t.template||"minimal",generationTimeMs:Date.now()-s}),{ok:!1,error:new T("GENERATION_FAILED",`Python script generation failed: ${n.message}`,{trialId:e,options:t,originalError:r,generationTimeMs:Date.now()-s})}}}getAvailableTemplates(){return Y()}validateCodeGenOptions(e){const t=[],s=[];if(e.template){const r=this.getAvailableTemplates().map(n=>n.id);r.includes(e.template)||t.push(`Invalid template: ${e.template}. Available templates: ${r.join(", ")}`)}if(e.pythonVersion){const r=["3.8","3.9","3.10","3.11"];r.includes(e.pythonVersion)||s.push(`Python version ${e.pythonVersion} not explicitly supported. Supported versions: ${r.join(", ")}`)}if(e.includeVisualization){const r=e.template||"minimal";F(r).getTemplate().supportsVisualization||s.push(`Template '${r}' does not support built-in visualization. You can add your own visualization code to the exported script.`)}return{isValid:t.length===0,errors:t,warnings:s}}getPrimaryParserId(e){if(e.parserId)return e.parserId;if(e.type==="template"&&e.templateConfig?.parserId)return e.templateConfig.parserId;if(e.type==="spreadsheet"&&e.spreadsheetConfig?.parserId)return e.spreadsheetConfig.parserId}generateScriptFilename(e,t){const s=e.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",r=t==="minimal"?"":`_${t}`,a=new Date().toISOString().replace("T","_").replace(/:/g,"-").split(".")[0];return`${s}${r}_${a}.py`}extractRequiredPackages(e,t){return["json","requests","itertools","csv"]}}const V=new J;let N=null;async function z(){return N||(N=(await M(async()=>{const{default:y}=await import("./jszip.min-D2M0PaQz.js").then(e=>e.j);return{default:y}},__vite__mapDeps([0,1,2,3,4]))).default),N}class K{constructor(){O(this,"trialBundleService",new $)}async exportBundle(e,t){try{m.info("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:e,bundleType:t.bundleType});const s=await L.loadTrialForExport(e);if(!s.ok)return{ok:!1,error:new T("GENERATION_FAILED",`Failed to load trial: ${s.error?.message}`)};const{trial:r}=s.value;t.bundleType==="script-only"&&r.type==="spreadsheet"&&t.template==="production"&&(m.info("EXPORT_DEBUG: Forcing bundle mode for spreadsheet trial with production template"),t.bundleType="script-config-data");const n=await V.generateScript(e,{template:t.template||"simple",includeComments:t.includeComments!==!1});if(!n.ok)return{ok:!1,error:new T("GENERATION_FAILED",n.error?.message||"Failed to generate Python script")};if(t.bundleType==="script-only")return{ok:!0,value:{zipBlob:new Blob([n.value.data],{type:"text/x-python"}),filename:n.value.filename,sizeBytes:n.value.metadata.estimatedSizeBytes,contents:["experiment.py"]}};const a=await z(),o=new a,l=[];o.file("experiment.py",n.value.data),l.push("experiment.py");const d=await this.trialBundleService.exportTrialBundle(e,{includeResults:!0,includeApiCalls:!0,skipDownload:!0});if(d.ok?(o.file("trial_config.json",JSON.stringify(d.value.bundle,null,2)),l.push("trial_config.json")):m.warn("Failed to export trial bundle:",d.error),r.type==="spreadsheet"&&n.value.template==="production-spreadsheet"&&await this.addDatasetParquet(o,r,l),t.bundleType==="script-config-data"){const g=o.folder("data"),h=await I.getAvailableFields(e);let b=[];if(h.ok){const v=h.value.standardFields.map(x=>x.id).filter(x=>x!=="parameters"&&x!=="variables"),P=h.value.parameterFields.map(x=>x.id),R=(h.value.variableFields||[]).filter(x=>!x.id.startsWith("source_")).map(x=>x.id);b=[...v,...P,...R],m.info("EXPORT_DEBUG: REPRO_BUNDLE using all fields",{total:b.length,standard:v.length,params:P.length,vars:R.length})}else m.warn("Failed to get available fields, using defaults");const w=[{format:"csv",filename:"results.csv"},{format:"excel",filename:"results.xlsx"},{format:"jsonl",filename:"results.jsonl"}];for(const{format:v,filename:P}of w){const R=await I.exportTrialData(e,{format:v,fields:b.length>0?b:void 0,includeHeaders:!0,addBOM:v==="csv"||v==="excel"});if(R.ok){if(v==="excel"&&typeof R.value.data=="string"){const x=atob(R.value.data),k=new Uint8Array(x.length);for(let A=0;A<x.length;A++)k[A]=x.charCodeAt(A);g.file(P,k)}else g.file(P,R.value.data);l.push(`data/${P}`)}else m.warn(`Failed to export ${v}:`,R.error)}}const p=this.generateReadme(t.bundleType,n.value.metadata.trialName,t.template||"simple");o.file("README.md",p),l.push("README.md");const c=!!(r.parserId||r.type==="template"&&r.templateConfig?.parserId||r.type==="spreadsheet"&&r.spreadsheetConfig?.parserId),u=this.generateRequirementsTxt(t.template||"simple",c);o.file("requirements.txt",u),l.push("requirements.txt");const _=await o.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}),i=new Date().toISOString().split("T")[0].replace(/-/g,""),f=t.bundleType==="script-config-data"?"_complete":"_config",E=`${n.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_repro${f}_${i}.zip`;return{ok:!0,value:{zipBlob:_,filename:E,sizeBytes:_.size,contents:l}}}catch(s){return m.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",s),{ok:!1,error:new T("GENERATION_FAILED",s instanceof Error?s.message:"Unknown error creating bundle")}}}generateReadme(e,t,s){const r=new Date().toISOString();let n="";return e==="script-config-data"?n="## Contents of the ZIP bundle\n- `requirements.txt` - for installing python package dependencies\n- `experiment.py` - Python script to reproduce/re-run the experiment, without needing web/desktop Auditomatic app\n- `trial_config.json` - Complete trial configuration, for importing back to web/desktop Auditomatic app\n- `data/` - Full results from trial in web/desktop Auditomatic app (if trial has been run)\n- `data/results.csv` - CSV format\n- `data/results.xlsx` - Excel format\n- `data/results.jsonl` - JSONL format (one JSON object per line)\n\n## experiment.py will generate:\n- `results_YYYYMMDD_HHMMSS.db` - sqlite3 db for storing results and managing execution\n- `results_YYYYMMDD_HHMMSS.csv` - generated by default after trial is complete\n":n=`## Contents
- \`experiment.py\` - Python script to reproduce the experiment (${s} template)
`,`# Auditomatic Export Reproducibility Bundle

Trial Name: ${t}

Generated: ${r}

${n}

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
jmespath>=1.0.0
tenacity>=8.2.0
tqdm>=4.65.0
pandas>=2.0.0

# Optional dependencies for export formats
openpyxl>=3.1.0    # For Excel export (.xlsx)
pyarrow>=12.0.0    # For Parquet export (.parquet)

# Parser dependencies
py-mini-racer>=0.6.0    # For JavaScript parser support
`:`# Simple Template Requirements
# Install with: pip install -r requirements.txt

requests>=2.28.0
`}async addDatasetParquet(e,t,s){if(!(t.type!=="spreadsheet"||!t.spreadsheetConfig))try{const r=await B.datasets.get(t.spreadsheetConfig.datasetId);if(!r){m.warn("Dataset not found for spreadsheet trial");return}const{parquetGenerator:n}=await M(async()=>{const{parquetGenerator:o}=await import("./TrialsView-BVKrmwzM.js").then(l=>l.i);return{parquetGenerator:o}},__vite__mapDeps([5,6,2,1,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,4,29])),a=n.generate(r);e.file("data.parquet",a),s.push("data.parquet"),m.info("EXPORT_DEBUG: Added dataset parquet to bundle",{rows:r.rows.length,columns:r.columns.length,sizeBytes:a.byteLength})}catch(r){m.error("Failed to add dataset parquet:",r)}}}const Re=new K;export{Re as reproducibilityBundleService};
