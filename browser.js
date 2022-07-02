// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__,f=r,c=function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t},y=e()?f:c,p=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(t,e,r,n,o,a){var u,l,i;if(t<=0)return n;for(u=r<0?(1-t)*r:0,l=o<0?(1-t)*o:0,i=0;i<t;i++)n[l]=a(e[u]),u+=r,l+=o;return n};p(d,"ndarray",(function(t,e,r,n,o,a,u,l){var i,f,c;if(t<=0)return o;for(i=n,f=u,c=0;c<t;c++)o[f]=l(e[i]),i+=r,f+=a;return o}));var b=d,_="function"==typeof Math.fround?Math.fround:null,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,v=m,g=function(t){return v.call(t)},h=Object.prototype.hasOwnProperty,j=function(t,e){return null!=t&&h.call(t,e)},w="function"==typeof Symbol?Symbol.toStringTag:"",S=j,A=w,F=m,O=g,T=function(t){var e,r,n;if(null==t)return F.call(t);r=t[A],e=S(t,A);try{t[A]=void 0}catch(e){return F.call(t)}return n=F.call(t),e?t[A]=r:delete t[A],n},P=s&&"symbol"==typeof Symbol.toStringTag?T:O,E="function"==typeof Float32Array,I=function(t){return E&&t instanceof Float32Array||"[object Float32Array]"===P(t)},x=Number.POSITIVE_INFINITY,N="function"==typeof Float32Array?Float32Array:null,V=I,k=x,G=N,M="function"==typeof Float32Array?Float32Array:void 0,C=function(){throw new Error("not implemented")},Y=new(function(){var t,e;if("function"!=typeof G)return!1;try{e=new G([1,3.14,-3.14,5e40]),t=V(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===k}catch(e){t=!1}return t}()?M:C)(1),q=_;"function"!=typeof q&&(q=function(t){return Y[0]=t,Y[0]});var z=q,B=z(.017453292519943295),D=function(t){return z(z(t)*B)};function H(t,e,r,n,o){return b(t,e,r,n,o,D)}return p(H,"ndarray",(function(t,e,r,n,o,a,u){return b.ndarray(t,e,r,n,o,a,u,D)})),H},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).sdeg2rad=e();
//# sourceMappingURL=browser.js.map
