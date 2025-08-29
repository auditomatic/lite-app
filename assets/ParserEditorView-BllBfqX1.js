import{f as G,c as b,d as O,R as g,Y as _,k as a,S as l,Z as o,G as y,F as M,W as q,V as T,a1 as le,o as ue,X as ie,u as s,$ as L,_ as $}from"./vue-vendor-DPw1dQYc.js";import{u as ce}from"./parser.store-BuY_4ma9.js";import{b as X,j as U}from"./index-Cm3YP0q9.js";import{G as A,a4 as Y,ah as de,ai as pe,aj as Z,ak as H,al as W,J as me,N as D,ab as _e,ac as fe,n as ve,ad as ge,ae as ye,O as he,a7 as xe,a5 as Ce,a6 as be,H as we,af as Pe,ag as Ve}from"./ui-vendor-IRGmExUJ.js";import{C as K}from"./CodeEditorWrapper-DeDt-fvf.js";import{P as Ne}from"./ParserTestSectionCompact-B74lITKE.js";import"./utils-vendor-B76-F3_P.js";import"./tauri-vendor-1uBLmS9u.js";function ke(F){const w=ce(),e=G({name:"",description:"",type:"regex",outputType:"text",tags:[],regexPattern:"",regexFlags:"",regexCaptureGroup:1,javascriptCode:`// Return extracted value
return content`,javascriptTimeout:1e4,pythonCode:`def extract_data(content):
    """Extract data from content."""
    return content`,pythonFunctionName:"extract_data",pythonTimeout:1e4,testCases:[]}),i=G(null),t=G(!1),h=G(!1),S=b(()=>{switch(e.value.type){case"regex":return{pattern:e.value.regexPattern,flags:e.value.regexFlags,captureGroup:e.value.regexCaptureGroup};case"javascript":return{code:e.value.javascriptCode,timeout:e.value.javascriptTimeout};case"python":return{code:e.value.pythonCode,functionName:e.value.pythonFunctionName,timeout:e.value.pythonTimeout};default:throw new Error(`Unknown parser type: ${e.value.type}`)}}),j=b(()=>({name:e.value.name.trim(),description:e.value.description?.trim()||void 0,type:e.value.type,config:S.value,outputType:e.value.outputType,testCases:e.value.testCases||[],isBuiltIn:!1,isPublic:!1,tags:e.value.tags.filter(n=>n.trim()).map(n=>n.trim())}));function x(){if(!e.value.regexPattern)return i.value=null,!0;try{return new RegExp(e.value.regexPattern,e.value.regexFlags),i.value=null,!0}catch(n){return i.value=n instanceof Error?n.message:"Invalid pattern",!1}}const p=b(()=>{if(!e.value.name.trim())return!1;switch(e.value.type){case"regex":return!!e.value.regexPattern&&!i.value;case"javascript":return!!e.value.javascriptCode;case"python":return!!e.value.pythonCode&&!!e.value.pythonFunctionName;default:return!1}}),d=G(!1);async function k(n){h.value=!0;try{w.parsers.length===0&&await w.loadParsers();const u=w.parsers.find(v=>v.id===n);if(!u)throw new Error("Parser not found");if(d.value=u.isBuiltIn||!1,e.value.name=u.isBuiltIn?`${u.name} (Copy)`:u.name,e.value.description=u.description||"",e.value.type=u.type,e.value.outputType=u.outputType,e.value.tags=u.tags||[],e.value.testCases=(u.testCases||[]).map(v=>({...v,hasRun:v.output!==void 0})),u.type==="regex"){const v=u.config;e.value.regexPattern=v.pattern||"",e.value.regexFlags=v.flags||"",e.value.regexCaptureGroup=v.captureGroup||1}else if(u.type==="javascript"){const v=u.config;e.value.javascriptCode=v.code||"",e.value.javascriptTimeout=v.timeout||1e4}else if(u.type==="python"){const v=u.config;e.value.pythonCode=v.code||"",e.value.pythonFunctionName=v.functionName||"extract_data",e.value.pythonTimeout=v.timeout||1e4}return u}finally{h.value=!1}}async function f(){if(!p.value)throw new Error("Please fill in all required fields");t.value=!0;try{const n=j.value,u=await X.validate(n);if(!u.valid)throw new Error(u.errors?.join(", ")||"Invalid parser configuration");return d.value?await w.createParser(n):F?.value?await w.updateParser(F.value,n):await w.createParser(n)}finally{t.value=!1}}function m(n){switch(e.value.type=n,n){case"regex":e.value.regexPattern||(e.value.regexCaptureGroup=1);break;case"javascript":e.value.javascriptCode||(e.value.javascriptCode=`// Return extracted value
return content`,e.value.javascriptTimeout=1e4);break;case"python":e.value.pythonCode||(e.value.pythonCode=`def extract_data(content):
    """Extract data from content."""
    return content`,e.value.pythonFunctionName="extract_data",e.value.pythonTimeout=1e4);break}}async function C(n){const u={...j.value,id:"temp-test",created:new Date,updated:new Date};return await X.executeParser(n,u)}function P(n,u,v){e.value.testCases.push({name:`Test Case ${e.value.testCases.length+1}`,input:n,output:u,expected:v,hasRun:!0,createdAt:new Date})}function V(n){e.value.testCases.splice(n,1)}return{form:e,patternError:i,saving:t,loading:h,isEditingBuiltIn:d,currentConfig:S,currentParser:j,isValid:p,validateRegexPattern:x,loadParser:k,save:f,setTypeDefaults:m,testParser:C,addTestCase:P,removeTestCase:V}}const Ee={class:"regex-config-editor"},Te={class:"form-row"},Se={class:"pattern-helpers"},je=["onClick"],Fe={class:"helper-name"},$e={class:"helper-pattern"},Re={class:"helper-description"},ze=O({__name:"RegexConfigEditor",props:{modelValue:{},error:{}},emits:["update:modelValue","validate"],setup(F,{emit:w}){const e=F,i=w,t=b({get:()=>e.modelValue.pattern,set:f=>i("update:modelValue",{...e.modelValue,pattern:f})}),h=b({get:()=>e.modelValue.flags,set:f=>i("update:modelValue",{...e.modelValue,flags:f})}),S=b({get:()=>e.modelValue.captureGroup,set:f=>i("update:modelValue",{...e.modelValue,captureGroup:f})}),j=b({get:()=>h.value.split("").filter(f=>f),set:f=>{h.value=f.join("")}}),x=b(()=>e.error),p=[{name:"First Number",pattern:"(\\d+(?:\\.\\d+)?)",description:"Captures first integer or decimal"},{name:"Score Pattern",pattern:"(?:score|grade|result)\\s*:?\\s*(\\d+)",description:"Number after score/grade keywords"},{name:"Percentage",pattern:"(\\d+(?:\\.\\d+)?)\\s*%",description:"Captures percentage values"},{name:"Yes/No",pattern:"\\b(yes|no)\\b",description:"Matches yes or no (case insensitive with i flag)"},{name:"Email",pattern:"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})",description:"Captures email addresses"}];function d(){i("validate")}function k(f){t.value=f.pattern,f.name==="Yes/No"&&!h.value.includes("i")&&(h.value+="i"),d()}return(f,m)=>{const C=Y,P=A,V=pe,n=de,u=Z,v=W,I=H;return _(),g("div",Ee,[a(P,{label:"Pattern",validateStatus:x.value?"error":"",help:x.value,rules:[{required:!0,message:"Pattern is required"}]},{default:o(()=>[a(C,{value:t.value,"onUpdate:value":m[0]||(m[0]=E=>t.value=E),placeholder:"Enter regex pattern (e.g., (\\d+) to match numbers)",size:"large",onBlur:d},null,8,["value"])]),_:1},8,["validateStatus","help"]),l("div",Te,[a(P,{label:"Flags",class:"form-item"},{default:o(()=>[a(n,{value:j.value,"onUpdate:value":m[1]||(m[1]=E=>j.value=E)},{default:o(()=>[a(V,{value:"g"},{default:o(()=>m[3]||(m[3]=[y("Global (g)")])),_:1,__:[3]}),a(V,{value:"i"},{default:o(()=>m[4]||(m[4]=[y("Case Insensitive (i)")])),_:1,__:[4]}),a(V,{value:"m"},{default:o(()=>m[5]||(m[5]=[y("Multiline (m)")])),_:1,__:[5]}),a(V,{value:"s"},{default:o(()=>m[6]||(m[6]=[y("Dot All (s)")])),_:1,__:[6]})]),_:1},8,["value"])]),_:1}),a(P,{label:"Capture Group",class:"form-item"},{default:o(()=>[a(u,{value:S.value,"onUpdate:value":m[2]||(m[2]=E=>S.value=E),min:0,max:99,placeholder:"Which capture group to return (default: 1)",size:"large",style:{width:"100%"}},null,8,["value"])]),_:1})]),a(I,{ghost:""},{default:o(()=>[a(v,{key:"help",header:"Common Patterns"},{default:o(()=>[l("div",Se,[(_(),g(M,null,q(p,E=>l("div",{key:E.name,class:"pattern-helper",onClick:c=>k(E)},[l("div",Fe,T(E.name),1),l("code",$e,T(E.pattern),1),l("div",Re,T(E.description),1)],8,je)),64))])]),_:1})]),_:1})])}}}),Ge=U(ze,[["__scopeId","data-v-40f8ea94"]]),Ie={class:"javascript-config-editor"},Oe={class:"code-templates"},Ue=["onClick"],Ae={class:"template-name"},Be={class:"template-description"},Je=O({__name:"JavaScriptConfigEditor",props:{modelValue:{}},emits:["update:modelValue"],setup(F,{emit:w}){const e=F,i=w,t=b({get:()=>e.modelValue.code,set:x=>i("update:modelValue",{...e.modelValue,code:x})}),h=b({get:()=>e.modelValue.timeout,set:x=>i("update:modelValue",{...e.modelValue,timeout:x})}),S=[{name:"Extract First Number",description:"Find and return the first number in text",code:`// Extract first number
const match = content.match(/\\d+(\\.\\d+)?/)
return match ? parseFloat(match[0]) : null`},{name:"Sum All Numbers",description:"Find all numbers and return their sum",code:`// Sum all numbers
const numbers = content.match(/\\d+(\\.\\d+)?/g) || []
return numbers.reduce((sum, n) => sum + parseFloat(n), 0)`},{name:"Word Count",description:"Count the number of words",code:`// Count words
const words = content.trim().split(/\\s+/)
return words.filter(w => w.length > 0).length`},{name:"JSON Field Extraction",description:"Extract a field from JSON",code:`// Extract field from JSON
try {
  const data = JSON.parse(content)
  return data.score // Change 'score' to your field
} catch (e) {
  return null
}`},{name:"Boolean Check",description:"Check for yes/no or true/false",code:`// Check for boolean values
const lower = content.toLowerCase()
if (lower.includes('yes') || lower.includes('true')) {
  return true
}
if (lower.includes('no') || lower.includes('false')) {
  return false
}
return null`},{name:"Custom Validation",description:"Validate and transform data",code:`// Custom validation logic
if (!content || content.trim() === '') {
  return null
}

// Your validation logic here
const processed = content.trim().toUpperCase()

// Return processed value
return processed`}];function j(x){t.value=x.code}return(x,p)=>{const d=A,k=Z,f=W,m=H;return _(),g("div",Ie,[a(d,{label:"Code"},{default:o(()=>[a(K,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=C=>t.value=C),languages:[["javascript","JavaScript"]],"line-nums":!0,theme:"github-dark",height:"300px",width:"100%","font-size":"14px","copy-code":!0,placeholder:`// JavaScript function body
// The 'content' variable contains the input text
// Return the extracted value

const match = content.match(/\\d+/)
return match ? parseInt(match[0]) : null`},null,8,["modelValue"])]),_:1}),a(d,{label:"Timeout (ms)"},{default:o(()=>[a(k,{value:h.value,"onUpdate:value":p[1]||(p[1]=C=>h.value=C),min:100,max:1e4,step:100,placeholder:"Execution timeout in milliseconds",size:"large",style:{width:"200px"}},null,8,["value"])]),_:1}),a(m,{ghost:""},{default:o(()=>[a(f,{key:"templates",header:"Code Templates"},{default:o(()=>[l("div",Oe,[(_(),g(M,null,q(S,C=>l("div",{key:C.name,class:"code-template",onClick:P=>j(C)},[l("div",Ae,T(C.name),1),l("div",Be,T(C.description),1)],8,Ue)),64))])]),_:1})]),_:1})])}}}),Le=U(Je,[["__scopeId","data-v-cb670fe5"]]),De={class:"python-config-editor"},Me={class:"form-row"},qe={class:"code-templates"},Ye=["onClick"],Ze={class:"template-name"},He={class:"template-description"},We=O({__name:"PythonConfigEditor",props:{modelValue:{}},emits:["update:modelValue"],setup(F,{emit:w}){const e=F,i=w,t=b({get:()=>e.modelValue.code,set:p=>i("update:modelValue",{...e.modelValue,code:p})}),h=b({get:()=>e.modelValue.functionName,set:p=>i("update:modelValue",{...e.modelValue,functionName:p})}),S=b({get:()=>e.modelValue.timeout,set:p=>i("update:modelValue",{...e.modelValue,timeout:p})}),j=[{name:"LLM Score Fuzzy Extractor",description:"Multi-strategy score extraction from LLM responses",code:`import re

def extract_score(content):
    """Extract score from LLM response using multiple strategies."""
    
    # Try JSON format
    json_match = re.search(r'"score"\\s*:\\s*(\\d+)', content)
    if json_match:
        return int(json_match.group(1))
    
    # Try score pattern
    score_match = re.search(r'(?:score|rating|grade)\\s*:?\\s*(\\d+)', content, re.IGNORECASE)
    if score_match:
        return int(score_match.group(1))
    
    # Try percentage
    percent_match = re.search(r'(\\d+)\\s*%', content)
    if percent_match:
        return int(percent_match.group(1))
    
    # Try ratio (e.g., 8/10)
    ratio_match = re.search(r'(\\d+)\\s*/\\s*(\\d+)', content)
    if ratio_match:
        numerator = int(ratio_match.group(1))
        denominator = int(ratio_match.group(2))
        if denominator == 10:
            return numerator * 10
        elif denominator == 100:
            return numerator
    
    # First number fallback
    first_num = re.search(r'\\d+', content)
    if first_num:
        return int(first_num.group())
    
    return None`},{name:"Statistical Analysis",description:"Use NumPy for statistical calculations",code:`import re
import numpy as np

def analyze_numbers(content):
    """Extract numbers and calculate statistics."""
    
    # Extract all numbers
    numbers = re.findall(r'\\d+(?:\\.\\d+)?', content)
    
    if not numbers:
        return None
    
    # Convert to numpy array
    nums = np.array([float(n) for n in numbers])
    
    # Return mean (or median, std, etc.)
    return float(np.mean(nums))`},{name:"JSON Processing",description:"Parse and extract from JSON",code:`import json
import re

def extract_json_field(content):
    """Extract field from JSON in text."""
    
    # Try to find JSON structure
    json_match = re.search(r'\\{[^}]+\\}', content)
    
    if not json_match:
        return None
    
    try:
        data = json.loads(json_match.group())
        # Extract your field (change 'score' to needed field)
        return data.get('score')
    except json.JSONDecodeError:
        return None`},{name:"Text Classification",description:"Classify text into categories",code:`def classify_sentiment(content):
    """Simple sentiment classification."""
    
    content_lower = content.lower()
    
    positive_words = ['good', 'great', 'excellent', 'amazing', 'wonderful']
    negative_words = ['bad', 'terrible', 'awful', 'horrible', 'poor']
    
    pos_count = sum(1 for word in positive_words if word in content_lower)
    neg_count = sum(1 for word in negative_words if word in content_lower)
    
    if pos_count > neg_count:
        return 'positive'
    elif neg_count > pos_count:
        return 'negative'
    else:
        return 'neutral'`},{name:"Data Validation",description:"Validate and clean data",code:`import re

def validate_and_extract(content):
    """Validate input and extract clean data."""
    
    # Remove extra whitespace
    content = ' '.join(content.split())
    
    # Check for required pattern (customize as needed)
    pattern = r'Result:\\s*(\\w+)'
    match = re.search(pattern, content)
    
    if match:
        result = match.group(1)
        # Additional validation
        if result.upper() in ['PASS', 'FAIL', 'PENDING']:
            return result.upper()
    
    return None`},{name:"Advanced Regex",description:"Complex pattern matching",code:`import re

def extract_complex(content):
    """Extract using complex regex patterns."""
    
    # Multi-line pattern with groups
    pattern = r'''
        (?:Score|Rating):\\s*(\\d+)    # Score line
        .*?                            # Any content
        (?:Grade|Level):\\s*(\\w+)     # Grade line
    '''
    
    match = re.search(pattern, content, re.VERBOSE | re.DOTALL | re.IGNORECASE)
    
    if match:
        score = int(match.group(1))
        grade = match.group(2)
        # Return score, grade, or combine them
        return score
    
    return None`}];function x(p){const d=p.code.match(/def\s+(\w+)\s*\(/),k=d?d[1]:e.modelValue.functionName;i("update:modelValue",{code:p.code,functionName:k,timeout:e.modelValue.timeout})}return(p,d)=>{const k=A,f=Y,m=Z,C=me,P=W,V=H;return _(),g("div",De,[a(k,{label:"Code"},{default:o(()=>[a(K,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=n=>t.value=n),languages:[["python","Python"]],"line-nums":!0,theme:"github-dark",height:"350px",width:"100%","font-size":"14px","copy-code":!0,placeholder:`import re

def extract_data(content):
    '''Extract data from content.'''
    # Your Python code here
    match = re.search(r'\\d+', content)
    if match:
        return int(match.group())
    return None`},null,8,["modelValue"])]),_:1}),l("div",Me,[a(k,{label:"Function Name",class:"form-item"},{default:o(()=>[a(f,{value:h.value,"onUpdate:value":d[1]||(d[1]=n=>h.value=n),placeholder:"Name of function to call (e.g., extract_data)",size:"large"},null,8,["value"])]),_:1}),a(k,{label:"Timeout (ms)",class:"form-item"},{default:o(()=>[a(m,{value:S.value,"onUpdate:value":d[2]||(d[2]=n=>S.value=n),min:100,max:3e4,step:100,placeholder:"Execution timeout",size:"large",style:{width:"100%"}},null,8,["value"])]),_:1})]),a(V,{ghost:"",style:{"margin-top":"16px"}},{default:o(()=>[a(P,{key:"pyodide-info",header:"Python Support Info"},{default:o(()=>[a(C,{message:"Python runs in browser via Pyodide",type:"success","show-icon":!1,closable:!1},{description:o(()=>d[3]||(d[3]=[l("div",null,[y(" Python code runs in the browser using Pyodide with full NumPy, pandas, and scipy support. "),l("br"),l("br"),l("strong",null,"Standard library and built-in packages:"),y(" If importing from the Python standard library (re, json, statistics) or "),l("a",{href:"https://pyodide.org/en/stable/usage/packages-in-pyodide.html",target:"_blank"},"packages built for Pyodide"),y(" (numpy, scipy, nltk), just import as normal - no pip install required. "),l("br"),l("br"),l("strong",null,"For other PyPI packages:"),y(" Add this before your imports: "),l("pre",{style:{"margin-top":"8px",background:"#f5f5f5",padding:"8px","border-radius":"4px"}},`import micropip
await micropip.install('textcounts')
import textcounts`)],-1)])),_:1})]),_:1})]),_:1}),a(V,{ghost:""},{default:o(()=>[a(P,{key:"templates",header:"Code Templates"},{default:o(()=>[l("div",qe,[(_(),g(M,null,q(j,n=>l("div",{key:n.name,class:"code-template",onClick:u=>x(n)},[l("div",Ze,T(n.name),1),l("div",He,T(n.description),1)],8,Ye)),64))])]),_:1})]),_:1})])}}}),Xe=U(We,[["__scopeId","data-v-fa61af4b"]]),Ke={class:"parser-editor-page"},Qe={class:"header-content"},et={class:"page-title"},tt={class:"editor-container"},at={key:0,class:"loading-container"},ot={key:1,class:"editor-form"},nt={class:"form-section"},rt={class:"form-row"},st={class:"form-row"},lt={class:"form-section"},ut={class:"footer-content"},it={class:"footer-stats"},ct={key:0},dt={key:1},pt={key:2},mt={key:0,class:"footer-validation"},_t={class:"validation-error"},ft={key:0},vt={key:1},gt={key:2},yt={key:3},ht={key:4},xt={key:5,class:"pattern-error"},Ct={class:"footer-actions"},bt=O({__name:"ParserEditorView",setup(F){const w=le(),e=ie(),i=b(()=>w.params.id),{form:t,patternError:h,saving:S,loading:j,isEditingBuiltIn:x,isValid:p,currentParser:d,validateRegexPattern:k,loadParser:f,save:m,setTypeDefaults:C}=ke(i),P=b({get:()=>({pattern:t.value.regexPattern,flags:t.value.regexFlags,captureGroup:t.value.regexCaptureGroup}),set:c=>{t.value.regexPattern=c.pattern,t.value.regexFlags=c.flags,t.value.regexCaptureGroup=c.captureGroup}}),V=b({get:()=>({code:t.value.javascriptCode,timeout:t.value.javascriptTimeout}),set:c=>{t.value.javascriptCode=c.code,t.value.javascriptTimeout=c.timeout}}),n=b({get:()=>({code:t.value.pythonCode,functionName:t.value.pythonFunctionName,timeout:t.value.pythonTimeout}),set:c=>{t.value.pythonCode=c.code,t.value.pythonFunctionName=c.functionName,t.value.pythonTimeout=c.timeout}});function u(c){C(c)}async function v(){try{await m();const c=x.value?"New parser created successfully":i.value?"Parser updated successfully":"Parser created successfully";D.success(c),e.push("/parsers")}catch(c){D.error(c instanceof Error?c.message:"Failed to save parser")}}function I(){e.push("/parsers")}function E(c){t.value.testCases=c}return ue(async()=>{if(i.value)try{await f(i.value)}catch{D.error("Failed to load parser"),e.push("/parsers")}else{const c=w.query.type;c&&C(c)}}),(c,r)=>{const B=ve,Q=fe,ee=he,te=Y,z=A,R=be,J=Ce,ae=we,oe=xe,ne=ye,re=Pe,se=_e;return _(),g("div",Ke,[a(se,null,{default:o(()=>[a(Q,{class:"editor-header"},{default:o(()=>[l("div",Qe,[a(B,{type:"text",onClick:I,class:"back-button"},{icon:o(()=>[a(s(ge))]),default:o(()=>[r[8]||(r[8]=y(" Back to Parsers "))]),_:1,__:[8]}),l("h1",et,T(s(x)?"Copy Built-in Parser":i.value?"Edit Parser":"Create Parser"),1)])]),_:1}),a(ne,{class:"editor-content"},{default:o(()=>[l("div",tt,[s(j)?(_(),g("div",at,[a(ee,{size:"large",tip:"Loading parser..."})])):(_(),g("div",ot,[a(oe,{model:s(t),layout:"vertical"},{default:o(()=>[l("div",nt,[r[16]||(r[16]=l("div",{class:"section-header"},[l("h3",null,"Basic Information")],-1)),l("div",rt,[a(z,{label:"Name",rules:[{required:!0,message:"Name is required"}],class:"form-item"},{default:o(()=>[a(te,{value:s(t).name,"onUpdate:value":r[0]||(r[0]=N=>s(t).name=N),placeholder:"Enter parser name",size:"large"},null,8,["value"])]),_:1}),a(z,{label:"Type",class:"form-item"},{default:o(()=>[a(J,{value:s(t).type,"onUpdate:value":r[1]||(r[1]=N=>s(t).type=N),size:"large",disabled:!!i.value,onChange:u},{default:o(()=>[a(R,{value:"regex"},{default:o(()=>r[9]||(r[9]=[y("Regular Expression")])),_:1,__:[9]}),a(R,{value:"javascript"},{default:o(()=>r[10]||(r[10]=[y("JavaScript")])),_:1,__:[10]}),a(R,{value:"python"},{default:o(()=>r[11]||(r[11]=[y("Python")])),_:1,__:[11]})]),_:1},8,["value","disabled"])]),_:1})]),l("div",st,[a(z,{label:"Output Type",class:"form-item"},{default:o(()=>[a(J,{value:s(t).outputType,"onUpdate:value":r[2]||(r[2]=N=>s(t).outputType=N),size:"large"},{default:o(()=>[a(R,{value:"text"},{default:o(()=>r[12]||(r[12]=[y("Text")])),_:1,__:[12]}),a(R,{value:"number"},{default:o(()=>r[13]||(r[13]=[y("Number")])),_:1,__:[13]}),a(R,{value:"boolean"},{default:o(()=>r[14]||(r[14]=[y("Boolean")])),_:1,__:[14]}),a(R,{value:"json"},{default:o(()=>r[15]||(r[15]=[y("JSON")])),_:1,__:[15]})]),_:1},8,["value"])]),_:1}),a(z,{label:"Tags",class:"form-item"},{default:o(()=>[a(J,{value:s(t).tags,"onUpdate:value":r[3]||(r[3]=N=>s(t).tags=N),mode:"tags",placeholder:"Add tags for search",size:"large"},null,8,["value"])]),_:1})]),a(z,{label:"Description",class:"form-item full-width"},{default:o(()=>[a(ae,{value:s(t).description,"onUpdate:value":r[4]||(r[4]=N=>s(t).description=N),placeholder:"Optional description of what this parser does",rows:2,size:"large"},null,8,["value"])]),_:1})]),l("div",lt,[r[17]||(r[17]=l("div",{class:"section-header"},[l("h3",null,"Parser Configuration")],-1)),s(t).type==="regex"?(_(),L(Ge,{key:0,modelValue:P.value,"onUpdate:modelValue":r[5]||(r[5]=N=>P.value=N),error:s(h),onValidate:s(k)},null,8,["modelValue","error","onValidate"])):s(t).type==="javascript"?(_(),L(Le,{key:1,modelValue:V.value,"onUpdate:modelValue":r[6]||(r[6]=N=>V.value=N)},null,8,["modelValue"])):s(t).type==="python"?(_(),L(Xe,{key:2,modelValue:n.value,"onUpdate:modelValue":r[7]||(r[7]=N=>n.value=N)},null,8,["modelValue"])):$("",!0)]),a(Ne,{parser:s(d),form:s(t),"auto-save-tests":!0,"onUpdate:testCases":E},null,8,["parser","form"])]),_:1},8,["model"])]))])]),_:1}),a(re,{class:"editor-footer"},{default:o(()=>[l("div",ut,[l("div",it,[s(t).type==="regex"&&P.value.pattern?(_(),g("span",ct," Pattern: "+T(P.value.pattern.length)+" chars ",1)):s(t).type==="javascript"&&V.value.code?(_(),g("span",dt," Code: "+T(V.value.code.split(`
`).length)+" lines ",1)):s(t).type==="python"&&n.value.code?(_(),g("span",pt," Code: "+T(n.value.code.split(`
`).length)+" lines ",1)):$("",!0)]),s(p)?$("",!0):(_(),g("div",mt,[l("span",_t,[r[18]||(r[18]=y(" Missing: ")),s(t).name.trim()?$("",!0):(_(),g("span",ft,"Name")),s(t).name.trim()&&s(t).type==="regex"&&!P.value.pattern?(_(),g("span",vt,"Pattern")):$("",!0),s(t).name.trim()&&s(t).type==="javascript"&&!V.value.code?(_(),g("span",gt,"Code")):$("",!0),s(t).name.trim()&&s(t).type==="python"&&!n.value.code?(_(),g("span",yt,"Code")):$("",!0),s(t).name.trim()&&s(t).type==="python"&&n.value.code&&!n.value.functionName?(_(),g("span",ht,"Function Name")):$("",!0),s(h)?(_(),g("span",xt,T(s(h)),1)):$("",!0)])])),l("div",Ct,[a(B,{size:"large",onClick:I},{default:o(()=>r[19]||(r[19]=[y(" Cancel ")])),_:1,__:[19]}),a(B,{size:"large",type:"primary",onClick:v,loading:s(S),disabled:!s(p)},{icon:o(()=>[a(s(Ve))]),default:o(()=>[y(" "+T(s(x)?"Create New Parser":i.value?"Save Changes":"Create Parser"),1)]),_:1},8,["loading","disabled"])])])]),_:1})]),_:1})])}}}),jt=U(bt,[["__scopeId","data-v-c7fdcb0c"]]);export{jt as default};
