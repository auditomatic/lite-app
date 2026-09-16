const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dataset-parquet-C0LM266M.js","assets/tabular-export-CRCaiD3K.js","assets/data-vendor-CKwrMZHi.js","assets/ui-vendor-DoagTIWE.js","assets/vue-vendor-cLCfFK9O.js","assets/utils-vendor-2gxfMrWY.js","assets/index-CJt_KcCw.js","assets/tauri-vendor-DxWMvb_z.js","assets/index-Dg1bYxcT.css"])))=>i.map(i=>d[i]);
var L=Object.defineProperty;var M=(e,n,t)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var g=(e,n,t)=>M(e,typeof n!="symbol"?n+"":n,t);import{bp as C,bq as D,br as F,bs as B,bt as $,l as d,a as T,bu as G,aU as U,u as J,_ as X}from"./index-CJt_KcCw.js";import{a as f,g as R}from"./ExportDataModal-B0h_9yS8.js";import"./tabular-export-CRCaiD3K.js";import{a as Y}from"./ColumnFilterPanel-DDK6aW5a.js";import"./tauri-vendor-DxWMvb_z.js";import{a as H,A as W}from"./response-evidence-codec-Y38nJF-g.js";import"./vue-vendor-cLCfFK9O.js";import"./ui-vendor-DoagTIWE.js";import"./utils-vendor-2gxfMrWY.js";import"./tauri-download-utilities-myrXwDYK.js";import"./save-file-lsGwzRFS.js";import"./trial-bundle.service-Btqofcu2.js";import"./deep-equal-bLv6XEjO.js";import"./repository-C2VBCYcq.js";import"./repository-75fm3hSO.js";import"./dataset-operations-Cc7sLPdU.js";import"./useCrossTab-CFW8B_o1.js";import"./row-filters-DVNsrKUs.js";import"./dataset-persistence-943_2NZD.js";import"./paged-table-reader-Cui7blz8.js";import"./trials-CHxrP7zT.js";import"./field-ids-DXrUeamA.js";import"./dataset-export.service-CF8yTQQY.js";import"./response-features-Q4DlOVdq.js";import"./data-vendor-CKwrMZHi.js";import"./display-values-D3R-R7BQ.js";const x="    ";function c(e,n=0){return e==null?"None":typeof e=="boolean"?e?"True":"False":typeof e=="number"?z(e):typeof e=="string"?JSON.stringify(e):Array.isArray(e)?V(e,n):typeof e=="object"?Q(e,n):JSON.stringify(String(e))}function z(e){return Number.isFinite(e)?String(e):"None"}function V(e,n){if(e.length===0)return"[]";const t=x.repeat(n+1);return`[
${e.map(a=>`${t}${c(a,n+1)}`).join(`,
`)}
${x.repeat(n)}]`}function Q(e,n){const t=Object.keys(e);if(t.length===0)return"{}";const r=x.repeat(n+1);return`{
${t.map(s=>`${r}${JSON.stringify(s)}: ${c(e[s],n+1)}`).join(`,
`)}
${x.repeat(n)}}`}function K(e,n){if(!n||!n.type||n.type==="none")return null;if(n.envVar)return n.envVar;const t=e.toUpperCase().replace(/[^A-Z0-9]+/g,"_").replace(/^_+|_+$/g,"");return t?`CUSTOM_${t}_API_KEY`:null}const I=[3,12],b=I.join("."),N="@@AUDITOMATIC_PROMPT@@",A="@@AUDITOMATIC_SYSTEM@@";function Z(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function P(e){return e.replace(/[\r\n]+/g," ")}function ee(e,n,t,r){const a=e.providerSnapshot,s={"Content-Type":"application/json",...a.headers};a.auth?.type==="bearer"?s.Authorization="Bearer {{API_KEY}}":a.auth?.type==="header"&&a.auth.header&&(s[a.auth.header]="{{API_KEY}}");const o=JSON.parse(JSON.stringify(F(a,e.modelId,e.parameters||{},N,r?A:void 0)).split(N).join("{{PROMPT}}").split(A).join("{{SYSTEM_PROMPT}}")),i=B(e.parameters||{},a.responseModes||{}),l=a.responseModes?.[i]?.responseTransform,p=[...l?.contentPath?[l.contentPath]:[],...l?.fallbackPaths??[]];return{config_index:n,name:e.modelSnapshot?.displayName||e.modelId,display_name:t,provider:e.provider,api_key_env:K(e.provider,a.auth),url:(a.api?.baseUrl??"")+(a.api?.endpoint??""),headers:s,body:o,parameters:e.parameters||{},response_mode:i,extract_paths:p.length?p:["response"],error_paths:l?.errorPath?[l.errorPath]:[],reasoning_paths:[...l?.reasoningPath?[l.reasoningPath]:[],...l?.reasoningFallbackPaths??[]],subprovider_paths:a.responseFeatures?.subprovider?.extractionPaths??[],finish_reason_paths:a.responseFeatures?.finishReason?.extractionPaths??[],usage_paths:ne(a.usageExtraction)}}function ne(e){const n={};for(const[t,r]of[["prompt_tokens",e?.promptTokensPath],["completion_tokens",e?.completionTokensPath],["total_tokens",e?.totalTokensPath],["cost",e?.costPath],["input_cost",e?.inputCostPath],["output_cost",e?.outputCostPath]])r&&(n[t]=r);return n}function te(e,n){const t=new Map;for(const a of e.configurations){const s=a.modelSnapshot?.displayName||a.modelId;t.set(s,(t.get(s)||0)+1)}const r=new Map;return e.configurations.flatMap((a,s)=>{if(!a.providerSnapshot)throw new Error(`Cannot generate a reproduction for configuration ${s}: it has no frozen provider snapshot.`);const o=a.modelSnapshot?.displayName||a.modelId;let i=o;if((t.get(o)??0)>1){const l=(r.get(o)??0)+1;r.set(o,l),i=`${o} [Config ${l}]`}return[ee(a,s,i,n)]})}function S(e,n,t="parser"){if(!e)return{source:"",argument:""};let r,a;if(e.type==="python"){const m=e.config;r=(m.code??"").trim(),a=m.functionName||"parse"}else r=C({...e.config,outputType:e.outputType}).trim(),a=$;const s=D(r,a,n);r=s.source,a=s.functionName;const o=s.refusalAware,i=t.toUpperCase(),p=[t==="post_parser"?`# --- Post-processing parser: ${P(e.name)} (${e.type}) ---`:`# --- Parser: ${P(e.name)} (${e.type}) ---`,`${i}_SOURCE = ${c(r)}`,`${i}_NAMESPACE: dict = {}`,"try:",`    exec(compile(${i}_SOURCE, "<${t}>", "exec"), ${i}_NAMESPACE)`,"except SyntaxError as error:",'    found = ".".join(map(str, sys.version_info[:3]))',"    sys.stderr.write(",`        "This trial's parser uses syntax Python %s cannot parse: %s\\n" % (found, error)`,"    )","    raise SystemExit(1)","",`${i} = ${c({unstackJson:!!e.unstackJson})}`].join(`
`),u=`{"parse": ${i}_NAMESPACE[${c(a)}], "refusal_aware": ${o?"True":"False"}}`;return{source:p,argument:t==="post_parser"?`, post_parser=${i}, post_namespace=${u}`:`, parser=${i}, namespace=${u}`}}function ae(e){const{trial:n,template:t,dataset:r,systemPrompt:a,repeatCount:s=1,parser:o,postParser:i}=e;if(!t&&!r)throw new Error("generateExperimentScript needs either a template or a dataset");const l=te(n,!!a),{source:p,argument:u}=S(o,n.refusalPhrases),{source:m,argument:h}=S(i,void 0,"post_parser"),w=!!t?.attributes&&Object.keys(t.attributes).length>0,E=t?`TemplateTasks(PROMPT_TEMPLATE, VARIABLES, ${w?"attributes=ATTRIBUTES, ":""}system_prompt=SYSTEM_PROMPT, repeats=REPEATS)`:'ParquetTasks(PROMPT_PATTERN, "data.parquet", system_prompt=SYSTEM_PROMPT, repeats=REPEATS)',v=t?[`PROMPT_TEMPLATE = ${c(t.text)}`,"",`VARIABLES = ${c(t.variables)}`,...w?["","# Per-value labels, positional against VARIABLES. One","# attr_<variable>__<key> column each, recorded with every result.",`ATTRIBUTES = ${c(t.attributes)}`]:[]].join(`
`):`PROMPT_PATTERN = ${c(r.pattern)}`;return["#!/usr/bin/env python3",`"""${Z(n.name)} -- reproduction of an Auditomatic trial.`,"","Run it:      python experiment.py","Formats:     --output csv|tsv|json|jsonl|excel|parquet|sqlite","Pacing:      --concurrent 10 --rate-limit 5 --timeout 90","Continue:    --resume --db-file results_<timestamp>.db","","Results stream into SQLite as they arrive, so an interrupted run resumes","without repeating work. Everything below is data you can edit.",'"""',"import sys","",`if sys.version_info < (${I.join(", ")}):`,'    found = ".".join(map(str, sys.version_info[:3]))',"    sys.stderr.write(",`        "This bundle requires Python ${b} or newer (found %s).\\n" % found`,"    )","    raise SystemExit(1)","",`from auditomatic import run, RetryPolicy, ${t?"TemplateTasks":"ParquetTasks"}`,"","# How hard to try each call. MAX_RETRIES counts retries, so 5 means up to","# six attempts, with jittered exponential backoff between them.","RETRIES = RetryPolicy(max_retries=5, backoff_min=1, backoff_max=60)","",v,"",`SYSTEM_PROMPT = ${c(a??null)}`,`REPEATS = ${s}`,"",`MODELS = ${c(l)}`,...p?["",p]:[],...m?["",m]:[],"",'if __name__ == "__main__":',`    run(MODELS, ${E}${u}${h}, policy=RETRIES)`,""].join(`
`)}const re=Object.freeze(["httpx>=0.27.0,<0.28.0","aiometer>=0.5.0,<2.0.0","aiolimiter>=1.1.0,<2.0.0","aiosqlite>=0.19.0,<0.22.0","tenacity>=8.2.0,<9.0.0","tqdm>=4.66.0,<5.0.0","pandas>=2.0.0,<3.0.0"]),O=[...re],se={heading:"Optional dependencies for export formats",specs:["openpyxl>=3.1.0,<4.0.0    # For Excel export (.xlsx)","pyarrow>=21.0.0,<22.0.0    # For Parquet export (.parquet)"]},oe={heading:"Optional dependencies for export formats",specs:["openpyxl>=3.1.0,<4.0.0    # For Excel export (.xlsx)"]},ie="pyarrow>=21.0.0,<22.0.0    # Reads data.parquet, and Parquet export",le="0.63.4",pe={heading:"Required by this trial's parser (JSON repair)",specs:[`json-repair==${le}`]};function de(e){const n=e.renderer==="spreadsheet",t=[{heading:"Core dependencies (required)",specs:n?[...O,ie]:O},n?oe:se];return ue(e.parser)&&t.push(pe),t}function ue(e){if(!e||e.type!=="python"||!e.config)return!1;const n=e.config.code;return typeof n=="string"&&/\bjson_repair\b/.test(n)}function ce(e){return e.flatMap(n=>n.specs.map(he))}function me(e){const n=e.map(t=>`# ${t.heading}
${t.specs.join(`
`)}`).join(`

`);return`# Auditomatic reproduction requirements
# Install with: pip install -r requirements.txt
# Requires Python ${b} or newer -- experiment.py checks this itself and refuses to run otherwise.

${n}
`}function he(e){return e.split("#")[0].trim().split(/[<>=!~\s[]/)[0]}class _ extends Error{constructor(t,r){super(t);g(this,"trialId");this.trialId=r,this.name="ExperimentSourceError"}}function fe(e){const n=e.repeatCount||1;switch(e.type){case"template":return q(e,n);case"playground":if(e.templateConfig?.template)return q(e,n);throw new _("Python reproduction is available only for trials surfaced in the Trials UI. Create a multi-model trial from Playground to export it.",e.id);case"spreadsheet":return _e(e,n);default:throw new _(`Cannot export this trial: unrecognized trial type "${e.type}".`,e.id)}}function q(e,n){const t=e.templateConfig;if(!t?.template)throw new _("Cannot export this trial: it is a template trial but carries no prompt template, so there is nothing to reproduce.",e.id);const r={},a={};for(const[s,o]of Object.entries(t.variables??{})){const i=ye(o);if(!i)continue;const l=ge(i);l.length>0?(a[s]=l,r[s]=i.map(p=>({value:p.value,attributes:p.attributes??{}}))):r[s]=i.map(p=>p.value)}return{kind:"templated",promptTemplate:t.template,systemPromptTemplate:t.systemPrompt||void 0,variables:r,attributeKeys:a,repeatCount:n}}function _e(e,n){const t=e.spreadsheetConfig;if(!t?.promptPattern)throw new _("Cannot export this trial: it is a spreadsheet trial but carries no prompt pattern, so there is nothing to reproduce.",e.id);if(!t.datasetId)throw new _("Cannot export this trial: it is a spreadsheet trial with no dataset reference, so the exported script would have no rows to run against.",e.id);return{kind:"dataset",promptPattern:t.promptPattern,systemPrompt:t.systemPrompt||void 0,datasetId:t.datasetId,repeatCount:n}}function ye(e){return"snapshot"in e&&e.snapshot?e.snapshot.items.map(n=>({value:n.value,attributes:n.attributes})):e.type==="value"&&e.values?e.values.map(n=>({value:n})):null}function ge(e){const n=new Set;for(const t of e)if(t.attributes)for(const r of Object.keys(t.attributes))n.add(r);return Array.from(n).sort()}const be="auditomatic-trial-spec",we=1;function ve(e,n,t){const r=e.type==="spreadsheet"?e.spreadsheetConfig?.callOrder:e.templateConfig?.callOrder;return{schema:be,version:we,trial:{name:e.name,...e.description?{description:e.description}:{}},experiment:n.kind==="dataset"?Ee(n):xe(n),configurations:e.configurations,execution:{repeatCount:n.repeatCount,callOrder:r??"interleaved"},...t?{parser:t}:{}}}function xe(e){return{kind:"template",promptTemplate:e.promptTemplate,...e.systemPromptTemplate?{systemPromptTemplate:e.systemPromptTemplate}:{},variables:e.variables,attributeKeys:e.attributeKeys}}function Ee(e){return{kind:"dataset",promptPattern:e.promptPattern,...e.systemPrompt?{systemPrompt:e.systemPrompt}:{},dataset:{path:"data.parquet",format:"parquet"}}}function ke(e){const n={},t={};for(const[r,a]of Object.entries(e)){const s=a.map(o=>o&&typeof o=="object"&&"value"in o?o:{value:o,attributes:{}});n[r]=s.map(o=>o.value),s.some(o=>Object.keys(o.attributes??{}).length>0)&&(t[r]=s.map(o=>o.attributes??{}))}return{variables:n,attributes:t}}class Te{async generateProductionScript(n,t={}){const r=Date.now();d.debug("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:n,startTime:r});try{d.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:n});const a=await T.trials.get(n);if(!a)return{ok:!1,error:new f("GENERATION_FAILED",`Failed to load trial data: Trial with ID ${n} not found`,{trialId:n})};let s;try{s=fe(a)}catch(k){if(k instanceof _)return{ok:!1,error:new f("GENERATION_FAILED",k.message,{trialId:n})};throw k}d.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_PARSER",{trialId:n});const o=await this.resolveParser(n,a.parserSnapshot,this.getPrimaryParserId(a),"parser");if(!o.ok)return o;const i=o.value,l=await this.resolveParser(n,a.postParserSnapshot,a.postParserId,"post-processing parser");if(!l.ok)return l;const p=l.value,u=s.kind==="dataset"?"spreadsheet":"template";d.debug("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{renderer:u,hasParser:!!i});const m=Date.now(),h=ae({trial:a,parser:i,postParser:p,repeatCount:s.repeatCount,...s.kind==="dataset"?{dataset:{pattern:s.promptPattern},systemPrompt:s.systemPrompt}:{template:{text:s.promptTemplate,...ke(s.variables)},systemPrompt:s.systemPromptTemplate}});d.debug("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-m,codeLength:h.length,estimatedBytes:R(h)});const w=Date.now()-r,E=this.generateScriptFilename(a.name),v=de({parser:i,renderer:u}),y={filename:E,mimeType:"text/x-python",data:h,metadata:{trialName:a.name,trialId:a.id,exportDate:new Date,callCount:0,fieldCount:0,format:"python",estimatedSizeBytes:R(h)},renderer:u,pythonVersion:b,requiredPackages:ce(v),requirementsTxt:me(v),trialSpec:ve(a,s,i),codeLength:h.length,generationTimeMs:w};return d.debug("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:n,renderer:u,filename:y.filename,codeLength:y.codeLength,generationTimeMs:y.generationTimeMs,requiredPackages:y.requiredPackages}),{ok:!0,value:y}}catch(a){const s=a instanceof Error?a:new Error(String(a));return d.debug("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",s,{trialId:n,generationTimeMs:Date.now()-r}),{ok:!1,error:new f("GENERATION_FAILED",`Python script generation failed: ${s.message}`,{trialId:n,options:t,originalError:a,generationTimeMs:Date.now()-r})}}}getPrimaryParserId(n){return Y(n)}async resolveParser(n,t,r,a){if(t){const i=G(t);return d.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_FROM_SNAPSHOT",{label:a,parserId:i.id,parserName:i.name,parserType:i.type}),{ok:!0,value:i}}if(!r)return{ok:!0,value:void 0};let s,o;try{s=await U.getParser(r)}catch(i){o=i}if(!s){d.warn("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOAD_FAILED",{label:a,parserId:r,error:o});const i=o instanceof Error?o.message:"parser not found";return{ok:!1,error:new f("GENERATION_FAILED",`This trial is configured to use ${a} "${r}", but it could not be loaded (${i}). Generating the script without it would change how responses are extracted and classified, so the export would not reproduce this trial.`,{trialId:n,parserId:r,originalError:o})}}return d.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOADED",{label:a,parserId:r,parserName:s.name,parserType:s.type,unstackJson:s.unstackJson}),{ok:!0,value:s}}generateScriptFilename(n){const t=n.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",a=new Date().toISOString().replace("T","_").replace(/:/g,"-").split(".")[0];return`${t}_reproduction_${a}.py`}}const Re=new Te;class j extends Error{constructor(t,r,a){const s=a instanceof Error?`: ${a.message}`:"";super(`Cannot build this archive without ${t}. ${r}${s}`);g(this,"path");g(this,"reason");g(this,"cause");this.path=t,this.reason=r,this.cause=a,this.name="MissingRequiredEntryError"}}async function Ne(e){const n=[],t=[];for(const r of e){let a=null,s;try{a=await r.produce()}catch(o){s=o}if(a==null){if(r.required)throw new j(r.path,r.requiredBecause??"It is a required part of this artifact.",s);d.warn("[artifact-composer] Skipping optional entry",{path:r.path,error:s});continue}n.push({path:r.path,data:a}),t.push(r.path)}return{entries:n,contents:t}}const Ae=`"""Auditomatic reproduction runner.

A generated \`\`experiment.py\`\` is data plus one call:

    from auditomatic import run, TemplateTasks

    MODELS = [...]
    run(MODELS, TemplateTasks(PROMPT_TEMPLATE, VARIABLES), parser=PARSER)

Everything that is the same for every experiment lives here, so the generated
script stays short enough to read and edit.
"""
from .http import ApiAttemptError, RetryPolicy, get_value_at_path
from .parsing import apply_parser, unstack_json_column
from .runner import run
from .tasks import ParquetTasks, TemplateTasks, fill

__all__ = [
    "run",
    "TemplateTasks",
    "ParquetTasks",
    "RetryPolicy",
    "ApiAttemptError",
    "apply_parser",
    "unstack_json_column",
    "get_value_at_path",
    "fill",
]
`,Pe=`"""One API attempt, retried and rate-limited.

The policy is deliberately small and lives in one place:

* Retryable *API-attempt* failures are retried -- network and timeout errors,
  429 responses, transient 5xx responses, and provider error envelopes that
  carry those retryable codes. Permanent authentication and validation errors
  are recorded once, matching the app.
* Nothing else is retried. Parser, database, request-construction and
  programming errors are not \`\`ApiAttemptError\`\`, so they propagate untouched
  instead of being silently attempted five times.
* The rate limit is taken per *physical* request, retries included. Metering
  task starts instead would let a retry storm ignore the configured rate.
* Backoff is exponential with jitter, so a batch that fails together does not
  march through its retries in lockstep and give up at the same instant.
"""
import json
import re

import httpx
from aiolimiter import AsyncLimiter
from tenacity import (
    AsyncRetrying,
    retry_if_exception,
    stop_after_attempt,
    wait_random_exponential,
)

# The app's own rendering convention for a non-string value. Imported rather
# than restated: \`parsing.py\` already owns it, and a second copy here is how the
# two runtimes drifted in the first place. (\`parsing\` imports only the stdlib,
# so there is no cycle.)
from .parsing import js_text


class ApiAttemptError(Exception):
    """An API-attempt failure that is safe to retry.

    Carries the response evidence so an exhausted retry is still inspectable in
    the database and in exported results.
    """

    def __init__(self, message, status=None, headers=None, response_data=None, retryable=True,
                 usage=None):
        super().__init__(message)
        self.status = status
        self.headers = headers
        self.response_data = response_data
        self.retryable = retryable
        # Spend that actually happened. A provider that answers 400 or reports
        # an in-band error can still have billed for the call, and the app
        # records it (parseProviderResponse attaches usage on every
        # response-bearing failure path). A reproduction that dropped it would
        # under-report the cost of the same run.
        self.usage = usage or {}


class RateGate:
    """Global cap on physical requests per second, shared by every task.

    \`\`AsyncLimiter(1, 1 / rate)\`\` paces requests evenly; \`\`AsyncLimiter(rate, 1)\`\`
    would allow a full burst at the top of each second. Build it inside the
    running event loop.
    """

    def __init__(self, requests_per_second):
        self._limiter = (
            AsyncLimiter(1, 1.0 / requests_per_second)
            if requests_per_second and requests_per_second > 0
            else None
        )

    async def acquire(self):
        if self._limiter is not None:
            await self._limiter.acquire()


def response_headers_for_storage(response):
    """Preserve duplicate response headers as an ordered list of pairs."""
    return list(response.headers.multi_items())


def parse_api_response(response, model=None):
    """Return \`\`(data, status, headers)\`\` for a good attempt; raise for a bad one."""
    status = response.status_code
    headers = response_headers_for_storage(response)
    raw_text = response.text

    try:
        data = response.json()
    except json.JSONDecodeError as error:
        raise ApiAttemptError(
            f"Invalid JSON response (HTTP {status}): {error}",
            status, headers, raw_text, retryable=False
        ) from error

    usage = _extract_usage(data, (model or {}).get("usage_paths"))

    if not 200 <= status < 300:
        error = _find_api_error(data, model)
        message = _error_message(error) if error is not None else raw_text[:200]
        raise ApiAttemptError(
            f"HTTP {status}: {message}", status, headers, data,
            retryable=_is_retryable(status, error), usage=usage
        )

    error = _find_api_error(data, model)
    if error is not None:
        raise ApiAttemptError(
            f"API error: {_error_message(error)}", status, headers, data,
            retryable=_is_retryable(status, error), usage=usage
        )

    return data, status, headers


_FILTER_PATH = re.compile(r"^(.+?)\\[\\?\\(@\\.(.+?)==(?:'|\\")(.+?)(?:'|\\")\\)\\]\\.(.+)$")


def get_value_at_path(obj, path):
    """Resolve \`\`choices[0].message.content\`\` or \`\`content[?(@.type=='x')].text\`\`.

    Matches the app's own path resolver. Returns \`\`None\`\` rather than raising
    when a path does not fit the response.
    """
    if not isinstance(obj, (dict, list)) or not path:
        return None
    try:
        filtered = _FILTER_PATH.match(path)
        if filtered:
            array_path, field, value, rest = filtered.groups()
            array = get_value_at_path(obj, array_path)
            if not isinstance(array, list):
                return None
            match = next(
                (i for i in array if isinstance(i, dict) and i.get(field) == value), None
            )
            return get_value_at_path(match, rest) if match is not None else None

        current = obj
        for part in (p for p in re.split(r"[.\\[\\]]", path) if p):
            if current is None:
                return None
            if part.isdigit():
                index = int(part)
                if not isinstance(current, list) or index >= len(current):
                    return None
                current = current[index]
            else:
                if not isinstance(current, dict):
                    return None
                current = current.get(part)
        return current
    except Exception:
        return None


def _error_message(payload):
    if isinstance(payload, str):
        return payload
    if isinstance(payload, dict):
        message = payload.get("message")
        if isinstance(message, str):
            return message
        nested = payload.get("error")
        if isinstance(nested, str):
            return nested
    try:
        return json.dumps(payload, ensure_ascii=False)
    except Exception:
        return str(payload)


def _error_code(payload):
    if not isinstance(payload, dict):
        return None
    for key in ("code", "status"):
        value = payload.get(key)
        try:
            return int(value)
        except (TypeError, ValueError):
            continue
    return None


def _is_retryable(status, payload):
    code = _error_code(payload)
    return status == 429 or status >= 500 or code == 429 or (code is not None and code >= 500)


def _find_api_error(data, model=None):
    if not isinstance(data, dict):
        return None

    for path in (model or {}).get("error_paths", []):
        configured = get_value_at_path(data, path)
        if configured not in (None, ""):
            return configured

    if data.get("error") is not None:
        return data["error"]
    if isinstance(data.get("errors"), list) and data["errors"]:
        return data["errors"][0]
    if data.get("type") == "error":
        return data

    choices = data.get("choices")
    if isinstance(choices, list):
        for choice in choices:
            if not isinstance(choice, dict):
                continue
            if choice.get("error") is not None:
                return choice["error"]
            message = choice.get("message")
            if isinstance(message, dict) and message.get("error") is not None:
                return message["error"]
    return None


_THINK_TAG = re.compile(r"<think\\b[^>]*>(.*?)</think>", re.IGNORECASE | re.DOTALL)


def _split_think_tags(content):
    """Pull \`\`<think>...</think>\`\` out of an answer, as the app does.

    Several models emit their reasoning inline in the answer rather than in a
    field the provider declares a path for -- most local reasoning models on
    Ollama, and several routed through OpenRouter. The app splits those out and
    REWRITES content (response-parser.ts:106-120, extractThinkTagReasoning), so
    without this the bundle's \`\`extracted\`\` still carried the tags and its
    \`\`parsed\`\` was computed from different input.

    Two details are the app's behaviour rather than the obvious one, and are
    matched deliberately:

    * a tag pair whose contents are empty or whitespace contributes no
      reasoning, and then NOTHING is stripped -- the answer is returned exactly
      as it came, tags included. Stripping an empty pair would be an
      improvement the app does not make, and a divergence.
    * multiple pairs join with a blank line, and the text between and around
      them is concatenated with no separator at all.

    Returns \`\`(content, reasoning)\`\`; reasoning is \`\`None\`\` when there was none.
    """
    parts = []
    reasoning_parts = []
    last = 0

    for match in _THINK_TAG.finditer(content):
        parts.append(content[last:match.start()])
        inner = match.group(1)
        if inner and inner.strip():
            reasoning_parts.append(inner.strip())
        last = match.end()

    if not reasoning_parts:
        return content, None

    parts.append(content[last:])
    return "".join(parts), "\\n\\n".join(reasoning_parts)


def _first_match(data, paths):
    """First present value among \`\`paths\`\`, returned as it was found.

    \`\`None\`\` is "not found here"; \`\`''\`\`/\`\`0\`\`/\`\`False\`\` are real values a
    model can legitimately return and are matched, not skipped -- matches the
    app's extractResponseContent, which used to conflate the two (an absent
    path and a genuinely empty answer both landed on the same branch).

    This used to join a list value with a space, on the stated reasoning that
    "filter paths yield lists". They do not: the filter branch of
    \`\`get_value_at_path\`\` above takes \`\`next(...)\`\`, one match, exactly as the
    app's own resolver takes \`\`array.find(...)\`\`. What the join actually
    caught was a configured path pointing at a real array in the payload --
    Anthropic's last fallback is the whole \`\`content\`\` list -- where the app
    JSON-stringifies. Rendering is \`\`_extract\`\`'s job now, and it uses the
    app's rule.
    """
    for path in paths or []:
        value = get_value_at_path(data, path)
        if value is None:
            continue
        return value
    return None


def _number_at(data, path):
    """A numeric value at one path, or None. Booleans are not numbers here.

    \`bool\` subclasses \`int\` in Python, so a provider reporting \`"cost": false\`
    would otherwise be recorded as a cost of 0.
    """
    value = get_value_at_path(data, path) if path else None
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    return value


def _extract_usage(data, paths):
    """What the call consumed, read from the paths the endpoint declares.

    Matches \`extractUsageInfo\` (response-parser.ts:466-533), including its two
    rules that are not obvious from the field names:

    * a comma-separated total means "sum these paths". Ollama reports
      \`prompt_eval_count\` and \`eval_count\` and no total of its own, so its
      config declares both and the total is their sum.
    * when no total is declared or found, one is calculated from the halves --
      but only if it comes to more than zero, so a response that reported
      nothing stays absent rather than becoming a confident 0.
    """
    if not paths:
        return {}

    prompt = _number_at(data, paths.get("prompt_tokens"))
    completion = _number_at(data, paths.get("completion_tokens"))

    total = None
    total_path = paths.get("total_tokens")
    if total_path and "," in total_path:
        parts = [_number_at(data, p.strip()) for p in total_path.split(",")]
        present = [p for p in parts if p is not None]
        total = sum(present) if present else None
    elif total_path:
        total = _number_at(data, total_path)

    if total is None:
        calculated = (prompt or 0) + (completion or 0)
        total = calculated if calculated > 0 else None

    return {
        "prompt_tokens": prompt,
        "completion_tokens": completion,
        "total_tokens": total,
        "cost": _number_at(data, paths.get("cost")),
        "input_cost": _number_at(data, paths.get("input_cost")),
        "output_cost": _number_at(data, paths.get("output_cost")),
    }


def _first_string_match(data, paths):
    """First non-empty string among optional configured response paths."""
    for path in paths or []:
        value = get_value_at_path(data, path)
        if isinstance(value, str) and value.strip():
            return value.strip()
    return None


async def request_once(client, gate, model, headers, body):
    """Issue one physical request, waiting for a rate-limit token first."""
    await gate.acquire()
    try:
        return await client.post(model["url"], json=body, headers=headers)
    except httpx.RequestError as error:
        # Transport failure. httpx.RequestError deliberately excludes
        # InvalidURL, so a malformed request is a bug and is not retried.
        raise ApiAttemptError(f"Network error: {error}") from error


def _extract(data, model, status, headers):
    """Pull the answer (and any reasoning) out of a successful response.

    A parseable 200 whose content path resolves to nothing is a COMPLETED call
    with an empty answer, not a failure -- matching the app's
    extractResponseContent. The API call succeeded; that the model produced no
    content at the configured path is a fact about the response, and the link
    between an API and the model behind it belongs to the provider, not to this
    bundle. Raising here also retried the call to exhaustion first
    (ApiAttemptError defaults to retryable), spending money re-requesting a
    response that reproduces.

    Why it stopped is reported by \`\`finish_reason\`\` below, read from the paths
    the provider declares. This used to sniff \`\`choices[0].finish_reason ==
    "length"\`\` inline to word an error message, which hardcoded one API family's
    shape into the runtime; the declared paths cover every provider without it.

    A value that is not already a string is rendered with \`\`js_text\`\`, the app's
    own convention, rather than Python's \`\`str\`\`. The two disagree on exactly
    the values a fallback path produces: \`\`str\`\` spells a dict
    \`\`{'type': 'text'}\`\` where \`\`JSON.stringify\`\` gives \`\`{"type":"text"}\`\`, and
    \`\`True\`\` where \`\`String\`\` gives \`\`true\`\`. Anthropic's fallbacks are a content
    block and then the whole content list; OpenAI Responses' are lists of
    blocks. \`\`extracted\`\` is what the parser then receives, so a difference here
    is a difference in \`\`parsed\`\` too, not just in one column's spelling.
    """
    paths = model["extract_paths"]
    answer = _first_match(data, paths)
    if answer is None:
        answer = ""

    extracted = js_text(answer)
    reasoning = _first_match(data, model.get("reasoning_paths"))

    # Only when the provider declared no reasoning of its own, matching the
    # app's \`if (!reasoning && ...)\` guard: a model that both fills the declared
    # path and repeats itself inline keeps the provider's version.
    if not reasoning:
        extracted, inline_reasoning = _split_think_tags(extracted)
        if inline_reasoning:
            reasoning = inline_reasoning

    return {
        "success": True,
        "response_data": data,
        "http_status": status,
        "response_headers": headers,
        "extracted": extracted,
        "reasoning": reasoning,
        "subprovider": _first_string_match(data, model.get("subprovider_paths")),
        "finish_reason": _first_string_match(data, model.get("finish_reason_paths")),
        "usage": _extract_usage(data, model.get("usage_paths")),
        "attempted_paths": paths,
        "error": None,
    }


async def call_api(client, gate, model, headers, body, policy, on_retry=None):
    """Call one model, retrying every API-attempt failure per \`\`policy\`\`.

    \`\`policy\`\` is a \`\`RetryPolicy\`\`. On success returns the result dict; when the
    retries are exhausted the final \`\`ApiAttemptError\`\` is raised with its status,
    headers and body still attached.
    """
    async for attempt in AsyncRetrying(
        retry=retry_if_exception(
            lambda error: (
                isinstance(error, ApiAttemptError)
                and error.retryable
            )
        ),
        stop=stop_after_attempt(policy.max_retries + 1),
        wait=wait_random_exponential(min=policy.backoff_min, max=policy.backoff_max),
        before_sleep=on_retry,
        reraise=True,
    ):
        with attempt:
            response = await request_once(client, gate, model, headers, body)
            data, status, response_headers = parse_api_response(response, model)
            return _extract(data, model, status, response_headers)


class RetryPolicy:
    """How hard to try. Edit these in \`\`experiment.py\`\`.

    \`\`max_retries\`\` counts *retries*, so each call makes up to
    \`\`max_retries + 1\`\` physical attempts.
    """

    def __init__(self, max_retries=5, backoff_min=1, backoff_max=60):
        self.max_retries = max_retries
        self.backoff_min = backoff_min
        self.backoff_max = backoff_max
`,Se=`"""Writing results out, in every format the app offers.

The database is the record of the run; these are convenience renderings of it.
Text formats stream; Excel, Parquet and SQLite need the frame in memory.
"""
import json
import sqlite3

from .parsing import column_type, is_empty, js_text, unstack_json_column

EXTENSIONS = {
    "csv": ".csv",
    "tsv": ".tsv",
    "json": ".json",
    "jsonl": ".jsonl",
    "excel": ".xlsx",
    "parquet": ".parquet",
    # Not \`.db\`: \`resolve_db_path\` names the *working* store
    # \`results_<timestamp>.db\`, and \`output_filename\` builds an export's name
    # from that same stem. A \`.db\` export would collide with the working
    # database's own filename byte for byte and silently merge an
    # \`export_data\` table into the live run instead of writing a separate
    # file. \`.sqlite\` is also what the app's own SQLite export already uses
    # (\`getFileExtension\` in download-utilities.ts).
    "sqlite": ".sqlite",
}

# Formats with no native type system of their own: every cell is text, so a
# real boolean/number has to be *rendered* into that text using the app's own
# convention (\`js_text\`) rather than pandas' (\`True\`, \`100.0\`). JSON and JSONL
# are NOT in this set even though they are "text formats" in the sense of
# being human-readable: like Parquet, Excel and the SQLite writer, they carry
# a real boolean as a real JSON \`true\` and a real number as a real JSON
# number, natively, in the file itself. Forcing a value through \`js_text\` for
# JSON/JSONL would turn a real boolean into the quoted string "true" -- not a
# rendering fix, a type change the app's own \`buildJsonRows\`/\`buildJsonlText\`
# never makes.
TEXT_FORMATS = ("csv", "tsv")

# The table an exported .sqlite file gets its rows put into. Matches the app's own
# default (\`buildSqliteBytesFromPages(..., 'export_data')\` in
# tabular-export.ts) for a trial's results -- not \`results\`, which names the
# *working* store's own schema (see store.py), a different table this export
# does not touch or resemble.
SQLITE_EXPORT_TABLE = "export_data"

# The columns that carry a real type rather than text: a parser's own value,
# the columns it was unstacked into, and the post-parser's. Only these need
# their rendering matched to the app's, because only these are something other
# than a string on the app's side too.
def _typed_columns(frame):
    return [
        c for c in frame.columns
        if c in ("parsed", "post_parsed") or str(c).startswith("parsed_")
    ]

_XML_BAD = {
    c: 0xFFFD
    for c in [
        *range(0x00, 0x09), 0x0B, 0x0C, *range(0x0E, 0x20),
        *range(0xD800, 0xE000), 0xFFFE, 0xFFFF,
    ]
}


def sanitize_xlsx_text(value):
    """Replace characters XML 1.0 forbids, which openpyxl's writer rejects.

    Tab, newline and carriage return are kept; non-strings pass through.
    """
    return value.translate(_XML_BAD) if isinstance(value, str) else value


def output_filename(db_path, fmt, override=None):
    if override:
        return override
    stem = db_path.rsplit("results_", 1)[-1].rsplit(".db", 1)[0] if "results_" in db_path else "output"
    return f"results_{stem}{EXTENSIONS[fmt]}"


def read_frame(db_path, unstack_column=None):
    """Load the results table, rebuilding each value before pandas sees it.

    The rebuild has to happen on the raw rows, not on a frame. \`\`read_sql_query\`\`
    would build the frame first, and a \`\`parsed\`\` column holding booleans plus
    one no-match comes back from that as float64 \`\`[1.0, 0.0, nan]\`\` -- at which
    point \`\`bool(value)\`\` reads the blank row as \`\`True\`\`, because \`\`bool(nan)\`\`
    is \`\`True\`\`. Every no-match would silently become True. Reading the cursor
    directly keeps each value a real Python object, so the tag is applied to
    \`\`1\`\`/\`\`0\`\`/\`\`None\`\` and nothing has been upcast behind it.
    """
    import pandas as pd

    with sqlite3.connect(db_path) as connection:
        cursor = connection.execute("SELECT * FROM results")
        names = [description[0] for description in cursor.description]
        rows = cursor.fetchall()

    frame = pd.DataFrame(_rebuild(names, rows), columns=_kept(names))

    if unstack_column and unstack_column in frame.columns:
        frame = unstack_json_column(frame, unstack_column)

    return frame


def _kept(names):
    """Every stored column except the tag, which is bookkeeping, not data.

    \`\`parsed_type\`\` exists so \`\`parsed\`\` can be read back as what it was. It is
    not part of the run's record and the app has no column matching it, so
    leaving it in the frame would put a stray column in every exported file.
    """
    return [name for name in names if name != "parsed_type"]


def _rebuild(names, rows):
    """Each stored row as its original values, tag applied and then discarded."""
    index = {name: position for position, name in enumerate(names)}
    parsed_at = index.get("parsed")
    tag_at = index.get("parsed_type")
    keep = [index[name] for name in _kept(names)]

    rebuilt = []
    for row in rows:
        values = list(row)
        if parsed_at is not None and tag_at is not None:
            # SQLite has no boolean storage class, so True came back as the
            # integer 1. It is a real int here -- not a float, not the string
            # "1" -- which is exactly what makes bool() safe at this point.
            if row[tag_at] == "boolean" and row[parsed_at] is not None:
                values[parsed_at] = bool(row[parsed_at])
        rebuilt.append([values[position] for position in keep])
    return rebuilt


def write(frame, path, fmt):
    """Render a frame to one of the supported formats."""
    # Only Excel and Parquet need a mixed parser column (real numbers beside a
    # PARSER_ERROR string) settled to one text column before their writer sees
    # it -- to_parquet would otherwise raise ArrowInvalid trying to fit a str
    # into an int64 column, and to_excel would render the same column two
    # different ways depending on which cell wrote last. JSON, JSONL and
    # SQLite all carry a real type per cell already (a JSON value's own type,
    # or a no-affinity SQLite storage class), so a mixed column is not a
    # problem for them to begin with -- settling it would replace real numbers
    # with quoted text next to the values that were never numbers, which is
    # not what the app's own per-cell writers (\`buildJsonRows\`,
    # \`bindSqliteValue\`) do.
    if fmt in ("excel", "parquet"):
        frame = _settle_mixed_columns(frame)
    if fmt in TEXT_FORMATS:
        frame = _render_typed_columns(frame)
    if fmt in ("json", "jsonl"):
        frame = _integerize_typed_columns(frame)
    if fmt == "csv":
        frame.to_csv(path, index=False)
    elif fmt == "tsv":
        frame.to_csv(path, index=False, sep="\\t")
    elif fmt == "json":
        frame.to_json(path, orient="records", indent=2, force_ascii=False)
    elif fmt == "jsonl":
        with open(path, "w", encoding="utf-8") as handle:
            for record in frame.to_dict("records"):
                handle.write(json.dumps(_json_safe_record(record), ensure_ascii=False, default=str) + "\\n")
    elif fmt == "excel":
        # Column-wise Series.map, not DataFrame.map: the latter only exists in
        # pandas 2.1+, and requirements.txt allows 2.0.
        frame.apply(lambda column: column.map(sanitize_xlsx_text)).to_excel(path, index=False)
    elif fmt == "parquet":
        frame.to_parquet(path, index=False)
    elif fmt == "sqlite":
        _write_sqlite(frame, path)
    else:
        raise ValueError(f"Unknown output format: {fmt}")
    return path


def _json_safe_record(record):
    """A \`to_dict("records")\` row, with NaN turned into \`None\`.

    \`frame.to_json\` has its own NaN-to-\`null\` handling built in, but jsonl's
    writer here calls the stdlib \`json.dumps\` directly, and the stdlib has no
    such thing -- it emits the bare token \`NaN\`, which is not valid JSON
    (\`JSON.parse\` rejects it; only Python's own lenient parser accepts it). A
    blank cell in an otherwise-numeric column becomes exactly this: pandas can
    only represent "some numbers, one missing" as float64 with \`NaN\` standing
    in for the blank, for any column, not only \`parsed\`. Left unguarded, that
    blank ships as a reproduction bundle whose own jsonl output the app that
    generated it cannot read back.
    """
    return {
        key: None if isinstance(value, float) and value != value else value
        for key, value in record.items()
    }


def _sqlite_affinity(col_type):
    """The app's \`sqliteAffinityFor\`, read the other way round.

    REAL for a number column, INTEGER for a boolean one, and no affinity at
    all for string or json -- matched exactly, including the "no affinity"
    part: declaring one would make SQLite coerce every bound value to a single
    storage class, which is exactly wrong for a mixed (numbers-beside-a-
    PARSER_ERROR-string) column where each cell needs to keep its own class.
    """
    if col_type == "number":
        return "REAL"
    if col_type == "boolean":
        return "INTEGER"
    return ""


def _quote_sqlite_id(name):
    return '"' + str(name).replace('"', '""') + '"'


def _bind_sqlite_value(value, col_type):
    """The app's \`bindSqliteValue\`, read the other way round.

    A column-typed cell (the whole column is numbers, or the whole column is
    booleans) casts to that type. Anything else -- a string/json column, which
    includes every mixed column -- binds each cell as its own real value: a
    number stays a number, a bool becomes 1/0, dict/list becomes the same
    compact JSON text \`js_text\` writes, and everything else is left as text.
    """
    if is_empty(value):
        return None
    if col_type == "number":
        return value
    if col_type == "boolean":
        return 1 if value else 0
    if isinstance(value, bool):
        return 1 if value else 0
    if isinstance(value, (int, float)):
        return value
    if isinstance(value, (dict, list)):
        return json.dumps(value, separators=(",", ":"), ensure_ascii=False)
    return str(value)


def _write_sqlite(frame, path):
    """Write the frame to a fresh \`export_data\` table, one .sqlite file.

    Not \`ResultStore\`: that models the run's own live schema (fixed base
    columns, its own \`parsed\`/\`parsed_type\` tagging), while this renders
    whatever frame \`write()\` was handed -- already unstacked, still holding
    each cell's own type, unlike every other exported format.
    """
    columns = list(frame.columns)
    col_types = {column: column_type(frame[column].tolist()) for column in columns}

    def column_def(column):
        quoted = _quote_sqlite_id(column)
        affinity = _sqlite_affinity(col_types[column])
        return f"{quoted} {affinity}" if affinity else quoted

    connection = sqlite3.connect(path)
    try:
        connection.execute(
            f"CREATE TABLE {_quote_sqlite_id(SQLITE_EXPORT_TABLE)} "
            f"({', '.join(column_def(c) for c in columns)})"
        )
        placeholders = ", ".join("?" for _ in columns)
        connection.executemany(
            f"INSERT INTO {_quote_sqlite_id(SQLITE_EXPORT_TABLE)} VALUES ({placeholders})",
            (
                tuple(_bind_sqlite_value(value, col_types[column])
                      for column, value in zip(columns, row))
                for row in frame.itertuples(index=False, name=None)
            ),
        )
        connection.commit()
    finally:
        connection.close()


def _as_app_text(value):
    """One value as the app's writer would render it, leaving blanks blank.

    An empty cell must stay empty rather than become the string \`\`""\`\`: the app
    writes a blank as JSON \`\`null\`\`, and turning it into an empty string here
    would be a fresh divergence in the JSON formats while fixing one in CSV.
    """
    if value is None or (isinstance(value, float) and value != value):
        return value
    return js_text(value)


def _mixed(values):
    """True when a column holds more than one kind of value.

    \`\`column_type\`\` already answers "string" for a mixed column, but so does a
    column that is genuinely all text, and only the first needs rewriting.
    """
    present = [value for value in values if not is_empty(value)]
    return column_type(present) == "string" and not all(
        isinstance(value, str) for value in present
    )


def _settle_mixed_columns(frame):
    """Render a mixed parser column to text, once, for every format.

    A \`\`parsed\`\` column holding real numbers beside a \`\`PARSER_ERROR\`\` string
    has no single type. Left mixed it would reach \`\`to_parquet\`\` as an object
    column and raise ArrowInvalid ("could not convert str ... to int64"), so
    one failed parse would take out the whole export. The app answers this the
    same way -- a mixed column is a text column -- and keeping the error text
    rather than casting it to null is the point: it is the only record that the
    parse failed.
    """
    columns = [c for c in _typed_columns(frame) if _mixed(frame[c].tolist())]
    if not columns:
        return frame
    settled = frame.copy()
    for column in columns:
        settled[column] = settled[column].map(_as_app_text)
    return settled


def _render_typed_columns(frame):
    """Match the app's text rendering for the columns a parser produced.

    Same values, same file, different conventions: pandas writes a real \`\`True\`\`
    as \`\`True\`\` and a whole float as \`\`100.0\`\`, while the app's writer gives
    \`\`true\`\` and \`\`100\`\`. Left alone, closing the type gap would have swapped
    one measurable byte-fidelity break for another on the same built-ins.

    A column already read as text needs nothing -- rendering it again would be
    a second chance to change it.
    """
    columns = [c for c in _typed_columns(frame) if column_type(frame[c].tolist()) != "string"]
    if not columns:
        return frame
    rendered = frame.copy()
    for column in columns:
        rendered[column] = rendered[column].map(_as_app_text)
    return rendered


def _json_number(value):
    """An integral float read back as the int it always was.

    Pandas has no way to keep a numeric column as int64 once any value in it
    is missing -- "42, 8.5, blank" can only be represented as float64, with
    the blank as NaN, so a value that started life as the real Python int 42
    (see \`\`_convert\`\` in the generated parser) comes back out as 42.0. CSV and
    the app's own text writer already correct for this (see \`\`js_text\`\`); JSON
    needs the same correction for a different reason -- it is not a rendering
    convention here, it is that JSON (and the app's own numbers, which carry
    no dtype at all) never had a reason to grow a fractional part it does not
    have.
    """
    return int(value) if isinstance(value, float) and value.is_integer() else value


def _integerize_typed_columns(frame):
    """Undo pandas' float64-for-a-blank artifact, for JSON and JSONL only.

    Scoped to typed columns for the same reason \`\`_render_typed_columns\`\` is:
    only a parser's own declared type is something the app has a convention to
    match. A column already typed \`\`string\`\` (text, or a mixed PARSER_ERROR
    column) has no numbers in it to fix, and \`NaN\` stays \`NaN\` here -- turning
    it into \`None\` is \`_json_safe_record\`'s job for jsonl, and \`to_json\`
    already does it correctly for json.
    """
    import pandas as pd

    columns = [c for c in _typed_columns(frame) if column_type(frame[c].tolist()) == "number"]
    if not columns:
        return frame
    fixed = frame.copy()
    for column in columns:
        # Not \`.map()\`: pandas re-infers a uniform dtype for whatever a
        # \`.map()\` call returns, which silently upcasts the very \`int\` this
        # function exists to restore back into a \`float\` -- the exact
        # artifact being undone, reintroduced one line later. Building the
        # replacement as a plain Python list under an explicit \`object\` dtype
        # is what actually keeps a column holding a real \`int\` next to a real
        # \`float\` next to a real \`NaN\`.
        fixed[column] = pd.Series(
            [value if is_empty(value) else _json_number(value) for value in fixed[column].tolist()],
            index=fixed.index,
            dtype=object
        )
    return fixed
`,Oe=`"""Parsers, column typing and JSON unstacking -- what turns a response into data.

A parser is the one piece of user code in a bundle. Whether it started life as
a regex or as Python, \`\`experiment.py\`\` carries it as a module defining
\`\`parse(content)\`\` -- a regex parser's module is generated from its pattern, so
the bundle runs exactly what the app ran instead of a second implementation of
"what a regex means". A failure returns a \`\`PARSER_ERROR: ...\`\` string rather
than raising, so one bad response cannot take down a run that has already
collected thousands of others.
"""
import json

PARSER_ERROR = "PARSER_ERROR"


def apply_parser(content, parser, namespace=None):
    """Apply the trial's parser to one extracted answer.

    Returns \`\`(value, refused)\`\`.

    \`\`namespace\`\` is where the parser's \`\`parse\`\` function lives; the generated
    script builds it once and passes it in. There is no branch on parser type:
    the type decided how \`\`experiment.py\`\` was written, not how it runs.

    \`\`refused\`\` is whether the response matched one of the trial's refusal
    phrases. Only a refusal-aware entry point can say -- the phrases are
    compiled into the parser's own module, so the parser is what decides, on the
    same text the app's copy of that module decided on. The namespace carries
    \`\`refusal_aware\`\` because the generator that appended the wrapper is the one
    thing that knows whether it exists; neither runtime guesses.

    It is returned rather than folded into the value because an empty cell alone
    cannot tell a refusal apart from a parser that missed or a provider that
    returned nothing, and those mean opposite things.
    """
    if not parser or content is None:
        return (None, False)
    try:
        value = (namespace or {})["parse"](content)
    except Exception as error:
        return (f"{PARSER_ERROR}: {error}", False)
    if (namespace or {}).get("refusal_aware"):
        return (value[0], bool(value[1]))
    return (value, False)


# --- Column typing ------------------------------------------------------------
# There is no type guessing here any more, in either direction.
#
# This module used to infer a column's type by reading its values as text --
# "1" looked numeric, "yes" looked boolean -- and the app did the same thing
# with a different algorithm, so the same trial exported [1, 0, 1] from the app
# and [True, False, True] from its own reproduction bundle. The guess only
# existed because a regex parser returned text whatever type it declared.
#
# A parser's generated module now performs its own declared conversion, so a
# value arrives here already being what it claims to be. All that is left is
# reading the type back off the values, which both sides can do identically
# because it is not an algorithm: it is \`type()\`.


def column_type(values):
    """One type for a column, read from what its non-empty values are.

    A column is typed only when every non-empty value already carries that
    type. Anything mixed is text -- the honest answer, not a fallback: a
    \`\`parsed\`\` column holding real numbers beside a \`\`PARSER_ERROR\`\` string has
    no single numeric type, and casting the error away to claim one would
    delete the only record that the parse failed. It would also make
    \`\`to_parquet\`\` raise, since Arrow cannot fit a str into an int64 column.
    """
    seen = None
    for value in values:
        if is_empty(value):
            continue
        kind = _kind(value)
        if seen is None:
            seen = kind
        elif seen != kind:
            return "string"
    return seen or "string"


def _kind(value):
    if isinstance(value, bool):
        return "boolean"
    if isinstance(value, (int, float)):
        return "number"
    if isinstance(value, (dict, list)):
        return "json"
    return "string"


def is_empty(value):
    return value is None or value == "" or (isinstance(value, float) and value != value)


def js_text(value):
    """Render one value the way the app writes it into a text export.

    The app is the primary artifact and its writer is already \`\`typeof\`\`-driven
    (\`\`stringifyTabularCell\`\`), so the bundle matches the app rather than the
    other way round. Two differences are the whole reason this exists: pandas
    writes a bool as \`\`True\`\`/\`\`False\`\` where JavaScript writes \`\`true\`\`/
    \`\`false\`\`, and writes a whole float as \`\`100.0\`\` where \`\`String(100)\`\` in
    JavaScript gives \`\`100\`\`.

    Only the text formats need this. Parquet and Excel carry the type in the
    file, so there is nothing to reconcile and they keep the real dtype.
    """
    if is_empty(value):
        return ""
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, float) and value.is_integer():
        return str(int(value))
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, (dict, list)):
        return json.dumps(value, separators=(",", ":"), ensure_ascii=False)
    return str(value)


# --- JSON unstacking --------------------------------------------------------


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
        return json.dumps(value, separators=(",", ":"), ensure_ascii=False)
    return value


def unstack_json_column(frame, column, prefix="parsed"):
    """Expand a column of JSON objects into one column per discovered field."""
    import pandas as pd

    try:
        records = [
            json.loads(value)
            if value and value != "null" and not str(value).startswith(PARSER_ERROR)
            else {}
            for value in frame[column].tolist()
        ]
        columns = discover_parsed_columns(records, prefix)
        expanded = pd.DataFrame(
            {c: [extract_parsed_cell(r, c, prefix) for r in records] for c in columns},
            index=frame.index,
            columns=columns,
        )
        print(f"  Unstacked {len(columns)} JSON fields")
        return pd.concat([frame.drop(column, axis=1), expanded], axis=1)
    except Exception as error:
        print(f"WARN: JSON unstacking failed: {error}")
        return frame
`,qe=`"""The run itself: arguments, key preflight, concurrency, progress, export.

\`\`run()\`\` is the only thing a generated \`\`experiment.py\`\` calls. Everything it
needs arrives as data, so the generated script stays readable: models, a task
source, an optional parser, and a retry policy you can edit.
"""
import argparse
import asyncio
import functools
import glob
import json
import os
import re
import sys
from datetime import datetime

import aiometer
import httpx
from tqdm import tqdm

from .http import ApiAttemptError, RateGate, RetryPolicy, call_api
from .output import output_filename, read_frame, write
from .parsing import apply_parser
from .store import ResultStore, context_column, parameter_column


_REQUEST_MARKER = re.compile(r"\\{\\{(?:PROMPT|SYSTEM_PROMPT)\\}\\}")


def _fill_request_template(value, task):
    """Replace request-template markers in the original strings exactly once.

    JSON-text replacement let a marker in the user's prompt be interpreted as
    a second template marker when the system prompt was filled afterward. Walk
    the JSON-compatible request object and substitute only markers present in
    each original template string; inserted user data is never rescanned.
    """
    if isinstance(value, str):
        def replace(match):
            if match.group(0) == "{{PROMPT}}":
                return str(task["prompt"])
            system = task.get("system_prompt")
            return "" if system is None else str(system)

        return _REQUEST_MARKER.sub(replace, value)
    if isinstance(value, list):
        return [_fill_request_template(item, task) for item in value]
    if isinstance(value, dict):
        return {key: _fill_request_template(item, task) for key, item in value.items()}
    return value


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description="Auditomatic experiment runner")
    parser.add_argument("--output", "-o",
                        choices=sorted(["csv", "tsv", "json", "jsonl", "excel", "parquet", "sqlite"]),
                        default="csv", help="Export format (default: csv)")
    parser.add_argument("--concurrent", "-c", type=int, default=10,
                        help="Simultaneous requests (default: 10)")
    parser.add_argument("--rate-limit", "-r", type=float, default=5.0,
                        help="Max requests/second, retries included (default: 5.0)")
    parser.add_argument("--timeout", "-t", type=int, default=90,
                        help="Per-request timeout in seconds (default: 90)")
    parser.add_argument("--output-file", "-f", help="Output filename (generated if omitted)")
    parser.add_argument("--resume", action="store_true",
                        help="Continue the most recent run in this directory")
    parser.add_argument("--db-file", help="Database to write or resume from")
    parser.add_argument("--max-retries", type=int,
                        help="Override the script's RetryPolicy retry count")
    parser.add_argument("--backoff-max", type=float,
                        help="Override the script's RetryPolicy backoff ceiling, in seconds")
    return parser.parse_args(argv)


def resolve_db_path(args):
    """Where results go: an explicit file, the run being resumed, or a new one.

    \`\`--resume\`\` on its own used to be accepted and ignored, which silently
    started a fresh database and re-ran every call the user was trying not to
    repeat. It now names the most recent database here, and says so.
    """
    if args.db_file:
        return args.db_file
    if args.resume:
        existing = sorted(glob.glob("results_*.db"), key=os.path.getmtime)
        if not existing:
            print("--resume found no results_*.db here. "
                  "Pass --db-file to name one, or drop --resume to start fresh.")
            sys.exit(1)
        print(f"Resuming {existing[-1]}")
        return existing[-1]
    return f"results_{datetime.now():%Y%m%d_%H%M%S}.db"


def check_api_keys(models):
    """Verify every key the models need is set, or exit saying which is missing."""
    print("Checking API keys...")
    needed = {}
    keyless = []
    for model in models:
        env_var = model.get("api_key_env")
        (needed.setdefault(env_var, []).append(model["name"]) if env_var
         else keyless.append(model["name"]))

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


def build_request(model, task):
    """Fill the placeholders the exporter left in this model's request."""
    key = os.getenv(model["api_key_env"], "") if model.get("api_key_env") else ""
    headers = {k: v.replace("{{API_KEY}}", key) for k, v in model["headers"].items()}

    # Substitute only the marker strings in the original object. JSON-text
    # replacement used to rescan prompt data when it later filled the system
    # marker, changing a literal {{SYSTEM_PROMPT}} in user input.
    return headers, _fill_request_template(model["body"], task)


async def _run_one(client, gate, store, model, task, parser, namespace, policy, bar, counts,
                   post_parser=None, post_namespace=None):
    task_id = f"config{model['config_index']}_{task['task_id']}"
    if await store.already_done(task_id):
        counts["skipped"] += 1
        bar.update(1)
        bar.set_postfix(ok=counts["ok"], failed=counts["fail"])
        return

    started = asyncio.get_event_loop().time()
    row = {
        "task_id": task_id,
        "config_index": model["config_index"],
        "model_name": model["name"],
        "display_name": model["display_name"],
        "repeat_index": task.get("repeat_index", 0),
        "prompt": task["prompt"],
        "system_prompt": task.get("system_prompt"),
    }
    # Namespaced rather than merged in: a dataset column called "prompt" and a
    # request parameter called "text" both collided with something before.
    row.update((context_column(k), v) for k, v in task["context"].items())
    row.update((parameter_column(k), v) for k, v in model.get("parameters", {}).items())

    try:
        headers, body = build_request(model, task)
        result = await call_api(client, gate, model, headers, body, policy,
                                on_retry=lambda s: bar.write(
                                    f"Retry {s.attempt_number} {model['name']}: {s.outcome.exception()}"))
        parsed_value, parsed_refused = apply_parser(result["extracted"], parser, namespace)
        post_parsed_value, _ = (
            apply_parser(result["extracted"], post_parser, post_namespace)
            if result["extracted"] else (None, False)
        )
        row.update(
            success=1,
            http_status=result["http_status"],
            response_headers=result["response_headers"],
            response_data=result["response_data"],
            extracted=result["extracted"],
            reasoning=result["reasoning"],
            subprovider=result["subprovider"],
            finish_reason=result["finish_reason"],
            parsed=parsed_value,
            # Whether the model declined, decided by the parser that had the
            # trial's phrases compiled into it. The primary parser owns this:
            # one response is one refusal, so the post-processing parser below
            # respects the same phrases but does not get a second say.
            refused=parsed_refused,
            # The post-processing parser runs on the same extracted answer the
            # main parser sees, not on the main parser's output, and only when
            # there is an answer to run on -- both matching the app's guard
            # (\`if (result.success && result.content)\`, executor.ts:884). An
            # empty answer leaves this absent rather than recording a parse of
            # nothing.
            post_parsed=post_parsed_value,
            # Flat columns rather than a JSON blob: these are what a cost
            # analysis groups and sums, and the app exports them as their own
            # columns too.
            **result.get("usage", {}),
        )
        counts["ok"] += 1
    except ApiAttemptError as error:
        row.update(success=0, error=str(error), http_status=error.status,
                   response_headers=error.headers, response_data=error.response_data,
                   # A failed call can still have been billed. The app counts
                   # that spend; a reproduction that dropped it would report the
                   # same run as cheaper than it was.
                   **error.usage)
        counts["fail"] += 1
        bar.write(f"FAILED {model['name']}: {str(error)[:100]}")

    row["duration_seconds"] = round(asyncio.get_event_loop().time() - started, 3)
    try:
        await store.save(row)
    except Exception as error:
        # A row we cannot store must not take down a run that is otherwise
        # working; the failure is reported and the remaining tasks continue.
        bar.write(f"WARN: could not save {task_id}: {error}")

    bar.update(1)
    bar.set_postfix(ok=counts["ok"], failed=counts["fail"])


async def _main(models, tasks, parser, namespace, policy, args,
                post_parser=None, post_namespace=None):
    db_path = resolve_db_path(args)
    # Declaration order, not set order, so the schema is stable across runs and
    # --resume never has to migrate a column it already had.
    parameters = dict.fromkeys(
        parameter_column(k) for model in models for k in model.get("parameters", {})
    )
    store = await ResultStore(
        db_path,
        extra_columns=[*(context_column(c) for c in tasks.context_columns), *parameters],
    ).open()

    work = [(model, task) for task in tasks for model in models]
    counts = {"ok": 0, "fail": 0, "skipped": 0}
    gate = RateGate(args.rate_limit)

    print(f"{len(work)} calls | {args.concurrent} concurrent | {args.rate_limit}/s")
    print(f"Database: {db_path}\\n")

    async with httpx.AsyncClient(timeout=args.timeout) as client:
        with tqdm(total=len(work), desc="Running") as bar:
            # partial, not lambda: aiometer rejects lambdas outright, because the
            # usual loop-variable capture bug makes every one of them run the
            # same task.
            await aiometer.run_all(
                [
                    functools.partial(_run_one, client, gate, store, model, task,
                                      parser, namespace, policy, bar, counts,
                                      post_parser, post_namespace)
                    for model, task in work
                ],
                max_at_once=args.concurrent,
            )

    if counts["skipped"]:
        print(f"\\nSkipped {counts['skipped']} calls already completed in {db_path}")

    print("\\nResults by configuration:")
    for index, name, total, ok in await store.summary():
        rate = (ok or 0) / total * 100 if total else 0
        print(f"  [{index}] {name}: {ok or 0}/{total} ({rate:.0f}%)")
    await store.close()

    path = write(
        read_frame(db_path, unstack_column="parsed" if (parser or {}).get("unstackJson") else None),
        output_filename(db_path, args.output, args.output_file),
        args.output,
    )
    print(f"\\nWrote {path}")
    print(f"Database: {db_path}  (SELECT * FROM results WHERE success = 0;)")


def run(models, tasks, parser=None, namespace=None, policy=None, argv=None,
        post_parser=None, post_namespace=None):
    """Run every model against every task. See \`\`experiment.py\`\` for the data.

    """
    args = parse_args(argv)
    policy = policy or RetryPolicy()
    if args.max_retries is not None:
        policy.max_retries = args.max_retries
    if args.backoff_max is not None:
        policy.backoff_max = args.backoff_max
    check_api_keys(models)
    asyncio.run(_main(models, tasks, parser, namespace, policy, args,
                      post_parser, post_namespace))
`,Ie=`"""SQLite persistence: live writes, resume, crash tolerance.

Results are written as each call finishes, so an interrupted run keeps
everything it already got. One schema definition feeds both \`\`CREATE TABLE\`\` and
the migration that widens a database written by an older export, which is what
makes \`\`--resume\`\` safe against a bundle whose columns have changed.
"""
import json

import aiosqlite

# (column, sqlite type). Context and parameter columns are appended per trial.
BASE_COLUMNS = [
    ("task_id", "TEXT PRIMARY KEY"),
    ("config_index", "INTEGER"),
    ("model_name", "TEXT"),
    ("display_name", "TEXT"),
    ("repeat_index", "INTEGER"),
    ("prompt", "TEXT"),
    ("system_prompt", "TEXT"),
    ("success", "INTEGER"),
    ("http_status", "INTEGER"),
    ("response_headers", "TEXT"),
    ("response_data", "TEXT"),
    ("extracted", "TEXT"),
    ("reasoning", "TEXT"),
    ("subprovider", "TEXT"),
    ("finish_reason", "TEXT"),
    # What the call consumed, from the paths the endpoint declares. REAL rather
    # than INTEGER: a token count is a whole number, but \`cost\` is not, and
    # OpenRouter reports fractional costs directly. SQLite's REAL affinity keeps
    # an integer token count readable as one either way.
    ("prompt_tokens", "INTEGER"),
    ("completion_tokens", "INTEGER"),
    ("total_tokens", "INTEGER"),
    ("cost", "REAL"),
    ("input_cost", "REAL"),
    ("output_cost", "REAL"),
    # No affinity, deliberately. A TEXT column converts every bound value to
    # its text form at insert time, so a parser's real \`\`False\`\` came back as
    # the string \`\`"0"\`\` -- and \`\`bool("0")\`\` is \`\`True\`\`, because any
    # non-empty string is truthy. Reading a boolean back out of a TEXT column
    # is wrong for every False, silently, on every export. A column with no
    # affinity keeps each value's own storage class instead: a bool or int
    # lands as INTEGER, a float as REAL, a str as TEXT.
    ("parsed", ""),
    # SQLite has no boolean storage class at all, so a stored INTEGER 1 is
    # genuinely ambiguous between the number 1 and True. This says which.
    # Nothing else needs a tag: numbers, text and JSON survive the round trip
    # as themselves.
    ("parsed_type", "TEXT"),
    # Whether the model declined, as decided by the parser the trial's refusal
    # phrases were compiled into. The app exports the same column, and a
    # refusal rate is one of the findings this instrument exists to produce, so
    # a bundle that omitted it would reproduce the run and not the result.
    #
    # No affinity, and this is the exact case the note above is about: this
    # column is a bool, so under TEXT affinity every False would come back as
    # the string "0" and read as True.
    ("refused", ""),
    # The post-processing parser's own value, in its own column beside
    # \`parsed\` -- the app exports both too (\`postparsed_*\` field ids). No
    # affinity, for the same reason as \`parsed\`.
    ("post_parsed", ""),
    ("error", "TEXT"),
    ("duration_seconds", "REAL"),
]


BASE_NAMES = frozenset(name for name, _ in BASE_COLUMNS)


def quote(name):
    """Quote an identifier so a dataset column can be any string."""
    return '"' + str(name).replace('"', '""') + '"'


def context_column(name):
    """Column for a variable or dataset column, keeping its own name.

    A dataset column called \`\`prompt\`\` or \`\`error\`\` would otherwise land on top
    of the base column of that name -- both in the schema and in the row dict --
    and silently replace the run's own record of what was sent and what failed.
    Only the colliding names are prefixed, so ordinary columns stay readable.
    """
    return "var_" + str(name) if str(name) in BASE_NAMES else str(name)


def parameter_column(name):
    """Column for a request parameter, always prefixed.

    Parameters share a namespace with dataset columns -- an OpenAI Responses
    trial over a dataset with a \`\`text\`\` column has both -- so they are prefixed
    unconditionally rather than only on collision.
    """
    return "param_" + str(name)


class ResultStore:
    """Everything this run knows, in one table."""

    def __init__(self, path, extra_columns=()):
        self.path = path
        # Context and parameter columns arrive already namespaced by the two
        # functions above, so the only de-duplication left is repeats.
        self.columns = list(BASE_COLUMNS) + [
            (name, "TEXT") for name in dict.fromkeys(extra_columns)
            if name not in BASE_NAMES
        ]
        self._db = None

    async def open(self):
        self._db = await aiosqlite.connect(self.path)
        await self._reject_unreadable_database()
        columns = ", ".join(f"{quote(n)} {t}" for n, t in self.columns)
        await self._db.execute(f"CREATE TABLE IF NOT EXISTS results ({columns})")
        await self._migrate()
        await self._db.commit()
        return self

    async def _reject_unreadable_database(self):
        """Refuse a database whose \`\`parsed\`\` values cannot be trusted.

        An older bundle declared \`\`parsed\`\` as TEXT. TEXT affinity rewrites
        every bound value as text at insert time, so a parser's \`\`False\`\` was
        stored as the string \`\`"0"\`\` before anything could record that it had
        been a boolean. That distinction is gone from the file -- not
        mislabelled, destroyed -- so no migration can recover it: rebuilding
        the schema would leave the same damaged values sitting in a better
        column.

        Widening the schema and carrying on would produce a run whose early
        rows silently mean something different from its later ones, which is
        the one outcome an audit trail cannot tolerate. So this stops, and says
        to start a fresh run.
        """
        cursor = await self._db.execute("PRAGMA table_info(results)")
        info = await cursor.fetchall()
        await cursor.close()
        if not info:
            return  # A new database, or one this version is about to create.

        declared = {row[1]: row[2] for row in info}
        if "parsed" not in declared:
            return  # Older still, and never stored a parsed value at all.
        if declared["parsed"] == "" and "parsed_type" in declared:
            return  # Written by this version.

        raise RuntimeError(
            f"{self.path} was written by an older version of this bundle, which "
            "stored parsed values as text. A parser's False was saved as \\"0\\" "
            "there, and \\"0\\" reads back as True, so resuming would mix "
            "trustworthy rows with corrupted ones in the same file. That cannot "
            "be repaired in place -- the original values are gone.\\n"
            "Start a fresh run (drop --resume, or pass a new --db-file name). "
            "The old database is left untouched for reference."
        )

    async def _migrate(self):
        """Add whatever an older database is missing, so --resume can write."""
        cursor = await self._db.execute("PRAGMA table_info(results)")
        existing = {row[1] for row in await cursor.fetchall()}
        await cursor.close()
        for name, sql_type in self.columns:
            if name not in existing:
                await self._db.execute(
                    f"ALTER TABLE results ADD COLUMN {quote(name)} {sql_type}"
                )

    async def already_done(self, task_id):
        """True only for a task that previously *succeeded*.

        A failed row is not done: an interrupted run retries it rather than
        counting it as finished.
        """
        cursor = await self._db.execute(
            "SELECT success FROM results WHERE task_id = ?", (task_id,)
        )
        row = await cursor.fetchone()
        await cursor.close()
        return bool(row and row[0])

    async def save(self, values):
        """Write one result, replacing any earlier attempt at the same task."""
        known = {name for name, _ in self.columns}
        row = {k: v for k, v in values.items() if k in known}
        if "parsed" in row:
            row["parsed_type"] = type_tag(row["parsed"])
        for key in ("response_data", "response_headers"):
            if isinstance(row.get(key), (dict, list)):
                row[key] = json.dumps(row[key], ensure_ascii=False)
        names = ", ".join(quote(k) for k in row)
        marks = ", ".join("?" for _ in row)
        await self._db.execute(
            f"INSERT OR REPLACE INTO results ({names}) VALUES ({marks})",
            [_storable(v) for v in row.values()],
        )
        await self._db.commit()

    async def summary(self):
        cursor = await self._db.execute(
            "SELECT config_index, display_name, COUNT(*), SUM(success) "
            "FROM results GROUP BY config_index, display_name ORDER BY config_index"
        )
        rows = await cursor.fetchall()
        await cursor.close()
        return rows

    async def close(self):
        if self._db is not None:
            await self._db.close()
            self._db = None


def _storable(value):
    """SQLite takes str/int/float/None; everything else becomes compact JSON.

    \`\`bool\`\` needs no branch of its own: it subclasses \`\`int\`\` in Python, so
    the isinstance check above already passes it through, and sqlite3 binds it
    as INTEGER. The \`\`parsed\`\` column has no affinity, so that INTEGER is what
    comes back out -- which is why \`\`parsed_type\`\` only has to separate a
    boolean from a number, not rescue one from text.
    """
    if value is None or isinstance(value, (str, int, float, bytes)):
        return value
    return json.dumps(value, separators=(",", ":"), ensure_ascii=False, default=str)


def type_tag(value):
    """What \`\`parsed\`\` needs recorded to be read back as what it was.

    Only booleans are ambiguous once stored, so only booleans are tagged.
    """
    return "boolean" if isinstance(value, bool) else None
`,je=`"""Where the prompts come from.

The two kinds of Auditomatic trial differ only here. A template trial expands
variables into a Cartesian product; a spreadsheet trial reads rows from a
Parquet file. Everything downstream -- requests, retries, storage, parsing,
export -- is identical, so it is written once and takes a task source.

A task source yields dicts with a stable \`\`task_id\`\`, the \`\`prompt\`\` to send,
and the \`\`context\`\` (variables or row values) recorded alongside the result.
"""
import datetime
import itertools
import json
import math
import re
from decimal import Decimal

# The name may hold anything but a brace, and is trimmed. Excluding \`{\` as well
# as \`}\` is what makes \`{{{a}}}\` the inner placeholder with a literal brace
# either side, rather than reading \`{a\` as the name.
_PLACEHOLDER = re.compile(r"\\{\\{([^{}]+)\\}\\}")


def normalize_binding_value(value):
    """One value, as the characters that appear in the prompt.

    This deliberately does not use \`\`str\`\`. The app renders the same prompts in
    TypeScript for live execution, preview, token counting and cost, and the
    two runtimes disagree by default: \`\`str(True)\`\` is "True" here and "true"
    there, \`\`str(1.0)\`\` is "1.0" here and "1" there. A prompt should not reveal
    which language rendered it, and a reproduction that differs from the run it
    reproduces is not a reproduction.

    The TypeScript side of this contract is
    \`\`src/shared/prompt-template/normalize.ts\`\`, and
    \`\`__tests__/python-parity.test.ts\`\` runs both over the same fixtures.
    """
    # Parquet columns arrive as numpy scalars, which are not Python ints or
    # bools. Unwrap before dispatching on type.
    if hasattr(value, "item") and not isinstance(value, (str, bytes, list, dict, tuple)):
        try:
            value = value.item()
        except Exception:
            pass

    if value is None:
        return ""

    # NaN and pandas NaT both fail self-equality. An empty Parquet cell arrives
    # this way, and it is an absent value, not the word "nan".
    try:
        if value != value:
            return ""
    except Exception:
        pass

    # bool before int: bool is a subclass of int in Python.
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, str):
        return value
    if isinstance(value, int):
        return str(value)
    if isinstance(value, float):
        return "" if not math.isfinite(value) else _format_double(value)
    if isinstance(value, datetime.datetime):
        if value.tzinfo is not None:
            value = value.astimezone(datetime.timezone.utc).replace(tzinfo=None)
        return "%s.%03dZ" % (value.strftime("%Y-%m-%dT%H:%M:%S"), value.microsecond // 1000)
    if isinstance(value, datetime.date):
        return value.strftime("%Y-%m-%dT00:00:00.000Z")
    if isinstance(value, (list, tuple, dict)):
        try:
            return json.dumps(value, separators=(",", ":"), ensure_ascii=False)
        except (TypeError, ValueError):
            return ""
    return ""


def _format_double(value):
    """A float, spelled the way ECMAScript's Number::toString spells it.

    Python and JavaScript both produce shortest round-trip digits, but they
    switch to exponential notation at different magnitudes: Python at 1e16 and
    1e-5, JavaScript at 1e21 and 1e-7. So \`\`repr(1e17)\`\` is "1e+17" here and
    "100000000000000000" there. Taking Python's digits and applying JavaScript's
    notation rules makes the two agree across the whole finite range rather than
    on a handful of tested magnitudes.
    """
    if value == 0:
        return "0"  # also collapses -0.0, as String(-0) does

    sign, digits, exponent = Decimal(repr(value)).normalize().as_tuple()
    digits = "".join(str(d) for d in digits)
    prefix = "-" if sign else ""
    # value == 0.digits * 10**point, per the spec's n
    point = exponent + len(digits)

    if len(digits) <= point <= 21:
        return prefix + digits + "0" * (point - len(digits))
    if 0 < point <= 21:
        return prefix + digits[:point] + "." + digits[point:]
    if -6 < point <= 0:
        return prefix + "0." + "0" * -point + digits
    mantissa = digits[0] + ("." + digits[1:] if len(digits) > 1 else "")
    return "%s%se%s%d" % (prefix, mantissa, "+" if point > 0 else "-", abs(point - 1))


def fill(template, values):
    """Substitute \`\`{{name}}\`\` placeholders, tolerating inner whitespace.

    A name that has a value substitutes that value's normalized text -- an
    empty spreadsheet cell arrives as \`\`None\`\` or as a float \`\`nan\`\`, and
    neither of those words belongs in a prompt.

    A name that is not a variable at all contributes no text. This matches the
    app's paste-from-cell behavior: a missing cell and an empty cell both have
    nothing to paste into the prompt. Authoring diagnostics are separate from
    execution and must not change the request payload.
    """
    def replace(match):
        key = match.group(1).strip()
        # \`{{}}\` and \`{{  }}\` are literal text: nothing can be keyed on nothing.
        # An empty placeholder name is still literal text: it is not a cell
        # name. A non-empty name with no cell is an empty paste.
        if not key:
            return match.group(0)
        return normalize_binding_value(values.get(key))

    return _PLACEHOLDER.sub(replace, template)


def attr_column(variable_name, attribute_name):
    """The result column for one attribute of one variable.

    Defined once because two places need it and they must agree: the column
    list and the row that fills it. A column named in one and filled under
    another spelling is an empty column, which reads as "this value was never
    recorded" rather than as a bug.
    """
    return "attr_" + variable_name + "__" + attribute_name


class TemplateTasks:
    """Every combination of the configured variables, in declaration order.

    \`\`attributes\`\` is optional and positional: \`\`attributes[name][i]\`\` describes
    \`\`variables[name][i]\`\`. Those keys become \`\`attr_<variable>__<key>\`\` columns
    beside the value, which is what makes a list like "names labelled by
    perceived gender" analysable after the run. Indexing by position rather than
    by value keeps a repeated value from taking the wrong label.

    The separator is doubled because both halves are names their author chose:
    with a single one, variable \`\`model_size\`\` with attribute \`\`b\`\` and variable
    \`\`model\`\` with attribute \`\`size_b\`\` produce the same column, and one of them
    silently wins. This matches the app's own export headers.
    """

    def __init__(self, template, variables, attributes=None, system_prompt=None, repeats=1):
        self.template = template
        self.variables = variables
        self.attributes = attributes or {}
        self.system_prompt = system_prompt
        self.repeats = max(1, repeats)

    @property
    def attribute_keys(self):
        """\`\`{variable: [key, ...]}\`\` for the variables that carry attributes."""
        keys = {}
        for name, items in self.attributes.items():
            found = {}
            for item in items:
                found.update(dict.fromkeys(item or ()))
            if found:
                keys[name] = sorted(found)
        return keys

    @property
    def context_columns(self):
        return list(self.variables) + [
            attr_column(name, key)
            for name, keys in self.attribute_keys.items()
            for key in keys
        ]

    def _attributes_at(self, name, index):
        items = self.attributes.get(name) or ()
        return (items[index] if index < len(items) else None) or {}

    def __iter__(self):
        names = list(self.variables)
        value_lists = [list(self.variables[name]) for name in names]
        keys = self.attribute_keys
        # The app treats an empty variable domain as one empty-valued
        # combination. Zero tasks would silently change the experiment into a
        # no-op, so use the same singleton domain here.
        indices = [range(len(values)) if values else range(1) for values in value_lists]

        for combo_index, positions in enumerate(
            itertools.product(*indices) if names else [()]
        ):
            # Only the values are substituted into the prompt; the attributes
            # describe the run, they are not part of what was asked.
            values = {
                name: value_lists[i][p] if value_lists[i] else None
                for i, (name, p) in enumerate(zip(names, positions))
            }
            context = dict(values)
            for name, position in zip(names, positions):
                found = self._attributes_at(name, position)
                for key in keys.get(name, ()):
                    context[attr_column(name, key)] = found.get(key)

            for repeat in range(self.repeats):
                yield {
                    "task_id": f"combo{combo_index}_r{repeat}",
                    "prompt": fill(self.template, values),
                    "system_prompt": (
                        fill(self.system_prompt, values) if self.system_prompt else None
                    ),
                    "context": context,
                    "repeat_index": repeat,
                }


class ParquetTasks:
    """One task per dataset row, with \`\`{{column}}\`\` filled from that row."""

    def __init__(self, pattern, path="data.parquet", system_prompt=None, repeats=1):
        self.pattern = pattern
        self.path = path
        self.system_prompt = system_prompt
        self.repeats = max(1, repeats)
        self._frame = None

    @property
    def frame(self):
        if self._frame is None:
            import pandas as pd

            self._frame = pd.read_parquet(self.path)
        return self._frame

    @property
    def context_columns(self):
        return list(self.frame.columns)

    def __iter__(self):
        for row_index, row in enumerate(self.frame.to_dict("records")):
            for repeat in range(self.repeats):
                yield {
                    "task_id": f"row{row_index}_r{repeat}",
                    "prompt": fill(self.pattern, row),
                    "system_prompt": (
                        fill(self.system_prompt, row) if self.system_prompt else None
                    ),
                    "context": row,
                    "repeat_index": repeat,
                }
`,Le=Object.freeze({"auditomatic/__init__.py":Ae,"auditomatic/http.py":Pe,"auditomatic/store.py":Ie,"auditomatic/tasks.py":je,"auditomatic/parsing.py":Oe,"auditomatic/output.py":Se,"auditomatic/runner.py":qe});function Me(e,n){const t=new Date().toISOString();return`# Auditomatic Export Reproducibility Bundle

Trial Name: ${e}

Generated: ${t}

## What is in this bundle

- \`experiment.py\` - this trial as data: the models, the prompt, the variables,
the parser. Everything here is meant to be read and edited.
- \`auditomatic/\` - the runner \`experiment.py\` imports. It makes the requests,
retries them, stores results and writes the output. Keep it beside the script.
- \`requirements.txt\` - the packages to install
- \`trial-spec.json\` - versioned execution specification${n==="spreadsheet"?"\n- `data.parquet` - the dataset this trial ran over, one call per row":""}

## What running it produces

- \`results_YYYYMMDD_HHMMSS.db\` - a SQLite database, written as each call
returns. This is the record of the run; the file below is a rendering of it.
- \`results_YYYYMMDD_HHMMSS.csv\` - written at the end, or another format with
\`--output\`

---

${Ce()}
`}function Ce(){return`## Quick Start

### 1. Install Dependencies

\`\`\`bash
pip install -r requirements.txt
\`\`\`

Python ${b} or newer -- \`experiment.py\` checks this itself and
refuses to run otherwise.

### 2. Set API Keys

Keys are read from environment variables, never from this bundle. \`experiment.py\`
lists the exact variable each model needs in its \`api_key_env\` field, and the
script checks them all before making any request:

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
| \`--output\` / \`-o\`      | \`csv\`   | Output format: \`csv\`, \`tsv\`, \`json\`, \`jsonl\`, \`excel\`, \`parquet\`, \`sqlite\` |
| \`--concurrent\` / \`-c\`  | \`10\`    | Simultaneous requests |
| \`--rate-limit\` / \`-r\`  | \`5.0\`   | Requests per second, retries included |
| \`--timeout\` / \`-t\`     | \`90\`    | Per-request timeout in seconds |
| \`--output-file\` / \`-f\` | Auto    | Output filename |
| \`--resume\`             | Off     | Continue the most recent run in this directory |
| \`--db-file\`            | Auto    | Database to write or resume from |
| \`--max-retries\`        | Script  | Override the retry count \`experiment.py\` sets (5) |
| \`--backoff-max\`        | Script  | Override the backoff ceiling \`experiment.py\` sets (60s) |

\`\`\`bash
# Faster, if the provider allows it
python experiment.py --concurrent 20 --rate-limit 10.0

# Gentler -- one request at a time, for a local model on a single GPU
python experiment.py --concurrent 1 --rate-limit 1.0

# Slow models
python experiment.py --timeout 180

# Another format
python experiment.py --output excel --output-file my_results.xlsx
\`\`\`

Concurrency is how many requests are in flight at once. The rate limit is how
many physical requests per second may leave the process, retries included.

---

## Tested Environment

This bundle was verified against Python ${b} with the library versions pinned
as the lower bound of each line in \`requirements.txt\` (httpx 0.27, pandas 2.0,
pyarrow 21, and the rest). Every one of those lines also carries an upper
bound, on purpose: reproducing an experiment means reproducing the environment
it ran in, and a library update years from now -- pandas changing how it
writes a null, pyarrow changing a Parquet encoding -- would silently change
the output with nothing to say so.

---

## Reliability

**Retries.** Every API-attempt failure is retried: network and timeout errors,
any non-2xx response, invalid JSON, provider error envelopes (including an HTTP
200 body carrying an \`error\` key), and a 2xx response with no answer in it.
Nothing else is -- a parser or programming error is a bug, and is raised rather
than attempted six times.

The default is 5 retries (so up to 6 attempts) with exponential backoff between
1 and 60 seconds, jittered so a batch that fails together does not march through
its retries in lockstep. Edit \`RETRIES = RetryPolicy(...)\` near the top of
\`experiment.py\`, or override it for one run with \`--max-retries\`.

A call that exhausts its retries is stored with \`success = 0\` and keeps its
evidence: \`http_status\`, \`response_headers\`, \`response_data\` and \`error\`.

**Storage.** Each result is written and committed as it arrives, so an
interrupted run keeps everything it already had.

## Resuming

Press Ctrl+C at any time, then:

\`\`\`bash
python experiment.py --resume
\`\`\`

That continues the most recent \`results_*.db\` in this directory; pass
\`--db-file\` to name a different one. Resuming skips calls that succeeded,
retries calls that failed, and re-exports with the updated results.

---

## The results table

One row per (configuration, task). Every run has these columns:

| Column | What it holds |
|---|---|
| \`task_id\` | Primary key: configuration plus combination/row and repeat |
| \`config_index\` | Position in \`MODELS\` |
| \`model_name\` | The model |
| \`display_name\` | The model, disambiguated when one model appears twice |
| \`repeat_index\` | Which repeat, when \`REPEATS > 1\` |
| \`prompt\`, \`system_prompt\` | What was actually sent |
| \`success\` | 1 or 0 |
| \`http_status\`, \`response_headers\`, \`response_data\` | The response, in full |
| \`extracted\` | The answer pulled out of it |
| \`reasoning\` | Reasoning text, for models that return it separately |
| \`parsed\` | The parser's output |
| \`error\` | Why a failed call failed |
| \`duration_seconds\` | Wall-clock time for the call |

Plus, per trial:

- one column per variable or dataset column, under its own name
- \`attr_<variable>__<key>\` for values that carry attributes
- \`param_<name>\` for each request parameter

A dataset column whose name collides with one of the fixed columns above is
prefixed \`var_\` rather than overwriting it.

**Query examples:**

\`\`\`bash
sqlite3 results_20250128_143022.db

.schema results

# What failed, and why
SELECT display_name, http_status, error, COUNT(*)
FROM results WHERE success = 0
GROUP BY display_name, http_status, error;

# Success rate per configuration
SELECT display_name,
     COUNT(*) AS total,
     SUM(success) AS successful,
     ROUND(100.0 * SUM(success) / COUNT(*), 1) AS success_rate
FROM results GROUP BY display_name;

.mode csv
.output filtered_results.csv
SELECT display_name, prompt, extracted, parsed FROM results WHERE success = 1;
.quit
\`\`\`

## Troubleshooting

**Rate limits (429).** The run reports \`Retry 2 <model>: HTTP 429 ...\` and keeps
going. If it happens constantly, lower \`--rate-limit\` and \`--concurrent\`.

**An empty \`extracted\` value** means the response arrived and parsed, but the
recorded \`extract_paths\` found no content in it. That is recorded as a
successful call, because the API call did succeed -- what the model produced is
between you and the provider. Check \`finish_reason\` for that row first: a value
like \`length\` or \`max_tokens\` means the model hit its output budget before
answering, and raising \`max_tokens\` is the fix. If \`finish_reason\` looks
normal, look at \`response_data\` and adjust \`extract_paths\` in
\`experiment.py\`.

**\`PARSER_ERROR: ...\`** in \`parsed\` means the response arrived and the parser
could not handle it. The call still counts as a success and \`extracted\` holds
the raw answer, so you can re-parse without re-running.

**Timeouts.** Raise \`--timeout\`.
`}class De{async exportReproductionBundle(n,t=!1){return J.runWithLease("export","Reproducibility bundle export",()=>this.exportReproductionBundleUnguarded(n,t))}async exportReproductionBundleUnguarded(n,t=!1){try{d.debug("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:n});const r=await T.trials.get(n);if(!r)return{ok:!1,error:new f("GENERATION_FAILED",`Failed to load trial: ${n}`)};const a=await Re.generateProductionScript(n,{includeComments:!0});if(!a.ok)return{ok:!1,error:new f("GENERATION_FAILED",a.error?.message||"Failed to generate Python script")};const s=[{path:"experiment.py",required:!0,requiredBecause:"It is the script the bundle exists to deliver.",produce:()=>a.value.data},...Object.entries(Le).map(([m,h])=>({path:m,required:!0,requiredBecause:"experiment.py imports the auditomatic package.",produce:()=>h})),{path:"trial-spec.json",required:!0,requiredBecause:"It is the versioned execution contract for this reproduction.",produce:()=>JSON.stringify(a.value.trialSpec,null,2)},...a.value.renderer==="spreadsheet"?[{path:"data.parquet",required:!0,requiredBecause:"experiment.py reads it in load_dataset() and cannot run without it.",produce:()=>this.generateDatasetParquet(r)}]:[],{path:"README.md",required:!0,requiredBecause:"It documents how to run the bundle.",produce:()=>Me(a.value.metadata.trialName,a.value.renderer)},{path:"requirements.txt",required:!0,requiredBecause:"Without it the script cannot be installed.",produce:()=>a.value.requirementsTxt}],{entries:o,contents:i}=await Ne(s),l=await H(o,6,{confirmed:t}),p=new Date().toISOString().split("T")[0].replace(/-/g,""),u=`${a.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_reproduction_${p}.zip`;return{ok:!0,value:{blob:l,filename:u,sizeBytes:l.size,contents:i}}}catch(r){return r instanceof j?(d.warn("EXPORT_DEBUG: REPRO_BUNDLE INCOMPLETE",{trialId:n,path:r.path,cause:r.cause}),{ok:!1,error:new f("GENERATION_FAILED",r.message,{trialId:n,path:r.path})}):r instanceof W?{ok:!1,error:new f("CONFIRMATION_REQUIRED",r.message,{trialId:n,estimatedBytes:r.estimatedBytes,budgetBytes:r.budgetBytes})}:(d.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",r),{ok:!1,error:new f("GENERATION_FAILED",r instanceof Error?r.message:"Unknown error creating bundle")})}}async generateDatasetParquet(n){if(n.type!=="spreadsheet"||!n.spreadsheetConfig)throw new Error("trial is not a spreadsheet trial");const t=n.spreadsheetConfig.datasetId,r=await T.datasets.get(t);if(!r)throw new Error(`dataset ${t} no longer exists`);const{datasetParquetWriter:a}=await X(async()=>{const{datasetParquetWriter:o}=await import("./dataset-parquet-C0LM266M.js");return{datasetParquetWriter:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8])),s=a.generate(r);return d.debug("EXPORT_DEBUG: Generated dataset parquet for bundle",{rows:r.rows.length,columns:r.columns.length,sizeBytes:s.byteLength}),s}}const mn=new De;export{mn as reproducibilityBundleService};
