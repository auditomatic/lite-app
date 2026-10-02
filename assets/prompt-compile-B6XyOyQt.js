import{a5 as l,a6 as d}from"./index-COfbS8HC.js";function E(t){if(t.sections)return t.sections.filter(e=>(e.body||"").trim()).map((e,o)=>({heading:(e.heading||"").trim()||`SECTION ${o+1}`,body:e.body}));const n=O(t.rubricRules||[]);return n?[{heading:"RUBRIC",body:n}]:[]}function b(t){return t.trim().toUpperCase().replace(/\s+/g," ")}function S(t){return d(t)}function c(t,n){return t.replace(/\{\{([^}]+)\}\}/g,(e,o)=>{const i=o.trim(),r=n[i];return r==null?"":String(r)})}function T(t,n){if(t.type==="number"){if(typeof n=="number")return n;const e=Number(n);return Number.isFinite(e)?e:n}return n==null?"":String(n)}function m(t){return t==null?!1:typeof t=="string"?t.trim().length>0:!0}function g(t,n){const e={};for(const o of t){if(!o.name)continue;const i=n[o.name];m(i)&&(e[o.name]=T(o,i))}return e}function P(t){return Object.values(t.output||{}).some(m)}function h(t,n){return n.sourceRowIndex===void 0&&n.customInputText!==void 0?n.customInputText.trim():c(t,n.input).trim()}function p(t,n){const e=" ".repeat(n);return t.split(`
`).map(o=>o.length?e+o:o).join(`
`)}function y(t,n,e){const o=t.filter(P);return o.length===0?"":o.map((r,s)=>{const u=s+1,a=h(e,r),f=JSON.stringify(g(n,r.output));return[`  <FEW SHOT EXAMPLE ${u}>`,"    <EXAMPLE INPUT>",p(a,6),"    </EXAMPLE INPUT>","    <EXAMPLE JSON OUTPUT>",p(f,6),"    </EXAMPLE JSON OUTPUT>",`  </FEW SHOT EXAMPLE ${u}>`].join(`
`)}).join(`
`)}function O(t){const n=t.map(e=>e.trim()).filter(Boolean);return n.length===0?"":n.map(e=>e.startsWith("-")?e:`- ${e}`).join(`
`)}function A(t,n){const e=[],o=(t.task||"").trim();o&&e.push(`<TASK>
${o}
</TASK>`);for(const s of E(t)){const u=b(s.heading);e.push(`<${u}>
${s.body.trim()}
</${u}>`)}const i=S(t),r=y(t.examples||[],i,n);return r&&e.push(`<FEW SHOT EXAMPLES>
${r}
</FEW SHOT EXAMPLES>`),e.join(`

`)}function v(t){return l(t)}function $(t){return v(t)==="raw"?t.systemPrompt||"":A(t,t.promptPattern||"")}export{A as a,h as b,$ as c,g as d,S as e,E as n,v as r};
