// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var O=String.fromCharCode,E=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,o,a,l,f,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(c(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function V(r){var e,t,n;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,C=Object.prototype,R=C.toString,N=C.__defineGetter__,$=C.__defineSetter__,B=C.__lookupGetter__,G=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var L=I;function M(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function U(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&q.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof D?D.toStringTag:"";var H=J()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[Y],e=z(r,Y);try{r[Y]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=J();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function tr(r){return U(r)||er(r)}function nr(){return new Function("return this;")()}M(tr,"isPrimitive",U),M(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!U(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(ir)return ir;if(or)return or;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;M(pr,"REGEXP",gr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};function dr(r){return null!==r&&"object"==typeof r}function hr(r){var e,t,n,i;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return dr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var br="function"==typeof Z||"object"==typeof sr||"function"==typeof fr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};function vr(r){return"function"===br(r)}var wr=Math.floor;function mr(r){return wr(r)===r}function jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=9007199254740991}function _r(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Or=Number.POSITIVE_INFINITY;var Er,Sr=Object,Tr=Object.getPrototypeOf;Er=vr(Object.getPrototypeOf)?Tr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ar=Er;var Pr=Object.prototype;function kr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),Ar(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&vr(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Pr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function xr(r){return"number"==typeof r}var Fr=Number,Vr=Fr.prototype.toString;var Ir=J();function Cr(r){return"object"==typeof r&&(r instanceof Fr||(Ir?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function Rr(r){return xr(r)||Cr(r)}M(Rr,"isPrimitive",xr),M(Rr,"isObject",Cr);var Nr=Fr.NEGATIVE_INFINITY;function $r(r){return r<Or&&r>Nr&&mr(r)}function Br(r){return xr(r)&&$r(r)}function Gr(r){return Cr(r)&&$r(r.valueOf())}function Lr(r){return Br(r)||Gr(r)}function Mr(r){return Br(r)&&r>0}function Zr(r){return Gr(r)&&r.valueOf()>0}function Ur(r){return Mr(r)||Zr(r)}function Wr(r,e){return kr(e)?(z(e,"thisArg")&&(r.thisArg=e.thisArg),z(e,"series")&&(r.series=e.series,!U(r.series))?new TypeError(_r("1Rj2o,GE","series",r.series)):z(e,"limit")&&(r.limit=e.limit,!Mr(r.limit))?new TypeError(_r("1Rj3P,Fv","limit",r.limit)):null):new TypeError(_r("1Rj2V,FD",e))}function Jr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}M(Lr,"isPrimitive",Br),M(Lr,"isObject",Gr),M(Ur,"isPrimitive",Mr),M(Ur,"isObject",Zr);var Xr=Jr(Object.freeze({__proto__:null,default:()=>()=>{}}));function qr(r){return r!=r}function zr(r){return xr(r)&&qr(r)}function Dr(r){return Cr(r)&&qr(r.valueOf())}function Yr(r){return zr(r)||Dr(r)}function Hr(r){return"string"==typeof r}M(Yr,"isPrimitive",zr),M(Yr,"isObject",Dr);var Kr=String.prototype.valueOf;var Qr=J();function re(r){return"object"==typeof r&&(r instanceof String||(Qr?function(r){try{return Kr.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function ee(r){return Hr(r)||re(r)}M(ee,"isPrimitive",Hr),M(ee,"isObject",re);var te=Xr("tabulate-by-async:limit");function ne(r,e,t,n){var i,o,a,u,c,l,f,s,p;if(c=r.length,te("Collection length: %d",c),f=[],0===c)return te("Finished processing a collection."),n(null,f);for(s=[],u=c<e.limit?c:e.limit,te("Concurrency limit: %d",u),te("Number of arguments: %d",t.length),i=c-1,o=0,l=-1,p=0;p<u;p++)l<i&&g();function g(){var n,i;function o(r,e){var t;if(!a){if(r)return a=!0,y(r);te("Collection element %d group: %s.",i,e),t=function(r,e,t){var n,i;if(!jr(r)&&!Hr(r))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Br(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Yr(e)){for(;i<n;i++)if(Yr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}(s,e),-1===t?(s.push(e),f.push([e,1,0])):f[t][1]+=1,y()}}n=r[i=l+=1],te("Collection element %d: %s.",i,JSON.stringify(n)),2===t.length?t.call(e.thisArg,n,o):3===t.length?t.call(e.thisArg,n,i,o):t.call(e.thisArg,n,i,r,o)}function y(r){var e;if(r)return te("Encountered an error: %s",r.message),n(r);if(te("Processed %d of %d collection elements.",o+=1,c),l<i)return g();if(o===c){for(e=0;e<f.length;e++)f[e][2]=f[e][1]/o;return te("Finished processing a collection."),n(null,f)}}}function ie(r,e){var t,n,i;if(t={},arguments.length>1){if(n=Wr(t,r))throw n;i=e}else i=r;if(!vr(i))throw new TypeError(_r("1Rj3q,JV",i));return t.series?t.limit=1:t.limit||(t.limit=Or),o;function o(r,e){if(!jr(r))throw new TypeError(_r("1RjAh,O3",r));if(!vr(e))throw new TypeError(_r("1Rj3q,JV",e));return ne(r,t,i,(function(r,t){if(r)return e(r);e(null,t)}))}}function oe(r,e,t,n){if(arguments.length<4)return ie(e)(r,t);ie(e,t)(r,n)}M(oe,"factory",ie);export{oe as default,ie as factory};
//# sourceMappingURL=mod.js.map
