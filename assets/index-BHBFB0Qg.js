const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dataset-parquet-PqoPew_G.js","assets/dataset-export.service-3aKGbxTX.js","assets/tauri-download-utilities-Seu7-3iZ.js","assets/index-DfAdxqZE.js","assets/vue-vendor-DRrxbAFs.js","assets/ui-vendor-BCasHbjs.js","assets/utils-vendor-DGBfkxC8.js","assets/tauri-vendor-BdAyolxU.js","assets/index-VkXcRO1N.css","assets/data-vendor-CKwrMZHi.js"])))=>i.map(i=>d[i]);
var O=Object.defineProperty;var I=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var E=(e,t,n)=>I(e,typeof t!="symbol"?t+"":t,n);import{l as p,d as x,ai as q,h as L,_ as C}from"./index-DfAdxqZE.js";import{a as f,g as k}from"./ExportDataModal-D8SSX19H.js";import{a as M}from"./index-Yb7k1H2U.js";import{a as D,A as j}from"./bundle-container-DZUvd46H.js";import"./vue-vendor-DRrxbAFs.js";import"./ui-vendor-BCasHbjs.js";import"./utils-vendor-DGBfkxC8.js";import"./tauri-vendor-BdAyolxU.js";import"./toast-B3fBbeHS.js";import"./tauri-download-utilities-Seu7-3iZ.js";import"./dataset-export.service-3aKGbxTX.js";import"./data-vendor-CKwrMZHi.js";import"./dataset-operations-Bpquuzwg.js";import"./id-generator-Cv_Imc0S.js";import"./useCrossTab-DqojCoRD.js";import"./row-filters-DVNsrKUs.js";import"./ColumnFilterPanel-BP0xEC0C.js";import"./display-values-D3R-R7BQ.js";import"./sanitization-p58QOl4f.js";import"./paged-table-reader-Cui7blz8.js";import"./api-call-bodies-fRSmx9dM.js";import"./repository-scooIGnV.js";import"./repository-BOpJn2P2.js";const b="    ";function c(e,t=0){return e==null?"None":typeof e=="boolean"?e?"True":"False":typeof e=="number"?B(e):typeof e=="string"?JSON.stringify(e):Array.isArray(e)?F(e,t):typeof e=="object"?G(e,t):JSON.stringify(String(e))}function B(e){return Number.isFinite(e)?String(e):"None"}function F(e,t){if(e.length===0)return"[]";const n=b.repeat(t+1);return`[
${e.map(r=>`${n}${c(r,t+1)}`).join(`,
`)}
${b.repeat(t)}]`}function G(e,t){const n=Object.keys(e);if(n.length===0)return"{}";const a=b.repeat(t+1);return`{
${n.map(s=>`${a}${JSON.stringify(s)}: ${c(e[s],t+1)}`).join(`,
`)}
${b.repeat(t)}}`}function U(e,t){if(!t||!t.type||t.type==="none")return null;if(t.envVar)return t.envVar;const n=e.toUpperCase().replace(/[^A-Z0-9]+/g,"_").replace(/^_+|_+$/g,"");return n?`CUSTOM_${n}_API_KEY`:null}const T="@@AUDITOMATIC_PROMPT@@",R="@@AUDITOMATIC_SYSTEM@@";function $(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function A(e){return e.replace(/[\r\n]+/g," ")}function Y(e,t,n,a){const r=e.providerSnapshot,s={"Content-Type":"application/json",...r.headers};r.auth?.type==="bearer"?s.Authorization="Bearer {{API_KEY}}":r.auth?.type==="header"&&r.auth.header&&(s[r.auth.header]="{{API_KEY}}");const o=JSON.parse(JSON.stringify(M(r,e.modelId,e.parameters||{},T,a?R:void 0)).split(T).join("{{PROMPT}}").split(R).join("{{SYSTEM_PROMPT}}")),i=r.responseModes?.text?.responseTransform,l=[...i?.contentPath?[i.contentPath]:[],...i?.fallbackPaths??[]];return{config_index:t,name:e.modelSnapshot?.displayName||e.modelId,display_name:n,provider:e.provider,api_key_env:U(e.provider,r.auth),url:(r.api?.baseUrl??"")+(r.api?.endpoint??""),headers:s,body:o,parameters:e.parameters||{},extract_paths:l.length?l:["response"],reasoning_paths:[...i?.reasoningPath?[i.reasoningPath]:[],...i?.reasoningFallbackPaths??[]]}}function X(e,t){const n=new Map;for(const r of e.configurations){const s=r.modelSnapshot?.displayName||r.modelId;n.set(s,(n.get(s)||0)+1)}const a=new Map;return e.configurations.flatMap((r,s)=>{if(!r.providerSnapshot)return[];const o=r.modelSnapshot?.displayName||r.modelId;let i=o;if((n.get(o)??0)>1){const l=(a.get(o)??0)+1;a.set(o,l),i=`${o} [Config ${l}]`}return[Y(r,s,i,t)]})}function H(e){if(!e)return{source:"",argument:""};const t={type:e.type,unstackJson:!!e.unstackJson};if(e.type==="python"){const{code:n="",functionName:a="parse"}=e.config;return{source:`# --- Parser: ${A(e.name)} ---
${n.trim()}

PARSER = ${c(t)}`,argument:`, parser=PARSER, namespace={"parse": ${a}}`}}return{source:`# --- Parser: ${A(e.name)} ---
PARSER = ${c({...t,config:e.config})}`,argument:", parser=PARSER"}}function J(e){const{trial:t,template:n,dataset:a,systemPrompt:r,repeatCount:s=1,parser:o}=e;if(!n&&!a)throw new Error("generateExperimentScript needs either a template or a dataset");const i=X(t,!!r),{source:l,argument:u}=H(o),d=!!n?.attributes&&Object.keys(n.attributes).length>0,_=n?`TemplateTasks(PROMPT_TEMPLATE, VARIABLES, ${d?"attributes=ATTRIBUTES, ":""}system_prompt=SYSTEM_PROMPT, repeats=REPEATS)`:'ParquetTasks(PROMPT_PATTERN, "data.parquet", system_prompt=SYSTEM_PROMPT, repeats=REPEATS)',y=n?[`PROMPT_TEMPLATE = ${c(n.text)}`,"",`VARIABLES = ${c(n.variables)}`,...d?["","# Per-value labels, positional against VARIABLES. One","# attr_<variable>_<key> column each, recorded with every result.",`ATTRIBUTES = ${c(n.attributes)}`]:[]].join(`
`):`PROMPT_PATTERN = ${c(a.pattern)}`;return["#!/usr/bin/env python3",`"""${$(t.name)} -- reproduction of an Auditomatic trial.`,"","Run it:      python experiment.py","Formats:     --output csv|tsv|json|jsonl|excel|parquet","Pacing:      --concurrent 10 --rate-limit 5 --timeout 90","Continue:    --resume --db-file results_<timestamp>.db","","Results stream into SQLite as they arrive, so an interrupted run resumes","without repeating work. Everything below is data you can edit.",'"""',`from auditomatic import run, RetryPolicy, ${n?"TemplateTasks":"ParquetTasks"}`,"","# How hard to try each call. MAX_RETRIES counts retries, so 5 means up to","# six attempts, with jittered exponential backoff between them.","RETRIES = RetryPolicy(max_retries=5, backoff_min=1, backoff_max=60)","",y,"",`SYSTEM_PROMPT = ${c(r??null)}`,`REPEATS = ${s}`,"",`MODELS = ${c(i)}`,...l?["",l]:[],"",'if __name__ == "__main__":',`    run(MODELS, ${_}${u}, policy=RETRIES)`,""].join(`
`)}const W=`"""Auditomatic reproduction runner.

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
`,z=`"""One API attempt, retried and rate-limited.

The policy is deliberately small and lives in one place:

* Every *API-attempt* failure is retried -- network and timeout errors, any
  non-2xx response, invalid JSON, provider error envelopes (including an HTTP
  200 body carrying \`\`{"error": ...}\`\`), and a 2xx response with no answer in
  it. Providers signal overload in all of these ways.
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
    retry_if_exception_type,
    stop_after_attempt,
    wait_random_exponential,
)


class ApiAttemptError(Exception):
    """An API-attempt failure that is safe to retry.

    Carries the response evidence so an exhausted retry is still inspectable in
    the database and in exported results.
    """

    def __init__(self, message, status=None, headers=None, response_data=None):
        super().__init__(message)
        self.status = status
        self.headers = headers
        self.response_data = response_data


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


def parse_api_response(response):
    """Return \`\`(data, status, headers)\`\` for a good attempt; raise for a bad one."""
    status = response.status_code
    headers = response_headers_for_storage(response)
    raw_text = response.text

    try:
        data = response.json()
    except json.JSONDecodeError as error:
        raise ApiAttemptError(
            f"Invalid JSON response (HTTP {status}): {error}", status, headers, raw_text
        ) from error

    if not 200 <= status < 300:
        raise ApiAttemptError(f"HTTP {status}: {raw_text[:200]}", status, headers, data)

    if isinstance(data, dict) and data.get("error") is not None:
        raise ApiAttemptError(f"API error: {data['error']}", status, headers, data)

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


def _first_match(data, paths):
    """First non-empty value among \`\`paths\`\`. Filter paths yield lists; join them."""
    for path in paths or []:
        value = get_value_at_path(data, path)
        if value is None:
            continue
        if isinstance(value, list):
            value = " ".join(str(v) for v in value if v) or None
        if value:
            return value
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
    """Pull the answer (and any reasoning) out of a successful response."""
    paths = model["extract_paths"]
    answer = _first_match(data, paths)
    if answer is None:
        choices = data.get("choices") if isinstance(data, dict) else None
        if choices and choices[0].get("finish_reason") == "length":
            message = "Response truncated (finish_reason=length) - increase max_tokens"
        else:
            message = f"Could not extract answer. Tried: {', '.join(paths)}"
        raise ApiAttemptError(message, status, headers, data)

    return {
        "success": True,
        "response_data": data,
        "http_status": status,
        "response_headers": headers,
        "extracted": str(answer),
        "reasoning": _first_match(data, model.get("reasoning_paths")),
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
        retry=retry_if_exception_type(ApiAttemptError),
        stop=stop_after_attempt(policy.max_retries + 1),
        wait=wait_random_exponential(min=policy.backoff_min, max=policy.backoff_max),
        before_sleep=on_retry,
        reraise=True,
    ):
        with attempt:
            response = await request_once(client, gate, model, headers, body)
            data, status, response_headers = parse_api_response(response)
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
`,V=`"""Writing results out, in every format the app offers.

The database is the record of the run; these are convenience renderings of it.
Text formats stream; Excel and Parquet need the frame in memory.
"""
import json
import sqlite3

from .parsing import apply_column_typing, unstack_json_column

EXTENSIONS = {
    "csv": ".csv",
    "tsv": ".tsv",
    "json": ".json",
    "jsonl": ".jsonl",
    "excel": ".xlsx",
    "parquet": ".parquet",
}

# Columns that must stay text however they look: an id like "07030" is not a
# number, and a stored JSON blob is not a boolean.
NEVER_TYPED = ("task_id", "prompt", "system_prompt", "response_data", "response_headers")

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
    """Load the results table into a typed pandas frame."""
    import pandas as pd

    with sqlite3.connect(db_path) as connection:
        frame = pd.read_sql_query("SELECT * FROM results", connection)

    if unstack_column and unstack_column in frame.columns:
        frame = unstack_json_column(frame, unstack_column)

    return apply_column_typing(frame, skip=NEVER_TYPED)


def write(frame, path, fmt):
    """Render a frame to one of the supported formats."""
    if fmt == "csv":
        frame.to_csv(path, index=False)
    elif fmt == "tsv":
        frame.to_csv(path, index=False, sep="\\t")
    elif fmt == "json":
        frame.to_json(path, orient="records", indent=2, force_ascii=False)
    elif fmt == "jsonl":
        with open(path, "w", encoding="utf-8") as handle:
            for record in frame.to_dict("records"):
                handle.write(json.dumps(record, ensure_ascii=False, default=str) + "\\n")
    elif fmt == "excel":
        # Column-wise Series.map, not DataFrame.map: the latter only exists in
        # pandas 2.1+, and requirements.txt allows 2.0.
        frame.apply(lambda column: column.map(sanitize_xlsx_text)).to_excel(path, index=False)
    elif fmt == "parquet":
        frame.to_parquet(path, index=False)
    else:
        raise ValueError(f"Unknown output format: {fmt}")
    return path
`,K=`"""Parsers, column typing and JSON unstacking -- what turns a response into data.

A parser is the one piece of user code in a bundle. It arrives as a dict with a
\`\`type\`\` of \`\`regex\`\` or \`\`python\`\` and is applied to the extracted answer. A
failure returns a \`\`PARSER_ERROR: ...\`\` string rather than raising, so one bad
response cannot take down a run that has already collected thousands of others.
"""
import json
import re

PARSER_ERROR = "PARSER_ERROR"

_REGEX_FLAGS = {
    "i": re.IGNORECASE,
    "m": re.MULTILINE,
    "s": re.DOTALL,
    "x": re.VERBOSE,
}


def compile_pattern(pattern, flags=""):
    """Compile a pattern whose flags arrive as a JavaScript-style string.

    \`\`flags\`\` is text like \`\`"gim"\`\`; \`\`g\`\` has no Python equivalent and is
    ignored. Passing the string straight to \`\`re\`\` would raise a TypeError.
    """
    value = 0
    for letter in flags or "":
        value |= _REGEX_FLAGS.get(letter.lower(), 0)
    return re.compile(pattern, value)


def apply_regex_parser(content, config):
    """Return the requested capture group, or None when nothing matches."""
    group = config.get("captureGroup", 1)
    matcher = compile_pattern(config["pattern"], config.get("flags", ""))
    match = matcher.search(content)
    if not match:
        return None
    try:
        return match.group(group)
    except IndexError:
        # The configured group does not exist in this pattern.
        return None


def apply_parser(content, parser, namespace=None):
    """Apply the trial's parser to one extracted answer.

    \`\`namespace\`\` is where an embedded Python parser's \`\`parse\`\` function lives;
    the generated script builds it once and passes it in.
    """
    if not parser or content is None:
        return None
    try:
        if parser["type"] == "regex":
            return apply_regex_parser(str(content), parser["config"])
        if parser["type"] == "python":
            return (namespace or {})["parse"](content)
        return None
    except Exception as error:
        return f"{PARSER_ERROR}: {error}"


# --- Whole-column typing ----------------------------------------------------
# Parsers store a faithful value. Whether a column is numeric or boolean is a
# separate whole-column decision applied at export, mirroring the app: numeric
# strings count only in canonical form, so identifiers like "07030" stay text.

_BOOL_TRUE = {"true", "yes", "1"}
_BOOL_FALSE = {"false", "no", "0"}
_PLAIN_DECIMAL = re.compile(r"^-?(?:0|[1-9]\\d*)(?:\\.\\d+)?$")


def is_empty(value):
    return value is None or value == "" or (isinstance(value, float) and value != value)


def is_number_like(value):
    if isinstance(value, bool):
        return False
    if isinstance(value, (int, float)):
        return True
    if not isinstance(value, str):
        return False
    return bool(_PLAIN_DECIMAL.match(value.strip()))


def is_boolean_like(value):
    if isinstance(value, bool):
        return True
    if not isinstance(value, str):
        return False
    return value.strip().lower() in (_BOOL_TRUE | _BOOL_FALSE)


def infer_column_type(values):
    """One type for a whole column, decided by its non-empty values."""
    present = [v for v in values if not is_empty(v)]
    if not present:
        return "string"
    if all(isinstance(v, (dict, list)) for v in present):
        return "json"
    if all(is_boolean_like(v) for v in present):
        return "boolean"
    if all(is_number_like(v) for v in present):
        return "number"
    return "string"


def coerce_cell(value, column_type):
    """Apply a column's type to one cell. Ambiguous values become None."""
    if is_empty(value):
        return None
    if column_type == "number":
        if isinstance(value, bool):
            return None
        if isinstance(value, (int, float)):
            return value
        text = str(value).strip()
        if not _PLAIN_DECIMAL.match(text):
            return None
        return float(text) if "." in text else int(text)
    if column_type == "boolean":
        if isinstance(value, bool):
            return value
        text = str(value).strip().lower()
        if text in _BOOL_TRUE:
            return True
        if text in _BOOL_FALSE:
            return False
        return None
    if column_type == "json":
        return value if isinstance(value, (dict, list)) else None
    return value


def apply_column_typing(frame, skip=()):
    """Type every column of a result frame in place, skipping the named ones."""
    for column in frame.columns:
        if column in skip:
            continue
        column_type = infer_column_type(frame[column].tolist())
        if column_type in ("number", "boolean"):
            frame[column] = frame[column].apply(lambda v: coerce_cell(v, column_type))
    return frame


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
`,Q=`"""The run itself: arguments, key preflight, concurrency, progress, export.

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
import sys
from datetime import datetime

import aiometer
import httpx
from tqdm import tqdm

from .http import ApiAttemptError, RateGate, RetryPolicy, call_api
from .output import output_filename, read_frame, write
from .parsing import apply_parser
from .store import ResultStore, context_column, parameter_column


def parse_args(argv=None):
    parser = argparse.ArgumentParser(description="Auditomatic experiment runner")
    parser.add_argument("--output", "-o", choices=sorted(["csv", "tsv", "json", "jsonl", "excel", "parquet"]),
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

    # Substitute into the JSON text so any character in the prompt survives.
    body_text = json.dumps(model["body"])
    body_text = body_text.replace("{{PROMPT}}", json.dumps(task["prompt"])[1:-1])
    # \`is not None\`, not truthiness: a system-prompt template can fill to an
    # empty string (a template that is one placeholder, resolving against an
    # unset variable or an empty dataset cell for that row). The body still
    # carries the {{SYSTEM_PROMPT}} marker whenever a system prompt was
    # configured at all, so it must still be replaced -- with nothing, here --
    # or the literal marker text is sent to the model as its instructions.
    if task.get("system_prompt") is not None:
        body_text = body_text.replace(
            "{{SYSTEM_PROMPT}}", json.dumps(str(task["system_prompt"]))[1:-1]
        )
    return headers, json.loads(body_text)


async def _run_one(client, gate, store, model, task, parser, namespace, policy, bar, counts):
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
        row.update(
            success=1,
            http_status=result["http_status"],
            response_headers=result["response_headers"],
            response_data=result["response_data"],
            extracted=result["extracted"],
            reasoning=result["reasoning"],
            parsed=apply_parser(result["extracted"], parser, namespace),
        )
        counts["ok"] += 1
    except ApiAttemptError as error:
        row.update(success=0, error=str(error), http_status=error.status,
                   response_headers=error.headers, response_data=error.response_data)
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


async def _main(models, tasks, parser, namespace, policy, args):
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
                                      parser, namespace, policy, bar, counts)
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


def run(models, tasks, parser=None, namespace=None, policy=None, argv=None):
    """Run every model against every task. See \`\`experiment.py\`\` for the data."""
    args = parse_args(argv)
    policy = policy or RetryPolicy()
    if args.max_retries is not None:
        policy.max_retries = args.max_retries
    if args.backoff_max is not None:
        policy.backoff_max = args.backoff_max
    check_api_keys(models)
    asyncio.run(_main(models, tasks, parser, namespace, policy, args))
`,Z=`"""SQLite persistence: live writes, resume, crash tolerance.

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
    ("parsed", "TEXT"),
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
        columns = ", ".join(f"{quote(n)} {t}" for n, t in self.columns)
        await self._db.execute(f"CREATE TABLE IF NOT EXISTS results ({columns})")
        await self._migrate()
        await self._db.commit()
        return self

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
    """SQLite takes str/int/float/None; everything else becomes compact JSON."""
    if value is None or isinstance(value, (str, int, float, bytes)):
        return value
    if isinstance(value, bool):
        return int(value)
    return json.dumps(value, separators=(",", ":"), ensure_ascii=False, default=str)
`,ee=`"""Where the prompts come from.

The two kinds of Auditomatic trial differ only here. A template trial expands
variables into a Cartesian product; a spreadsheet trial reads rows from a
Parquet file. Everything downstream -- requests, retries, storage, parsing,
export -- is identical, so it is written once and takes a task source.

A task source yields dicts with a stable \`\`task_id\`\`, the \`\`prompt\`\` to send,
and the \`\`context\`\` (variables or row values) recorded alongside the result.
"""
import itertools
import re

_PLACEHOLDER = re.compile(r"\\{\\{\\s*([^}]+?)\\s*\\}\\}")


def fill(template, values):
    """Substitute \`\`{{name}}\`\` placeholders, tolerating inner whitespace.

    A name that has no value substitutes nothing -- an empty spreadsheet cell
    arrives as \`\`None\`\` or as a float \`\`nan\`\`, and neither of those words
    belongs in a prompt.

    A name that is not a variable at all is left as-is rather than blanked, so a
    typo stays visible in the sent prompt instead of silently producing a
    truncated one.
    """
    def replace(match):
        key = match.group(1)
        if key not in values:
            return match.group(0)
        value = values[key]
        if value is None or (isinstance(value, float) and value != value):
            return ""
        return str(value)

    return _PLACEHOLDER.sub(replace, template)


class TemplateTasks:
    """Every combination of the configured variables, in declaration order.

    \`\`attributes\`\` is optional and positional: \`\`attributes[name][i]\`\` describes
    \`\`variables[name][i]\`\`. Those keys become \`\`attr_<variable>_<key>\`\` columns
    beside the value, which is what makes a list like "names labelled by
    perceived gender" analysable after the run. Indexing by position rather than
    by value keeps a repeated value from taking the wrong label.
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
            "attr_" + name + "_" + key
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
        indices = [range(len(values)) for values in value_lists]

        for combo_index, positions in enumerate(
            itertools.product(*indices) if names else [()]
        ):
            # Only the values are substituted into the prompt; the attributes
            # describe the run, they are not part of what was asked.
            values = {name: value_lists[i][p] for i, (name, p) in enumerate(zip(names, positions))}
            context = dict(values)
            for name, position in zip(names, positions):
                found = self._attributes_at(name, position)
                for key in keys.get(name, ()):
                    context["attr_" + name + "_" + key] = found.get(key)

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
`,te=Object.freeze({"auditomatic/__init__.py":W,"auditomatic/http.py":z,"auditomatic/store.py":Z,"auditomatic/tasks.py":ee,"auditomatic/parsing.py":K,"auditomatic/output.py":V,"auditomatic/runner.py":Q}),ne=Object.freeze(["httpx>=0.27.0","aiometer>=0.5.0","aiolimiter>=1.1.0","aiosqlite>=0.19.0","tenacity>=8.2.0","tqdm>=4.66.0","pandas>=2.0.0"]),P=[...ne],re={heading:"Optional dependencies for export formats",specs:["openpyxl>=3.1.0    # For Excel export (.xlsx)","pyarrow>=12.0.0    # For Parquet export (.parquet)"]},ae={heading:"Optional dependencies for export formats",specs:["openpyxl>=3.1.0    # For Excel export (.xlsx)"]},se="pyarrow>=12.0.0    # Reads data.parquet, and Parquet export",oe={heading:"Required by this trial's parser (JSON repair)",specs:["json-repair>=0.25.0"]};function ie(e){const t=e.renderer==="spreadsheet",n=[{heading:"Core dependencies (required)",specs:t?[...P,se]:P},t?ae:re];return le(e.parser)&&n.push(oe),n}function le(e){if(!e||e.type!=="python"||!e.config)return!1;const t=e.config.code;return typeof t=="string"&&/\bjson_repair\b/.test(t)}function pe(e){return e.flatMap(t=>t.specs.map(de))}function ue(e){return`# Auditomatic reproduction requirements
# Install with: pip install -r requirements.txt

${e.map(n=>`# ${n.heading}
${n.specs.join(`
`)}`).join(`

`)}
`}function de(e){return e.split("#")[0].trim().split(/[<>=!~\s[]/)[0]}class h extends Error{constructor(n,a){super(n);E(this,"trialId");this.trialId=a,this.name="ExperimentSourceError"}}function ce(e){const t=e.repeatCount||1;switch(e.type){case"template":return N(e,t);case"playground":if(e.templateConfig?.template)return N(e,t);throw new h("Python reproduction is available only for trials surfaced in the Trials UI. Create a multi-model trial from Playground to export it.",e.id);case"spreadsheet":return me(e,t);default:throw new h(`Cannot export this trial: unrecognized trial type "${e.type}".`,e.id)}}function N(e,t){const n=e.templateConfig;if(!n?.template)throw new h("Cannot export this trial: it is a template trial but carries no prompt template, so there is nothing to reproduce.",e.id);const a={},r={};for(const[s,o]of Object.entries(n.variables??{})){const i=fe(o);if(!i)continue;const l=he(i);l.length>0?(r[s]=l,a[s]=i.map(u=>({value:u.value,attributes:u.attributes??{}}))):a[s]=i.map(u=>u.value)}return{kind:"templated",promptTemplate:n.template,systemPromptTemplate:n.systemPrompt||void 0,variables:a,attributeKeys:r,repeatCount:t}}function me(e,t){const n=e.spreadsheetConfig;if(!n?.promptPattern)throw new h("Cannot export this trial: it is a spreadsheet trial but carries no prompt pattern, so there is nothing to reproduce.",e.id);if(!n.datasetId)throw new h("Cannot export this trial: it is a spreadsheet trial with no dataset reference, so the exported script would have no rows to run against.",e.id);return{kind:"dataset",promptPattern:n.promptPattern,systemPrompt:n.systemPrompt||void 0,datasetId:n.datasetId,repeatCount:t}}function fe(e){return"snapshot"in e&&e.snapshot?e.snapshot.items.map(t=>({value:t.value,attributes:t.attributes})):e.type==="value"&&e.values?e.values.map(t=>({value:t})):null}function he(e){const t=new Set;for(const n of e)if(n.attributes)for(const a of Object.keys(n.attributes))t.add(a);return Array.from(t).sort()}const _e="auditomatic-trial-spec",ye=1;function ge(e,t,n){const a=e.type==="spreadsheet"?e.spreadsheetConfig?.callOrder:e.templateConfig?.callOrder;return{schema:_e,version:ye,trial:{name:e.name,...e.description?{description:e.description}:{}},experiment:t.kind==="dataset"?be(t):Ee(t),configurations:e.configurations,execution:{repeatCount:t.repeatCount,callOrder:a??"interleaved"},...n?{parser:n}:{}}}function Ee(e){return{kind:"template",promptTemplate:e.promptTemplate,...e.systemPromptTemplate?{systemPromptTemplate:e.systemPromptTemplate}:{},variables:e.variables,attributeKeys:e.attributeKeys}}function be(e){return{kind:"dataset",promptPattern:e.promptPattern,...e.systemPrompt?{systemPrompt:e.systemPrompt}:{},dataset:{path:"data.parquet",format:"parquet"}}}function ve(e){const t={},n={};for(const[a,r]of Object.entries(e)){const s=r.map(o=>o&&typeof o=="object"&&"value"in o?o:{value:o,attributes:{}});t[a]=s.map(o=>o.value),s.some(o=>Object.keys(o.attributes??{}).length>0)&&(n[a]=s.map(o=>o.attributes??{}))}return{variables:t,attributes:n}}class xe{async generateProductionScript(t,n={}){const a=Date.now();p.debug("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:t,startTime:a});try{p.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:t});const r=await x.trials.get(t);if(!r)return{ok:!1,error:new f("GENERATION_FAILED",`Failed to load trial data: Trial with ID ${t} not found`,{trialId:t})};let s;try{s=ce(r)}catch(m){if(m instanceof h)return{ok:!1,error:new f("GENERATION_FAILED",m.message,{trialId:t})};throw m}p.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_PARSER",{trialId:t});let o;const i=this.getPrimaryParserId(r);if(r.parserSnapshot)o=q(r.parserSnapshot),p.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_FROM_SNAPSHOT",{parserId:o.id,parserName:o.name,parserType:o.type});else if(i){let m;try{o=await L.getParser(i)}catch(v){m=v}if(!o){p.warn("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOAD_FAILED",{parserId:i,error:m});const v=m instanceof Error?m.message:"parser not found";return{ok:!1,error:new f("GENERATION_FAILED",`This trial is configured to use parser "${i}", but it could not be loaded (${v}). Generating the script without it would change how responses are extracted and classified, so the export would not reproduce this trial.`,{trialId:t,parserId:i,originalError:m})}}p.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOADED",{parserId:i,parserName:o.name,parserType:o.type,unstackJson:o.unstackJson})}const l=s.kind==="dataset"?"spreadsheet":"template";p.debug("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{renderer:l,hasParser:!!o});const u=Date.now(),d=J({trial:r,parser:o,repeatCount:s.repeatCount,...s.kind==="dataset"?{dataset:{pattern:s.promptPattern},systemPrompt:s.systemPrompt}:{template:{text:s.promptTemplate,...ve(s.variables)},systemPrompt:s.systemPromptTemplate}});p.debug("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-u,codeLength:d.length,estimatedBytes:k(d)});const _=Date.now()-a,y=this.generateScriptFilename(r.name),w=ie({parser:o,renderer:l}),g={filename:y,mimeType:"text/x-python",data:d,metadata:{trialName:r.name,trialId:r.id,exportDate:new Date,callCount:0,fieldCount:0,format:"python",estimatedSizeBytes:k(d)},renderer:l,pythonVersion:"3.9",requiredPackages:pe(w),requirementsTxt:ue(w),trialSpec:ge(r,s,o),codeLength:d.length,generationTimeMs:_};return p.debug("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:t,renderer:l,filename:g.filename,codeLength:g.codeLength,generationTimeMs:g.generationTimeMs,requiredPackages:g.requiredPackages}),{ok:!0,value:g}}catch(r){const s=r instanceof Error?r:new Error(String(r));return p.debug("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",s,{trialId:t,generationTimeMs:Date.now()-a}),{ok:!1,error:new f("GENERATION_FAILED",`Python script generation failed: ${s.message}`,{trialId:t,options:n,originalError:r,generationTimeMs:Date.now()-a})}}}getPrimaryParserId(t){if(t.parserId)return t.parserId;if((t.type==="template"||t.type==="playground")&&t.templateConfig?.parserId)return t.templateConfig.parserId;if(t.type==="spreadsheet"&&t.spreadsheetConfig?.parserId)return t.spreadsheetConfig.parserId}generateScriptFilename(t){const n=t.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",r=new Date().toISOString().replace("T","_").replace(/:/g,"-").split(".")[0];return`${n}_reproduction_${r}.py`}}const we=new xe;class S extends Error{constructor(n,a,r){const s=r instanceof Error?`: ${r.message}`:"";super(`Cannot build this archive without ${n}. ${a}${s}`);E(this,"path");E(this,"reason");E(this,"cause");this.path=n,this.reason=a,this.cause=r,this.name="MissingRequiredEntryError"}}async function ke(e){const t=[],n=[];for(const a of e){let r=null,s;try{r=await a.produce()}catch(o){s=o}if(r==null){if(a.required)throw new S(a.path,a.requiredBecause??"It is a required part of this artifact.",s);p.warn("[artifact-composer] Skipping optional entry",{path:a.path,error:s});continue}t.push({path:a.path,data:r}),n.push(a.path)}return{entries:t,contents:n}}function Te(e,t){const n=new Date().toISOString();return`# Auditomatic Export Reproducibility Bundle

Trial Name: ${e}

Generated: ${n}

## What is in this bundle

- \`experiment.py\` - this trial as data: the models, the prompt, the variables,
the parser. Everything here is meant to be read and edited.
- \`auditomatic/\` - the runner \`experiment.py\` imports. It makes the requests,
retries them, stores results and writes the output. Keep it beside the script.
- \`requirements.txt\` - the packages to install
- \`trial-spec.json\` - versioned execution specification${t==="spreadsheet"?"\n- `data.parquet` - the dataset this trial ran over, one call per row":""}

## What running it produces

- \`results_YYYYMMDD_HHMMSS.db\` - a SQLite database, written as each call
returns. This is the record of the run; the file below is a rendering of it.
- \`results_YYYYMMDD_HHMMSS.csv\` - written at the end, or another format with
\`--output\`

---

${Re()}
`}function Re(){return'## Quick Start\n\n### 1. Install Dependencies\n\n```bash\npip install -r requirements.txt\n```\n\nPython 3.9 or newer.\n\n### 2. Set API Keys\n\nKeys are read from environment variables, never from this bundle. `experiment.py`\nlists the exact variable each model needs in its `api_key_env` field, and the\nscript checks them all before making any request:\n\n```bash\nexport OPENAI_API_KEY="sk-..."\n```\n\nIf a model needs no key -- a local Ollama endpoint, say -- its `api_key_env` is\n`None` and nothing is required for it.\n\n### 3. Run the Experiment\n\n```bash\npython experiment.py\n```\n\n---\n\n## Command-Line Options\n\n| Option                 | Default | Description |\n|------------------------|---------|------------------------------------------------------------------|\n| `--output` / `-o`      | `csv`   | Output format: `csv`, `tsv`, `json`, `jsonl`, `excel`, `parquet` |\n| `--concurrent` / `-c`  | `10`    | Simultaneous requests |\n| `--rate-limit` / `-r`  | `5.0`   | Requests per second, retries included |\n| `--timeout` / `-t`     | `90`    | Per-request timeout in seconds |\n| `--output-file` / `-f` | Auto    | Output filename |\n| `--resume`             | Off     | Continue the most recent run in this directory |\n| `--db-file`            | Auto    | Database to write or resume from |\n| `--max-retries`        | Script  | Override the retry count `experiment.py` sets (5) |\n| `--backoff-max`        | Script  | Override the backoff ceiling `experiment.py` sets (60s) |\n\n```bash\n# Faster, if the provider allows it\npython experiment.py --concurrent 20 --rate-limit 10.0\n\n# Gentler -- one request at a time, for a local model on a single GPU\npython experiment.py --concurrent 1 --rate-limit 1.0\n\n# Slow models\npython experiment.py --timeout 180\n\n# Another format\npython experiment.py --output excel --output-file my_results.xlsx\n```\n\nConcurrency is how many requests are in flight at once. The rate limit is how\nmany physical requests per second may leave the process, retries included.\n\n---\n\n## Reliability\n\n**Retries.** Every API-attempt failure is retried: network and timeout errors,\nany non-2xx response, invalid JSON, provider error envelopes (including an HTTP\n200 body carrying an `error` key), and a 2xx response with no answer in it.\nNothing else is -- a parser or programming error is a bug, and is raised rather\nthan attempted six times.\n\nThe default is 5 retries (so up to 6 attempts) with exponential backoff between\n1 and 60 seconds, jittered so a batch that fails together does not march through\nits retries in lockstep. Edit `RETRIES = RetryPolicy(...)` near the top of\n`experiment.py`, or override it for one run with `--max-retries`.\n\nA call that exhausts its retries is stored with `success = 0` and keeps its\nevidence: `http_status`, `response_headers`, `response_data` and `error`.\n\n**Storage.** Each result is written and committed as it arrives, so an\ninterrupted run keeps everything it already had.\n\n## Resuming\n\nPress Ctrl+C at any time, then:\n\n```bash\npython experiment.py --resume\n```\n\nThat continues the most recent `results_*.db` in this directory; pass\n`--db-file` to name a different one. Resuming skips calls that succeeded,\nretries calls that failed, and re-exports with the updated results.\n\n---\n\n## The results table\n\nOne row per (configuration, task). Every run has these columns:\n\n| Column | What it holds |\n|---|---|\n| `task_id` | Primary key: configuration plus combination/row and repeat |\n| `config_index` | Position in `MODELS` |\n| `model_name` | The model |\n| `display_name` | The model, disambiguated when one model appears twice |\n| `repeat_index` | Which repeat, when `REPEATS > 1` |\n| `prompt`, `system_prompt` | What was actually sent |\n| `success` | 1 or 0 |\n| `http_status`, `response_headers`, `response_data` | The response, in full |\n| `extracted` | The answer pulled out of it |\n| `reasoning` | Reasoning text, for models that return it separately |\n| `parsed` | The parser\'s output |\n| `error` | Why a failed call failed |\n| `duration_seconds` | Wall-clock time for the call |\n\nPlus, per trial:\n\n- one column per variable or dataset column, under its own name\n- `attr_<variable>_<key>` for values that carry attributes\n- `param_<name>` for each request parameter\n\nA dataset column whose name collides with one of the fixed columns above is\nprefixed `var_` rather than overwriting it.\n\n**Query examples:**\n\n```bash\nsqlite3 results_20250128_143022.db\n\n.schema results\n\n# What failed, and why\nSELECT display_name, http_status, error, COUNT(*)\nFROM results WHERE success = 0\nGROUP BY display_name, http_status, error;\n\n# Success rate per configuration\nSELECT display_name,\n     COUNT(*) AS total,\n     SUM(success) AS successful,\n     ROUND(100.0 * SUM(success) / COUNT(*), 1) AS success_rate\nFROM results GROUP BY display_name;\n\n.mode csv\n.output filtered_results.csv\nSELECT display_name, prompt, extracted, parsed FROM results WHERE success = 1;\n.quit\n```\n\n## Troubleshooting\n\n**Rate limits (429).** The run reports `Retry 2 <model>: HTTP 429 ...` and keeps\ngoing. If it happens constantly, lower `--rate-limit` and `--concurrent`.\n\n**`Could not extract answer. Tried: ...`** means the response arrived but not in\nthe shape this provider was recorded as using. Look at `response_data` for that\nrow and adjust `extract_paths` in `experiment.py`.\n\n**`PARSER_ERROR: ...`** in `parsed` means the response arrived and the parser\ncould not handle it. The call still counts as a success and `extracted` holds\nthe raw answer, so you can re-parse without re-running.\n\n**Timeouts.** Raise `--timeout`.\n'}class Ae{async exportReproductionBundle(t,n=!1){try{p.debug("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:t});const a=await x.trials.get(t);if(!a)return{ok:!1,error:new f("GENERATION_FAILED",`Failed to load trial: ${t}`)};const r=await we.generateProductionScript(t,{includeComments:!0});if(!r.ok)return{ok:!1,error:new f("GENERATION_FAILED",r.error?.message||"Failed to generate Python script")};const s=[{path:"experiment.py",required:!0,requiredBecause:"It is the script the bundle exists to deliver.",produce:()=>r.value.data},...Object.entries(te).map(([_,y])=>({path:_,required:!0,requiredBecause:"experiment.py imports the auditomatic package.",produce:()=>y})),{path:"trial-spec.json",required:!0,requiredBecause:"It is the versioned execution contract for this reproduction.",produce:()=>JSON.stringify(r.value.trialSpec,null,2)},...r.value.renderer==="spreadsheet"?[{path:"data.parquet",required:!0,requiredBecause:"experiment.py reads it in load_dataset() and cannot run without it.",produce:()=>this.generateDatasetParquet(a)}]:[],{path:"README.md",required:!0,requiredBecause:"It documents how to run the bundle.",produce:()=>Te(r.value.metadata.trialName,r.value.renderer)},{path:"requirements.txt",required:!0,requiredBecause:"Without it the script cannot be installed.",produce:()=>r.value.requirementsTxt}],{entries:o,contents:i}=await ke(s),l=await D(o,6,{confirmed:n}),u=new Date().toISOString().split("T")[0].replace(/-/g,""),d=`${r.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_reproduction_${u}.zip`;return{ok:!0,value:{blob:l,filename:d,sizeBytes:l.size,contents:i}}}catch(a){return a instanceof S?(p.warn("EXPORT_DEBUG: REPRO_BUNDLE INCOMPLETE",{trialId:t,path:a.path,cause:a.cause}),{ok:!1,error:new f("GENERATION_FAILED",a.message,{trialId:t,path:a.path})}):a instanceof j?{ok:!1,error:new f("CONFIRMATION_REQUIRED",a.message,{trialId:t,estimatedBytes:a.estimatedBytes,budgetBytes:a.budgetBytes})}:(p.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",a),{ok:!1,error:new f("GENERATION_FAILED",a instanceof Error?a.message:"Unknown error creating bundle")})}}async generateDatasetParquet(t){if(t.type!=="spreadsheet"||!t.spreadsheetConfig)throw new Error("trial is not a spreadsheet trial");const n=t.spreadsheetConfig.datasetId,a=await x.datasets.get(n);if(!a)throw new Error(`dataset ${n} no longer exists`);const{datasetParquetWriter:r}=await C(async()=>{const{datasetParquetWriter:o}=await import("./dataset-parquet-PqoPew_G.js");return{datasetParquetWriter:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),s=r.generate(a);return p.debug("EXPORT_DEBUG: Generated dataset parquet for bundle",{rows:a.rows.length,columns:a.columns.length,sizeBytes:s.byteLength}),s}}const Qe=new Ae;export{Qe as reproducibilityBundleService};
