"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=t(function(z,n){
var y=require('@stdlib/strided-base-smap/dist'),j=require('@stdlib/math-base-special-deg2radf/dist');function x(e,r,a,i,s){return y(e,r,a,i,s,j)}n.exports=x
});var q=t(function(A,v){
var l=require('@stdlib/strided-base-smap/dist').ndarray,R=require('@stdlib/math-base-special-deg2radf/dist');function _(e,r,a,i,s,g,m){return l(e,r,a,i,s,g,m,R)}v.exports=_
});var p=t(function(B,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=d(),O=q();E(o,"ndarray",O);c.exports=o
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),u,f=h(b(__dirname,"./native.js"));f instanceof Error?u=k:u=f;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
