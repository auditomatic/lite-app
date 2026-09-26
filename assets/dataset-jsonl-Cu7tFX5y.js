function e(n){return n!=null?String(n):""}function i(n){return n.rows.map(t=>{const r={};for(const o of n.columns)r[o]=e(t[o]);return`${JSON.stringify(r)}
`}).join("")}export{i as generateDatasetJsonl};
