import{e as t}from"./index-DfAdxqZE.js";function p(r,d={}){if(!r)return"No request data available";let i=d.providerGroup;!i&&d.providerId&&(i=t.getProvider(d.providerId)?.group),i=i||d.providerId||"PROVIDER";const n=`${i.toUpperCase()}_API_KEY`;let o=`curl -X POST ${r.url} \\
`;if(r.headers)for(const[e,l]of Object.entries(r.headers)){const s=String(l);if(s.includes("...REDACTED")){const a=s.replace(/[^\s]+\.\.\.REDACTED/,`\${${n}}`);o+=`  -H "${e}: ${a}" \\
`}else{const a=e.toLowerCase();a.includes("authorization")||a.includes("api-key")||a.includes("x-api-key")?s.startsWith("Bearer ")?o+=`  -H "${e}: Bearer \${${n}}" \\
`:o+=`  -H "${e}: \${${n}}" \\
`:o+=`  -H "${e}: ${l}" \\
`}}if(r.body){const l=JSON.stringify(r.body,null,2).replace(/\\/g,"\\\\").replace(/'/g,"\\'");o+=`  -d $'${l}'`}return o}export{p as g};
