function a(t){return t instanceof Error?{name:t.name,message:t.message,...t.stack?{stack:t.stack}:{},...i(t)}:t&&typeof t=="object"?i(t):{message:String(t)}}function s(t){return u(a(t))}function i(t){const n={};for(const[r,e]of Object.entries(t))typeof e!="function"&&(n[r]=e);return n}function o(t){if(!t)return"No error details available";try{const n=t.response??t,r=a(n),e=r.debugInfo??t.debugInfo;return e?`API Request Details:
URL: ${e.url}
Status: ${e.status}

Request Body:
${JSON.stringify(e.requestBody,null,2)}

Response Body:
${JSON.stringify(e.responseBody,null,2)}

Error Details:
${JSON.stringify(e.errorDetails,null,2)}

Full Error Object:
${s(n)}`:r.stack?`Stack Trace:
${r.stack}

Full Error Object:
${s(n)}`:r.details?`Error Details:
${JSON.stringify(r.details,null,2)}

Full Error Object:
${s(n)}`:s(n)}catch{return String(t)}}function u(t){const n=new WeakSet;try{return JSON.stringify(t,(r,e)=>{if(e&&typeof e=="object"){if(n.has(e))return"[Circular]";n.add(e)}return e},2)??String(t)}catch{return String(t)}}export{o as a,s as f,a as s};
