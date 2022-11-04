// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";function f(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(r("0ii30","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(r("0ii3b","limit",e.limit)):null):new TypeError(r("0ii2h",t))}function c(e){var t=e.default;if("function"==typeof t){var i=function(){return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var p=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("tabulate-by-async:limit");function u(e,t,i,r){var s,n,o,l,m,f,c,u,h;if(m=e.length,p("Collection length: %d",m),c=[],0===m)return p("Finished processing a collection."),r(null,c);for(u=[],l=m<t.limit?m:t.limit,p("Concurrency limit: %d",l),p("Number of arguments: %d",i.length),s=m-1,n=0,f=-1,h=0;h<l;h++)f<s&&a();function a(){var r,s;function n(e,t){var i;if(!o){if(e)return o=!0,j(e);p("Collection element %d group: %s.",s,t),-1===(i=d(u,t))?(u.push(t),c.push([t,1,0])):c[i][1]+=1,j()}}r=e[s=f+=1],p("Collection element %d: %s.",s,JSON.stringify(r)),2===i.length?i.call(t.thisArg,r,n):3===i.length?i.call(t.thisArg,r,s,n):i.call(t.thisArg,r,s,e,n)}function j(e){var t;if(e)return p("Encountered an error: %s",e.message),r(e);if(p("Processed %d of %d collection elements.",n+=1,m),f<s)return a();if(n===m){for(t=0;t<c.length;t++)c[t][2]=c[t][1]/n;return p("Finished processing a collection."),r(null,c)}}}function h(e,n){var o,l,m;if(o={},arguments.length>1){if(l=f(o,e))throw l;m=n}else m=e;if(!t(m))throw new TypeError(r("0ii43",m));return o.series?o.limit=1:o.limit||(o.limit=s),d;function d(e,s){if(!i(e))throw new TypeError(r("0iiBO",e));if(!t(s))throw new TypeError(r("0ii43",s));return u(e,o,m,(function(e,t){if(e)return s(e);s(null,t)}))}}function a(e,t,i,r){if(arguments.length<4)return h(t)(e,i);h(t,i)(e,r)}e(a,"factory",h);export{a as default,h as factory};
//# sourceMappingURL=index.mjs.map
