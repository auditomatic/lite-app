const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dataset-parquet-BEtvCFE8.js","assets/dataset-export.service-HbOwhQe5.js","assets/tauri-download-utilities-C1tNTnLJ.js","assets/index-CGrTjF4W.js","assets/vue-vendor-DcSqTZq9.js","assets/ui-vendor-iylUQfBj.js","assets/utils-vendor-Cas5ee0B.js","assets/tauri-vendor-BdAyolxU.js","assets/index-DAZwm3uK.css","assets/data-vendor-CKwrMZHi.js"])))=>i.map(i=>d[i]);
var F=Object.defineProperty;var L=(s,e,t)=>e in s?F(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var P=(s,e,t)=>L(s,typeof e!="symbol"?e+"":e,t);import{R as O,l as u,d as S,C as M,c as q,_ as D}from"./index-CGrTjF4W.js";import{a as h,g as w}from"./ExportDataModal-BtMKu14N.js";import{a as k}from"./index-COmO4bbV.js";import{w as j,A as U}from"./bundle-container-BCDVSiVx.js";import"./vue-vendor-DcSqTZq9.js";import"./ui-vendor-iylUQfBj.js";import"./utils-vendor-Cas5ee0B.js";import"./tauri-vendor-BdAyolxU.js";import"./tauri-download-utilities-C1tNTnLJ.js";import"./dataset-operations-C3gO0wxf.js";import"./id-generator-Cv_Imc0S.js";import"./useCrossTab-CPejGGUl.js";import"./row-filters-DVNsrKUs.js";import"./dataset-export.service-HbOwhQe5.js";import"./data-vendor-CKwrMZHi.js";import"./ColumnFilterPanel-BGLdUdcd.js";import"./display-values-D3R-R7BQ.js";import"./sanitization-BzOBIkQW.js";import"./paged-table-reader-Cui7blz8.js";import"./api-call-bodies-CkJgzW7Z.js";import"./repository-DmzR8N6g.js";import"./repository-BIgMpKM_.js";const N="    ";function y(s,e=0){return s==null?"None":typeof s=="boolean"?s?"True":"False":typeof s=="number"?G(s):typeof s=="string"?JSON.stringify(s):Array.isArray(s)?B(s,e):typeof s=="object"?$(s,e):JSON.stringify(String(s))}function G(s){return Number.isFinite(s)?String(s):"None"}function B(s,e){if(s.length===0)return"[]";const t=N.repeat(e+1);return`[
${s.map(r=>`${t}${y(r,e+1)}`).join(`,
`)}
${N.repeat(e)}]`}function $(s,e){const t=Object.keys(s);if(t.length===0)return"{}";const a=N.repeat(e+1);return`{
${t.map(o=>`${a}${JSON.stringify(o)}: ${y(s[o],e+1)}`).join(`,
`)}
${N.repeat(e)}}`}const I=`# === JSON UNSTACKING FOR EXPORT ===
def discover_parsed_columns(records, prefix='parsed', max_depth=4):
    seen = {}

    def collect(obj, path_prefix, depth):
        for key, value in obj.items():
            path = (path_prefix + '.' + key) if path_prefix else key
            seen[prefix + '_' + path] = True
            if depth < max_depth and isinstance(value, dict):
                collect(value, path, depth + 1)

    for record in records:
        if isinstance(record, dict):
            collect(record, '', 1)
    return sorted(seen.keys())


def extract_parsed_cell(record, field_id, prefix='parsed'):
    if not isinstance(record, dict):
        return None
    value = record
    for key in field_id[len(prefix) + 1:].split('.'):
        if not isinstance(value, dict):
            return None
        value = value.get(key)
    if value is None:
        return None
    if isinstance(value, (dict, list)):
        return json.dumps(value, separators=(',', ':'), ensure_ascii=False)
    return value


def unstack_json_column(df, col_name):
    try:
        records = [
            json.loads(value)
            if value and value != 'null' and not str(value).startswith('PARSER_ERROR')
            else {}
            for value in df[col_name].tolist()
        ]
        columns = discover_parsed_columns(records, 'parsed')
        parsed_df = pd.DataFrame(
            {
                column: [extract_parsed_cell(record, column, 'parsed') for record in records]
                for column in columns
            },
            index=df.index,
            columns=columns
        )
        result = pd.concat([df.drop(col_name, axis=1), parsed_df], axis=1)
        print(f"  Unstacked {len(columns)} JSON fields")
        return result
    except Exception as error:
        print(f"WARN: JSON unstacking failed: {error}")
        return df`;class Y{getTemplate(){return{id:"production",name:"Production Script (Professional)",description:"Production-grade Python script with SQLite persistence, professional retries, progress bars, and multiple export formats. Best for research and large experiments.",pythonVersion:"3.8",templateCode:"PRODUCTION_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,t,a={}){const{includeComments:r=!0,parser:o}=a,n=a.experiment;if(!n)throw new Error("ProductionPythonTemplate requires a resolved experiment model");if(n.kind==="dataset")throw new Error("ProductionPythonTemplate cannot render a dataset-backed experiment; use ProductionSpreadsheetTemplate");const i=this.buildResolvedConfigurations(e,n),l=this.discoverParameterColumns(i);return[this.generateHeader(e,r),this.generateImports(o),this.generateSettings(n,r),this.generateParserConfig(o,r),this.generateParameterColumns(l,r),this.generateModelConfigs(i,r),this.generateSchemaComputation(r),this.generateDatabaseFunctions(l,o,r),this.generateParserFunctions(o),this.generateApiCallFunction(o,r),this.generateCliAndUtilities(r),this.generateExportFunction(o),this.generateMainFunction(n,r),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e,t){const a=[],r=new Map,o=new Map;for(const n of e.configurations){const i=n.modelSnapshot?.displayName||n.modelId;r.set(i,(r.get(i)||0)+1),o.set(i,0)}for(let n=0;n<e.configurations.length;n++){const i=e.configurations[n],l=i.providerSnapshot;if(!l)continue;const p=l.api?.baseUrl||"https://api.example.com",m=l.api?.endpoint||"/v1/api",_={"Content-Type":"application/json",...l.headers};l.auth?.type==="bearer"?_.Authorization="Bearer {{API_KEY}}":l.auth?.type==="header"&&l.auth.header&&(_[l.auth.header]="{{API_KEY}}");const f="@@AUDITOMATIC_PROMPT@@",E="@@AUDITOMATIC_SYSTEM@@",v=!!t.systemPromptTemplate,b=k(l,i.modelId,i.parameters||{},f,v?E:void 0),g=JSON.parse(JSON.stringify(b).split(f).join("{{PROMPT}}").split(E).join("{{SYSTEM_PROMPT}}")),c=i.provider.split("-")[0],d=i.modelSnapshot?.displayName||i.modelId;let R=d;if(r.get(d)>1){const A=o.get(d)+1;o.set(d,A),R=`${d} [Config ${A}]`}const T=this.getExtractPaths(i);a.push({config_index:n,name:d,display_name:R,provider:c,url:p+m,headers:_,body:g,parameters:i.parameters||{},extract_paths:T.contentPaths,reasoning_paths:T.reasoningPaths})}return a}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const a=t.responseModes?.text;if(!a)return{contentPaths:["response"],reasoningPaths:[]};const r=a.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const o=[];r.contentPath&&o.push(r.contentPath),r.fallbackPaths&&o.push(...r.fallbackPaths);const n=[];return r.reasoningPath&&n.push(r.reasoningPath),r.reasoningFallbackPaths&&n.push(...r.reasoningFallbackPaths),{contentPaths:o.length>0?o:["response"],reasoningPaths:n}}discoverParameterColumns(e){const t=new Set;for(const a of e)a.parameters&&Object.keys(a.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateParameterColumns(e,t){const a=t?`# All unique parameter names found across model configurations
# These become separate columns in the database for analysis
`:"",r=JSON.stringify(e);return`${a}PARAMETER_COLUMNS = ${r}`}generateHeader(e,t){const a="#!/usr/bin/env python3";return t?`${a}
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
  - Parser support (regex, Python) for structured extraction

Requirements: pip install -r requirements.txt

Usage:
  python experiment.py                                    # Run with defaults
  python experiment.py --output excel --concurrent 20     # Custom settings
  python experiment.py --resume --db-file results_*.db    # Resume previous run
"""`:a}generateImports(e){const t=`import asyncio
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
import re`;return e?.type==="regex"||e?.type==="python",t}generateSettings(e,t){const a=t?`# ============================================================================
# EXPERIMENT CONFIGURATION
# ============================================================================
# Define what we're testing: prompt template, variables, and repetitions.
# The script will generate all combinations (Cartesian product) and test each
# combination REPEAT_COUNT times with each model.

`:"";let r=this.renderTemplatedSettings(e,t);const o=t?"  # Number of times to repeat each unique prompt (for measuring variance)":"";return r+=`

REPEAT_COUNT = ${e.repeatCount}${o}`,`${a}${r}`}renderTemplatedSettings(e,t){const a=t?`# Variables support two formats:
# 1. Simple: ["value1", "value2", ...]
# 2. Attributed: [{"value": "val", "attributes": {...}}, ...]
#    Attributes are tracked as separate columns in the database for analysis
`:"";let r=`PROMPT_TEMPLATE = ${JSON.stringify(e.promptTemplate)}`;return e.systemPromptTemplate&&(r+=`
SYSTEM_PROMPT_TEMPLATE = ${JSON.stringify(e.systemPromptTemplate)}`),r+=`

${a}VARIABLES = ${y(e.variables)}`,Object.keys(e.attributeKeys).length>0&&(r+=`

ATTRIBUTE_KEYS = ${y(e.attributeKeys)}`),r}generateParserConfig(e,t){if(!e)return null;const a=t?`
# Parser configuration - extracts structured data from raw model responses
# Supports: "regex", "python"
# If unstack_json=True, JSON output is flattened into separate columns on export
`:`
`,r={id:e.id,name:e.name,type:e.type,output_type:e.outputType,unstack_json:e.unstackJson||!1,config:e.config},o=y(r);return`${a}PARSER_CONFIG = ${o}`}generateModelConfigs(e,t){const a=t?`
# Model configurations define:
# - API endpoint and authentication
# - Request body structure (with {{PROMPT}} and {{API_KEY}} placeholders)
# - Parameters (temperature, max_tokens, etc.)
# - Extract paths (dotted/bracket paths to find content in response JSON)
# - Reasoning paths (optional, for chain-of-thought extraction)
`:"",r=e.map(n=>({config_index:n.config_index,name:n.name,display_name:n.display_name,provider:n.provider,url:n.url,headers:n.headers,body:n.body,parameters:n.parameters,extract_paths:n.extract_paths,reasoning_paths:n.reasoning_paths})),o=y(r);return`${a}MODELS = ${o}`}generateSchemaComputation(e){return`${e?`# ============================================================================
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
counter_lock = None  # Initialized in main() to avoid event loop issues`}generateDatabaseFunctions(e,t,a){return`${a?`# ============================================================================
# DATABASE FUNCTIONS
# ============================================================================

`:""}async def setup_database():
${a?`    """
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
${a?`    """Check if task already completed successfully (for resume functionality).

    Returns True only if the task exists AND succeeded.
    Failed tasks will be retried on resume.
    """`:'    """Check if task completed successfully."""'}
    cursor = await db.execute('SELECT success FROM results WHERE id = ?', (task_id,))
    try:
        result = await cursor.fetchone()
    finally:
        await cursor.close()
    return result is not None and result[0]


async def save_result(db, task_id, model_config, repeat_index, prompt, variable_values,
                      variable_attributes, request_payload, response, extracted, reasoning,
                      parsed, success, error):
${a?`    """
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
    await db.commit()`}generateParserFunctions(e){if(!e)return null;let t="";switch(e.type){case"regex":t=this.generateRegexParserFunction(e.config);break;case"python":t=this.generatePythonParserFunction(e.config);break}const a=this.generateSimplifiedParserDispatcher(e.type);return`# ============================================================================
# PARSER FUNCTIONS
# ============================================================================
# Parser extracts structured data from raw model responses.
${`# This trial uses a ${e.type} parser.`}

${t}

${a}`}generateRegexParserFunction(e){return`${O}

def apply_regex_parser(content):
    """Apply the trial's regex parser."""
    try:
        cfg = PARSER_CONFIG["config"]
        result = apply_regex(
            content,
            cfg["pattern"],
            cfg.get("flags") or "",
            cfg.get("captureGroup")
        )
        if result is not None and PARSER_CONFIG["output_type"] == "json":
            try:
                return json.loads(result)
            except Exception:
                return result
        return result
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
            if isinstance(parsed, (dict, list)):
                parsed = json.dumps(parsed, separators=(',', ':'))
            elif isinstance(parsed, bool):
                parsed = 'true' if parsed else 'false'
            elif isinstance(parsed, float) and parsed.is_integer():
                parsed = str(int(parsed))
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

${I}
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
        print(f"Database read failed: {e}")`}generateMainFunction(e,t){return`${t?`# ============================================================================
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
        ${t?`        # Extract values (handle both simple and attributed formats)
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
                tasks.append((task_id, model, repeat_idx, prompt, variable_values, variable_attributes, system_prompt))

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
    await cursor.close()

    print(f"\\nDatabase: {db_file}")
    print("  Query: SELECT * FROM results WHERE success = 0;")

    await db.close()

    # Export
    output_file = get_output_filename(args, db_file)
    await export_results(db_file, args.output, output_file)`}generateExecutor(){return`

if __name__ == "__main__":
    asyncio.run(main())`}}class z{getTemplate(){return{id:"production-spreadsheet",name:"Production Script (Spreadsheet)",description:"Production-grade Python script for spreadsheet trials. Reads dataset from parquet file with SQLite persistence, professional retries, and progress tracking.",pythonVersion:"3.8",templateCode:"PRODUCTION_SPREADSHEET_TEMPLATE",supportsAnalysis:!0,supportsVisualization:!1}}generateScript(e,t,a={}){const r=a.experiment;if(!r)throw new Error("ProductionSpreadsheetTemplate requires a resolved experiment model");if(r.kind!=="dataset")throw new Error("ProductionSpreadsheetTemplate requires a dataset-backed experiment");const{includeComments:o=!0,parser:n}=a,{promptPattern:i,systemPrompt:l}=r,p=this.buildResolvedConfigurations(e),m=this.discoverParameterColumns(p);return[this.generateHeader(e,o),this.generateImports(n),this.generateSettings(i,l,r.repeatCount,o),this.generateParserConfig(n,o),this.generateParameterColumns(m,o),this.generateModelConfigs(p,o),this.generateDatasetLoading(o),this.generatePromptBuilder(o),this.generateDatabaseFunctions(m,n),this.generateParserFunctions(n),this.generateApiCallFunction(n),this.generateMainFunction(e),this.generateExportFunction(n),this.generateExecutor()].filter(Boolean).join(`

`)}buildResolvedConfigurations(e){const t=[],a=new Map,r=new Map;for(const o of e.configurations){const n=o.modelSnapshot?.displayName||o.modelId;a.set(n,(a.get(n)||0)+1),r.set(n,0)}for(let o=0;o<e.configurations.length;o++){const n=e.configurations[o],i=n.providerSnapshot;if(!i)continue;const l=i.api?.baseUrl||"https://api.example.com",p=i.api?.endpoint||"/v1/api",m={"Content-Type":"application/json",...i.headers};i.auth?.type==="bearer"?m.Authorization="Bearer {{API_KEY}}":i.auth?.type==="header"&&i.auth.header&&(m[i.auth.header]="{{API_KEY}}");const _="@@AUDITOMATIC_PROMPT@@",f="@@AUDITOMATIC_SYSTEM@@",E=!!e.spreadsheetConfig?.systemPrompt,v=k(i,n.modelId,n.parameters||{},_,E?f:void 0),b=JSON.parse(JSON.stringify(v).split(_).join("{{PROMPT}}").split(f).join("{{SYSTEM_PROMPT}}")),g=n.provider.split("-")[0],c=n.modelSnapshot?.displayName||n.modelId;let d=c;if(a.get(c)>1){const T=r.get(c)+1;r.set(c,T),d=`${c} [Config ${T}]`}const R=this.getExtractPaths(n);t.push({config_index:o,name:c,display_name:d,provider:g,url:l+p,headers:m,body:b,parameters:n.parameters||{},extract_paths:R.contentPaths,reasoning_paths:R.reasoningPaths})}return t}getExtractPaths(e){const t=e.providerSnapshot;if(!t)return{contentPaths:["response"],reasoningPaths:[]};const a=t.responseModes?.text;if(!a)return{contentPaths:["response"],reasoningPaths:[]};const r=a.responseTransform;if(!r)return{contentPaths:["response"],reasoningPaths:[]};const o=[];r.contentPath&&o.push(r.contentPath),r.fallbackPaths&&o.push(...r.fallbackPaths);const n=[];return r.reasoningPath&&n.push(r.reasoningPath),r.reasoningFallbackPaths&&n.push(...r.reasoningFallbackPaths),{contentPaths:o.length>0?o:["response"],reasoningPaths:n}}discoverParameterColumns(e){const t=new Set;for(const a of e)a.parameters&&Object.keys(a.parameters).forEach(r=>t.add(r));return Array.from(t).sort()}generateHeader(e,t){const a="#!/usr/bin/env python3";return t?`${a}
"""
Production API Testing Script (Spreadsheet Mode)
Reads dataset from data.parquet file
Requirements: pip install httpx aiometer aiosqlite tenacity tqdm pandas
"""`:a}generateImports(e){const t=`import asyncio
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
import re`;return e?.type==="regex"||e?.type==="python",t}generateSettings(e,t,a,r){let n=`${r?`# === EXPERIMENT CONFIGURATION ===
`:""}PROMPT_PATTERN = ${JSON.stringify(e)}`;return t&&(n+=`
SYSTEM_PROMPT_PATTERN = ${JSON.stringify(t)}`),n+=`
REPEAT_COUNT = ${a}  # Number of times to repeat each row`,n}generateParserConfig(e,t){if(!e)return null;const a=t?`
# === PARSER CONFIGURATION ===
# Frozen snapshot of the parser as it ran for this trial (captured at trial creation).
`:`
`,r={id:e.id,name:e.name,type:e.type,output_type:e.outputType,unstack_json:e.unstackJson||!1,config:e.config},o=y(r);return`${a}PARSER_CONFIG = ${o}`}generateParameterColumns(e,t){const a=t?`# === DISCOVERED PARAMETERS ===
# These are all unique parameters found across model configurations
`:"",r=JSON.stringify(e);return`${a}PARAMETER_COLUMNS = ${r}`}generateModelConfigs(e,t){const a=t?`
# === MODELS TO TEST ===
`:"",r=y(e);return`${a}MODELS = ${r}`}generateDatasetLoading(e){return`${e?`# === LOAD DATASET ===
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
    return prompt`}generateDatabaseFunctions(e,t){let a="";return t&&(t.unstackJson?a=`,
            parsed_json TEXT`:a=`,
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
            reasoning TEXT${a},
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
    try:
        result = await cursor.fetchone()
    finally:
        await cursor.close()
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
            if isinstance(parsed, (dict, list)):
                parsed = json.dumps(parsed, separators=(',', ':'))
            elif isinstance(parsed, bool):
                parsed = 'true' if parsed else 'false'
            elif isinstance(parsed, float) and parsed.is_integer():
                parsed = str(int(parsed))
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
    await cursor.close()

    print(f"\\nStats: View results: sqlite3 {db_file}")
    print("   Example: SELECT * FROM results WHERE success = 0;")

    await db.close()

    # Export results to specified format
    output_file = get_output_filename(args, db_file)
    await export_results(db_file, args.output, output_file)`}generateParserFunctions(e){if(!e)return null;const t=[];switch(e.type){case"regex":t.push(this.generateRegexParserFunction(e.config));break;case"python":t.push(this.generatePythonParserFunction(e.config));break}return t.push(this.generateBaseParserFunction()),t.join(`

`)}generateRegexParserFunction(e){return`${O}

def apply_regex_parser(content):
    """Apply the trial's regex parser."""
    try:
        cfg = PARSER_CONFIG["config"]
        result = apply_regex(
            content,
            cfg["pattern"],
            cfg.get("flags") or "",
            cfg.get("captureGroup")
        )
        if result is not None and PARSER_CONFIG["output_type"] == "json":
            try:
                return json.loads(result)
            except Exception:
                return result
        return result
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
        return f"PARSER_ERROR: {str(e)[:200]}"`}generateExportFunction(e){return e?.unstackJson?I:null}generateExecutor(){return`# === RUN IT ===
if __name__ == "__main__":
    asyncio.run(main())`}}const X=["httpx>=0.24.0","aiometer>=0.5.0","aiosqlite>=0.19.0","tenacity>=8.2.0","tqdm>=4.65.0","pandas>=2.0.0"],J={heading:"Optional dependencies for export formats",specs:["openpyxl>=3.1.0    # For Excel export (.xlsx)","pyarrow>=12.0.0    # For Parquet export (.parquet)"]},K={heading:"Required by this trial's parser (JSON repair)",specs:["json-repair>=0.25.0"]};function H(s){const e=[{heading:"Core dependencies (required)",specs:X},J];return V(s.parser)&&e.push(K),e}function V(s){if(!s||s.type!=="python"||!s.config)return!1;const e=s.config.code;return typeof e=="string"&&/\bjson_repair\b/.test(e)}function W(s){return s.flatMap(e=>e.specs.map(Z))}function Q(s){return`# Auditomatic reproduction requirements
# Install with: pip install -r requirements.txt

${s.map(t=>`# ${t.heading}
${t.specs.join(`
`)}`).join(`

`)}
`}function Z(s){return s.split("#")[0].trim().split(/[<>=!~\s[]/)[0]}class x extends Error{constructor(t,a){super(t);P(this,"trialId");this.trialId=a,this.name="ExperimentSourceError"}}function ee(s){const e=s.repeatCount||1;switch(s.type){case"template":return te(s,e);case"spreadsheet":return re(s,e);case"playground":throw new x("Python reproduction is available only for trials surfaced in the Trials UI. Create a multi-model trial from Playground to export it.",s.id);default:throw new x(`Cannot export this trial: unrecognized trial type "${s.type}".`,s.id)}}function te(s,e){const t=s.templateConfig;if(!t?.template)throw new x("Cannot export this trial: it is a template trial but carries no prompt template, so there is nothing to reproduce.",s.id);const a={},r={};for(const[o,n]of Object.entries(t.variables??{})){const i=ae(n);if(!i)continue;const l=se(i);l.length>0?(r[o]=l,a[o]=i.map(p=>({value:p.value,attributes:p.attributes??{}}))):a[o]=i.map(p=>p.value)}return{kind:"templated",promptTemplate:t.template,systemPromptTemplate:t.systemPrompt||void 0,variables:a,attributeKeys:r,repeatCount:e}}function re(s,e){const t=s.spreadsheetConfig;if(!t?.promptPattern)throw new x("Cannot export this trial: it is a spreadsheet trial but carries no prompt pattern, so there is nothing to reproduce.",s.id);if(!t.datasetId)throw new x("Cannot export this trial: it is a spreadsheet trial with no dataset reference, so the exported script would have no rows to run against.",s.id);return{kind:"dataset",promptPattern:t.promptPattern,systemPrompt:t.systemPrompt||void 0,datasetId:t.datasetId,repeatCount:e}}function ae(s){return"snapshot"in s&&s.snapshot?s.snapshot.items.map(e=>({value:e.value,attributes:e.attributes})):s.type==="value"&&s.values?s.values.map(e=>({value:e})):null}function se(s){const e=new Set;for(const t of s)if(t.attributes)for(const a of Object.keys(t.attributes))e.add(a);return Array.from(e).sort()}const ne="auditomatic-trial-spec",oe=1;function ie(s,e,t){const a=s.type==="spreadsheet"?s.spreadsheetConfig?.callOrder:s.templateConfig?.callOrder;return{schema:ne,version:oe,trial:{name:s.name,...s.description?{description:s.description}:{}},experiment:e.kind==="dataset"?ce(e):le(e),configurations:s.configurations,execution:{repeatCount:e.repeatCount,callOrder:a??"interleaved"},...t?{parser:t}:{}}}function le(s){return{kind:"template",promptTemplate:s.promptTemplate,...s.systemPromptTemplate?{systemPromptTemplate:s.systemPromptTemplate}:{},variables:s.variables,attributeKeys:s.attributeKeys}}function ce(s){return{kind:"dataset",promptPattern:s.promptPattern,...s.systemPrompt?{systemPrompt:s.systemPrompt}:{},dataset:{path:"data.parquet",format:"parquet"}}}class pe{async generateProductionScript(e,t={}){const a=Date.now();u.debug("EXPORT_DEBUG: PYTHON_GENERATION START",{trialId:e,startTime:a});try{u.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_TRIAL",{trialId:e});const r=await S.trials.get(e);if(!r)return{ok:!1,error:new h("GENERATION_FAILED",`Failed to load trial data: Trial with ID ${e} not found`,{trialId:e})};let o;try{o=ee(r)}catch(c){if(c instanceof x)return{ok:!1,error:new h("GENERATION_FAILED",c.message,{trialId:e})};throw c}u.debug("EXPORT_DEBUG: PYTHON_GENERATION LOADING_PARSER",{trialId:e});let n;const i=this.getPrimaryParserId(r);if(r.parserSnapshot)n=M(r.parserSnapshot),u.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_FROM_SNAPSHOT",{parserId:n.id,parserName:n.name,parserType:n.type});else if(i){let c;try{n=await q.getParser(i)}catch(d){c=d}if(!n){u.warn("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOAD_FAILED",{parserId:i,error:c});const d=c instanceof Error?c.message:"parser not found";return{ok:!1,error:new h("GENERATION_FAILED",`This trial is configured to use parser "${i}", but it could not be loaded (${d}). Generating the script without it would change how responses are extracted and classified, so the export would not reproduce this trial.`,{trialId:e,parserId:i,originalError:c})}}u.debug("EXPORT_DEBUG: PYTHON_GENERATION PARSER_LOADED",{parserId:i,parserName:n.name,parserType:n.type,unstackJson:n.unstackJson})}const l=o.kind==="dataset"?"spreadsheet":"template",p=l==="spreadsheet"?new z:new Y,m=p.getTemplate();u.debug("EXPORT_DEBUG: PYTHON_GENERATION GENERATING_SCRIPT",{renderer:l,hasParser:!!n});const _=Date.now(),f=p.generateScript(r,[],{includeComments:t.includeComments!==!1,parser:n,experiment:o});u.debug("EXPORT_DEBUG: PYTHON_GENERATION SCRIPT_GENERATED",{durationMs:Date.now()-_,codeLength:f.length,estimatedBytes:w(f)});const E=Date.now()-a,v=this.generateScriptFilename(r.name),b=H({parser:n}),g={filename:v,mimeType:"text/x-python",data:f,metadata:{trialName:r.name,trialId:r.id,exportDate:new Date,callCount:0,fieldCount:0,format:"python",estimatedSizeBytes:w(f)},renderer:l,pythonVersion:m.pythonVersion,requiredPackages:W(b),requirementsTxt:Q(b),trialSpec:ie(r,o,n),codeLength:f.length,generationTimeMs:E};return u.debug("EXPORT_DEBUG: PYTHON_GENERATION SUCCESS",{trialId:e,renderer:l,filename:g.filename,codeLength:g.codeLength,generationTimeMs:g.generationTimeMs,requiredPackages:g.requiredPackages}),{ok:!0,value:g}}catch(r){const o=r instanceof Error?r:new Error(String(r));return u.debug("EXPORT_DEBUG: PYTHON_GENERATION UNEXPECTED_ERROR",o,{trialId:e,generationTimeMs:Date.now()-a}),{ok:!1,error:new h("GENERATION_FAILED",`Python script generation failed: ${o.message}`,{trialId:e,options:t,originalError:r,generationTimeMs:Date.now()-a})}}}getPrimaryParserId(e){if(e.parserId)return e.parserId;if(e.type==="template"&&e.templateConfig?.parserId)return e.templateConfig.parserId;if(e.type==="spreadsheet"&&e.spreadsheetConfig?.parserId)return e.spreadsheetConfig.parserId}generateScriptFilename(e){const t=e.replace(/[^a-zA-Z0-9\s-_]/g,"").replace(/\s+/g,"_").toLowerCase().substring(0,30).replace(/^_+|_+$/g,"")||"trial",r=new Date().toISOString().replace("T","_").replace(/:/g,"-").split(".")[0];return`${t}_reproduction_${r}.py`}}const ue=new pe;class C extends Error{constructor(t,a,r){const o=r instanceof Error?`: ${r.message}`:"";super(`Cannot build this archive without ${t}. ${a}${o}`);P(this,"path");P(this,"reason");P(this,"cause");this.path=t,this.reason=a,this.cause=r,this.name="MissingRequiredEntryError"}}async function de(s){const e=[],t=[];for(const a of s){let r=null,o;try{r=await a.produce()}catch(n){o=n}if(r==null){if(a.required)throw new C(a.path,a.requiredBecause??"It is a required part of this artifact.",o);u.warn("[artifact-composer] Skipping optional entry",{path:a.path,error:o});continue}e.push({path:a.path,data:r}),t.push(a.path)}return{entries:e,contents:t}}class me{async exportReproductionBundle(e,t=!1){try{u.debug("EXPORT_DEBUG: REPRO_BUNDLE START",{trialId:e});const a=await S.trials.get(e);if(!a)return{ok:!1,error:new h("GENERATION_FAILED",`Failed to load trial: ${e}`)};const r=await ue.generateProductionScript(e,{includeComments:!0});if(!r.ok)return{ok:!1,error:new h("GENERATION_FAILED",r.error?.message||"Failed to generate Python script")};const o=[{path:"experiment.py",required:!0,requiredBecause:"It is the script the bundle exists to deliver.",produce:()=>r.value.data},...(r.value.auxiliaryFiles||[]).map(_=>({path:_.filename,required:!0,requiredBecause:"experiment.py imports it.",produce:()=>_.data})),{path:"trial-spec.json",required:!0,requiredBecause:"It is the versioned execution contract for this reproduction.",produce:()=>JSON.stringify(r.value.trialSpec,null,2)},...r.value.renderer==="spreadsheet"?[{path:"data.parquet",required:!0,requiredBecause:"experiment.py reads it in load_dataset() and cannot run without it.",produce:()=>this.generateDatasetParquet(a)}]:[],{path:"README.md",required:!0,requiredBecause:"It documents how to run the bundle.",produce:()=>this.generateReadme(r.value.metadata.trialName)},{path:"requirements.txt",required:!0,requiredBecause:"Without it the script cannot be installed.",produce:()=>r.value.requirementsTxt}],{entries:n,contents:i}=await de(o),l=await j(n,6,{confirmed:t}),p=new Date().toISOString().split("T")[0].replace(/-/g,""),m=`${r.value.metadata.trialName.replace(/[^a-zA-Z0-9_-]/g,"_")}_reproduction_${p}.zip`;return{ok:!0,value:{blob:l,filename:m,sizeBytes:l.size,contents:i}}}catch(a){return a instanceof C?(u.warn("EXPORT_DEBUG: REPRO_BUNDLE INCOMPLETE",{trialId:e,path:a.path,cause:a.cause}),{ok:!1,error:new h("GENERATION_FAILED",a.message,{trialId:e,path:a.path})}):a instanceof U?{ok:!1,error:new h("CONFIRMATION_REQUIRED",a.message,{trialId:e,estimatedBytes:a.estimatedBytes,budgetBytes:a.budgetBytes})}:(u.error("EXPORT_DEBUG: REPRO_BUNDLE ERROR",a),{ok:!1,error:new h("GENERATION_FAILED",a instanceof Error?a.message:"Unknown error creating bundle")})}}generateReadme(e){const t=new Date().toISOString();return`# Auditomatic Export Reproducibility Bundle

Trial Name: ${e}

Generated: ${t}

## Contents of the ZIP bundle
- \`requirements.txt\` - for installing python package dependencies
- \`experiment.py\` - Python script to reproduce/re-run the experiment, without needing web/desktop Auditomatic app
- \`trial-spec.json\` - versioned execution specification
- \`data.parquet\` - original input dataset (spreadsheet trials only)

## experiment.py will generate:
- \`results_YYYYMMDD_HHMMSS.db\` - sqlite3 db for storing results and managing execution
- \`results_YYYYMMDD_HHMMSS.csv\` - generated by default after trial is complete


---

${this.generateProductionReadme()}
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
`}async generateDatasetParquet(e){if(e.type!=="spreadsheet"||!e.spreadsheetConfig)throw new Error("trial is not a spreadsheet trial");const t=e.spreadsheetConfig.datasetId,a=await S.datasets.get(t);if(!a)throw new Error(`dataset ${t} no longer exists`);const{datasetParquetWriter:r}=await D(async()=>{const{datasetParquetWriter:n}=await import("./dataset-parquet-BEtvCFE8.js");return{datasetParquetWriter:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),o=r.generate(a);return u.debug("EXPORT_DEBUG: Generated dataset parquet for bundle",{rows:a.rows.length,columns:a.columns.length,sizeBytes:o.byteLength}),o}}const qe=new me;export{qe as reproducibilityBundleService};
