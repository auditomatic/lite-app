var G=Object.defineProperty;var F=(e,t,r)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var f=(e,t,r)=>F(e,typeof t!="symbol"?t+"":t,r);import{be as Y,bf as M,bg as H,bh as K,bi as V,l as d,a as x,bj as z,ay as W,u as X,_ as Q}from"./index-CjCzef3S.js";import{a as m,g as N}from"./ExportDataModal-C7puzYan.js";import"./tabular-export-BSPrPPF5.js";import{p as Z}from"./response-features-BNMBgkAh.js";import"./tauri-vendor-CP__BcEW.js";import{a as ee,A as te}from"./response-evidence-codec-DlEeRLtf.js";import"./vue-vendor-BiegT0HZ.js";import"./ui-vendor-C1ajn_XG.js";import"./utils-vendor-B3deJ26_.js";import"./tauri-download-utilities-BUTm3V7w.js";import"./save-file-CZG4tw52.js";import"./trial-bundle.service-a3kv6sQU.js";import"./deep-equal-bLv6XEjO.js";import"./repository-Bnian23_.js";import"./repository-7WzhghoB.js";import"./dataset-operations-C4gCinc7.js";import"./useCrossTab-BqtV12zg.js";import"./row-filters-DVNsrKUs.js";import"./dataset-persistence-D3iM-vcU.js";import"./paged-table-reader-Cui7blz8.js";import"./trials-DO20hTcb.js";import"./field-ids-DXrUeamA.js";import"./dataset-export.service-mAEhu7xB.js";import"./ColumnFilterPanel-B3wNhwIb.js";import"./display-values-CK7BqR8V.js";import"./data-vendor-CKwrMZHi.js";const b="    ";class q{constructor(t){f(this,"name");this.name=t}}function c(e,t=0){return e==null?"None":e instanceof q?e.name:typeof e=="boolean"?e?"True":"False":typeof e=="number"?ne(e):typeof e=="string"?re(e):Array.isArray(e)?se(e,t):typeof e=="object"?oe(e,t):JSON.stringify(String(e))}function ne(e){return Number.isFinite(e)?String(e):"None"}function re(e){return e.includes(`
`)?ae(e):JSON.stringify(e)}function ae(e){let t="";const r=Array.from(e);for(let n=0;n<r.length;n++){const a=r[n],s=a.charCodeAt(0);a==="\\"?t+="\\\\":a==='"'&&(r[n+1]==='"'&&r[n+2]==='"'||n===r.length-1)?t+='\\"':a===`
`||a==="	"?t+=a:s<32||s===127?t+=`\\x${s.toString(16).padStart(2,"0")}`:a.length===1&&s>=55296&&s<=57343?t+=`\\u${s.toString(16).padStart(4,"0")}`:t+=a}return`"""${t}"""`}function se(e,t){if(e.length===0)return"[]";const r=b.repeat(t+1);return`[
${e.map(a=>`${r}${c(a,t+1)}`).join(`,
`)}
${b.repeat(t)}]`}function oe(e,t){const r=Object.keys(e);if(r.length===0)return"{}";const n=b.repeat(t+1);return`{
${r.map(s=>`${n}${JSON.stringify(s)}: ${c(e[s],t+1)}`).join(`,
`)}
${b.repeat(t)}}`}function ie(e,t){if(!t||!t.type||t.type==="none")return null;if(t.envVar)return t.envVar;const r=e.toUpperCase().replace(/[^A-Z0-9]+/g,"_").replace(/^_+|_+$/g,"");return r?`CUSTOM_${r}_API_KEY`:null}const L=[3,10],w=L.join("."),le="auditomatic-trial-spec",pe=2,de=Object.freeze({maxRetries:5,backoffMinSeconds:1,backoffMaxSeconds:60});function ce(e){const{trial:t,experiment:r,models:n,parser:a,postParser:s}=e,o=t.type==="spreadsheet"?t.spreadsheetConfig?.callOrder:t.templateConfig?.callOrder;return{schema:le,version:pe,trial:{name:t.name,...t.description?{description:t.description}:{}},experiment:r,execution:{repeatCount:Math.max(1,t.repeatCount||1),callOrder:o??"interleaved",retryPolicy:{...de}},refusalPhrases:Y(t.refusalPhrases),...a?{parser:R(a,"trial_parser.py")}:{},...s?{postParser:R(s,"trial_post_parser.py")}:{},models:n}}function R(e,t){const r=e.type==="python"?e.config.functionName||"parse":M;return{path:t,functionName:r,...t==="trial_parser.py"?{unstackJson:e.unstackJson===!0}:{}}}const ue=`#!/usr/bin/env python3
"""@@TRIAL_NAME@@ -- a reproduction of an Auditomatic trial.

    python experiment.py                    every call, recorded to results.jsonl, exported to results.csv
    python experiment.py --resume           continue after an interruption
    python experiment.py --resume --output parquet

trial.py holds the data: the models with the exact request bodies the app sent,
the prompts, the retry policy. trial_parser.py holds the parser the app ran.
This file is the code, in the order it runs: which calls are made, one call
from start to finish, then the loop that runs them and the export at the end.
"""
import sys

# Checked before anything else is imported, so a reader on an older Python sees
# this sentence rather than a syntax error from somewhere inside the bundle.
MIN_PYTHON = (3, 10)  # @@MIN_PYTHON@@
if sys.version_info < MIN_PYTHON:
    found = ".".join(map(str, sys.version_info[:3]))
    sys.stderr.write("This bundle requires Python %d.%d or newer (found %s).\\n" % (MIN_PYTHON + (found,)))
    raise SystemExit(1)

import itertools  # @@TEMPLATE ONLY@@
import json  # @@DATASET ONLY@@
import os
import time
from concurrent.futures import ThreadPoolExecutor

from auditomatic_runner import (
    BASE_COLUMNS,       # the columns every row has, in export order
    ApiAttemptError,    # raised by send() when a call has failed for good
    append_result,      # one JSON line per finished call
    build_request,      # fills {{PROMPT}} and {{SYSTEM_PROMPT}} into a model's recorded body
    check_api_keys,     # refuses to start with a key missing
    end_with_newline,   # repairs a record a killed process left half-written
    export_rows,        # csv / tsv / json / jsonl / sqlite / parquet
    extract,            # reads the answer, reasoning, usage and finish reason from a response
    failure_row,        # the row for a call that failed after its retries
    fill,               # {{name}} substitution, spelling values the way the app did
    parse_args,         # --concurrent, --rate-limit, --timeout, --resume, --output, ...
    print_summary,      # calls succeeded per configuration
    read_results,       # every row in results.jsonl
    send,               # one call with retries; returns {"status", "headers", "data"}
    unstack,            # a JSON parser's object spread into parsed_<key> columns
)
from trial import CALL_ORDER, MODELS, REFUSAL_PHRASES, REPEATS, RETRIES, SYSTEM_PROMPT
from trial import PROMPT_PATTERN  # @@DATASET ONLY@@
from trial import ATTRIBUTES, PROMPT_TEMPLATE, VARIABLES  # @@TEMPLATE ONLY@@
from trial_parser import parse  # @@PARSER IMPORT@@
post_parse = None  # @@POST PARSER IMPORT@@

# Whether the parser returns a JSON object whose keys become parsed_<key> columns.
UNSTACK_JSON = False  # @@UNSTACK_JSON@@

try:
    from tqdm import tqdm
except ImportError:  # pip install tqdm for a progress bar; without it, a count every 25 calls
    def tqdm(iterable, total=None, desc=None):
        for done, item in enumerate(iterable, 1):
            if done % 25 == 0 or done == total:
                print(f"  {done}/{total}")
            yield item


# @@BEGIN DATASET@@
def plan_tasks():
    """Which prompts are sent: one task per row of data.jsonl, times REPEATS."""
    rows = [json.loads(line) for line in open("data.jsonl", encoding="utf-8") if line.strip()]
    tasks = []
    for repeat in range(REPEATS):
        for index, row in enumerate(rows):
            tasks.append({
                "task_id": f"row{index}_r{repeat}",
                "prompt": fill(PROMPT_PATTERN, row),            # {{column}} filled from this row
                "system_prompt": fill(SYSTEM_PROMPT, row),
                "context": row,                                  # recorded beside the result, column for column
                "repeat_index": repeat,
            })
    return tasks
# @@END DATASET@@


# @@BEGIN TEMPLATE@@
def plan_tasks():
    """Which prompts are sent: every combination of VARIABLES, times REPEATS.
    VARIABLES is listed in the order the app sweeps it, the last name varying
    fastest, so combination i here is combination i in the app. ATTRIBUTES[name][i]
    labels VARIABLES[name][i] and is recorded as an attr_<name>__<key> column
    beside the value; it is not put into the prompt."""
    names = list(VARIABLES)
    values_per_name = [VARIABLES[name] or [""] for name in names]   # an empty list counts as one empty value, as the app counts it
    tasks = []
    combinations = list(itertools.product(*(range(len(values)) for values in values_per_name)))
    for repeat in range(REPEATS):
        for combo, positions in enumerate(combinations):
            values = {name: values_per_name[i][position] for i, (name, position) in enumerate(zip(names, positions))}
            context = dict(values)
            for i, name in enumerate(names):
                labels = ATTRIBUTES.get(name) or []
                for key, label in (labels[positions[i]] if positions[i] < len(labels) else {}).items():
                    context[f"attr_{name}__{key}"] = label
            tasks.append({
                "task_id": f"combo{combo}_r{repeat}",
                "prompt": fill(PROMPT_TEMPLATE, values),        # {{name}} filled from this combination
                "system_prompt": fill(SYSTEM_PROMPT, values),
                "context": context,                              # recorded beside the result, column for column
                "repeat_index": repeat,
            })
    return tasks
# @@END TEMPLATE@@


def task_id_for(model, task):
    return f"config{model['config_index']}_{task['task_id']}"


def report_retry(model, attempt, error, wait):
    """Printed by send() before each wait, so a run being rate limited says so."""
    print(f"Retry {attempt} {model['name']} in {wait:.1f}s: {str(error)[:100]}")


def perform_call(order, model, task, args):
    """One call, start to finish: build the request, send it, read the answer,
    parse it, append the row to results.jsonl. Returns the row."""
    task_id = task_id_for(model, task)
    started = time.monotonic()

    # A dataset column or variable named like one of the run's own columns is
    # recorded as var_<name>, so it cannot overwrite the run's record.
    context = {(f"var_{name}" if name in BASE_COLUMNS else name): value
               for name, value in task["context"].items()}

    # The recorded body with the two markers replaced. Nothing else is touched:
    # a literal {{PROMPT}} inside the article text stays as it is.
    headers, body = build_request(model, task)

    try:
        # Sent, and retried per RETRIES on a network error, a 429, a 5xx or a
        # provider error envelope saying so; each retry is reported by
        # report_retry. Waits for its turn under the rate limit before every
        # attempt.
        response = send(model, headers, body, RETRIES, args.timeout, args.rate_limit, report_retry)

        # The answer at extract_paths, first path that has one, plus reasoning,
        # token counts and finish_reason from their own paths.
        answer = extract(response, model)

        # The parser the app ran. A failure is recorded as text, not raised, so
        # one bad response cannot stop the run.
        try:
            parsed = parse(answer["extracted"]) if parse else None
        except Exception as error:
            parsed = f"PARSER_ERROR: {error}"

        # A second parser over the same answer, when the trial has one.
        try:
            post_parsed = post_parse(answer["extracted"]) if post_parse and answer["extracted"] else None
        except Exception as error:
            post_parsed = f"PARSER_ERROR: {error}"

        # A response containing any refusal phrase is flagged, and still parsed.
        refused = any(phrase.lower() in answer["extracted"].lower() for phrase in REFUSAL_PHRASES)

        row = {
            "order": order,
            "task_id": task_id,
            "config_index": model["config_index"],
            "model_name": model["name"],
            "display_name": model["display_name"],
            "repeat_index": task["repeat_index"],
            "prompt": task["prompt"],
            "system_prompt": task["system_prompt"],
        }
        row.update(context)
        row.update((f"param_{name}", value) for name, value in model["parameters"].items())
        row.update({
            "success": 1,
            "http_status": response["status"],
            "response_headers": response["headers"],
            "response_data": response["data"],               # the full response body, verbatim
            "extracted": answer["extracted"],
            "reasoning": answer["reasoning"],
            "subprovider": answer["subprovider"],
            "finish_reason": answer["finish_reason"],
            "prompt_tokens": answer["usage"].get("prompt_tokens"),
            "completion_tokens": answer["usage"].get("completion_tokens"),
            "total_tokens": answer["usage"].get("total_tokens"),
            "cost": answer["usage"].get("cost"),
            "input_cost": answer["usage"].get("input_cost"),
            "output_cost": answer["usage"].get("output_cost"),
            "parsed": parsed,
            "refused": refused,
            "post_parsed": post_parsed,
            "error": None,
        })
    except ApiAttemptError as error:
        # success 0, the error text, and whatever status, headers, body and
        # usage came back, so a failed call keeps its evidence and its cost.
        row = failure_row(order, task_id, model, task, context, error)
        print(f"FAILED {model['name']}: {str(error)[:100]}")

    row["duration_seconds"] = round(time.monotonic() - started, 3)
    append_result(args.record, row)
    return row


def main():
    args = parse_args()
    if args.max_retries is not None:      # --max-retries and --backoff-max override trial.py for one run
        RETRIES.max_retries = args.max_retries
    if args.backoff_max is not None:
        RETRIES.backoff_max = args.backoff_max
    check_api_keys(MODELS)

    # Every task for every model, in the same order the app planned the trial;
    # the export reads in this order too.
    tasks = plan_tasks()
    if CALL_ORDER == "sequential":
        tasks_by_repeat = [[task for task in tasks if task["repeat_index"] == repeat]
                           for repeat in range(REPEATS)]
        pairs = ((task, model) for repeat_tasks in tasks_by_repeat
                 for model in MODELS for task in repeat_tasks)
    else:
        pairs = ((task, model) for task in tasks for model in MODELS)
    calls = [(order, model, task) for order, (task, model) in enumerate(pairs)]

    # Resume: skip whatever the record already has as succeeded. Without
    # --resume, an existing record is refused rather than silently appended to.
    if args.resume:
        end_with_newline(args.record)
        done = {row["task_id"] for row in read_results(args.record) if row["success"] == 1}
    elif os.path.exists(args.record):
        raise SystemExit(f"{args.record} exists. Pass --resume to continue it, or move it aside to start fresh.")
    else:
        done = set()
    todo = [call for call in calls if task_id_for(call[1], call[2]) not in done]
    print(f"{len(calls)} calls | {len(done)} already done | {args.concurrent} concurrent | {args.rate_limit}/s")
    print(f"Record: {args.record}\\n")

    # The loop: args.concurrent calls in flight at once. Every finished call is
    # already in the record by the time it comes back here.
    with ThreadPoolExecutor(max_workers=args.concurrent) as pool:
        results = pool.map(lambda call: perform_call(*call, args), todo)
        for _ in tqdm(results, total=len(todo), desc="Running"):
            pass

    rows = sorted(read_results(args.record), key=lambda row: row["order"])
    print_summary(MODELS, rows)

    # The export is a rendering of the record; the record is the run.
    stem = args.record[:-6] if args.record.endswith(".jsonl") else args.record
    path = export_rows(rows, args.output, args.output_file or f"{stem}.{args.output}", UNSTACK_JSON)
    print(f"\\nWrote {path}\\nRecord: {args.record}")


if __name__ == "__main__":
    main()
`,S="@@AUDITOMATIC_PROMPT@@",A="@@AUDITOMATIC_SYSTEM@@",C="OUTPUT_SCHEMA";function D(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function me(e){return e.replace(/[\r\n]+/g," ")}function he(e,t,r,n){const a=e.providerSnapshot,s={"Content-Type":"application/json",...a.headers};a.auth?.type==="bearer"?s.Authorization="Bearer {{API_KEY}}":a.auth?.type==="header"&&a.auth.header&&(s[a.auth.header]="{{API_KEY}}");const o=JSON.parse(JSON.stringify(H(a,e.modelId,e.parameters||{},S,n?A:void 0)).split(S).join("{{PROMPT}}").split(A).join("{{SYSTEM_PROMPT}}")),i=K(e.parameters||{},a.responseModes||{}),l=a.responseModes?.[i]?.responseTransform,p=[...l?.contentPath?[l.contentPath]:[],...l?.fallbackPaths??[]];return{config_index:t,name:e.modelSnapshot?.displayName||e.modelId,display_name:r,provider:e.provider,api_key_env:ie(e.provider,a.auth),url:(a.api?.baseUrl??"")+(a.api?.endpoint??""),headers:s,body:o,parameters:e.parameters||{},response_mode:i,extract_paths:p.length?p:["response"],error_paths:l?.errorPath?[l.errorPath]:[],reasoning_paths:[...l?.reasoningPath?[l.reasoningPath]:[],...l?.reasoningFallbackPaths??[]],subprovider_paths:a.responseFeatures?.subprovider?.extractionPaths??[],finish_reason_paths:a.responseFeatures?.finishReason?.extractionPaths??[],usage_paths:fe(a.usageExtraction)}}function fe(e){const t={};for(const[r,n]of[["prompt_tokens",e?.promptTokensPath],["completion_tokens",e?.completionTokensPath],["total_tokens",e?.totalTokensPath],["cost",e?.costPath],["input_cost",e?.inputCostPath],["output_cost",e?.outputCostPath]])n&&(t[r]=n);return t}function _e(e,t){const r=new Map;for(const a of e.configurations){const s=a.modelSnapshot?.displayName||a.modelId;r.set(s,(r.get(s)||0)+1)}const n=new Map;return e.configurations.flatMap((a,s)=>{if(!a.providerSnapshot)throw new Error(`Cannot generate a reproduction for configuration ${s}: it has no frozen provider snapshot.`);const o=a.modelSnapshot?.displayName||a.modelId;let i=o;if((r.get(o)??0)>1){const l=(n.get(o)??0)+1;n.set(o,l),i=`${o} [Config ${l}]`}return[he(a,s,i,t)]})}function ye(e){const t=new Map,r=o=>{if(Array.isArray(o)){o.forEach(r);return}if(!o||typeof o!="object")return;const i=o;if(i.properties&&typeof i.properties=="object"){const l=JSON.stringify(i),p=t.get(l)??{value:i,count:0};p.count+=1,t.set(l,p)}Object.values(i).forEach(r)};r(e);let n=null;for(const[o,i]of t)i.count>=2&&(!n||o.length>n.key.length)&&(n={key:o,value:i.value});if(!n)return{schema:null,models:e};const a=n.key,s=o=>Array.isArray(o)?o.map(s):!o||typeof o!="object"?o:JSON.stringify(o)===a?new q(C):Object.fromEntries(Object.entries(o).map(([i,l])=>[i,s(l)]));return{schema:n.value,models:s(e)}}function ge(e){if(e.type==="python"){const t=e.config;return{source:t.code??"",functionName:t.functionName||"parse"}}return{source:V({...e.config,outputType:e.outputType}).trim(),functionName:M}}function O(e,t){const{source:r}=ge(e);return[`# ${me(e.name)} -- the trial's ${t}, exactly as the app ran it.`,"# experiment.py imports it and calls it on every answer. It can also be","# imported on its own and run over answers recorded in results.jsonl.",""].join(`
`)+r+(r.endsWith(`
`)?"":`
`)}function be(e){if(e.template){const t=Object.keys(e.template.variables).sort(),r=e.template.attributes??{};return{kind:"template",promptTemplate:e.template.text,...e.systemPrompt?{systemPromptTemplate:e.systemPrompt}:{},variables:Object.fromEntries(t.map(n=>[n,e.template.variables[n]])),attributes:Object.fromEntries(t.filter(n=>r[n]).map(n=>[n,r[n]]))}}return{kind:"dataset",promptPattern:e.dataset.pattern,...e.systemPrompt?{systemPrompt:e.systemPrompt}:{},dataset:{path:"data.jsonl",format:"jsonl"}}}function we(e){const{schema:t,models:r}=ye(e.models),n=e.experiment.kind==="template"?["# The user message. Each {{name}} is filled from one combination of VARIABLES.",`PROMPT_TEMPLATE = ${c(e.experiment.promptTemplate)}`,"","# The values swept, by name in the order the app sweeps them (alphabetical,","# the last varying fastest); every combination is one call.",`VARIABLES = ${c(e.experiment.variables)}`,"","# Labels for the values above, positional: ATTRIBUTES[name][i] describes","# VARIABLES[name][i]. Each key becomes an attr_<name>__<key> column.",`ATTRIBUTES = ${c(e.experiment.attributes)}`]:["# The user message. Each {{column}} is filled from one row of data.jsonl.",`PROMPT_PATTERN = ${c(e.experiment.promptPattern)}`],a=e.execution.retryPolicy,s=e.experiment.kind==="template"?e.experiment.systemPromptTemplate:e.experiment.systemPrompt;return[`"""${D(e.trial.name)} -- the trial as data. Nothing in this file runs anything.`,"","Read it top to bottom: how hard to retry, how many repeats, the prompt and the","system prompt exactly as the app sent them, the phrases that count as a","refusal, the JSON schema the models were asked to follow, and one entry per","model configuration with the exact request body the app sent.",'"""',"from auditomatic_runner import RetryPolicy","","# Up to 6 attempts per call: the first, then 5 retries, waiting 1, 2, 4, ... seconds","# (never more than 60) between them, with random jitter so parallel calls do not","# retry in lockstep. Only network errors, 429s, 5xxs and provider error envelopes","# that say so are retried; an invalid key or a rejected parameter is recorded once.",`RETRIES = RetryPolicy(max_retries=${a.maxRetries}, backoff_min=${a.backoffMinSeconds}, backoff_max=${a.backoffMaxSeconds})`,"","# How many times each call is made. 1 means once.",`REPEATS = ${e.execution.repeatCount}`,"","# Interleaved cycles through every model for each prompt; sequential runs","# every prompt for one model before moving to the next model.",`CALL_ORDER = ${c(e.execution.callOrder)}`,"",...n,"","# The system message, sent with every call; None when the trial had none.",`SYSTEM_PROMPT = ${c(s??null)}`,"","# A response containing any of these, case-insensitively, is recorded as","# refused. It is still parsed; refused is a separate column.",`REFUSAL_PHRASES = ${c(e.refusalPhrases)}`,...t?["","# The JSON schema every model was asked to follow, written once and","# referenced by name below, because each provider wants it in a different","# place in the request body.",`${C} = ${c(t)}`]:[],"","# One entry per model configuration, in the order they appear in the app.","#","#   url, headers    where the request went; {{API_KEY}} is read from api_key_env","#   body            the exact JSON the app sent, with {{PROMPT}} and","#                   {{SYSTEM_PROMPT}} where the text went","#   parameters      the settings chosen in the app for this configuration; each","#                   becomes a param_<name> column in the export","#   extract_paths   where the answer is read from in the response, first hit wins","#   error_paths, reasoning_paths, finish_reason_paths, subprovider_paths, usage_paths","#                   where the rest of the row is read from",`MODELS = ${c(r)}`,""].join(`
`)}function g(e,t,r){return e.replace(t,()=>r)}function ve(e){const t=e.experiment.kind==="template"?"TEMPLATE":"DATASET",r=e.experiment.kind==="template"?"DATASET":"TEMPLATE";let n=ue;return n=g(n,"@@TRIAL_NAME@@",D(e.trial.name)),n=g(n,/^MIN_PYTHON = .*@@MIN_PYTHON@@$/m,`MIN_PYTHON = (${L.join(", ")})`),n=n.replace(new RegExp(`\\n*# @@BEGIN ${r}@@\\n[\\s\\S]*?# @@END ${r}@@\\n`),`
`),n=n.replace(new RegExp(`# @@BEGIN ${t}@@\\n`),"").replace(new RegExp(`# @@END ${t}@@\\n`),""),n=g(n,/^from trial_parser import parse  # @@PARSER IMPORT@@$/m,e.parser?`from trial_parser import ${e.parser.functionName} as parse`:"parse = None"),n=g(n,/^post_parse = None  # @@POST PARSER IMPORT@@$/m,e.postParser?`from trial_post_parser import ${e.postParser.functionName} as post_parse`:"post_parse = None"),n=g(n,/^UNSTACK_JSON = .*@@UNSTACK_JSON@@$/m,`UNSTACK_JSON = ${e.parser?.unstackJson?"True":"False"}`),n.split(`
`).flatMap(s=>s.endsWith(`# @@${r} ONLY@@`)?[]:s.endsWith(`# @@${t} ONLY@@`)?[s.replace(new RegExp(`\\s*# @@${t} ONLY@@$`),"")]:[s]).join(`
`)}function Ee(e){if(!e.template&&!e.dataset)throw new Error("generateReproduction needs either a template or a dataset");const t=ce({trial:e.trial,experiment:be(e),models:_e(e.trial,!!e.systemPrompt),parser:e.parser,postParser:e.postParser}),r={"experiment.py":ve(t),"trial.py":we(t)};return e.parser&&(r["trial_parser.py"]=O(e.parser,"parser")),e.postParser&&(r["trial_post_parser.py"]=O(e.postParser,"post-processing parser")),{files:r,trialSpec:t}}const xe=Object.freeze([]),j=[...xe],ke={heading:"Optional dependencies: a progress bar, and Parquet output",specs:["tqdm==4.70.1    # Progress bar; without it a count is printed every 25 calls","pyarrow==21.0.0    # For --output parquet"]},Te="0.63.4",Pe={heading:"Required by this trial's parser (JSON repair)",specs:[`json-repair==${Te}`]};function Ne(e){const t=[...j.length?[{heading:"Required",specs:[...j]}]:[],ke];return Re(e.parser)&&t.push(Pe),t}function Re(e){if(!e||e.type!=="python"||!e.config)return!1;const t=e.config.code;return typeof t=="string"&&/\bjson_repair\b/.test(t)}function Se(e){return e.flatMap(t=>t.specs.map(Oe))}function Ae(e){const t=e.map(r=>`# ${r.heading}
${r.specs.join(`
`)}`).join(`

`);return`# Auditomatic reproduction requirements
# Install with: pip install -r requirements.txt
# Requires Python ${w} or newer -- experiment.py checks this itself and refuses to run otherwise.

${t}
`}function Oe(e){return e.split("#")[0].trim().split(/[<>=!~\s[]/)[0]}class _ extends Error{constructor(r,n){super(r);f(this,"trialId");this.trialId=n,this.name="ExperimentSourceError"}}function je(e){const t=e.repeatCount||1;switch(e.type){case"template":return I(e,t);case"playground":if(e.templateConfig?.template)return I(e,t);throw new _("Python reproduction is available only for trials surfaced in the Trials UI. Create a multi-model trial from Playground to export it.",e.id);case"spreadsheet":return Ie(e,t);default:throw new _(`Cannot export this trial: unrecognized trial type "${e.type}".`,e.id)}}function I(e,t){const r=e.templateConfig;if(!r?.template)throw new _("Cannot export this trial: it is a template trial but carries no prompt template, so there is nothing to reproduce.",e.id);const n={},a={};for(const[s,o]of Object.entries(r.variables??{})){const i=Me(o);if(!i)continue;const l=qe(i);l.length>0?(a[s]=l,n[s]=i.map(p=>({value:p.value,attributes:p.attributes??{}}))):n[s]=i.map(p=>p.value)}return{kind:"templated",promptTemplate:r.template,systemPromptTemplate:r.systemPrompt||void 0,variables:n,attributeKeys:a,repeatCount:t}}function Ie(e,t){const r=e.spreadsheetConfig;if(!r?.promptPattern)throw new _("Cannot export this trial: it is a spreadsheet trial but carries no prompt pattern, so there is nothing to reproduce.",e.id);if(!r.datasetId)throw new _("Cannot export this trial: it is a spreadsheet trial with no dataset reference, so the exported script would have no rows to run against.",e.id);return{kind:"dataset",promptPattern:r.promptPattern,systemPrompt:r.systemPrompt||void 0,datasetId:r.datasetId,repeatCount:t}}function Me(e){return"snapshot"in e&&e.snapshot?e.snapshot.items.map(t=>({value:t.value,attributes:t.attributes})):e.type==="value"&&e.values?e.values.map(t=>({value:t})):null}function qe(e){const t=new Set;for(const r of e)if(r.attributes)for(const n of Object.keys(r.attributes))t.add(n);return Array.from(t).sort()}function Le(e){const t={},r={};for(const[n,a]of Object.entries(e)){const s=a.map(o=>o&&typeof o=="object"&&"value"in o?o:{value:o,attributes:{}});t[n]=s.map(o=>o.value),s.some(o=>Object.keys(o.attributes??{}).length>0)&&(r[n]=s.map(o=>o.attributes??{}))}return{variables:t,attributes:r}}class Ce{async generateBundle(t){const r=Date.now();d.debug("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:t,startTime:r});try{d.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:t});const n=await x.trials.get(t);if(!n)return{ok:!1,error:new m("GENERATION_FAILED",`Failed to load trial data: Trial with ID ${t} not found`,{trialId:t})};let a;try{a=je(n)}catch(y){if(y instanceof _)return{ok:!1,error:new m("GENERATION_FAILED",y.message,{trialId:t})};throw y}d.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_PARSER",{trialId:t});const s=await this.resolveParser(t,n.parserSnapshot,this.getPrimaryParserId(n),"parser");if(!s.ok)return s;const o=s.value,i=await this.resolveParser(t,n.postParserSnapshot,n.postParserId,"post-processing parser");if(!i.ok)return i;const l=i.value,p=a.kind==="dataset"?"spreadsheet":"template";d.debug("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{renderer:p,hasParser:!!o});const v=Date.now(),h=Ee({trial:n,parser:o,postParser:l,...a.kind==="dataset"?{dataset:{pattern:a.promptPattern},systemPrompt:a.systemPrompt}:{template:{text:a.promptTemplate,...Le(a.variables)},systemPrompt:a.systemPromptTemplate}}),{files:u,trialSpec:B}=h,k=u["experiment.py"];d.debug("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-v,files:Object.keys(u),codeLength:k.length,estimatedBytes:N(k)});const U=Date.now()-r,T=Ne({parser:o,renderer:p}),P=Object.values(u).reduce((y,J)=>y+N(J),0),E={metadata:{trialName:n.name,trialId:n.id,exportDate:new Date,callCount:0,fieldCount:0,format:"python",estimatedSizeBytes:P},renderer:p,files:u,pythonVersion:w,requiredPackages:Se(T),requirementsTxt:Ae(T),trialSpec:B,generationTimeMs:U};return d.debug("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:t,renderer:p,files:Object.keys(u),estimatedSizeBytes:P,generationTimeMs:E.generationTimeMs,requiredPackages:E.requiredPackages}),{ok:!0,value:E}}catch(n){const a=n instanceof Error?n:new Error(String(n));return d.debug("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",a,{trialId:t,generationTimeMs:Date.now()-r}),{ok:!1,error:new m("GENERATION_FAILED",`Python script generation failed: ${a.message}`,{trialId:t,originalError:n,generationTimeMs:Date.now()-r})}}}getPrimaryParserId(t){return Z(t)}async resolveParser(t,r,n,a){if(r){const i=z(r);return d.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_FROM_SNAPSHOT",{label:a,parserId:i.id,parserName:i.name,parserType:i.type}),{ok:!0,value:i}}if(!n)return{ok:!0,value:void 0};let s,o;try{s=await W.getParser(n)}catch(i){o=i}if(!s){d.warn("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOAD_FAILED",{label:a,parserId:n,error:o});const i=o instanceof Error?o.message:"parser not found";return{ok:!1,error:new m("GENERATION_FAILED",`This trial is configured to use ${a} "${n}", but it could not be loaded (${i}). Generating the script without it would change how responses are extracted and classified, so the export would not reproduce this trial.`,{trialId:t,parserId:n,originalError:o})}}return d.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOADED",{label:a,parserId:n,parserName:s.name,parserType:s.type,unstackJson:s.unstackJson}),{ok:!0,value:s}}}const De=new Ce;class $ extends Error{constructor(r,n,a){const s=a instanceof Error?`: ${a.message}`:"";super(`Cannot build this archive without ${r}. ${n}${s}`);f(this,"path");f(this,"reason");f(this,"cause");this.path=r,this.reason=n,this.cause=a,this.name="MissingRequiredEntryError"}}async function $e(e){const t=[],r=[];for(const n of e){let a=null,s;try{a=await n.produce()}catch(o){s=o}if(a==null){if(n.required)throw new $(n.path,n.requiredBecause??"It is a required part of this artifact.",s);d.warn("[artifact-composer] Skipping optional entry",{path:n.path,error:s});continue}t.push({path:n.path,data:a}),r.push(n.path)}return{entries:t,contents:r}}const Be=`"""Auditomatic reproduction runner.

The mechanics a generated bundle's experiment.py imports, each with one
correct implementation and no decisions of the trial in it. Read them in
this order:

    prompts.py   filling a prompt, and spelling a value the way the app spells it
    api.py       the request, sending it with retries, reading the answer
    record.py    results.jsonl, and the row a failed call gets
    export.py    the record rendered as csv / tsv / json / jsonl / sqlite / parquet
    cli.py       the flags, the key check, the rate limit, the summary

Only the standard library is needed to run. tqdm draws the progress bar when
it is installed; Parquet output needs pyarrow.
"""
from .api import ApiAttemptError, RetryPolicy, build_request, extract, send, value_at
from .cli import check_api_keys, parse_args, print_summary, wait_for_turn
from .export import export_rows, unstack
from .prompts import fill, spell
from .record import BASE_COLUMNS, append_result, end_with_newline, failure_row, read_results

__all__ = ["ApiAttemptError", "RetryPolicy", "build_request", "extract", "send", "value_at",
           "check_api_keys", "parse_args", "print_summary", "wait_for_turn",
           "export_rows", "unstack", "fill", "spell",
           "BASE_COLUMNS", "append_result", "end_with_newline", "failure_row", "read_results"]
`,Ue=`"""Filling a prompt, and spelling a value the way the app spells it.

The app renders values with JavaScript's rules, and a reproduction has to write
the same characters. Python's own str() differs on exactly the values a run
produces most: True/true, 1.0/1, 1e+17/100000000000000000. Everything in this
module exists to close that gap. The TypeScript side of the contract is
normalize.ts for prompts and stringifyTabularCell for cells;
python-parity.test.ts runs both over the same fixtures.
"""
import datetime
import json
import math
import re
from decimal import Decimal


def format_double(value):
    """A finite float spelled the way ECMAScript's Number::toString spells it.

    Python and JavaScript both produce shortest round-trip digits but switch to
    exponent notation at different sizes: Python at 1e16 and 1e-5, JavaScript
    at 1e21 and 1e-7. This takes Python's digits and applies JavaScript's rule.
    """
    if value == 0:
        return "0"  # also collapses -0.0, as String(-0) does
    sign, digits, exponent = Decimal(repr(value)).normalize().as_tuple()
    digits = "".join(str(d) for d in digits)
    prefix = "-" if sign else ""
    point = exponent + len(digits)
    if len(digits) <= point <= 21:
        return prefix + digits + "0" * (point - len(digits))
    if 0 < point <= 21:
        return prefix + digits[:point] + "." + digits[point:]
    if -6 < point <= 0:
        return prefix + "0." + "0" * -point + digits
    mantissa = digits[0] + ("." + digits[1:] if len(digits) > 1 else "")
    return "%s%se%s%d" % (prefix, mantissa, "+" if point > 0 else "-", abs(point - 1))


class _JsEncoder(json.JSONEncoder):
    """json.dumps with JavaScript's float spelling; NaN and infinity become null, as JSON.stringify makes them."""

    def iterencode(self, o, _one_shot=False):
        def floatstr(x):
            return format_double(x) if math.isfinite(x) else "null"
        string_encoder = json.encoder.encode_basestring_ascii if self.ensure_ascii else json.encoder.encode_basestring
        return json.encoder._make_iterencode(
            {}, self.default, string_encoder, self.indent, floatstr,
            self.key_separator, self.item_separator, self.sort_keys, self.skipkeys, _one_shot)(o, 0)


def js_json(value, indent=None, ascii_only=False):
    """JSON.stringify(value), optionally ASCII-escaped for a durable JSON text file."""
    return json.dumps(value, cls=_JsEncoder, ensure_ascii=ascii_only, indent=indent,
                      separators=(",", ":") if indent is None else (",", ": "))


def spell(value):
    """One value as the app spells it into a prompt or a text cell.

    A blank is the empty string; a bool is true/false; a number is spelled by
    format_double; a dict or list is compact JSON; a datetime is its ISO form in
    UTC; anything else is its str().
    """
    if value is None or value == "":
        return ""
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, int):
        return str(value)
    if isinstance(value, float):
        return format_double(value) if math.isfinite(value) else ""
    if isinstance(value, datetime.datetime):
        if value.tzinfo is not None:
            value = value.astimezone(datetime.timezone.utc).replace(tzinfo=None)
        return "%s.%03dZ" % (value.strftime("%Y-%m-%dT%H:%M:%S"), value.microsecond // 1000)
    if isinstance(value, datetime.date):
        return value.strftime("%Y-%m-%dT00:00:00.000Z")
    if isinstance(value, (dict, list, tuple)):
        try:
            return js_json(value)
        except (TypeError, ValueError):
            return ""
    return str(value)


# The name may hold anything but a brace, and is trimmed, so \`{{{a}}}\` is the
# placeholder \`{{a}}\` with a literal brace either side.
_PLACEHOLDER = re.compile(r"\\{\\{([^{}]+)\\}\\}")


def fill(template, values):
    """Replace every {{name}} in template with that value's spelling.

    An unknown name contributes no text, matching the app's paste-from-cell
    behaviour: a missing cell and an empty cell both paste nothing. \`{{}}\` is
    literal text, since nothing can be keyed on nothing.
    """
    if template is None:
        return None

    def replace(match):
        key = match.group(1).strip()
        return spell(values.get(key)) if key else match.group(0)
    return _PLACEHOLDER.sub(replace, template)
`,Je=`"""The request, sending it with retries, and reading the answer.

Every entry in MODELS carries the exact request body the app sent, with
{{PROMPT}} and {{SYSTEM_PROMPT}} where the text went, and the paths in the
response where the answer, the reasoning, the token counts and the finish
reason were read from. This module substitutes, sends and reads. It knows no
provider by name; everything provider-specific is in those paths.
"""
import json
import os
import random
import re
import time
import urllib.error
import urllib.request

from .cli import wait_for_turn
from .prompts import spell


class RetryPolicy:
    """How hard to try. Edited in trial.py.

    max_retries counts retries, so each call makes up to max_retries + 1
    attempts. The wait between attempts doubles from backoff_min up to
    backoff_max seconds, with random jitter so parallel calls do not retry in
    lockstep.
    """

    def __init__(self, max_retries=5, backoff_min=1, backoff_max=60):
        self.max_retries = max_retries
        self.backoff_min = backoff_min
        self.backoff_max = backoff_max


class ApiAttemptError(Exception):
    """A failed attempt, carrying its evidence. retryable says whether another attempt makes sense."""

    def __init__(self, message, status=None, headers=None, data=None, retryable=True, usage=None, retry_after=None):
        super().__init__(message)
        self.status, self.headers, self.data, self.retryable = status, headers, data, retryable
        self.usage, self.retry_after = usage or {}, retry_after


# --- The request --------------------------------------------------------------

_MARKER = re.compile(r"\\{\\{(PROMPT|SYSTEM_PROMPT)\\}\\}")


def build_request(model, task):
    """The recorded body with the two markers replaced, and nothing else touched.

    Only the marker strings in the recorded body are substituted, so a literal
    {{SYSTEM_PROMPT}} inside a user's prompt survives as ordinary text. The API
    key is read from the environment variable model["api_key_env"] names.
    """
    key = os.environ.get(model["api_key_env"], "") if model.get("api_key_env") else ""
    headers = {k: v.replace("{{API_KEY}}", key) for k, v in model["headers"].items()}

    def substitute(value):
        if isinstance(value, str):
            return _MARKER.sub(lambda m: str(task["prompt"]) if m.group(1) == "PROMPT" else (task.get("system_prompt") or ""), value)
        if isinstance(value, list):
            return [substitute(v) for v in value]
        if isinstance(value, dict):
            return {k: substitute(v) for k, v in value.items()}
        return value
    return headers, substitute(model["body"])


# --- Sending ------------------------------------------------------------------


def request_once(model, headers, body, timeout):
    """One physical POST. Returns (status, header pairs, body text); a transport failure is retryable."""
    request = urllib.request.Request(model["url"], data=json.dumps(body).encode("utf-8"), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            return response.status, list(response.headers.items()), response.read().decode("utf-8")
    except urllib.error.HTTPError as error:
        return error.code, list(error.headers.items()), error.read().decode("utf-8")
    except (urllib.error.URLError, TimeoutError, OSError) as error:
        raise ApiAttemptError(f"Network error: {error}") from error


def send(model, headers, body, retries, timeout, per_second=None, on_retry=None, transport=request_once):
    """POST the body to model["url"] and return {"status", "headers", "data"}.

    Retried per \`retries\` when the failure is a network error, a 429, a 5xx, or
    a provider error envelope carrying such a code, including one inside an
    HTTP 200 body. An invalid key or a rejected parameter is not retried.
    Waits for its turn under the rate limit before every attempt, so the limit
    counts what actually leaves the process. A Retry-After header sets the
    floor of the next wait. \`on_retry(model, attempt, error, wait)\` is called
    before each wait, so the caller can report it. Raises ApiAttemptError with
    the last response attached. \`transport\` exists so a test can stand in for
    the network.

    The app's rule for what is retryable is classifyApiError in
    src/trials/engine/executor.ts; malformed-body-retry-classification.test.ts
    holds the two to the same answers.
    """
    attempt = 0
    while True:
        attempt += 1
        try:
            wait_for_turn(per_second)
            status, response_headers, text = transport(model, headers, body, timeout)
            data = parse_response(text, status, response_headers, model)
            return {"status": status, "headers": response_headers, "data": data}
        except ApiAttemptError as error:
            if not error.retryable or attempt > retries.max_retries:
                raise
            wait = min(retries.backoff_max, retries.backoff_min * 2 ** (attempt - 1)) * (0.5 + random.random())
            if error.retry_after:
                wait = max(wait, error.retry_after)
            if on_retry:
                on_retry(model, attempt, error, wait)
            time.sleep(wait)


def parse_response(text, status, headers, model):
    """The body as data for a good attempt; ApiAttemptError for a bad one.

    Bad means: not JSON; a status outside 2xx; or a 2xx whose body carries a
    provider error envelope, which several providers send inside a choice.
    """
    try:
        data = json.loads(text)
    except json.JSONDecodeError as error:
        raise ApiAttemptError(f"Invalid JSON response (HTTP {status}): {error}", status, headers, text, retryable=False) from error
    usage = extract_usage(data, model.get("usage_paths"))
    error = find_api_error(data, model)
    retry_after = _retry_after(headers)
    if not 200 <= status < 300:
        message = error_message(error) if error is not None else text[:200]
        raise ApiAttemptError(f"HTTP {status}: {message}", status, headers, data, is_retryable(status, error), usage, retry_after)
    if error is not None:
        raise ApiAttemptError(f"API error: {error_message(error)}", status, headers, data, is_retryable(status, error), usage, retry_after)
    return data


def _retry_after(headers):
    for name, value in headers or []:
        if name.lower() == "retry-after":
            try:
                return float(value)
            except ValueError:
                return None
    return None


def find_api_error(data, model):
    """The provider's own error, if the body carries one: declared paths first, then the common shapes."""
    if not isinstance(data, dict):
        return None
    for path in model.get("error_paths", []):
        configured = value_at(data, path)
        if configured not in (None, ""):
            return configured
    if data.get("error") is not None:
        return data["error"]
    if isinstance(data.get("errors"), list) and data["errors"]:
        return data["errors"][0]
    if data.get("type") == "error":
        return data
    for choice in data.get("choices") or []:
        if isinstance(choice, dict):
            if choice.get("error") is not None:
                return choice["error"]
            if isinstance(choice.get("message"), dict) and choice["message"].get("error") is not None:
                return choice["message"]["error"]
    return None


def error_message(payload):
    if isinstance(payload, str):
        return payload
    if isinstance(payload, dict):
        if isinstance(payload.get("message"), str):
            return payload["message"]
        if isinstance(payload.get("error"), str):
            return payload["error"]
    return json.dumps(payload, ensure_ascii=False)


def error_code(payload):
    if isinstance(payload, dict):
        for key in ("code", "status"):
            try:
                return int(payload[key])
            except (KeyError, TypeError, ValueError):
                continue
    return None


def is_retryable(status, payload):
    """429 and 5xx are retryable, by HTTP status or by the code inside the error envelope; nothing else is."""
    code = error_code(payload)
    return status == 429 or status >= 500 or code == 429 or (code is not None and code >= 500)


# --- Reading the answer -------------------------------------------------------

_FILTER = re.compile(r"^(.+?)\\[\\?\\(@\\.(.+?)==(?:'|\\")(.+?)(?:'|\\")\\)\\]\\.(.+)$")


def value_at(obj, path):
    """Resolve \`choices[0].message.content\` or \`content[?(@.type=='x')].text\`.

    The same resolver the app uses (src/shared/utils/json-path.ts). Returns
    None rather than raising when the path does not fit the response.
    """
    if not isinstance(obj, (dict, list)) or not path:
        return None
    filtered = _FILTER.match(path)
    if filtered:
        array_path, field, wanted, rest = filtered.groups()
        array = value_at(obj, array_path)
        match = next((i for i in array if isinstance(i, dict) and i.get(field) == wanted), None) if isinstance(array, list) else None
        return value_at(match, rest) if match is not None else None
    current = obj
    for part in (p for p in re.split(r"[.\\[\\]]", path) if p):
        if current is None:
            return None
        if part.isdigit():
            if not isinstance(current, list) or int(part) >= len(current):
                return None
            current = current[int(part)]
        else:
            if not isinstance(current, dict):
                return None
            current = current.get(part)
    return current


def first_at(data, paths):
    """The first present value among \`paths\`. '', 0 and False are real values and are matched."""
    for path in paths or []:
        value = value_at(data, path)
        if value is not None:
            return value
    return None


def first_string_at(data, paths):
    for path in paths or []:
        value = value_at(data, path)
        if isinstance(value, str) and value.strip():
            return value.strip()
    return None


def number_at(data, path):
    """A number at one path, or None. Booleans are not numbers here: "cost": false is not a cost of 0."""
    value = value_at(data, path) if path else None
    return value if isinstance(value, (int, float)) and not isinstance(value, bool) else None


def extract_usage(data, paths):
    """Token counts and cost from the declared paths.

    A comma-separated total path means "add these": Ollama reports the halves
    and no total. When no total is declared or found, one is calculated from
    the halves, but only if it comes to more than zero, so a response that
    reported nothing stays absent rather than becoming a confident 0.
    """
    if not paths:
        return {}
    prompt, completion = number_at(data, paths.get("prompt_tokens")), number_at(data, paths.get("completion_tokens"))
    total_path = paths.get("total_tokens")
    if total_path and "," in total_path:
        parts = [n for n in (number_at(data, p.strip()) for p in total_path.split(",")) if n is not None]
        total = sum(parts) if parts else None
    else:
        total = number_at(data, total_path) if total_path else None
    if total is None:
        calculated = (prompt or 0) + (completion or 0)
        total = calculated if calculated > 0 else None
    return {"prompt_tokens": prompt, "completion_tokens": completion, "total_tokens": total,
            "cost": number_at(data, paths.get("cost")), "input_cost": number_at(data, paths.get("input_cost")),
            "output_cost": number_at(data, paths.get("output_cost"))}


_THINK = re.compile(r"<think\\b[^>]*>(.*?)</think>", re.IGNORECASE | re.DOTALL)


def split_think_tags(content):
    """Pull <think>...</think> out of an answer, as the app does.

    A pair whose contents are empty contributes no reasoning, and then nothing
    is stripped. Several pairs join with a blank line, and the text around them
    is concatenated with no separator.
    """
    parts, reasoning, last = [], [], 0
    for match in _THINK.finditer(content):
        parts.append(content[last:match.start()])
        if match.group(1).strip():
            reasoning.append(match.group(1).strip())
        last = match.end()
    if not reasoning:
        return content, None
    parts.append(content[last:])
    return "".join(parts), "\\n\\n".join(reasoning)


def extract(response, model):
    """The answer and what is recorded beside it, from the paths in \`model\`.

    Returns {"extracted", "reasoning", "subprovider", "finish_reason", "usage"}.
    extracted is the first extract_paths entry that resolves; a 2xx whose
    paths resolve to nothing is a completed call with an empty answer, not a
    failure, and finish_reason says why it stopped. A value that is not text
    is spelled the way the app spells it, since the parser receives it.
    Inline <think> reasoning is split out only when the provider declared no
    reasoning path of its own. Mirrors parseProviderResponse in
    src/models/providers/response-parser.ts; app-vs-bundle-extraction-parity.test.ts
    feeds both the same bodies.
    """
    data = response["data"]
    answer = first_at(data, model["extract_paths"])
    extracted = "" if answer is None else (answer if isinstance(answer, str) else spell(answer))
    reasoning = first_at(data, model.get("reasoning_paths"))
    if not reasoning:
        extracted, inline = split_think_tags(extracted)
        reasoning = inline or reasoning
    return {"extracted": extracted, "reasoning": reasoning,
            "subprovider": first_string_at(data, model.get("subprovider_paths")),
            "finish_reason": first_string_at(data, model.get("finish_reason_paths")),
            "usage": extract_usage(data, model.get("usage_paths"))}
`,Ge=`"""results.jsonl: one JSON line per finished call, appended as it completes.

The record is the run. Every export is a rendering of it. A row carries the
full response body, so nothing has to be requested again to re-parse or
re-export. An interrupted run continues from the record: rows that say success
are skipped, everything else runs, and a task recorded twice keeps its last row.
"""
import json
import os
import threading

from .prompts import js_json

# The columns every row has, in this order; the export lists them first. A
# dataset column or variable with one of these names is recorded as var_<name>.
BASE_COLUMNS = [
    "order", "task_id", "config_index", "model_name", "display_name", "repeat_index",
    "prompt", "system_prompt", "success", "http_status", "response_headers", "response_data",
    "extracted", "reasoning", "subprovider", "finish_reason",
    "prompt_tokens", "completion_tokens", "total_tokens", "cost", "input_cost", "output_cost",
    "parsed", "refused", "post_parsed", "error", "duration_seconds",
]

_append_lock = threading.Lock()


def append_result(path, row):
    """Append one finished call as one JSON line. Safe to call from many threads."""
    with _append_lock, open(path, "a", encoding="utf-8") as handle:
        # ASCII escaping keeps even a malformed lone Unicode surrogate valid
        # JSON and UTF-8. read_results decodes the escapes back to their values;
        # user-facing exports then render them with their own format policy.
        handle.write(js_json(row, ascii_only=True) + "\\n")


def read_results(path):
    """Every row in the record. A task recorded twice keeps its last row.

    A half-written line, which a process killed mid-write leaves behind, is
    skipped with a note; its call is not recorded, so it runs again.
    """
    if not os.path.exists(path):
        return []
    rows = {}
    with open(path, encoding="utf-8") as handle:
        for number, line in enumerate(handle, 1):
            if not line.strip():
                continue
            try:
                row = json.loads(line)
            except json.JSONDecodeError:
                print(f"  ignoring unreadable line {number} of {path}")
                continue
            rows[row["task_id"]] = row
    return list(rows.values())


def end_with_newline(path):
    """Called before resuming: a killed process can leave the record without its final newline."""
    if not os.path.exists(path):
        return
    with open(path, "rb") as handle:
        handle.seek(0, os.SEEK_END)
        if handle.tell() == 0:
            return
        handle.seek(-1, os.SEEK_END)
        torn = handle.read(1) != b"\\n"
    if torn:
        with open(path, "a", encoding="utf-8") as handle:
            handle.write("\\n")


def failure_row(order, task_id, model, task, context, error):
    """The row for a call that failed after its retries.

    success is 0, error says why, and whatever status, headers, body and usage
    came back are kept: a failed call can still have been billed, and the app
    counts that spend.
    """
    row = {
        "order": order,
        "task_id": task_id,
        "config_index": model["config_index"],
        "model_name": model["name"],
        "display_name": model["display_name"],
        "repeat_index": task["repeat_index"],
        "prompt": task["prompt"],
        "system_prompt": task["system_prompt"],
    }
    row.update(context)
    row.update((f"param_{name}", value) for name, value in model.get("parameters", {}).items())
    row.update({
        "success": 0,
        "http_status": error.status,
        "response_headers": error.headers,
        "response_data": error.data,
        "error": str(error),
    })
    row.update(error.usage)
    return row
`,Fe=`"""The record rendered as a table, in one of six formats.

Formats differ in what they can say about a column, and that decides what a
writer has to do:

* csv, tsv: no types. Every cell is text, so the only decision is spelling,
  and \`\`spell\`\` makes it the way the app does.
* json, jsonl: a type per cell, carried by the value itself. Nothing to decide;
  a blank is \`\`null\`\`.
* parquet, sqlite: one type per column. Parquet insists on it; SQLite records
  it as the column's affinity. So the column is read first: every non-blank
  cell a number makes a double column, every one a boolean a boolean column,
  anything else, including a column that mixes numbers with a PARSER_ERROR
  string, is text. A whole number becomes a double because the app's numbers
  already are doubles; the same trial exported from the app and from here has
  the same schema.

Excel is not here. Its cells hold at most 32,767 characters and a long response
has to be split across columns to survive; that is a rendering problem the app
solves, and a spreadsheet can open the CSV.
"""
import os
import re
import sqlite3

from .prompts import js_json, spell
from .record import BASE_COLUMNS

# --- Columns and types --------------------------------------------------------


def columns_of(rows, base_columns):
    """The base columns, then every other key in first-seen order."""
    extra = []
    for row in rows:
        for key in row:
            if key not in base_columns and key not in extra:
                extra.append(key)
    return list(base_columns) + extra


def is_blank(value):
    return value is None or value == "" or (isinstance(value, float) and value != value)


def column_type(values):
    """\`\`number\`\`, \`\`boolean\`\`, \`\`json\`\` or \`\`string\`\`, read from what the non-blank cells are.

    A column is typed only when every non-blank value already carries that
    type; anything mixed is text. This is the app's \`\`readColumnType\`\`; nothing
    reads the inside of a string, so numeric-looking text stays text.
    """
    seen = None
    for value in values:
        if is_blank(value):
            continue
        if isinstance(value, bool):
            kind = "boolean"
        elif isinstance(value, (int, float)):
            kind = "number"
        elif isinstance(value, (dict, list)):
            kind = "json"
        else:
            kind = "string"
        if seen is None:
            seen = kind
        elif seen != kind:
            return "string"
    return seen or "string"


# --- Unstacking a JSON parser's object into columns --------------------------
# The contract the app's \`json-extraction.ts\` also follows, and
# \`fixtures/json-extraction-contract.json\` pins: every dotted key present
# across the records becomes a column, sorted, four levels deep; a nested
# object is both a column of compact JSON and a parent of further columns.


def discover_parsed_columns(records, prefix="parsed", max_depth=4):
    """Every dotted key present across the records, sorted and prefixed."""
    seen = {}

    def collect(obj, path_prefix, depth):
        for key, value in obj.items():
            path = (path_prefix + "." + key) if path_prefix else key
            seen[prefix + "_" + path] = True
            if depth < max_depth and isinstance(value, dict):
                collect(value, path, depth + 1)

    for record in records:
        if isinstance(record, dict):
            collect(record, "", 1)
    return sorted(seen.keys())


def extract_parsed_cell(record, field_id, prefix="parsed"):
    """The cell for one discovered column: a scalar as itself, an object or list as compact JSON, absent as None."""
    if not isinstance(record, dict):
        return None
    value = record
    for key in field_id[len(prefix) + 1:].split("."):
        if not isinstance(value, dict):
            return None
        value = value.get(key)
    if value is None:
        return None
    if isinstance(value, (dict, list)):
        return js_json(value)
    return value


def unstack(rows, column="parsed", prefix="parsed"):
    """Replace \`\`column\`\` with one \`\`<prefix>_<dotted.key>\`\` column per discovered field.

    A cell that is not an object, a blank, a PARSER_ERROR or a scalar,
    contributes no fields; its row gets blanks in every unstacked column.
    """
    objects = [row.get(column) if isinstance(row.get(column), dict) else {} for row in rows]
    names = discover_parsed_columns(objects, prefix)
    return [
        {**{k: v for k, v in row.items() if k != column}, **{name: extract_parsed_cell(obj, name, prefix) for name in names}}
        for row, obj in zip(rows, objects)
    ]


# --- Writers ------------------------------------------------------------------

_SIGNED_NUMBER = re.compile(r"^[+-](?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?\\s*$")


def guarded_text(value):
    """The cell's spelling, with the app's formula guard.

    A text cell a spreadsheet would read as a formula -- one starting with
    \`\`=\`\`, \`\`+\`\`, \`\`-\`\`, \`\`@\`\`, a tab or a carriage return -- gets a leading
    apostrophe, except a plain signed number, which is data. Only a value that
    was text is guarded: a number rendered to "-5" is a number.
    """
    text = spell(value)
    if isinstance(value, str) and text and text[0] in "=+-@\\t\\r" and not (text[0] in "+-" and _SIGNED_NUMBER.match(text)):
        return "'" + text
    return text


def csv_cell(value):
    """RFC 4180 quoting: a cell holding a comma, a quote or a line break is quoted, quotes doubled."""
    text = guarded_text(value)
    return '"' + text.replace('"', '""') + '"' if any(c in text for c in ',"\\n\\r') else text


def tsv_cell(value):
    """The app never quotes a TSV cell; it spells the transport characters out."""
    return guarded_text(value).replace("\\t", "\\\\t").replace("\\n", "\\\\n").replace("\\r", "\\\\r")


def write_delimited(path, columns, table, cell, separator, bom):
    """Every line newline-terminated. A CSV starts with a byte-order mark, as the app's download does."""
    with open(path, "w", encoding="utf-8", newline="") as handle:
        if bom:
            handle.write("\\ufeff")
        for cells in [columns, *([r.get(c) for c in columns] for r in table)]:
            handle.write(separator.join(cell(c) for c in cells) + "\\n")


def write_json(path, columns, table, lines):
    """\`\`JSON.stringify\`\` of one record per row: indented by two for the array, compact per line for JSONL."""
    records = [{c: (None if is_blank(r.get(c)) else r.get(c)) for c in columns} for r in table]
    with open(path, "w", encoding="utf-8", newline="") as handle:
        if lines:
            for record in records:
                handle.write(js_json(record) + "\\n")
        else:
            handle.write(js_json(records, indent=2))


def write_sqlite(path, columns, table):
    """One table, \`\`export_data\`\`: REAL affinity for a number column, INTEGER for a boolean one, none otherwise.

    No affinity for a text or mixed column, deliberately: declaring one would
    make SQLite coerce every value to one storage class, and a mixed column
    needs each cell to keep its own.
    """
    quote = lambda name: '"' + name.replace('"', '""') + '"'
    affinity = {"number": " REAL", "boolean": " INTEGER", "json": "", "string": ""}
    types = [column_type([r.get(c) for r in table]) for c in columns]

    def bind(value, kind):
        if is_blank(value):
            return None
        if kind == "boolean" or isinstance(value, bool):
            return 1 if value else 0
        if isinstance(value, (int, float)):
            return value
        return spell(value)
    connection = sqlite3.connect(path)
    try:
        connection.execute(f"CREATE TABLE export_data ({', '.join(quote(c) + affinity[t] for c, t in zip(columns, types))})")
        connection.executemany(f"INSERT INTO export_data VALUES ({', '.join('?' for _ in columns)})",
                               (tuple(bind(r.get(c), t) for c, t in zip(columns, types)) for r in table))
        connection.commit()
    finally:
        connection.close()


def write_parquet(path, columns, table):
    """One Arrow column per table column, typed by \`\`column_type\`\`: double, bool, or string."""
    try:
        import pyarrow as pa
        import pyarrow.parquet as pq
    except ImportError as error:
        raise SystemExit("Parquet output needs pyarrow: pip install pyarrow") from error
    arrays = []
    for name in columns:
        cells = [r.get(name) for r in table]
        kind = column_type(cells)
        if kind == "number":
            arrays.append(pa.array([None if is_blank(v) else float(v) for v in cells], pa.float64()))
        elif kind == "boolean":
            arrays.append(pa.array([None if is_blank(v) else bool(v) for v in cells], pa.bool_()))
        else:
            arrays.append(pa.array([None if is_blank(v) else spell(v) for v in cells], pa.string()))
    pq.write_table(pa.table(arrays, names=list(columns)), path)


def export_rows(rows, fmt, path, unstack_json=False):
    """Render the record to \`path\` in \`fmt\` and return \`path\`. The base columns come first, then every other key in first-seen order."""
    table = unstack(rows) if unstack_json else rows
    columns = columns_of(table, BASE_COLUMNS)
    if fmt == "csv":
        write_delimited(path, columns, table, csv_cell, ",", bom=True)
    elif fmt == "tsv":
        write_delimited(path, columns, table, tsv_cell, "\\t", bom=False)
    elif fmt == "json":
        write_json(path, columns, table, lines=False)
    elif fmt == "jsonl":
        write_json(path, columns, table, lines=True)
    elif fmt == "sqlite":
        if os.path.exists(path):
            os.remove(path)
        write_sqlite(path, columns, table)
    elif fmt == "parquet":
        write_parquet(path, columns, table)
    else:
        raise ValueError(f"Unknown output format: {fmt}")
    return path

`,Ye=`"""The flags, the key check, the rate limit, and the summary."""
import argparse
import os
import sys
import threading
import time

OUTPUT_FORMATS = ["csv", "tsv", "json", "jsonl", "sqlite", "parquet"]


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description="Auditomatic experiment runner")
    parser.add_argument("--output", "-o", choices=OUTPUT_FORMATS, default="csv", help="Export format (default: csv)")
    parser.add_argument("--output-file", "-f", help="Export filename (default: results.<format>)")
    parser.add_argument("--concurrent", "-c", type=int, default=10, help="Simultaneous requests (default: 10)")
    parser.add_argument("--rate-limit", "-r", type=float, default=5.0, help="Max requests/second, retries included (default: 5.0)")
    parser.add_argument("--timeout", "-t", type=int, default=90, help="Per-request timeout in seconds (default: 90)")
    parser.add_argument("--resume", action="store_true", help="Continue the record in this directory")
    parser.add_argument("--record", default="results.jsonl", help="The record file (default: results.jsonl)")
    parser.add_argument("--max-retries", type=int, help="Override the retry count trial.py sets")
    parser.add_argument("--backoff-max", type=float, help="Override the backoff ceiling trial.py sets, in seconds")
    return parser.parse_args(argv)


def check_api_keys(models):
    """Verify every key the models need is set, or exit saying which is missing."""
    print("Checking API keys...")
    needed = {}
    keyless = []
    for model in models:
        env_var = model.get("api_key_env")
        (needed.setdefault(env_var, []).append(model["name"]) if env_var else keyless.append(model["name"]))
    missing = [name for name in sorted(needed) if not os.getenv(name)]
    for name in sorted(needed):
        if name not in missing:
            print(f"  {name}: OK ({len(needed[name])} models)")
    if keyless:
        print(f"  No key required: {len(keyless)} models")
    if missing:
        print("\\nMissing API keys:")
        for name in missing:
            print(f"  {name} (needed for {len(needed[name])} models)")
        print("\\nSet them with:")
        for name in missing:
            print(f"  export {name}='your-key-here'")
        sys.exit(1)
    print(f"All {len(models)} models ready\\n")


# The rate limit: one clock shared by every thread, so N threads together never
# start more than per_second calls in a second.
_turn_lock = threading.Lock()
_next_start = [0.0]


def wait_for_turn(per_second):
    """Sleep until this call may start, keeping starts 1/per_second apart across all threads."""
    if not per_second or per_second <= 0:
        return
    with _turn_lock:
        start = max(time.monotonic(), _next_start[0])
        _next_start[0] = start + 1.0 / per_second
    time.sleep(max(0.0, start - time.monotonic()))


def print_summary(models, rows):
    """Calls succeeded per configuration."""
    print("\\nResults by configuration:")
    for model in models:
        mine = [r for r in rows if r["config_index"] == model["config_index"]]
        ok = sum(1 for r in mine if r["success"] == 1)
        print(f"  [{model['config_index']}] {model['display_name']}: {ok}/{len(mine)} ({round(100 * ok / len(mine)) if mine else 0}%)")
`,He=Object.freeze({"auditomatic_runner/__init__.py":Be,"auditomatic_runner/prompts.py":Ue,"auditomatic_runner/api.py":Je,"auditomatic_runner/record.py":Ge,"auditomatic_runner/export.py":Fe,"auditomatic_runner/cli.py":Ye});function Ke(e,t){const r=new Date().toISOString();return`# Auditomatic Export Reproducibility Bundle

Trial Name: ${e}

Generated: ${r}

## What is in this bundle

- \`trial.py\` - the machine contract rendered as readable Python data: how hard to retry, the prompt and the
system prompt as the app sent them, the refusal phrases, the JSON schema, and
one entry per model with the exact request body the app sent. Everything here
is meant to be read and edited. Nothing in it runs anything.
- \`trial_parser.py\` - the parser the app ran, as a plain module you can import
and run by hand. (\`trial_post_parser.py\` too, when the trial had a second parser.)
- \`experiment.py\` - the code, in the order it runs: which calls are made
(\`plan_tasks\`), one call from start to finish (\`perform_call\`), then the loop
and the export (\`main\`). Every decision of the run is in this file.
- \`auditomatic_runner/\` - the mechanics \`experiment.py\` imports, each with one
correct implementation and no decision of the trial in it: \`prompts.py\` (how a
value is spelled into a prompt), \`api.py\` (the request, sending it with
retries, reading the answer), \`record.py\` (results.jsonl), \`export.py\` (the
record as a table), \`cli.py\` (flags, keys, the rate limit). Keep it beside the
script.
- \`requirements.txt\` - the packages the runner can use; see Quick Start
- \`trial-spec.json\` - the complete, versioned machine-readable reproduction
contract. \`trial.py\` is generated from this same contract, so the readable and
machine forms cannot describe different experiments.${t==="spreadsheet"?"\n- `data.jsonl` - the dataset this trial ran over, one JSON object per line, one call per row":""}

## What running it produces

- \`results.jsonl\` - the record of the run: one JSON object per call, appended
the moment the call returns, with the full response body. This is the run;
everything else is a rendering of it.
- \`results.csv\` - written at the end, or another format with \`--output\`

---

${Ve()}
`}function Ve(){return`## Quick Start

### 1. Python

Python ${w} or newer -- \`experiment.py\` checks this itself and
refuses to run otherwise. Nothing has to be installed: the runner uses only the
standard library. \`requirements.txt\` lists what it can use when present:
\`tqdm\` for a progress bar, and \`pyarrow\` for \`--output parquet\`.

\`\`\`bash
pip install -r requirements.txt   # optional
\`\`\`

### 2. Set API Keys

Keys are read from environment variables, never from this bundle. Each model's
entry in \`trial.py\` names the variable it needs in its \`api_key_env\` field, and
\`experiment.py\` checks them all before making any request:

\`\`\`bash
export OPENAI_API_KEY="sk-..."
\`\`\`

If a model needs no key -- a local Ollama endpoint, say -- its \`api_key_env\` is
\`None\` and nothing is required for it.

### 3. Run the Experiment

\`\`\`bash
python experiment.py
\`\`\`

---

## Command-Line Options

| Option                 | Default | Description |
|------------------------|---------|------------------------------------------------------------------|
| \`--output\` / \`-o\`      | \`csv\`   | Export format: \`csv\`, \`tsv\`, \`json\`, \`jsonl\`, \`sqlite\`, \`parquet\` |
| \`--output-file\` / \`-f\` | Auto    | Export filename |
| \`--concurrent\` / \`-c\`  | \`10\`    | Simultaneous requests |
| \`--rate-limit\` / \`-r\`  | \`5.0\`   | Requests per second, retries included |
| \`--timeout\` / \`-t\`     | \`90\`    | Per-request timeout in seconds |
| \`--resume\`             | Off     | Continue the record in this directory |
| \`--record\`             | \`results.jsonl\` | The record file |
| \`--max-retries\`        | Script  | Override the retry count \`trial.py\` sets (5) |
| \`--backoff-max\`        | Script  | Override the backoff ceiling \`trial.py\` sets (60s) |

\`\`\`bash
# Faster, if the provider allows it
python experiment.py --concurrent 20 --rate-limit 10.0

# Gentler -- one request at a time, for a local model on a single GPU
python experiment.py --concurrent 1 --rate-limit 1.0

# Slow models
python experiment.py --timeout 180

# Another format, from the record of a finished run
python experiment.py --resume --output parquet
\`\`\`

Concurrency is how many requests are in flight at once. The rate limit is how
many physical requests per second may leave the process, retries included.

---

## Tested Environment

This bundle was verified against Python ${w} with exactly the library
versions pinned in \`requirements.txt\`, and its output was compared against the
app's own export of the same rows at those versions. The pins are exact on
purpose: reproducing an experiment means reproducing the environment it ran
in, and a library update years from now -- a Parquet encoding changing, say --
would silently change the output with nothing to say so. If a pin will not
install on a newer Python, loosening it is your call; the bundle's output was
not checked at any other version.

---

## Reliability

**Retries.** Every API-attempt failure that can be retried is: network and
timeout errors, a 429, a 5xx, and a provider error envelope carrying such a
code, including one inside an HTTP 200 body. An invalid key or a rejected
parameter is recorded once. A parser or programming error is a bug, and is
raised rather than attempted six times.

The default is 5 retries (so up to 6 attempts) with exponential backoff between
1 and 60 seconds, jittered so a batch that fails together does not march through
its retries in lockstep, and a \`Retry-After\` header sets the floor when the
provider sends one. Edit \`RETRIES = RetryPolicy(...)\` near the top of
\`trial.py\`, or override it for one run with \`--max-retries\`.

A call that exhausts its retries is recorded with \`success = 0\` and keeps its
evidence: \`http_status\`, \`response_headers\`, \`response_data\` and \`error\`.

**The record.** Each call is appended to \`results.jsonl\` the moment it
finishes, so an interrupted run keeps everything it already had. A run refuses
to start over an existing record; pass \`--resume\` to continue it, or move it
aside.

## Resuming

Press Ctrl+C at any time, then:

\`\`\`bash
python experiment.py --resume
\`\`\`

That continues \`results.jsonl\` in this directory: calls whose row says success
are skipped, calls that failed or never ran are made, and the export is written
again with the full record. A line a killed process left half-written is
ignored and its call runs again.

---

## The results table

One row per (configuration, task), in the order the calls were planned. Every
run has these columns:

| Column | What it holds |
|---|---|
| \`order\` | Position in the planned run |
| \`task_id\` | Configuration plus combination/row and repeat |
| \`config_index\` | Position in \`MODELS\` |
| \`model_name\` | The model |
| \`display_name\` | The model, disambiguated when one model appears twice |
| \`repeat_index\` | Which repeat, when \`REPEATS > 1\` |
| \`prompt\`, \`system_prompt\` | What was actually sent |
| \`success\` | 1 or 0 |
| \`http_status\`, \`response_headers\`, \`response_data\` | The response, in full |
| \`extracted\` | The answer pulled out of it |
| \`reasoning\` | Reasoning text, for models that return it separately |
| \`subprovider\`, \`finish_reason\` | What the provider reported, when it does |
| \`prompt_tokens\`, \`completion_tokens\`, \`total_tokens\`, \`cost\`, \`input_cost\`, \`output_cost\` | What the call consumed, when the provider reports it |
| \`parsed\` | The parser's output |
| \`refused\` | Whether the answer matched one of the trial's refusal phrases |
| \`post_parsed\` | The post-processing parser's output, when the trial has one |
| \`error\` | Why a failed call failed |
| \`duration_seconds\` | Wall-clock time for the call |

Plus, per trial:

- one column per variable or dataset column, under its own name
- \`attr_<variable>__<key>\` for values that carry attributes
- \`param_<name>\` for each request parameter

A dataset column whose name collides with one of the fixed columns above is
prefixed \`var_\` rather than overwriting it.

**Reading the record directly:**

\`\`\`python
import pandas as pd
rows = pd.read_json("results.jsonl", lines=True)
rows[rows.success == 0][["display_name", "http_status", "error"]]
rows.groupby("display_name").success.mean()
\`\`\`

\`\`\`r
rows <- jsonlite::stream_in(file("results.jsonl"))
\`\`\`

## Troubleshooting

**Rate limits (429).** The run prints \`Retry 2 <model> in 3.1s: HTTP 429 ...\`
before each wait and keeps going. If it happens constantly, lower \`--rate-limit\` and
\`--concurrent\`.

**An empty \`extracted\` value** means the response arrived and parsed, but the
recorded \`extract_paths\` found no content in it. That is recorded as a
successful call, because the API call did succeed -- what the model produced is
between you and the provider. Check \`finish_reason\` for that row first: a value
like \`length\` or \`max_tokens\` means the model hit its output budget before
answering, and raising \`max_tokens\` is the fix. If \`finish_reason\` looks
normal, look at \`response_data\` and adjust that model's \`extract_paths\` in
\`trial.py\`.

**\`PARSER_ERROR: ...\`** in \`parsed\` means the response arrived and the parser
could not handle it. The call still counts as a success and \`extracted\` holds
the raw answer in every row of \`results.jsonl\`, so a corrected parser can be
run over the record afterwards without calling any model again.

**Timeouts.** Raise \`--timeout\`.
`}class ze{async exportReproductionBundle(t,r=!1){return X.runWithLease("export","Reproducibility bundle export",()=>this.exportReproductionBundleUnguarded(t,r))}async exportReproductionBundleUnguarded(t,r=!1){try{d.debug("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:t});const n=await x.trials.get(t);if(!n)return{ok:!1,error:new m("GENERATION_FAILED",`Failed to load trial: ${t}`)};const a=await De.generateBundle(t);if(!a.ok)return{ok:!1,error:new m("GENERATION_FAILED",a.error?.message||"Failed to generate Python script")};const s=[...Object.entries(a.value.files).map(([h,u])=>({path:h,required:!0,requiredBecause:h==="experiment.py"?"It is the script the bundle exists to deliver.":`experiment.py imports ${h.replace(/\.py$/,"")}.`,produce:()=>u})),...Object.entries(He).map(([h,u])=>({path:h,required:!0,requiredBecause:"experiment.py imports the auditomatic_runner package.",produce:()=>u})),{path:"trial-spec.json",required:!0,requiredBecause:"It is the versioned execution contract for this reproduction.",produce:()=>JSON.stringify(a.value.trialSpec,null,2)},...a.value.renderer==="spreadsheet"?[{path:"data.jsonl",required:!0,requiredBecause:"experiment.py reads it in plan_tasks() and cannot run without it.",produce:()=>this.generateDatasetJsonl(n)}]:[],{path:"README.md",required:!0,requiredBecause:"It documents how to run the bundle.",produce:()=>Ke(a.value.metadata.trialName,a.value.renderer)},{path:"requirements.txt",required:!0,requiredBecause:"Without it the script cannot be installed.",produce:()=>a.value.requirementsTxt}],{entries:o,contents:i}=await $e(s),l=await ee(o,6,{confirmed:r}),p=new Date().toISOString().split("T")[0].replace(/-/g,""),v=`${a.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_python_reproduction_${p}.zip`;return{ok:!0,value:{blob:l,filename:v,sizeBytes:l.size,contents:i}}}catch(n){return n instanceof $?(d.warn("EXPORT_DEBUG: REPRO_BUNDLE INCOMPLETE",{trialId:t,path:n.path,cause:n.cause}),{ok:!1,error:new m("GENERATION_FAILED",n.message,{trialId:t,path:n.path})}):n instanceof te?{ok:!1,error:new m("CONFIRMATION_REQUIRED",n.message,{trialId:t,estimatedBytes:n.estimatedBytes,budgetBytes:n.budgetBytes})}:(d.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",n),{ok:!1,error:new m("GENERATION_FAILED",n instanceof Error?n.message:"Unknown error creating bundle")})}}async generateDatasetJsonl(t){if(t.type!=="spreadsheet"||!t.spreadsheetConfig)throw new Error("trial is not a spreadsheet trial");const r=t.spreadsheetConfig.datasetId,n=await x.datasets.get(r);if(!n)throw new Error(`dataset ${r} no longer exists`);const{generateDatasetJsonl:a}=await Q(async()=>{const{generateDatasetJsonl:o}=await import("./dataset-jsonl-Cu7tFX5y.js");return{generateDatasetJsonl:o}},[]),s=a(n);return d.debug("EXPORT_DEBUG: Generated dataset jsonl for bundle",{rows:n.rows.length,columns:n.columns.length,sizeBytes:s.length}),s}}const xt=new ze;export{xt as reproducibilityBundleService};
