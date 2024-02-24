// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.0-esm/index.mjs";function d(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var f=d(Object.freeze({__proto__:null,default:()=>()=>{}}))("tabulate-by-async:limit");function u(e,d){var u,p,h;if(u={},arguments.length>1){if(p=function(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(i("1Rj2o","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(i("1Rj3P","limit",e.limit)):null):new TypeError(i("1Rj2V",t))}(u,e),p)throw p;h=d}else h=e;if(!t(h))throw new TypeError(i("1Rj3q",h));return u.series?u.limit=1:u.limit||(u.limit=s),function(e,s){if(!r(e))throw new TypeError(i("1RjAh",e));if(!t(s))throw new TypeError(i("1Rj3q",s));return function(e,t,r,i){var s,n,o,l,m,d,u,p,h;if(m=e.length,f("Collection length: %d",m),u=[],0===m)return f("Finished processing a collection."),i(null,u);for(p=[],l=m<t.limit?m:t.limit,f("Concurrency limit: %d",l),f("Number of arguments: %d",r.length),s=m-1,n=0,d=-1,h=0;h<l;h++)d<s&&a();function a(){var i,s;function n(e,t){var r;if(!o){if(e)return o=!0,j(e);f("Collection element %d group: %s.",s,t),-1===(r=c(p,t))?(p.push(t),u.push([t,1,0])):u[r][1]+=1,j()}}i=e[s=d+=1],f("Collection element %d: %s.",s,JSON.stringify(i)),2===r.length?r.call(t.thisArg,i,n):3===r.length?r.call(t.thisArg,i,s,n):r.call(t.thisArg,i,s,e,n)}function j(e){var t;if(e)return f("Encountered an error: %s",e.message),i(e);if(f("Processed %d of %d collection elements.",n+=1,m),d<s)return a();if(n===m){for(t=0;t<u.length;t++)u[t][2]=u[t][1]/n;return f("Finished processing a collection."),i(null,u)}}}(e,u,h,(function(e,t){if(e)return s(e);s(null,t)}))}}function p(e,t,r,i){if(arguments.length<4)return u(t)(e,r);u(t,r)(e,i)}e(p,"factory",u);export{p as default,u as factory};
//# sourceMappingURL=index.mjs.map
