import{f as I,c as w,d as W,R as h,Y as p,k as a,S as l,Z as o,G as g,F as D,W as M,V as j,a1 as ie,o as de,X as ce,u as s,$ as G,_ as F}from"./vue-vendor-DPw1dQYc.js";import{u as pe}from"./parser.store-C-xrBLcz.js";import{b as K,j as A}from"./index-CLqmclCd.js";import{H as B,a3 as q,ag as me,ah as X,ai as Y,aj as Z,ak as H,K as fe,y as J,aa as _e,ab as ve,m as ge,ac as ye,ad as he,O as xe,a6 as Ce,a4 as be,a5 as we,I as Pe,ae as ke,af as Ve}from"./ui-vendor-DDlYs5wr.js";import{C as Q}from"./CodeEditorWrapper-DN65gIVr.js";import{P as Ne}from"./ParserTestSectionCompact-aPxj1JgW.js";import"./utils-vendor-DcTsQz_8.js";function Ee(R){const P=pe(),e=I({name:"",description:"",type:"regex",outputType:"text",tags:[],regexPattern:"",regexFlags:"",regexCaptureGroup:1,javascriptCode:`// Return extracted value
return content`,javascriptTimeout:1e4,pythonCode:`def extract_data(content):
    """Extract data from content."""
    return content`,pythonFunctionName:"extract_data",pythonTimeout:1e4,refusalWords:[],rejectRefusalWords:!1,testCases:[]}),i=I(null),t=I(!1),x=I(!1),T=w(()=>{switch(e.value.type){case"regex":return{pattern:e.value.regexPattern,flags:e.value.regexFlags,captureGroup:e.value.regexCaptureGroup};case"javascript":return{code:e.value.javascriptCode,timeout:e.value.javascriptTimeout};case"python":return{code:e.value.pythonCode,functionName:e.value.pythonFunctionName,timeout:e.value.pythonTimeout};default:throw new Error(`Unknown parser type: ${e.value.type}`)}}),S=w(()=>({name:e.value.name.trim(),description:e.value.description?.trim()||void 0,type:e.value.type,config:T.value,outputType:e.value.outputType,refusalWords:e.value.refusalWords.length>0?e.value.refusalWords.filter(r=>r.trim()).map(r=>r.trim()):void 0,rejectRefusalWords:e.value.rejectRefusalWords,testCases:e.value.testCases||[],isBuiltIn:!1,isPublic:!1,tags:e.value.tags.filter(r=>r.trim()).map(r=>r.trim())}));function C(){if(!e.value.regexPattern)return i.value=null,!0;try{return new RegExp(e.value.regexPattern,e.value.regexFlags),i.value=null,!0}catch(r){return i.value=r instanceof Error?r.message:"Invalid pattern",!1}}const m=w(()=>{if(!e.value.name.trim())return!1;switch(e.value.type){case"regex":return!!e.value.regexPattern&&!i.value;case"javascript":return!!e.value.javascriptCode;case"python":return!!e.value.pythonCode&&!!e.value.pythonFunctionName;default:return!1}}),c=I(!1);async function N(r){x.value=!0;try{P.parsers.length===0&&await P.loadParsers();const u=P.parsers.find(v=>v.id===r);if(!u)throw new Error("Parser not found");if(c.value=u.isBuiltIn||!1,e.value.name=u.isBuiltIn?`${u.name} (Copy)`:u.name,e.value.description=u.description||"",e.value.type=u.type,e.value.outputType=u.outputType,e.value.tags=u.tags||[],e.value.refusalWords=u.refusalWords||[],e.value.rejectRefusalWords=u.rejectRefusalWords||!1,e.value.testCases=(u.testCases||[]).map(v=>({...v,hasRun:v.output!==void 0})),u.type==="regex"){const v=u.config;e.value.regexPattern=v.pattern||"",e.value.regexFlags=v.flags||"",e.value.regexCaptureGroup=v.captureGroup||1}else if(u.type==="javascript"){const v=u.config;e.value.javascriptCode=v.code||"",e.value.javascriptTimeout=v.timeout||1e4}else if(u.type==="python"){const v=u.config;e.value.pythonCode=v.code||"",e.value.pythonFunctionName=v.functionName||"extract_data",e.value.pythonTimeout=v.timeout||1e4}return u}finally{x.value=!1}}async function _(){if(!m.value)throw new Error("Please fill in all required fields");t.value=!0;try{const r=S.value,u=await K.validate(r);if(!u.valid)throw new Error(u.errors?.join(", ")||"Invalid parser configuration");return c.value?await P.createParser(r):R?.value?await P.updateParser(R.value,r):await P.createParser(r)}finally{t.value=!1}}function f(r){switch(e.value.type=r,r){case"regex":e.value.regexPattern||(e.value.regexCaptureGroup=1);break;case"javascript":e.value.javascriptCode||(e.value.javascriptCode=`// Return extracted value
return content`,e.value.javascriptTimeout=1e4);break;case"python":e.value.pythonCode||(e.value.pythonCode=`def extract_data(content):
    """Extract data from content."""
    return content`,e.value.pythonFunctionName="extract_data",e.value.pythonTimeout=1e4);break}}async function b(r){const u={...S.value,id:"temp-test",created:new Date,updated:new Date};return await K.executeParser(r,u)}function k(r,u,v){e.value.testCases.push({name:`Test Case ${e.value.testCases.length+1}`,input:r,output:u,expected:v,hasRun:!0,createdAt:new Date})}function V(r){e.value.testCases.splice(r,1)}return{form:e,patternError:i,saving:t,loading:x,isEditingBuiltIn:c,currentConfig:T,currentParser:S,isValid:m,validateRegexPattern:C,loadParser:N,save:_,setTypeDefaults:f,testParser:b,addTestCase:k,removeTestCase:V}}const je={class:"regex-config-editor"},Te={class:"form-row"},Se={class:"pattern-helpers"},Fe=["onClick"],Re={class:"helper-name"},$e={class:"helper-pattern"},ze={class:"helper-description"},Ie=W({__name:"RegexConfigEditor",props:{modelValue:{},error:{}},emits:["update:modelValue","validate"],setup(R,{emit:P}){const e=R,i=P,t=w({get:()=>e.modelValue.pattern,set:_=>i("update:modelValue",{...e.modelValue,pattern:_})}),x=w({get:()=>e.modelValue.flags,set:_=>i("update:modelValue",{...e.modelValue,flags:_})}),T=w({get:()=>e.modelValue.captureGroup,set:_=>i("update:modelValue",{...e.modelValue,captureGroup:_})}),S=w({get:()=>x.value.split("").filter(_=>_),set:_=>{x.value=_.join("")}}),C=w(()=>e.error),m=[{name:"First Number",pattern:"(\\d+(?:\\.\\d+)?)",description:"Captures first integer or decimal"},{name:"Score Pattern",pattern:"(?:score|grade|result)\\s*:?\\s*(\\d+)",description:"Number after score/grade keywords"},{name:"Percentage",pattern:"(\\d+(?:\\.\\d+)?)\\s*%",description:"Captures percentage values"},{name:"Yes/No",pattern:"\\b(yes|no)\\b",description:"Matches yes or no (case insensitive with i flag)"},{name:"Email",pattern:"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})",description:"Captures email addresses"}];function c(){i("validate")}function N(_){t.value=_.pattern,_.name==="Yes/No"&&!x.value.includes("i")&&(x.value+="i"),c()}return(_,f)=>{const b=q,k=B,V=X,r=me,u=Y,v=H,U=Z;return p(),h("div",je,[a(k,{label:"Pattern",validateStatus:C.value?"error":"",help:C.value,rules:[{required:!0,message:"Pattern is required"}]},{default:o(()=>[a(b,{value:t.value,"onUpdate:value":f[0]||(f[0]=E=>t.value=E),placeholder:"Enter regex pattern (e.g., (\\d+) to match numbers)",size:"large",onBlur:c},null,8,["value"])]),_:1},8,["validateStatus","help"]),l("div",Te,[a(k,{label:"Flags",class:"form-item"},{default:o(()=>[a(r,{value:S.value,"onUpdate:value":f[1]||(f[1]=E=>S.value=E)},{default:o(()=>[a(V,{value:"g"},{default:o(()=>f[3]||(f[3]=[g("Global (g)")])),_:1,__:[3]}),a(V,{value:"i"},{default:o(()=>f[4]||(f[4]=[g("Case Insensitive (i)")])),_:1,__:[4]}),a(V,{value:"m"},{default:o(()=>f[5]||(f[5]=[g("Multiline (m)")])),_:1,__:[5]}),a(V,{value:"s"},{default:o(()=>f[6]||(f[6]=[g("Dot All (s)")])),_:1,__:[6]})]),_:1},8,["value"])]),_:1}),a(k,{label:"Capture Group",class:"form-item"},{default:o(()=>[a(u,{value:T.value,"onUpdate:value":f[2]||(f[2]=E=>T.value=E),min:0,max:99,placeholder:"Which capture group to return (default: 1)",size:"large",style:{width:"100%"}},null,8,["value"])]),_:1})]),a(U,{ghost:""},{default:o(()=>[a(v,{key:"help",header:"Common Patterns"},{default:o(()=>[l("div",Se,[(p(),h(D,null,M(m,E=>l("div",{key:E.name,class:"pattern-helper",onClick:d=>N(E)},[l("div",Re,j(E.name),1),l("code",$e,j(E.pattern),1),l("div",ze,j(E.description),1)],8,Fe)),64))])]),_:1})]),_:1})])}}}),Ue=A(Ie,[["__scopeId","data-v-40f8ea94"]]),Oe={class:"javascript-config-editor"},Ge={class:"code-templates"},We=["onClick"],Ae={class:"template-name"},Be={class:"template-description"},Le=W({__name:"JavaScriptConfigEditor",props:{modelValue:{}},emits:["update:modelValue"],setup(R,{emit:P}){const e=R,i=P,t=w({get:()=>e.modelValue.code,set:C=>i("update:modelValue",{...e.modelValue,code:C})}),x=w({get:()=>e.modelValue.timeout,set:C=>i("update:modelValue",{...e.modelValue,timeout:C})}),T=[{name:"Extract First Number",description:"Find and return the first number in text",code:`// Extract first number
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
return processed`}];function S(C){t.value=C.code}return(C,m)=>{const c=B,N=Y,_=H,f=Z;return p(),h("div",Oe,[a(c,{label:"Code"},{default:o(()=>[a(Q,{modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=b=>t.value=b),languages:[["javascript","JavaScript"]],"line-nums":!0,theme:"github-dark",height:"300px",width:"100%","font-size":"14px","copy-code":!0,placeholder:`// JavaScript function body
// The 'content' variable contains the input text
// Return the extracted value

const match = content.match(/\\d+/)
return match ? parseInt(match[0]) : null`},null,8,["modelValue"])]),_:1}),a(c,{label:"Timeout (ms)"},{default:o(()=>[a(N,{value:x.value,"onUpdate:value":m[1]||(m[1]=b=>x.value=b),min:100,max:1e4,step:100,placeholder:"Execution timeout in milliseconds",size:"large",style:{width:"200px"}},null,8,["value"])]),_:1}),a(f,{ghost:""},{default:o(()=>[a(_,{key:"templates",header:"Code Templates"},{default:o(()=>[l("div",Ge,[(p(),h(D,null,M(T,b=>l("div",{key:b.name,class:"code-template",onClick:k=>S(b)},[l("div",Ae,j(b.name),1),l("div",Be,j(b.description),1)],8,We)),64))])]),_:1})]),_:1})])}}}),Je=A(Le,[["__scopeId","data-v-cb670fe5"]]),De={class:"python-config-editor"},Me={class:"form-row"},qe={class:"code-templates"},Ye=["onClick"],Ze={class:"template-name"},He={class:"template-description"},Ke=W({__name:"PythonConfigEditor",props:{modelValue:{}},emits:["update:modelValue"],setup(R,{emit:P}){const e=R,i=P,t=w({get:()=>e.modelValue.code,set:m=>i("update:modelValue",{...e.modelValue,code:m})}),x=w({get:()=>e.modelValue.functionName,set:m=>i("update:modelValue",{...e.modelValue,functionName:m})}),T=w({get:()=>e.modelValue.timeout,set:m=>i("update:modelValue",{...e.modelValue,timeout:m})}),S=[{name:"LLM Score Fuzzy Extractor",description:"Multi-strategy score extraction from LLM responses",code:`import re

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
    
    return None`}];function C(m){const c=m.code.match(/def\s+(\w+)\s*\(/),N=c?c[1]:e.modelValue.functionName;i("update:modelValue",{code:m.code,functionName:N,timeout:e.modelValue.timeout})}return(m,c)=>{const N=B,_=q,f=Y,b=fe,k=H,V=Z;return p(),h("div",De,[a(N,{label:"Code"},{default:o(()=>[a(Q,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=r=>t.value=r),languages:[["python","Python"]],"line-nums":!0,theme:"github-dark",height:"350px",width:"100%","font-size":"14px","copy-code":!0,placeholder:`import re

def extract_data(content):
    '''Extract data from content.'''
    # Your Python code here
    match = re.search(r'\\d+', content)
    if match:
        return int(match.group())
    return None`},null,8,["modelValue"])]),_:1}),l("div",Me,[a(N,{label:"Function Name",class:"form-item"},{default:o(()=>[a(_,{value:x.value,"onUpdate:value":c[1]||(c[1]=r=>x.value=r),placeholder:"Name of function to call (e.g., extract_data)",size:"large"},null,8,["value"])]),_:1}),a(N,{label:"Timeout (ms)",class:"form-item"},{default:o(()=>[a(f,{value:T.value,"onUpdate:value":c[2]||(c[2]=r=>T.value=r),min:100,max:3e4,step:100,placeholder:"Execution timeout",size:"large",style:{width:"100%"}},null,8,["value"])]),_:1})]),a(V,{ghost:"",style:{"margin-top":"16px"}},{default:o(()=>[a(k,{key:"pyodide-info",header:"Python Support Info"},{default:o(()=>[a(b,{message:"Python runs in browser via Pyodide",type:"success","show-icon":!1,closable:!1},{description:o(()=>c[3]||(c[3]=[l("div",null,[g(" Python code runs in the browser using Pyodide with full NumPy, pandas, and scipy support. "),l("br"),l("br"),l("strong",null,"Standard library and built-in packages:"),g(" If importing from the Python standard library (re, json, statistics) or "),l("a",{href:"https://pyodide.org/en/stable/usage/packages-in-pyodide.html",target:"_blank"},"packages built for Pyodide"),g(" (numpy, scipy, nltk), just import as normal - no pip install required. "),l("br"),l("br"),l("strong",null,"For other PyPI packages:"),g(" Add this before your imports: "),l("pre",{style:{"margin-top":"8px",background:"#f5f5f5",padding:"8px","border-radius":"4px"}},`import micropip
await micropip.install('textcounts')
import textcounts`)],-1)])),_:1})]),_:1})]),_:1}),a(V,{ghost:""},{default:o(()=>[a(k,{key:"templates",header:"Code Templates"},{default:o(()=>[l("div",qe,[(p(),h(D,null,M(S,r=>l("div",{key:r.name,class:"code-template",onClick:u=>C(r)},[l("div",Ze,j(r.name),1),l("div",He,j(r.description),1)],8,Ye)),64))])]),_:1})]),_:1})])}}}),Xe=A(Ke,[["__scopeId","data-v-fa61af4b"]]),Qe={class:"parser-editor-page"},et={class:"header-content"},tt={class:"page-title"},at={class:"editor-container"},ot={key:0,class:"loading-container"},nt={key:1,class:"editor-form"},rt={class:"form-section"},st={class:"form-row"},lt={class:"form-row"},ut={class:"form-section"},it={class:"form-section"},dt={class:"footer-content"},ct={class:"footer-stats"},pt={key:0},mt={key:1},ft={key:2},_t={key:0,class:"footer-validation"},vt={class:"validation-error"},gt={key:0},yt={key:1},ht={key:2},xt={key:3},Ct={key:4},bt={key:5,class:"pattern-error"},wt={class:"footer-actions"},Pt=W({__name:"ParserEditorView",setup(R){const P=ie(),e=ce(),i=w(()=>P.params.id),{form:t,patternError:x,saving:T,loading:S,isEditingBuiltIn:C,isValid:m,currentParser:c,validateRegexPattern:N,loadParser:_,save:f,setTypeDefaults:b}=Ee(i),k=w({get:()=>({pattern:t.value.regexPattern,flags:t.value.regexFlags,captureGroup:t.value.regexCaptureGroup}),set:d=>{t.value.regexPattern=d.pattern,t.value.regexFlags=d.flags,t.value.regexCaptureGroup=d.captureGroup}}),V=w({get:()=>({code:t.value.javascriptCode,timeout:t.value.javascriptTimeout}),set:d=>{t.value.javascriptCode=d.code,t.value.javascriptTimeout=d.timeout}}),r=w({get:()=>({code:t.value.pythonCode,functionName:t.value.pythonFunctionName,timeout:t.value.pythonTimeout}),set:d=>{t.value.pythonCode=d.code,t.value.pythonFunctionName=d.functionName,t.value.pythonTimeout=d.timeout}});function u(d){b(d)}async function v(){try{await f();const d=C.value?"New parser created successfully":i.value?"Parser updated successfully":"Parser created successfully";J.success(d),e.push("/parsers")}catch(d){J.error(d instanceof Error?d.message:"Failed to save parser")}}function U(){e.push("/parsers")}function E(d){t.value.testCases=d}return de(async()=>{if(i.value)try{await _(i.value)}catch{J.error("Failed to load parser"),e.push("/parsers")}else{const d=P.query.type;d&&b(d)}}),(d,n)=>{const L=ge,ee=ve,te=xe,ae=q,$=B,z=we,O=be,oe=Pe,ne=X,re=Ce,se=he,le=ke,ue=_e;return p(),h("div",Qe,[a(ue,null,{default:o(()=>[a(ee,{class:"editor-header"},{default:o(()=>[l("div",et,[a(L,{type:"text",onClick:U,class:"back-button"},{icon:o(()=>[a(s(ye))]),default:o(()=>[n[10]||(n[10]=g(" Back to Parsers "))]),_:1,__:[10]}),l("h1",tt,j(s(C)?"Copy Built-in Parser":i.value?"Edit Parser":"Create Parser"),1)])]),_:1}),a(se,{class:"editor-content"},{default:o(()=>[l("div",at,[s(S)?(p(),h("div",ot,[a(te,{size:"large",tip:"Loading parser..."})])):(p(),h("div",nt,[a(re,{model:s(t),layout:"vertical"},{default:o(()=>[l("div",rt,[n[18]||(n[18]=l("div",{class:"section-header"},[l("h3",null,"Basic Information")],-1)),l("div",st,[a($,{label:"Name",rules:[{required:!0,message:"Name is required"}],class:"form-item"},{default:o(()=>[a(ae,{value:s(t).name,"onUpdate:value":n[0]||(n[0]=y=>s(t).name=y),placeholder:"Enter parser name",size:"large"},null,8,["value"])]),_:1}),a($,{label:"Type",class:"form-item"},{default:o(()=>[a(O,{value:s(t).type,"onUpdate:value":n[1]||(n[1]=y=>s(t).type=y),size:"large",disabled:!!i.value,onChange:u},{default:o(()=>[a(z,{value:"regex"},{default:o(()=>n[11]||(n[11]=[g("Regular Expression")])),_:1,__:[11]}),a(z,{value:"javascript"},{default:o(()=>n[12]||(n[12]=[g("JavaScript")])),_:1,__:[12]}),a(z,{value:"python"},{default:o(()=>n[13]||(n[13]=[g("Python")])),_:1,__:[13]})]),_:1},8,["value","disabled"])]),_:1})]),l("div",lt,[a($,{label:"Output Type",class:"form-item"},{default:o(()=>[a(O,{value:s(t).outputType,"onUpdate:value":n[2]||(n[2]=y=>s(t).outputType=y),size:"large"},{default:o(()=>[a(z,{value:"text"},{default:o(()=>n[14]||(n[14]=[g("Text")])),_:1,__:[14]}),a(z,{value:"number"},{default:o(()=>n[15]||(n[15]=[g("Number")])),_:1,__:[15]}),a(z,{value:"boolean"},{default:o(()=>n[16]||(n[16]=[g("Boolean")])),_:1,__:[16]}),a(z,{value:"json"},{default:o(()=>n[17]||(n[17]=[g("JSON")])),_:1,__:[17]})]),_:1},8,["value"])]),_:1}),a($,{label:"Tags",class:"form-item"},{default:o(()=>[a(O,{value:s(t).tags,"onUpdate:value":n[3]||(n[3]=y=>s(t).tags=y),mode:"tags",placeholder:"Add tags for search",size:"large"},null,8,["value"])]),_:1})]),a($,{label:"Description",class:"form-item full-width"},{default:o(()=>[a(oe,{value:s(t).description,"onUpdate:value":n[4]||(n[4]=y=>s(t).description=y),placeholder:"Optional description of what this parser does",rows:2,size:"large"},null,8,["value"])]),_:1})]),l("div",ut,[n[19]||(n[19]=l("div",{class:"section-header"},[l("h3",null,"Parser Configuration")],-1)),s(t).type==="regex"?(p(),G(Ue,{key:0,modelValue:k.value,"onUpdate:modelValue":n[5]||(n[5]=y=>k.value=y),error:s(x),onValidate:s(N)},null,8,["modelValue","error","onValidate"])):s(t).type==="javascript"?(p(),G(Je,{key:1,modelValue:V.value,"onUpdate:modelValue":n[6]||(n[6]=y=>V.value=y)},null,8,["modelValue"])):s(t).type==="python"?(p(),G(Xe,{key:2,modelValue:r.value,"onUpdate:modelValue":n[7]||(n[7]=y=>r.value=y)},null,8,["modelValue"])):F("",!0)]),a(Ne,{parser:s(c),form:s(t),"auto-save-tests":!0,"onUpdate:testCases":E},null,8,["parser","form"]),l("div",it,[n[21]||(n[21]=l("div",{class:"section-header"},[l("h3",null,"Refusal Detection (Optional)")],-1)),a($,null,{default:o(()=>[a(ne,{checked:s(t).rejectRefusalWords,"onUpdate:checked":n[8]||(n[8]=y=>s(t).rejectRefusalWords=y)},{default:o(()=>n[20]||(n[20]=[g(" Reject responses containing refusal words ")])),_:1,__:[20]},8,["checked"])]),_:1}),s(t).rejectRefusalWords?(p(),G($,{key:0,label:"Refusal Words"},{default:o(()=>[a(O,{value:s(t).refusalWords,"onUpdate:value":n[9]||(n[9]=y=>s(t).refusalWords=y),mode:"tags",placeholder:"Enter refusal words (e.g., cannot, unable, sorry)",size:"large"},null,8,["value"])]),_:1})):F("",!0)])]),_:1},8,["model"])]))])]),_:1}),a(le,{class:"editor-footer"},{default:o(()=>[l("div",dt,[l("div",ct,[s(t).type==="regex"&&k.value.pattern?(p(),h("span",pt," Pattern: "+j(k.value.pattern.length)+" chars ",1)):s(t).type==="javascript"&&V.value.code?(p(),h("span",mt," Code: "+j(V.value.code.split(`
`).length)+" lines ",1)):s(t).type==="python"&&r.value.code?(p(),h("span",ft," Code: "+j(r.value.code.split(`
`).length)+" lines ",1)):F("",!0)]),s(m)?F("",!0):(p(),h("div",_t,[l("span",vt,[n[22]||(n[22]=g(" Missing: ")),s(t).name.trim()?F("",!0):(p(),h("span",gt,"Name")),s(t).name.trim()&&s(t).type==="regex"&&!k.value.pattern?(p(),h("span",yt,"Pattern")):F("",!0),s(t).name.trim()&&s(t).type==="javascript"&&!V.value.code?(p(),h("span",ht,"Code")):F("",!0),s(t).name.trim()&&s(t).type==="python"&&!r.value.code?(p(),h("span",xt,"Code")):F("",!0),s(t).name.trim()&&s(t).type==="python"&&r.value.code&&!r.value.functionName?(p(),h("span",Ct,"Function Name")):F("",!0),s(x)?(p(),h("span",bt,j(s(x)),1)):F("",!0)])])),l("div",wt,[a(L,{size:"large",onClick:U},{default:o(()=>n[23]||(n[23]=[g(" Cancel ")])),_:1,__:[23]}),a(L,{size:"large",type:"primary",onClick:v,loading:s(T),disabled:!s(m)},{icon:o(()=>[a(s(Ve))]),default:o(()=>[g(" "+j(s(C)?"Create New Parser":i.value?"Save Changes":"Create Parser"),1)]),_:1},8,["loading","disabled"])])])]),_:1})]),_:1})])}}}),Ft=A(Pt,[["__scopeId","data-v-07a0ca8d"]]);export{Ft as default};
