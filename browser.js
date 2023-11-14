// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,w,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,d,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===u.call(e.specifier)?u.call(n):p.call(n)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var E=String.fromCharCode,x=isNaN,k=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,a,o,s,p,u,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,u=0;u<e.length;u++)if(l(n=e[u]))s+=n;else{if(r=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,x(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),s+=n.arg||"",p+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=j.exec(e);n;)(r=e.slice(i,j.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=j.lastIndex,n=j.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function $(e){var r,t,n;if(!V(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var O=Object.prototype,C=O.toString,P=O.__defineGetter__,R=O.__defineSetter__,N=O.__lookupGetter__,Z=O.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function W(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e,r,t,n,i,a){var o,c,l;if(e<=0)return n;for(o=t<0?(1-e)*t:0,c=i<0?(1-e)*i:0,l=0;l<e;l++)n[c]=a(r[o]),o+=t,c+=i;return n}function M(e,r,t,n,i,a,o,c){var l,s,p;if(e<=0)return i;for(l=n,s=o,p=0;p<e;p++)i[s]=c(r[l]),l+=t,s+=a;return i}W(L,"ndarray",M);var U="function"==typeof Math.fround?Math.fround:null,X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=X&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n,i,a;if(null==e)return z.call(e);t=e[B],a=B,r=null!=(i=e)&&Y.call(i,a);try{e[B]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[B]=t:delete e[B],n}:function(e){return z.call(e)},H="function"==typeof Float32Array,J=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null,Q="function"==typeof Float32Array?Float32Array:void 0,ee=new(function(){var e,r,t;if("function"!=typeof K)return!1;try{r=new K([1,3.14,-3.14,5e40]),t=r,e=(H&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===J}catch(r){e=!1}return e}()?Q:function(){throw new Error("not implemented")})(1),re="function"==typeof U?U:function(e){return ee[0]=e,ee[0]},te=re(.017453292519943295);function ne(e){return re(re(e)*te)}function ie(e,r,t,n,i){return L(e,r,t,n,i,ne)}return W(ie,"ndarray",(function(e,r,t,n,i,a,o){return M(e,r,t,n,i,a,o,ne)})),ie},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).sdeg2rad=r();
//# sourceMappingURL=browser.js.map
