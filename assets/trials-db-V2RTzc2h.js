var e=Object.defineProperty,t=(t,r,s)=>((t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s)(t,"symbol"!=typeof r?r+"":r,s);import{ag as r,f as s,c as a,ai as o}from"./vendor-DCf9YP3r.js";import{l as n}from"./db-CL8uhZCz.js";import{i}from"./index-dQqVkRMY.js";import{g as l}from"./defaultData-DyqJdH2z.js";import{p as c}from"./registry-DiQCbBcP.js";import{b as u,E as d}from"./designs-db-D4FnITPe.js";import{MockProviderService as p}from"./mock-provider.service-BAPeV6CB.js";import{u as f}from"./settings-db-CBuX-T7S.js";import{l as h}from"./logger.service-_k__GSpu.js";class g{static extractContent(e,t){if(!e)return{success:!1,error:"No response body"};const r=this.getValueAtPath(e,t.contentPath);if(null!=r){if(t.isJSON&&"string"==typeof r)try{const e=JSON.parse(r);if(e&&"object"==typeof e&&"answer"in e){const t=e.answer;return{success:!0,content:"object"==typeof t&&null!==t?JSON.stringify(t):String(t)}}return{success:!0,content:JSON.stringify(e)}}catch{return{success:!0,content:String(r)}}return{success:!0,content:String(r)}}if(t.fallbackPaths)for(const s of t.fallbackPaths){const t=this.getValueAtPath(e,s);if(null!=t)return{success:!0,content:String(t)}}if(t.errorPath){const r=this.getValueAtPath(e,t.errorPath);if(null!=r)return{success:!1,error:String(r)}}return{success:!1,error:`No content found at path '${t.contentPath}' or fallback paths`}}static getValueAtPath(e,t){if(e&&t)try{const r=t.split(".").flatMap(e=>{const t=e.match(/^([^[]+)\[(\d+)\]$/);if(t)return[t[1],parseInt(t[2])];const r=e.match(/^\[(\d+)\]$/);return r?[parseInt(r[1])]:[e]});let s=e;for(const e of r){if(null==s)return;s=s[e]}return s}catch(r){return}}}class m{static detectRefusal(e,t){if(!e||!t||0===t.length)return!1;const r=e.toLowerCase();for(const s of t)if(r.includes(s.toLowerCase()))return!0;return!1}static async getRefusalWords(e){const t=e.designSnapshot,r=[];if(t.refusalWords&&t.refusalWords.length>0&&r.push(...t.refusalWords),t.refusalWordsListRef)try{const e=await i.variableLists.get(t.refusalWordsListRef);e&&e.values&&r.push(...e.values)}catch(s){console.warn("Failed to load refusal words list:",s)}return r}static async processRefusalDetection(e,t){if(!e.result||!e.result.success||!e.result.content)return;const r=await this.getRefusalWords(t);if(0===r.length)return;const s=String(e.result.content),a=this.detectRefusal(s,r);e.result.refused=a,a&&t.designSnapshot.rejectRefusalWords&&(e.result.success=!1,e.result.error="Response contained refusal words")}}class y{constructor(e){t(this,"options"),t(this,"abortController"),this.options={maxRetries:3,retryDelay:5e3,rateLimitDelay:1e3,...e}}async executeAPICall(e,t,r){e.status="running",e.created=new Date,this.options.onProgress?.(e);try{const s=this.options.getApiKey(t.provider),a=this.options.getBaseUrl(t.provider);if(!s&&c.requiresApiKey(t.provider))throw new Error(`No API key configured for provider: ${t.provider}`);const o={id:`${t.provider}:${t.modelId}`,name:t.name,provider:t.provider,model:t.modelId,params:t.parameters,created_at:new Date},n=this.getResponseModeFromConfig(t),i=u.buildAPIRequest(o,e.prompt,s,a,n);let l;if(e.request={...i,timestamp:new Date},l=p.isMockEnabled()?await p.generateMockResponse(t.provider,i):await this.executeWithRetries(i),e.response=l,n?.responseTransform){const t=g.extractContent(l.body,n.responseTransform);if(e.result=t,r&&e.result.success&&e.result.content&&r.designSnapshot.extractPattern){const t="string"==typeof r.designSnapshot.extractPattern?r.designSnapshot.extractPattern:r.designSnapshot.extractPattern.pattern,s=d.testExtraction(String(e.result.content),t);null!==s&&(e.result.content=s)}}else e.result={success:!1,error:"No responseTransform configuration found for this response mode"};return r&&e.result&&await m.processRefusalDetection(e,r),e.status="completed",e.completed=new Date,this.options.onProgress?.(e),e}catch(s){return e.status="failed",s.fullResponse&&(e.response=s.fullResponse),e.result?e.result.error=s instanceof Error?s.message:String(s):e.result={success:!1,error:s instanceof Error?s.message:String(s)},e.completed=new Date,this.options.onError?.(e,s),e}}async executeWithRetries(e){let t=null;for(let s=0;s<this.options.maxRetries;s++)try{const r=Date.now(),a=await fetch(e.url,{method:e.method,headers:e.headers,body:JSON.stringify(e.body),signal:this.abortController?.signal}),o=Date.now()-r,n=await a.text();let i;try{i=JSON.parse(n)}catch{i=n}const l={status:a.status,headers:Object.fromEntries(a.headers.entries()),body:i,latencyMs:o};if(!a.ok){const e=u.extractErrorMessage(i),r=new Error(`API error (${a.status}): ${e}`);if(r.fullResponse=l,this.shouldRetry(a.status,s)){t=r,await this.delay(this.getRetryDelay(a.status,s));continue}throw r}if(u.isErrorResponse(i)){const e=u.extractErrorMessage(i);throw new Error(`Provider error: ${e}`)}return this.options.rateLimitDelay&&this.options.rateLimitDelay>0&&await this.delay(this.options.rateLimitDelay),l}catch(r){if(r instanceof Error&&"AbortError"===r.name)throw new Error("API call execution aborted");if(t=r,s<this.options.maxRetries-1){await this.delay(this.options.retryDelay);continue}}throw t||new Error("Unknown error during API execution")}shouldRetry(e,t){return!(t>=this.options.maxRetries-1)&&(429===e||e>=500)}getRetryDelay(e,t){return 429===e?Math.min(1e3*Math.pow(2,t),6e4):this.options.retryDelay}delay(e){return new Promise(t=>setTimeout(t,e))}abort(){this.abortController?.abort()}getResponseModeFromConfig(e){const t=c.getProvider(e.provider);if(!t?.responseModes)return null;for(const[,r]of Object.entries(t.responseModes)){const t=r.parameters||{};if(Object.keys(t).every(t=>t in e.parameters)&&Object.keys(t).length>0)return r}return t.responseModes.text||Object.values(t.responseModes)[0]}}class w{constructor(e){t(this,"executor"),t(this,"aborted",!1),t(this,"providerConcurrency"),this.executor=new y(e),this.providerConcurrency={};for(const[t,r]of Object.entries(c.getAllProviders()))this.providerConcurrency[t]=e.providerConcurrency?.[t]||r.execution?.defaultConcurrency||4}async executeBatch(e,t){const r=new Map;for(const a of e){const e=t.configurationSnapshots[a.configurationIndex];if(!e){a.status="failed",a.result={success:!1,error:`Configuration not found at index: ${a.configurationIndex}`};continue}const s=e.provider;r.has(s)||r.set(s,[]),r.get(s).push(a)}e.length,r.size;for(const[a,o]of r){this.providerConcurrency[a];o.length}const s=Array.from(r.entries()).map(([e,r])=>this.executeProviderBatch(e,r,t));return(await Promise.all(s)).flat()}async executeProviderBatch(e,t,r){const s=[],a=[...t],o=new Set,n=new Map,i=this.providerConcurrency[e]||4;for(;(a.length>0||o.size>0)&&!this.aborted;){const e=this.getEligibleCallsForConcurrency(a,n);for(;e.length>0&&o.size<i&&!this.aborted;){const t=e.shift(),i=r.configurationSnapshots[t.configurationIndex],l=a.indexOf(t);l>=0&&a.splice(l,1);const c=(async()=>(r.repeatConfig?.delayBetweenRepeats&&void 0!==t.repeatIndex&&t.repeatIndex>0&&await new Promise(e=>setTimeout(e,r.repeatConfig?.delayBetweenRepeats||0)),this.executor.executeAPICall(t,i,r)))().then(e=>(s.push(e),o.delete(c),t.repeatGroupId&&n.delete(t.repeatGroupId),e)).catch(e=>(t.status="failed",t.result={success:!1,error:e.message},s.push(t),o.delete(c),t.repeatGroupId&&n.delete(t.repeatGroupId),t));o.add(c),t.repeatGroupId&&n.set(t.repeatGroupId,c)}o.size>0&&await Promise.race(o)}return s}getEligibleCallsForConcurrency(e,t){const r=[],s=new Set(t.keys());for(const a of e)a.repeatGroupId?s.has(a.repeatGroupId)||(r.push(a),s.add(a.repeatGroupId)):r.push(a);return r}abort(){this.aborted=!0,this.executor.abort()}}function b(e){return e.repeatConfig?.callsPerPrompt??1}function v(e){return b(e)>1}function x(e){return e.repeatIndex??0}function C(){return`rg_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}function P(e){const t=new Map;return e.forEach(e=>{const r=e.repeatGroupId||e.id;t.has(r)||t.set(r,[]),t.get(r).push(e)}),t.forEach(e=>{e.sort((e,t)=>x(e)-x(t))}),t}function I(e){if(e.length<=1)return 100;const t=e.filter(e=>e.result?.success&&void 0!==e.result?.content).map(e=>JSON.stringify(e.result.content));if(0===t.length)return 0;const r=new Map;t.forEach(e=>{r.set(e,(r.get(e)||0)+1)});const s=Math.max(...r.values());return Math.round(s/t.length*100)}function S(e){const t=e.filter(e=>e.result?.success),r=e.filter(e=>void 0!==e.response?.latencyMs).map(e=>e.response.latencyMs),s=e.filter(e=>e.response?.body?.choices?.[0]?.message?.content).map(e=>e.response.body.choices[0].message.content.length);return{totalCalls:e.length,successfulCalls:t.length,successRate:e.length>0?Math.round(t.length/e.length*100):0,consistencyScore:I(e),avgResponseTime:r.length>0?Math.round(r.reduce((e,t)=>e+t,0)/r.length):0,avgResponseLength:s.length>0?Math.round(s.reduce((e,t)=>e+t,0)/s.length):0,minResponseTime:r.length>0?Math.min(...r):0,maxResponseTime:r.length>0?Math.max(...r):0,minResponseLength:s.length>0?Math.min(...s):0,maxResponseLength:s.length>0?Math.max(...s):0}}class E{constructor(e){t(this,"batchExecutor"),this.batchExecutor=new w(e)}generateVariableCombinations(e){if(0===e.variableSnapshots.length)return[{variables:{}}];let t=[{variables:{}}];for(const r of e.variableSnapshots){const e=[];for(const s of t)if("simple"===r.category&&r.data.values)for(const t of r.data.values)e.push({variables:{...s.variables,[r.variableName]:t},attributes:s.attributes});else if("attributed"===r.category&&r.data.items)for(const t of r.data.items){const a=s.attributes||{};a[r.variableName]=t.attributes,e.push({variables:{...s.variables,[r.variableName]:t.value},attributes:a})}t=e}return t}generateAPICallsFromTrial(e){const t=[],r=this.generateVariableCombinations(e),s=e.repeatConfig?.callsPerPrompt||1;return e.configurationSnapshots.forEach((a,o)=>{r.forEach(r=>{const a=s>1?C():void 0;let n=e.designSnapshot.promptTemplate;Object.entries(r.variables).forEach(([e,t])=>{const r=`{{${e}}}`;n=n.replace(new RegExp(r,"g"),t)});for(let i=0;i<s;i++){const c={id:l(),trialId:e.id,configurationIndex:o,variables:r.variables,variableAttributes:r.attributes,prompt:n,...s>1&&{repeatIndex:i,repeatGroupId:a},request:{url:"",method:"POST",headers:{},body:{},timestamp:new Date},status:"pending",created:new Date};t.push(c)}})}),t}async executeTrial(e){const t=this.generateAPICallsFromTrial(e);return await this.batchExecutor.executeBatch(t,e)}abort(){this.batchExecutor.abort()}}const R=r("trials",()=>{const e=s([]),t=s(!1),r=s(null);let d=null,p=new Map;async function g(e,t){try{await i.trials.update(e,t)}catch(r){throw h.error("Failed to update trial",r),new Error("Failed to update trial")}}async function m(e){try{return await i.trials.get(e)}catch(t){return void h.error("Failed to get trial",t)}}function y(e,t,r){if(!r?.tokenEstimate)return null;let s=0;for(const a of e){const e=a.modelSnapshot;if(!e.capabilities?.inputCostPerToken||!e.capabilities?.outputCostPerToken)return null;const o=r.tokenEstimate.avgTokens,n=u.getOutputTokenLimit(e.provider,e.modelId,a.parameters||{});s+=(o*e.capabilities.inputCostPerToken+n*e.capabilities.outputCostPerToken)*t}return s}const w=a(()=>{const t={draft:[],running:[],completed:[],failed:[],cancelled:[]};return e.value.forEach(e=>{t[e.status].push(e)}),t}),b=a(()=>e.value.slice().sort((e,t)=>t.created.getTime()-e.created.getTime()).slice(0,10));return{trials:o(e),isLoading:o(t),error:o(r),trialsByStatus:w,recentTrials:b,initialize:async function(){if(!d){t.value=!0,r.value=null;try{d=n(()=>i.trials.orderBy("created").reverse().toArray()).subscribe({next:r=>{e.value=r,t.value=!1},error:e=>{h.error("Trials store subscription error",e),r.value="Failed to load trials",t.value=!1}})}catch(s){h.error("Failed to initialize trials store",s),r.value="Failed to initialize trials",t.value=!1}}},createTrial:async function(e){const t=l(),r=new Date;try{const s=await i.designs.get(e.designId);if(!s)throw new Error("Design not found");const a=[];if(s.variableBindings)for(const[e,t]of Object.entries(s.variableBindings))if("list"===t.type&&t.listId){const s=await i.variableLists.get(t.listId);if(!s)throw new Error(`Variable list not found for variable ${e}: ${t.listId}`);a.push({originalListId:s.id,originalListName:s.name,variableName:e,category:s.category,data:{values:s.values,attributeKeys:s.attributeKeys,items:s.items,itemCount:s.itemCount},snapshotDate:r})}else"direct"===t.type&&t.values&&a.push({originalListId:`direct-${e}`,originalListName:`Direct values for ${e}`,variableName:e,category:"simple",data:{values:[...t.values],itemCount:t.values.length},snapshotDate:r});const o=[];for(const t of e.configurations){const e=c.getProvider(t.provider);if(!e)throw new Error(`Provider not found: ${t.provider}`);const r=await i.models.get(`${t.provider}:${t.modelId}`);if(!r)throw new Error(`Model not found: ${t.provider}:${t.modelId}`);o.push({name:t.name,provider:t.provider,modelId:t.modelId,parameters:{...t.parameters},providerSnapshot:JSON.parse(JSON.stringify(e)),modelSnapshot:JSON.parse(JSON.stringify(r))})}const n=function(e){return 0===e.length?0:e.reduce((e,t)=>e*t.data.itemCount,1)}(a),l={id:t,name:e.name,designSnapshot:{originalId:s.id,originalName:s.name,promptTemplate:s.promptTemplate,variableBindings:JSON.parse(JSON.stringify(s.variableBindings)),outputType:s.outputType,extractPattern:s.extractPattern,refusalWords:s.refusalWords?[...s.refusalWords]:void 0,refusalWordsListRef:s.refusalWordsListRef,refusalWordsSource:s.refusalWordsSource,rejectRefusalWords:s.rejectRefusalWords,snapshotDate:r},configurationSnapshots:o,variableSnapshots:a,status:"draft",progress:{total:n*o.length*(e.repeatConfig?.callsPerPrompt||1),completed:0,networkErrors:0},totalCombinations:n,estimatedCost:(y(o,n,s)||0)*(e.repeatConfig?.callsPerPrompt||1),repeatConfig:e.repeatConfig,created:r};return await i.trials.add(l),t}catch(s){throw h.error("Failed to create trial",s),new Error(`Failed to create trial: ${s instanceof Error?s.message:"Unknown error"}`)}},updateTrial:g,duplicateTrial:async function(e){try{const t=await i.trials.get(e);if(!t)throw new Error("Trial not found");const r=l(),s={...t,id:r,name:`${t.name} (Copy)`,status:"pending",progress:{total:t.progress.total,completed:0,networkErrors:0},created:new Date};return await i.trials.add(s),r}catch(t){throw h.error("Failed to duplicate trial",t),new Error(`Failed to duplicate trial: ${t instanceof Error?t.message:"Unknown error"}`)}},deleteTrial:async function(e){try{await i.transaction("rw",[i.trials,i.apiCalls],async()=>{await i.apiCalls.where("trialId").equals(e).delete(),await i.trials.delete(e)})}catch(t){throw h.error("Failed to delete trial",t),new Error("Failed to delete trial")}},getTrial:m,executeTrial:async function(e){const t=await m(e);if(!t)throw new Error(`Trial not found: ${e}`);const r=f(),s=new E({getApiKey:e=>r.getApiKey(e),getBaseUrl:e=>r.getBaseUrl(e),providerConcurrency:(await i.settings.get("main"))?.providerConcurrency,onProgress:async t=>{try{if(await i.apiCalls.put(t),"completed"===t.status||"failed"===t.status){const t=await i.trials.get(e);if(t){const r=await i.apiCalls.where("trialId").equals(e).toArray(),s=r.filter(e=>"completed"===e.status||"failed"===e.status).length;t.progress={total:t.configurationSnapshots.length*t.totalCombinations*(t.repeatConfig?.callsPerPrompt||1),completed:s,networkErrors:r.filter(e=>"failed"===e.status).length},await i.trials.put(t)}}}catch(r){h.warn("Progress update failed:",{error:r})}},onError:async(e,t)=>{h.error("API call failed",t),await i.apiCalls.put(e)}});try{p.set(e,s),await g(e,{status:"running"});const r=await i.apiCalls.where("trialId").equals(e).toArray(),a=s.generateAPICallsFromTrial(t),o=new Set(r.filter(e=>"completed"===e.status||"failed"===e.status).map(e=>`${e.configurationIndex}-${JSON.stringify(e.variables)}`)),n=a.filter(e=>!o.has(`${e.configurationIndex}-${JSON.stringify(e.variables)}`));h.info(`Resuming trial: ${r.length} existing, ${n.length} pending`);const l=n.length>0?await s.batchExecutor.executeBatch(n,t):[];l.length>0&&await i.apiCalls.bulkPut(l);const c=await i.trials.get(e);if("running"===c?.status){const r=t.configurationSnapshots.length*t.totalCombinations*(t.repeatConfig?.callsPerPrompt||1),s=(await i.apiCalls.where("trialId").equals(e).toArray()).filter(e=>"completed"===e.status||"failed"===e.status).length,a=s===r;h.debug(`Trial completion check: ${s}/${r} calls complete`),await g(e,{status:a?"completed":"paused"})}else h.debug(`Trial status is ${c?.status}, not updating from execution`)}catch(a){throw h.error("Trial execution failed",a),await g(e,{status:"failed"}),a}finally{p.delete(e)}},pauseTrial:async function(e){const t=p.get(e);t&&(t.abort(),p.delete(e)),await g(e,{status:"paused"})},cancelTrial:async function(e){const t=p.get(e);t&&(t.abort(),p.delete(e)),await g(e,{status:"cancelled"})},destroy:function(){d&&(d.unsubscribe(),d=null)}}});export{E as T,b as a,C as b,S as c,P as g,v as i,R as u};
