// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).tabulateByAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||f.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&g.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[m],e=d(t,m);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||_(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",_);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof S?S:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,B=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function x(t){return null!==t&&"object"==typeof t}function k(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(x));var G="function"==typeof s||"object"==typeof B||"function"==typeof N?function(t){return k(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?k(t).toLowerCase():e};function M(t){return"function"===G(t)}var L=Math.floor;function R(t){return L(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function Y(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var z=Number.POSITIVE_INFINITY;var D,J=Object.getPrototypeOf;D=M(Object.getPrototypeOf)?J:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=D;var q=Object.prototype;function H(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),X(t))}(t),!e||!d(t,"constructor")&&d(e,"constructor")&&M(e.constructor)&&"[object Function]"===h(e.constructor)&&d(e,"isPrototypeOf")&&M(e.isPrototypeOf)&&(e===q||function(t){var e;for(e in t)if(!d(t,e))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var et=Q.NEGATIVE_INFINITY;function rt(t){return t<z&&t>et&&R(t)}function nt(t){return K(t)&&rt(t)}function ot(t){return $(t)&&rt(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function ft(t){return ut(t)||ct(t)}function lt(t,e){return H(e)?(d(e,"thisArg")&&(t.thisArg=e.thisArg),d(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(Y("0ii30","series",t.series)):d(e,"limit")&&(t.limit=e.limit,!ut(t.limit))?new TypeError(Y("0ii3b","limit",t.limit)):null):new TypeError(Y("0ii2h",e))}function at(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(ft,"isPrimitive",ut),a(ft,"isObject",ct);var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}));function pt(t){return t!=t}function yt(t){return K(t)&&pt(t)}function bt(t){return $(t)&&pt(t.valueOf())}function vt(t){return yt(t)||bt(t)}function gt(t){return"string"==typeof t}a(vt,"isPrimitive",yt),a(vt,"isObject",bt);var dt=String.prototype.valueOf;var mt=b();function ht(t){return"object"==typeof t&&(t instanceof String||(mt?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function jt(t){return gt(t)||ht(t)}a(jt,"isPrimitive",gt),a(jt,"isObject",ht);var wt=st("tabulate-by-async:limit");function _t(t,e,r,n){var o,i,u,c,f,l,a,s,p;if(f=t.length,wt("Collection length: %d",f),a=[],0===f)return wt("Finished processing a collection."),n(null,a);for(s=[],c=f<e.limit?f:e.limit,wt("Concurrency limit: %d",c),wt("Number of arguments: %d",r.length),o=f-1,i=0,l=-1,p=0;p<c;p++)l<o&&y();function y(){var n,o;function i(t,e){var r;if(!u){if(t)return u=!0,b(t);wt("Collection element %d group: %s.",o,e),r=function(t,e,r){var n,o;if(!U(t)&&!gt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!nt(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(vt(e)){for(;o<n;o++)if(vt(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}(s,e),-1===r?(s.push(e),a.push([e,1,0])):a[r][1]+=1,b()}}n=t[o=l+=1],wt("Collection element %d: %s.",o,JSON.stringify(n)),2===r.length?r.call(e.thisArg,n,i):3===r.length?r.call(e.thisArg,n,o,i):r.call(e.thisArg,n,o,t,i)}function b(t){var e;if(t)return wt("Encountered an error: %s",t.message),n(t);if(wt("Processed %d of %d collection elements.",i+=1,f),l<o)return y();if(i===f){for(e=0;e<a.length;e++)a[e][2]=a[e][1]/i;return wt("Finished processing a collection."),n(null,a)}}}function Ot(t,e){var r,n,o;if(r={},arguments.length>1){if(n=lt(r,t))throw n;o=e}else o=t;if(!M(o))throw new TypeError(Y("0ii43",o));return r.series?r.limit=1:r.limit||(r.limit=z),i;function i(t,e){if(!U(t))throw new TypeError(Y("0iiBO",t));if(!M(e))throw new TypeError(Y("0ii43",e));return _t(t,r,o,(function(t,r){if(t)return e(t);e(null,r)}))}}function Et(t,e,r,n){if(arguments.length<4)return Ot(e)(t,r);Ot(e,r)(t,n)}return a(Et,"factory",Ot),Et}));
//# sourceMappingURL=index.js.map
