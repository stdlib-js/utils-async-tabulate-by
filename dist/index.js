"use strict";var h=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var C=h(function($,p){
var J=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-has-own-property/dist'),R=require('@stdlib/assert-is-boolean/dist').isPrimitive,S=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,x=require('@stdlib/error-tools-fmtprodmsg/dist');function z(r,e){return J(e)?(w(e,"thisArg")&&(r.thisArg=e.thisArg),w(e,"series")&&(r.series=e.series,!R(r.series))?new TypeError(x('1Rj2o',"series",r.series)):w(e,"limit")&&(r.limit=e.limit,!S(r.limit))?new TypeError(x('1Rj3P',"limit",r.limit)):null):new TypeError(x('1Rj2V',e));}p.exports=z
});var V=h(function(ee,F){
var D=require("debug"),G=require('@stdlib/utils-index-of/dist'),v=D("tabulate-by-async:limit");function H(r,e,i,u){var l,c,g,s,n,m,a,y,b;if(n=r.length,v("Collection length: %d",n),a=[],n===0)return v("Finished processing a collection."),u(null,a);for(y=[],n<e.limit?s=n:s=e.limit,v("Concurrency limit: %d",s),v("Number of arguments: %d",i.length),l=n-1,c=0,m=-1,b=0;b<s;b++)m<l&&E();function E(){var f,t;m+=1,t=m,f=r[t],v("Collection element %d: %s.",t,JSON.stringify(f)),i.length===2?i.call(e.thisArg,f,q):i.length===3?i.call(e.thisArg,f,t,q):i.call(e.thisArg,f,t,r,q);function q(T,o){var d;if(!g){if(T)return g=!0,P(T);v("Collection element %d group: %s.",t,o),d=G(y,o),d===-1?(y.push(o),a.push([o,1,0])):a[d][1]+=1,P()}}}function P(f){var t;if(f)return v("Encountered an error: %s",f.message),u(f);if(c+=1,v("Processed %d of %d collection elements.",c,n),m<l)return E();if(c===n){for(t=0;t<a.length;t++)a[t][2]=a[t][1]/c;return v("Finished processing a collection."),u(null,a)}}}F.exports=H
});var O=h(function(re,B){
var j=require('@stdlib/assert-is-function/dist'),K=require('@stdlib/assert-is-collection/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist'),M=require('@stdlib/constants-float64-pinf/dist'),Q=C(),U=V();function W(r,e){var i,u,l;if(i={},arguments.length>1){if(u=Q(i,r),u)throw u;l=e}else l=r;if(!j(l))throw new TypeError(A('1Rj3q',l));return i.series?i.limit=1:i.limit||(i.limit=M),c;function c(g,s){if(!K(g))throw new TypeError(A('1RjAh',g));if(!j(s))throw new TypeError(A('1Rj3q',s));return U(g,i,l,n);function n(m,a){if(m)return s(m);s(null,a)}}}B.exports=W
});var k=h(function(ie,N){
var I=O();function X(r,e,i,u){if(arguments.length<4)return I(e)(r,i);I(e,i)(r,u)}N.exports=X
});var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=k(),Z=O();Y(L,"factory",Z);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
