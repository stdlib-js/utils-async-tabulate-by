// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";function f(i,t){return n(t)?(l(t,"thisArg")&&(i.thisArg=t.thisArg),l(t,"series")&&(i.series=t.series,!o(i.series))?new TypeError(r("0ii30","series",i.series)):l(t,"limit")&&(i.limit=t.limit,!m(i.limit))?new TypeError(r("0ii3b","limit",i.limit)):null):new TypeError(r("0ii2h",t))}var h=()=>{};function p(i,t,e,r){var s,n,l,o,m,f,p,u,j;if(m=i.length,p=[],0===m)return r(null,p);for(u=[],o=m<t.limit?m:t.limit,h("Number of arguments: %d",e.length),s=m-1,n=0,f=-1,j=0;j<o;j++)f<s&&c();function c(){var r,s;function n(i,t){var e;if(!l){if(i)return l=!0,a(i);-1===(e=d(u,t))?(u.push(t),p.push([t,1,0])):p[e][1]+=1,a()}}r=i[s=f+=1],h("Collection element %d: %s.",s,JSON.stringify(r)),2===e.length?e.call(t.thisArg,r,n):3===e.length?e.call(t.thisArg,r,s,n):e.call(t.thisArg,r,s,i,n)}function a(i){var t;if(i)return h("Encountered an error: %s",i.message),r(i);if(n+=1,f<s)return c();if(n===m){for(t=0;t<p.length;t++)p[t][2]=p[t][1]/n;return r(null,p)}}}function u(i,n){var l,o,m;if(l={},arguments.length>1){if(o=f(l,i))throw o;m=n}else m=i;if(!t(m))throw new TypeError(r("0ii43",m));return l.series?l.limit=1:l.limit||(l.limit=s),d;function d(i,s){if(!e(i))throw new TypeError(r("0iiBO",i));if(!t(s))throw new TypeError(r("0ii43",s));return p(i,l,m,(function(i,t){if(i)return s(i);s(null,t)}))}}function j(i,t,e,r){if(arguments.length<4)return u(t)(i,e);u(t,e)(i,r)}i(j,"factory",u);export{j as default,u as factory};
//# sourceMappingURL=index.mjs.map
