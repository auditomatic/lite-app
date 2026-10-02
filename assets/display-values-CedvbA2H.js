import{F as s}from"./index-COfbS8HC.js";function f(e,r={}){if(!e)return"No request data available";let t=r.providerGroup;!t&&r.providerId&&(t=s.getProvider(r.providerId)?.group),t=t||r.providerId||"PROVIDER";const d=`${t.toUpperCase()}_API_KEY`;let n=`curl -X POST ${e.url} \\
`;if(e.headers)for(const[a,l]of Object.entries(e.headers)){const o=String(l);if(o.includes("REDACTED")){const i=/^Bearer\s+/i.test(o)?`Bearer \${${d}}`:`\${${d}}`;n+=`  -H "${a}: ${i}" \\
`}else{const i=a.toLowerCase();i.includes("authorization")||i.includes("api-key")||i.includes("x-api-key")?o.startsWith("Bearer ")?n+=`  -H "${a}: Bearer \${${d}}" \\
`:n+=`  -H "${a}: \${${d}}" \\
`:n+=`  -H "${a}: ${l}" \\
`}}if(e.body){const l=JSON.stringify(e.body,null,2).replace(/\\/g,"\\\\").replace(/'/g,"\\'");n+=`  -d $'${l}'`}return n}function c(e,r){if(e===0)return 0;if(e==null)switch(r.type){case"tokens":return"—";case"latency":return"Unknown";case"percentage":return"—";case"count":return 0;default:return r.fallback||"N/A"}return e}const y=e=>c(e,{type:"latency"});function $(e,r){return e==null||r===null||r===void 0?null:e+r}export{y as d,f as g,$ as s};
