import{r as $,h as b,d as j,_ as y,U as x,n as t,a0 as n,V as l,J as f,F as q,W as Y,Y as T,b as re,a4 as se,a3 as le,u as s,a2 as M,Z as F}from"./vue-vendor-DRrxbAFs.js";import{t as U}from"./toast-B3fBbeHS.js";import{u as ue}from"./parser-BYqsokp8.js";import{h as J,v as B}from"./index-BKvITvur.js";import{g as L,I as D,aF as ie,z as de,n as Z,f as H,d as W,b as ce,w as pe,X as me,B as _e,A as fe,L as ve,e as ge,F as ye,h as he,j as xe,s as Ce,G as be,S as Pe}from"./ui-vendor-BCasHbjs.js";import{C as we}from"./CodeEditor-CVcAiwn2.js";import{P as Ne}from"./ParserTestSectionCompact-aV0AdhzG.js";import"./utils-vendor-DGBfkxC8.js";import"./tauri-vendor-BdAyolxU.js";function Ve(z){const P=ue(),e=$({name:"",description:"",type:"regex",outputType:"text",tags:[],regexPattern:"",regexFlags:"",regexCaptureGroup:1,pythonCode:`def extract_data(content):
    """Extract data from content."""
    return content`,pythonFunctionName:"extract_data",pythonTimeout:1e4,testCases:[]}),d=$(null),a=$(!1),h=$(!1),V=b(()=>{switch(e.value.type){case"regex":return{pattern:e.value.regexPattern,flags:e.value.regexFlags,captureGroup:e.value.regexCaptureGroup};case"python":return{code:e.value.pythonCode,functionName:e.value.pythonFunctionName,timeout:e.value.pythonTimeout};default:throw new Error(`Unknown parser type: ${e.value.type}`)}}),k=b(()=>({name:e.value.name.trim(),description:e.value.description?.trim()||void 0,type:e.value.type,config:V.value,outputType:e.value.outputType,testCases:e.value.testCases||[],isBuiltIn:!1,isPublic:!1,tags:e.value.tags.filter(o=>o.trim()).map(o=>o.trim())}));function E(){if(!e.value.regexPattern)return d.value=null,!0;try{return new RegExp(e.value.regexPattern,e.value.regexFlags),d.value=null,!0}catch(o){return d.value=o instanceof Error?o.message:"Invalid pattern",!1}}const v=b(()=>{if(!e.value.name.trim())return!1;switch(e.value.type){case"regex":return!!e.value.regexPattern&&!d.value;case"python":return!!e.value.pythonCode&&!!e.value.pythonFunctionName;default:return!1}}),c=$(!1);async function N(o){h.value=!0;try{P.parsers.length===0&&await P.loadParsers();const i=P.parsers.find(_=>_.id===o);if(!i)throw new Error("Parser not found");if(c.value=i.isBuiltIn||!1,e.value.name=i.isBuiltIn?`${i.name} (Copy)`:i.name,e.value.description=i.description||"",e.value.type=i.type,e.value.outputType=i.outputType,e.value.tags=i.tags||[],e.value.testCases=(i.testCases||[]).map(_=>({..._,hasRun:_.output!==void 0})),i.type==="regex"){const _=i.config;e.value.regexPattern=_.pattern||"",e.value.regexFlags=_.flags||"",e.value.regexCaptureGroup=_.captureGroup||1}else if(i.type==="python"){const _=i.config;e.value.pythonCode=_.code||"",e.value.pythonFunctionName=_.functionName||"extract_data",e.value.pythonTimeout=_.timeout||1e4}return i}finally{h.value=!1}}async function m(){if(!v.value)throw new Error("Please fill in all required fields");a.value=!0;try{const o=JSON.parse(JSON.stringify(k.value)),i=await J.validate(o);if(!i.valid)throw new Error(i.errors?.join(", ")||"Invalid parser configuration");return c.value?await P.createParser(o):z?.value?await P.updateParser(z.value,o):await P.createParser(o)}finally{a.value=!1}}function p(o){switch(e.value.type=o,o){case"regex":e.value.regexPattern||(e.value.regexCaptureGroup=1);break;case"python":e.value.pythonCode||(e.value.pythonCode=`def extract_data(content):
    """Extract data from content."""
    return content`,e.value.pythonFunctionName="extract_data",e.value.pythonTimeout=1e4);break}}async function S(o){const i={...k.value,id:"temp-test",created:new Date,updated:new Date};return await J.executeParser(o,i)}function C(o,i,_){e.value.testCases.push({name:`Test Case ${e.value.testCases.length+1}`,input:o,output:i,expected:_,hasRun:!0,createdAt:new Date})}function g(o){e.value.testCases.splice(o,1)}return{form:e,patternError:d,saving:a,loading:h,isEditingBuiltIn:c,currentConfig:V,currentParser:k,isValid:v,validateRegexPattern:E,loadParser:N,save:m,setTypeDefaults:p,testParser:S,addTestCase:C,removeTestCase:g}}const ke={class:"regex-config-editor"},Ee={class:"form-row"},Te={class:"pattern-helpers"},Se=["onClick"],Fe={class:"helper-name"},ze={class:"helper-pattern"},Ge={class:"helper-description"},Ie=j({__name:"RegexConfigEditor",props:{modelValue:{},error:{}},emits:["update:modelValue","validate"],setup(z,{emit:P}){const e=z,d=P,a=b({get:()=>e.modelValue.pattern,set:m=>d("update:modelValue",{...e.modelValue,pattern:m})}),h=b({get:()=>e.modelValue.flags,set:m=>d("update:modelValue",{...e.modelValue,flags:m})}),V=b({get:()=>e.modelValue.captureGroup,set:m=>d("update:modelValue",{...e.modelValue,captureGroup:m})}),k=b({get:()=>h.value.split("").filter(m=>m),set:m=>{h.value=m.join("")}}),E=b(()=>e.error),v=[{name:"First Number",pattern:"(\\d+(?:\\.\\d+)?)",description:"Captures first integer or decimal"},{name:"Score Pattern",pattern:"(?:score|grade|result)\\s*:?\\s*(\\d+)",description:"Number after score/grade keywords"},{name:"Percentage",pattern:"(\\d+(?:\\.\\d+)?)\\s*%",description:"Captures percentage values"},{name:"Yes/No",pattern:"\\b(yes|no)\\b",description:"Matches yes or no (case insensitive with i flag)"},{name:"Email",pattern:"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})",description:"Captures email addresses"}];function c(){d("validate")}function N(m){a.value=m.pattern,m.name==="Yes/No"&&!h.value.includes("i")&&(h.value+="i"),c()}return(m,p)=>{const S=D,C=L,g=de,o=ie,i=Z,_=W,A=H;return y(),x("div",ke,[t(C,{label:"Pattern",validateStatus:E.value?"error":"",help:E.value,rules:[{required:!0,message:"Pattern is required"}]},{default:n(()=>[t(S,{value:a.value,"onUpdate:value":p[0]||(p[0]=u=>a.value=u),placeholder:"Enter regex pattern (e.g., (\\d+) to match numbers)",size:"large",onBlur:c},null,8,["value"])]),_:1},8,["validateStatus","help"]),l("div",Ee,[t(C,{label:"Flags",class:"form-item"},{default:n(()=>[t(o,{value:k.value,"onUpdate:value":p[1]||(p[1]=u=>k.value=u)},{default:n(()=>[t(g,{value:"g"},{default:n(()=>p[3]||(p[3]=[f("Global (g)")])),_:1,__:[3]}),t(g,{value:"i"},{default:n(()=>p[4]||(p[4]=[f("Case Insensitive (i)")])),_:1,__:[4]}),t(g,{value:"m"},{default:n(()=>p[5]||(p[5]=[f("Multiline (m)")])),_:1,__:[5]}),t(g,{value:"s"},{default:n(()=>p[6]||(p[6]=[f("Dot All (s)")])),_:1,__:[6]})]),_:1},8,["value"])]),_:1}),t(C,{label:"Capture Group",class:"form-item"},{default:n(()=>[t(i,{value:V.value,"onUpdate:value":p[2]||(p[2]=u=>V.value=u),min:0,max:99,placeholder:"Which capture group to return (default: 1)",size:"large",style:{width:"100%"}},null,8,["value"])]),_:1})]),t(A,{ghost:""},{default:n(()=>[t(_,{key:"help",header:"Common Patterns"},{default:n(()=>[l("div",Te,[(y(),x(q,null,Y(v,u=>l("div",{key:u.name,class:"pattern-helper",onClick:r=>N(u)},[l("div",Fe,T(u.name),1),l("code",ze,T(u.pattern),1),l("div",Ge,T(u.description),1)],8,Se)),64))])]),_:1})]),_:1})])}}}),$e=B(Ie,[["__scopeId","data-v-644b6dd6"]]),Ae={class:"python-config-editor"},Re={class:"form-row"},Oe={class:"code-templates"},Ue=["onClick"],je={class:"template-name"},Be={class:"template-description"},Le=j({__name:"PythonConfigEditor",props:{modelValue:{}},emits:["update:modelValue"],setup(z,{emit:P}){const e=z,d=P,a=b({get:()=>e.modelValue.code,set:v=>d("update:modelValue",{...e.modelValue,code:v})}),h=b({get:()=>e.modelValue.functionName,set:v=>d("update:modelValue",{...e.modelValue,functionName:v})}),V=b({get:()=>e.modelValue.timeout,set:v=>d("update:modelValue",{...e.modelValue,timeout:v})}),k=[{name:"LLM Score Fuzzy Extractor",description:"Multi-strategy score extraction from LLM responses",code:`import re

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
    
    return None`}];function E(v){const c=v.code.match(/def\s+(\w+)\s*\(/),N=c?c[1]:e.modelValue.functionName;d("update:modelValue",{code:v.code,functionName:N,timeout:e.modelValue.timeout})}return(v,c)=>{const N=L,m=D,p=Z,S=ce,C=W,g=H;return y(),x("div",Ae,[t(N,{label:"Code"},{default:n(()=>[t(we,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=o=>a.value=o),languages:[["python","Python"]],"line-nums":!0,theme:"github-dark",height:"350px",width:"100%","font-size":"14px","copy-code":!0,placeholder:`import re

def extract_data(content):
    '''Extract data from content.'''
    # Your Python code here
    match = re.search(r'\\d+', content)
    if match:
        return int(match.group())
    return None`},null,8,["modelValue"])]),_:1}),l("div",Re,[t(N,{label:"Function Name",class:"form-item"},{default:n(()=>[t(m,{value:h.value,"onUpdate:value":c[1]||(c[1]=o=>h.value=o),placeholder:"Name of function to call (e.g., extract_data)",size:"large"},null,8,["value"])]),_:1}),t(N,{label:"Timeout (ms)",class:"form-item"},{default:n(()=>[t(p,{value:V.value,"onUpdate:value":c[2]||(c[2]=o=>V.value=o),min:100,max:3e4,step:100,placeholder:"Execution timeout",size:"large",style:{width:"100%"}},null,8,["value"])]),_:1})]),t(g,{ghost:"",style:{"margin-top":"16px"}},{default:n(()=>[t(C,{key:"pyodide-info",header:"Python Support Info"},{default:n(()=>[t(S,{message:"Python runs in browser via Pyodide",type:"success","show-icon":!1,closable:!1},{description:n(()=>c[3]||(c[3]=[l("div",null,[f(" Python code runs in the browser using Pyodide with full NumPy, pandas, and scipy support. "),l("br"),l("br"),l("strong",null,"Standard library and built-in packages:"),f(" If importing from the Python standard library (re, json, statistics) or "),l("a",{href:"https://pyodide.org/en/stable/usage/packages-in-pyodide.html",target:"_blank"},"packages built for Pyodide"),f(" (numpy, scipy, nltk), just import as normal - no pip install required. "),l("br"),l("br"),l("strong",null,"For other PyPI packages:"),f(" Add this before your imports: "),l("pre",{style:{"margin-top":"8px",background:"#f5f5f5",padding:"8px","border-radius":"4px"}},`import micropip
await micropip.install('textcounts')
import textcounts`)],-1)])),_:1})]),_:1})]),_:1}),t(g,{ghost:""},{default:n(()=>[t(C,{key:"templates",header:"Code Templates"},{default:n(()=>[l("div",Oe,[(y(),x(q,null,Y(k,o=>l("div",{key:o.name,class:"code-template",onClick:i=>E(o)},[l("div",je,T(o.name),1),l("div",Be,T(o.description),1)],8,Ue)),64))])]),_:1})]),_:1})])}}}),De=B(Le,[["__scopeId","data-v-1fc9edb4"]]),Me={class:"parser-editor-page"},Je={class:"header-content"},qe={class:"page-title"},Ye={class:"editor-container"},Ze={key:0,class:"loading-container"},He={key:1,class:"editor-form"},We={class:"form-section"},Xe={class:"form-row"},Ke={class:"form-row"},Qe={class:"form-section"},et={class:"footer-content"},tt={class:"footer-stats"},at={key:0},nt={key:1},ot={key:0,class:"footer-validation"},rt={class:"validation-error"},st={key:0},lt={key:1},ut={key:2},it={key:3},dt={key:4,class:"pattern-error"},ct={class:"footer-actions"},pt=j({__name:"ParserEditor",setup(z){const P=se(),e=le(),d=b(()=>P.params.id),{form:a,patternError:h,saving:V,loading:k,isEditingBuiltIn:E,isValid:v,currentParser:c,validateRegexPattern:N,loadParser:m,save:p,setTypeDefaults:S}=Ve(d),C=b({get:()=>({pattern:a.value.regexPattern,flags:a.value.regexFlags,captureGroup:a.value.regexCaptureGroup}),set:u=>{a.value.regexPattern=u.pattern,a.value.regexFlags=u.flags,a.value.regexCaptureGroup=u.captureGroup}}),g=b({get:()=>({code:a.value.pythonCode,functionName:a.value.pythonFunctionName,timeout:a.value.pythonTimeout}),set:u=>{a.value.pythonCode=u.code,a.value.pythonFunctionName=u.functionName,a.value.pythonTimeout=u.timeout}});function o(u){S(u)}async function i(){try{await p();const u=E.value?"New parser created successfully":d.value?"Parser updated successfully":"Parser created successfully";U.success(u),e.push("/parsers")}catch(u){U.error(u instanceof Error?u.message:"Failed to save parser")}}function _(){e.push("/parsers")}function A(u){a.value.testCases=u}return re(async()=>{if(d.value)try{await m(d.value)}catch{U.error("Failed to load parser"),e.push("/parsers")}else{const u=P.query.type;u&&S(u)}}),(u,r)=>{const R=_e,X=me,K=ge,Q=D,I=L,G=xe,O=he,ee=Ce,te=ye,ae=ve,ne=be,oe=pe;return y(),x("div",Me,[t(oe,null,{default:n(()=>[t(X,{class:"editor-header"},{default:n(()=>[l("div",Je,[t(R,{type:"text",onClick:_,class:"back-button"},{icon:n(()=>[t(s(fe))]),default:n(()=>[r[7]||(r[7]=f(" Back to Parsers "))]),_:1,__:[7]}),l("h1",qe,T(s(E)?"Copy Built-in Parser":d.value?"Edit Parser":"Create Parser"),1)])]),_:1}),t(ae,{class:"editor-content"},{default:n(()=>[l("div",Ye,[s(k)?(y(),x("div",Ze,[t(K,{size:"large",tip:"Loading parser..."})])):(y(),x("div",He,[t(te,{model:s(a),layout:"vertical"},{default:n(()=>[l("div",We,[r[14]||(r[14]=l("div",{class:"section-header"},[l("h3",null,"Basic Information")],-1)),l("div",Xe,[t(I,{label:"Name",rules:[{required:!0,message:"Name is required"}],class:"form-item"},{default:n(()=>[t(Q,{value:s(a).name,"onUpdate:value":r[0]||(r[0]=w=>s(a).name=w),placeholder:"Enter parser name",size:"large"},null,8,["value"])]),_:1}),t(I,{label:"Type",class:"form-item"},{default:n(()=>[t(O,{value:s(a).type,"onUpdate:value":r[1]||(r[1]=w=>s(a).type=w),size:"large",disabled:!!d.value,onChange:o},{default:n(()=>[t(G,{value:"regex"},{default:n(()=>r[8]||(r[8]=[f("Regular Expression")])),_:1,__:[8]}),t(G,{value:"python"},{default:n(()=>r[9]||(r[9]=[f("Python")])),_:1,__:[9]})]),_:1},8,["value","disabled"])]),_:1})]),l("div",Ke,[t(I,{label:"Output Type",class:"form-item"},{default:n(()=>[t(O,{value:s(a).outputType,"onUpdate:value":r[2]||(r[2]=w=>s(a).outputType=w),size:"large"},{default:n(()=>[t(G,{value:"text"},{default:n(()=>r[10]||(r[10]=[f("Text")])),_:1,__:[10]}),t(G,{value:"number"},{default:n(()=>r[11]||(r[11]=[f("Number")])),_:1,__:[11]}),t(G,{value:"boolean"},{default:n(()=>r[12]||(r[12]=[f("Boolean")])),_:1,__:[12]}),t(G,{value:"json"},{default:n(()=>r[13]||(r[13]=[f("JSON")])),_:1,__:[13]})]),_:1},8,["value"])]),_:1}),t(I,{label:"Tags",class:"form-item"},{default:n(()=>[t(O,{value:s(a).tags,"onUpdate:value":r[3]||(r[3]=w=>s(a).tags=w),mode:"tags",placeholder:"Add tags for search",size:"large"},null,8,["value"])]),_:1})]),t(I,{label:"Description",class:"form-item full-width"},{default:n(()=>[t(ee,{value:s(a).description,"onUpdate:value":r[4]||(r[4]=w=>s(a).description=w),placeholder:"Optional description of what this parser does",rows:2,size:"large"},null,8,["value"])]),_:1})]),l("div",Qe,[r[15]||(r[15]=l("div",{class:"section-header"},[l("h3",null,"Parser Configuration")],-1)),s(a).type==="regex"?(y(),M($e,{key:0,modelValue:C.value,"onUpdate:modelValue":r[5]||(r[5]=w=>C.value=w),error:s(h),onValidate:s(N)},null,8,["modelValue","error","onValidate"])):s(a).type==="python"?(y(),M(De,{key:1,modelValue:g.value,"onUpdate:modelValue":r[6]||(r[6]=w=>g.value=w)},null,8,["modelValue"])):F("",!0)]),t(Ne,{parser:s(c),form:s(a),"auto-save-tests":!0,"onUpdate:testCases":A},null,8,["parser","form"])]),_:1},8,["model"])]))])]),_:1}),t(ne,{class:"editor-footer"},{default:n(()=>[l("div",et,[l("div",tt,[s(a).type==="regex"&&C.value.pattern?(y(),x("span",at," Pattern: "+T(C.value.pattern.length)+" chars ",1)):s(a).type==="python"&&g.value.code?(y(),x("span",nt," Code: "+T(g.value.code.split(`
`).length)+" lines ",1)):F("",!0)]),s(v)?F("",!0):(y(),x("div",ot,[l("span",rt,[r[16]||(r[16]=f(" Missing: ")),s(a).name.trim()?F("",!0):(y(),x("span",st,"Name")),s(a).name.trim()&&s(a).type==="regex"&&!C.value.pattern?(y(),x("span",lt,"Pattern")):F("",!0),s(a).name.trim()&&s(a).type==="python"&&!g.value.code?(y(),x("span",ut,"Code")):F("",!0),s(a).name.trim()&&s(a).type==="python"&&g.value.code&&!g.value.functionName?(y(),x("span",it,"Function Name")):F("",!0),s(h)?(y(),x("span",dt,T(s(h)),1)):F("",!0)])])),l("div",ct,[t(R,{size:"large",onClick:_},{default:n(()=>r[17]||(r[17]=[f(" Cancel ")])),_:1,__:[17]}),t(R,{size:"large",type:"primary",onClick:i,loading:s(V),disabled:!s(v)},{icon:n(()=>[t(s(Pe))]),default:n(()=>[f(" "+T(s(E)?"Create New Parser":d.value?"Save Changes":"Create Parser"),1)]),_:1},8,["loading","disabled"])])])]),_:1})]),_:1})])}}}),bt=B(pt,[["__scopeId","data-v-7ae4e2b5"]]);export{bt as default};
