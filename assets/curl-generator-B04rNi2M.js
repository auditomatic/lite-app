import{C as l}from"./index-BwtJfrbj.js";function p(r,d={}){if(!r)return"No request data available";let i=d.providerGroup;!i&&d.providerId&&(i=l.getProvider(d.providerId)?.group),i=i||d.providerId||"PROVIDER";const t=`${i.toUpperCase()}_API_KEY`;let o=`curl -X POST ${r.url} \\
`;if(r.headers)for(const[e,s]of Object.entries(r.headers)){const n=String(s);if(n.includes("REDACTED")){const a=/^Bearer\s+/i.test(n)?`Bearer \${${t}}`:`\${${t}}`;o+=`  -H "${e}: ${a}" \\
`}else{const a=e.toLowerCase();a.includes("authorization")||a.includes("api-key")||a.includes("x-api-key")?n.startsWith("Bearer ")?o+=`  -H "${e}: Bearer \${${t}}" \\
`:o+=`  -H "${e}: \${${t}}" \\
`:o+=`  -H "${e}: ${s}" \\
`}}if(r.body){const s=JSON.stringify(r.body,null,2).replace(/\\/g,"\\\\").replace(/'/g,"\\'");o+=`  -d $'${s}'`}return o}export{p as g};
