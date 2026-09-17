import{U as l,W as d,X as E,Y as b}from"./index-Bu6hMoZ7.js";function S(t){if(t.sections)return t.sections.filter(e=>(e.body||"").trim()).map((e,o)=>({heading:(e.heading||"").trim()||`SECTION ${o+1}`,body:e.body}));const n=A(t.rubricRules||[]);return n?[{heading:"RUBRIC",body:n}]:[]}function P(t){return t.trim().toUpperCase().replace(/\s+/g," ")}function T(t){return b(t)}function a(t,n){return t.replace(/\{\{([^}]+)\}\}/g,(e,o)=>{const i=o.trim(),r=n[i];return r==null?"":String(r)})}function g(t,n){if(t.type==="number"){if(typeof n=="number")return n;const e=Number(n);return Number.isFinite(e)?e:n}return n==null?"":String(n)}function f(t){return t==null?!1:typeof t=="string"?t.trim().length>0:!0}function h(t,n){const e={};for(const o of t){if(!o.name)continue;const i=n[o.name];f(i)&&(e[o.name]=g(o,i))}return e}function y(t){return Object.values(t.output||{}).some(f)}function O(t,n){return n.sourceRowIndex===void 0&&n.customInputText!==void 0?n.customInputText.trim():a(t,n.input).trim()}function m(t,n){const e=" ".repeat(n);return t.split(`
`).map(o=>o.length?e+o:o).join(`
`)}function F(t,n,e){const o=t.filter(y);return o.length===0?"":o.map((r,u)=>{const s=u+1,c=O(e,r),p=JSON.stringify(h(n,r.output));return[`  <FEW SHOT EXAMPLE ${s}>`,"    <EXAMPLE INPUT>",m(c,6),"    </EXAMPLE INPUT>","    <EXAMPLE JSON OUTPUT>",m(p,6),"    </EXAMPLE JSON OUTPUT>",`  </FEW SHOT EXAMPLE ${s}>`].join(`
`)}).join(`
`)}function A(t){const n=t.map(e=>e.trim()).filter(Boolean);return n.length===0?"":n.map(e=>e.startsWith("-")?e:`- ${e}`).join(`
`)}function v(t,n,e={}){const o=[],i=(t.task||"").trim();i&&o.push(`<TASK>
${i}
</TASK>`);for(const c of S(t)){const p=P(c.heading);o.push(`<${p}>
${c.body.trim()}
</${p}>`)}const r=T(t),u=F(t.examples||[],r,n);u&&o.push(`<FEW SHOT EXAMPLES>
${u}
</FEW SHOT EXAMPLES>`);const s=e.includeResponseFormat===!1?"":d({fields:r},E(t));return s&&o.push(s),o.join(`

`)}function R(t){return l(t)}function X(t,n={}){return R(t)==="raw"?t.systemPrompt||"":v(t,t.promptPattern||"",n)}export{X as a,O as b,v as c,h as d,T as e,S as n,R as r};
