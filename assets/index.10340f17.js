(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}})();const m={},se=(e,t)=>e===t,j={equals:se};let ne=W;const v={},x=1,$=2,K={owned:null,cleanups:null,context:null,owner:null};var h=null;let N=null,u=null,E=null,a=null,y=null,M=0;function ie(e,t){const s=u,n=h,i=e.length===0,l=i?K:{owned:null,cleanups:null,context:null,owner:t||n},r=i?e:()=>e(()=>B(l));h=l,u=null;try{return O(r,!0)}finally{u=s,h=n}}function w(e,t,s){const n=G(e,t,!1,x);T(n)}function le(e,t,s){s=s?Object.assign({},j,s):j;const n=G(e,t,!0,0);return n.pending=v,n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,T(n),re.bind(n)}function oe(e){if(E)return e();let t;const s=E=[];try{t=e()}finally{E=null}return O(()=>{for(let n=0;n<s.length;n+=1){const i=s[n];if(i.pending!==v){const l=i.pending;i.pending=v,X(i,l)}}},!1),t}function R(e){let t,s=u;return u=null,t=e(),u=s,t}function re(){const e=N;if(this.sources&&(this.state||e)){const t=a;a=null,this.state===x||e?T(this):L(this),a=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function X(e,t,s){if(E)return e.pending===v&&E.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let n=!1;return e.value=t,e.observers&&e.observers.length&&O(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];n&&N.disposed.has(l),(n&&!l.tState||!n&&!l.state)&&(l.pure?a.push(l):y.push(l),l.observers&&J(l)),n||(l.state=x)}if(a.length>1e6)throw a=[],new Error},!1),t}function T(e){if(!e.fn)return;B(e);const t=h,s=u,n=M;u=h=e,fe(e,e.value,n),u=s,h=t}function fe(e,t,s){let n;try{n=e.fn(t)}catch(i){Y(i)}(!e.updatedAt||e.updatedAt<=s)&&(e.observers&&e.observers.length?X(e,n):e.value=n,e.updatedAt=s)}function G(e,t,s,n=x,i){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:s};return h===null||h!==K&&(h.owned?h.owned.push(l):h.owned=[l]),l}function Q(e){const t=N;if(e.state===0||t)return;if(e.state===$||t)return L(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<M);)(e.state||t)&&s.push(e);for(let n=s.length-1;n>=0;n--)if(e=s[n],e.state===x||t)T(e);else if(e.state===$||t){const i=a;a=null,L(e,s[0]),a=i}}function O(e,t){if(a)return e();let s=!1;t||(a=[]),y?s=!0:y=[],M++;try{const n=e();return ce(s),n}catch(n){a||(y=null),Y(n)}}function ce(e){a&&(W(a),a=null),!e&&(y.length?oe(()=>{ne(y),y=null}):y=null)}function W(e){for(let t=0;t<e.length;t++)Q(e[t])}function L(e,t){const s=N;e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];i.sources&&(i.state===x||s?i!==t&&Q(i):(i.state===$||s)&&L(i,t))}}function J(e){const t=N;for(let s=0;s<e.observers.length;s+=1){const n=e.observers[s];(!n.state||t)&&(n.state=$,n.pure?a.push(n):y.push(n),n.observers&&J(n))}}function B(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),i=s.observers;if(i&&i.length){const l=i.pop(),r=s.observerSlots.pop();n<i.length&&(l.sourceSlots[r]=n,i[n]=l,s.observerSlots[n]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)B(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Y(e){throw e}function C(e,t){return R(()=>e(t||{}))}const ue=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ae=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ue]),de=new Set(["innerHTML","textContent","innerText","children"]),he={className:"class",htmlFor:"for"},I={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},ge=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ye={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function me(e,t){return le(e,void 0,t?void 0:{equals:t})}function we(e,t,s){let n=s.length,i=t.length,l=n,r=0,o=0,c=t[i-1].nextSibling,f=null;for(;r<i||o<l;){if(t[r]===s[o]){r++,o++;continue}for(;t[i-1]===s[l-1];)i--,l--;if(i===r){const d=l<n?o?s[o-1].nextSibling:s[l-o]:c;for(;o<l;)e.insertBefore(s[o++],d)}else if(l===o)for(;r<i;)(!f||!f.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[l-1]&&s[o]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(s[o++],t[r++].nextSibling),e.insertBefore(s[--l],d),t[i]=s[l]}else{if(!f){f=new Map;let g=o;for(;g<l;)f.set(s[g],g++)}const d=f.get(t[r]);if(d!=null)if(o<d&&d<l){let g=r,_=1,D;for(;++g<i&&g<l&&!((D=f.get(t[g]))==null||D!==d+_);)_++;if(_>d-o){const te=t[r];for(;o<d;)e.insertBefore(s[o++],te)}else e.replaceChild(s[o++],t[r++])}else r++;else t[r++].remove()}}}const q="_$DX_DELEGATE";function pe(e,t,s){let n;return ie(i=>{n=i,t===document?e():b(t,e(),t.firstChild?null:void 0,s)}),()=>{n(),t.textContent=""}}function k(e,t,s){const n=document.createElement("template");n.innerHTML=e;let i=n.content.firstChild;return s&&(i=i.firstChild),i}function be(e,t=window.document){const s=t[q]||(t[q]=new Set);for(let n=0,i=e.length;n<i;n++){const l=e[n];s.has(l)||(s.add(l),t.addEventListener(l,ve))}}function S(e,t,s){s==null?e.removeAttribute(t):e.setAttribute(t,s)}function Ae(e,t,s,n){n==null?e.removeAttributeNS(t,s):e.setAttributeNS(t,s,n)}function xe(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ee(e,t,s,n){if(n)Array.isArray(s)?(e[`$$${t}`]=s[0],e[`$$${t}Data`]=s[1]):e[`$$${t}`]=s;else if(Array.isArray(s)){const i=s[0];e.addEventListener(t,s[0]=l=>i.call(e,s[1],l))}else e.addEventListener(t,s)}function Ne(e,t,s={}){const n=Object.keys(t||{}),i=Object.keys(s);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||t[o]||(U(e,o,!1),delete s[o])}for(l=0,r=n.length;l<r;l++){const o=n[l],c=!!t[o];!o||o==="undefined"||s[o]===c||!c||(U(e,o,!0),s[o]=c)}return s}function ee(e,t,s={}){const n=e.style,i=typeof s=="string";if(t==null&&i||typeof t=="string")return n.cssText=t;i&&(n.cssText=void 0,s={}),t||(t={});let l,r;for(r in s)t[r]==null&&n.removeProperty(r),delete s[r];for(r in t)l=t[r],l!==s[r]&&(n.setProperty(r,l),s[r]=l);return s}function z(e,t,s,n){typeof t=="function"?w(i=>H(e,t(),i,s,n)):H(e,t,void 0,s,n)}function b(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return A(e,t,n,s);w(i=>A(e,t(),i,s),n)}function Ce(e,t,s,n,i={},l=!1){t||(t={});for(const r in i)if(!(r in t)){if(r==="children")continue;V(e,r,null,i[r],s,l)}for(const r in t){if(r==="children"){n||A(e,t.children);continue}const o=t[r];i[r]=V(e,r,o,i[r],s,l)}}function Se(e){return e.toLowerCase().replace(/-([a-z])/g,(t,s)=>s.toUpperCase())}function U(e,t,s){const n=t.trim().split(/\s+/);for(let i=0,l=n.length;i<l;i++)e.classList.toggle(n[i],s)}function V(e,t,s,n,i,l){let r,o,c;if(t==="style")return ee(e,s,n);if(t==="classList")return Ne(e,s,n);if(s===n)return n;if(t==="ref")l||s(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);n&&e.removeEventListener(f,n),s&&e.addEventListener(f,s)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);n&&e.removeEventListener(f,n,!0),s&&e.addEventListener(f,s,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=ge.has(f);if(!d&&n){const g=Array.isArray(n)?n[0]:n;e.removeEventListener(f,g)}(d||s)&&(Ee(e,f,s,d),d&&be([f]))}else if((c=de.has(t))||!i&&(I[t]||(o=ae.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?xe(e,s):r&&!o&&!c?e[Se(t)]=s:e[I[t]||t]=s;else{const f=i&&t.indexOf(":")>-1&&ye[t.split(":")[0]];f?Ae(e,f,t,s):S(e,he[t]||t,s)}return s}function ve(e){const t=`$$${e.type}`;let s=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==s&&Object.defineProperty(e,"target",{configurable:!0,value:s}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return s||document}}),m.registry&&!m.done&&(m.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));s!==null;){const n=s[t];if(n&&!s.disabled){const i=s[`${t}Data`];if(i!==void 0?n.call(s,i,e):n.call(s,e),e.cancelBubble)return}s=s.host&&s.host!==s&&s.host instanceof Node?s.host:s.parentNode}}function H(e,t,s={},n,i){return t||(t={}),!i&&"children"in t&&w(()=>s.children=A(e,t.children,s.children)),t.ref&&t.ref(e),w(()=>Ce(e,t,n,!0,s,!0)),s}function A(e,t,s,n,i){for(m.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const l=typeof t,r=n!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,l==="string"||l==="number"){if(m.context)return s;if(l==="number"&&(t=t.toString()),r){let o=s[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),s=p(e,s,n,o)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||l==="boolean"){if(m.context)return s;s=p(e,s,n)}else{if(l==="function")return w(()=>{let o=t();for(;typeof o=="function";)o=o();s=A(e,o,s,n)}),()=>s;if(Array.isArray(t)){const o=[],c=s&&Array.isArray(s);if(P(o,t,s,i))return w(()=>s=A(e,o,s,n,!0)),()=>s;if(m.context){for(let f=0;f<o.length;f++)if(o[f].parentNode)return s=o}if(o.length===0){if(s=p(e,s,n),r)return s}else c?s.length===0?Z(e,o,n):we(e,s,o):(s&&p(e),Z(e,o));s=o}else if(t instanceof Node){if(m.context&&t.parentNode)return s=r?[t]:t;if(Array.isArray(s)){if(r)return s=p(e,s,n,t);p(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function P(e,t,s,n){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],c=s&&s[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=P(e,o,c)||i;else if(typeof o=="function")if(n){for(;typeof o=="function";)o=o();i=P(e,Array.isArray(o)?o:[o],c)||i}else e.push(o),i=!0;else{const f=String(o);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return i}function Z(e,t,s){for(let n=0,i=t.length;n<i;n++)e.insertBefore(t[n],s)}function p(e,t,s,n){if(s===void 0)return e.textContent="";const i=n||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,s):c&&o.remove()}else l=!0}}else e.insertBefore(i,s);return[i]}const $e=k('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>'),Le=k("<title></title>");function F(e,t){return(()=>{const s=$e.cloneNode(!0);return z(s,()=>e.a,!0,!0),z(s,t,!0,!0),b(s,(()=>{const n=me(()=>!!t.title,!0);return()=>n()&&(()=>{const i=Le.cloneNode(!0);return b(i,()=>t.title),i})()})()),w(n=>{const i=e.a.stroke,l={...t.style,overflow:"visible",color:t.color},r=t.size||"1em",o=t.size||"1em",c=e.c;return i!==n._v$&&S(s,"stroke",n._v$=i),n._v$2=ee(s,l,n._v$2),r!==n._v$3&&S(s,"height",n._v$3=r),o!==n._v$4&&S(s,"width",n._v$4=o),c!==n._v$5&&(s.innerHTML=n._v$5=c),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),s})()}const Te=e=>F({a:{viewBox:"0 0 36 36"},c:'<path fill="#55ACEE" d="m18 8l-7-8H0l14 17l11.521-4.75z"/><path fill="#3B88C3" d="m25 0l-7 8l5.39 7.312l1.227-1.489L36 0z"/><path fill="#FFAC33" d="M23.205 16.026c.08-.217.131-.448.131-.693a2 2 0 0 0-2-2h-6.667a2 2 0 0 0-2 2c0 .245.05.476.131.693c-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307z"/><path fill="#9E5200" d="M19.404 18.6h-1.721l-2.73 2.132a.528.528 0 0 0-.112.28v1.178c0 .186.15.354.337.354h1.795v8.414c0 .188.15.355.355.355h2.076c.186 0 .336-.168.336-.355V18.954c0-.186-.149-.354-.336-.354z"/>'},e),_e=e=>F({a:{height:"16",viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M6.75 3.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0ZM8 1a2.25 2.25 0 0 0-2.19 2.766l-1.612-.65a1.6 1.6 0 0 0-2.076.872a1.58 1.58 0 0 0 .87 2.07L5 6.869v2.384l-1.813 3.41a1.591 1.591 0 1 0 2.81 1.495L8 10.39l2.004 3.768a1.591 1.591 0 0 0 2.81-1.494L11 9.252V6.869l2.008-.811a1.58 1.58 0 0 0 .87-2.07a1.6 1.6 0 0 0-2.076-.873l-1.611.651A2.25 2.25 0 0 0 8 1ZM3.047 4.369a.6.6 0 0 1 .776-.327l3.428 1.385a2 2 0 0 0 1.498 0l3.428-1.385a.6.6 0 0 1 .776.327a.58.58 0 0 1-.32.762l-2.008.81A1 1 0 0 0 10 6.87v2.383a1 1 0 0 0 .117.47l1.814 3.411a.592.592 0 0 1-1.044.556L8.883 9.92a1 1 0 0 0-1.766 0l-2.003 3.767a.591.591 0 1 1-1.044-.555l1.813-3.41A1 1 0 0 0 6 9.253V6.869a1 1 0 0 0-.625-.927L3.367 5.13a.58.58 0 0 1-.32-.762Z"/>'},e),Pe=e=>F({a:{height:"32",viewBox:"0 0 32 32"},c:'<path fill="currentColor" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14Zm-1-19a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4Z"/>'},e),Me=k("<div><div></div><div></div><div></div></div>"),Oe=()=>(()=>{const e=Me.cloneNode(!0),t=e.firstChild,s=t.nextSibling,n=s.nextSibling;return e.style.setProperty("width","100vw"),e.style.setProperty("height","100vh"),e.style.setProperty("display","flex"),e.style.setProperty("justify-content","center"),e.style.setProperty("align-items","center"),t.style.setProperty("border","1px solid black"),b(t,C(Te,{size:100})),s.style.setProperty("border","1px solid black"),b(s,C(_e,{size:100})),n.style.setProperty("border","1px solid black"),b(n,C(Pe,{size:100})),e})();pe(()=>C(Oe,{}),document.getElementById("root"));
