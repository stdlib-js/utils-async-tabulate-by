// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";function f(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(i("1Rj2o,GE","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(i("1Rj3P,Fv","limit",e.limit)):null):new TypeError(i("1Rj2V,FD",t))}function c(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var i=Function.bind.apply(t,r);return new i}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var p=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("tabulate-by-async:limit");function u(e,t,r,i){var n,s,o,l,m,f,c,u,a;if(m=e.length,p("Collection length: %d",m),c=[],0===m)return p("Finished processing a collection."),i(null,c);for(u=[],l=m<t.limit?m:t.limit,p("Concurrency limit: %d",l),p("Number of arguments: %d",r.length),n=m-1,s=0,f=-1,a=0;a<l;a++)f<n&&h();function h(){var i,n;function s(e,t){var r;if(!o){if(e)return o=!0,j(e);p("Collection element %d group: %s.",n,t),-1===(r=d(u,t))?(u.push(t),c.push([t,1,0])):c[r][1]+=1,j()}}i=e[n=f+=1],p("Collection element %d: %s.",n,JSON.stringify(i)),2===r.length?r.call(t.thisArg,i,s):3===r.length?r.call(t.thisArg,i,n,s):r.call(t.thisArg,i,n,e,s)}function j(e){var t;if(e)return p("Encountered an error: %s",e.message),i(e);if(p("Processed %d of %d collection elements.",s+=1,m),f<n)return h();if(s===m){for(t=0;t<c.length;t++)c[t][2]=c[t][1]/s;return p("Finished processing a collection."),i(null,c)}}}function a(e,s){var o,l,m;if(o={},arguments.length>1){if(l=f(o,e))throw l;m=s}else m=e;if(!t(m))throw new TypeError(i("1Rj3q,JV",m));return o.series?o.limit=1:o.limit||(o.limit=n),d;function d(e,n){if(!r(e))throw new TypeError(i("1RjAh,O3",e));if(!t(n))throw new TypeError(i("1Rj3q,JV",n));return u(e,o,m,(function(e,t){if(e)return n(e);n(null,t)}))}}function h(e,t,r,i){if(arguments.length<4)return a(t)(e,r);a(t,r)(e,i)}e(h,"factory",a);export{h as default,a as factory};
//# sourceMappingURL=index.mjs.map
