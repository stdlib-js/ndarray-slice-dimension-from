"use strict";var m=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=m(function(h,o){
var v=require('@stdlib/assert-is-plain-object/dist'),c=require('@stdlib/assert-is-boolean/dist').isPrimitive,s=require('@stdlib/assert-is-integer/dist').isPrimitive,l=require('@stdlib/assert-is-ndarray-like/dist'),g=require('@stdlib/assert-has-own-property/dist'),p=require('@stdlib/ndarray-base-slice-dimension-from/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function w(i,r,n){var e,a;if(a={strict:!0},!l(i))throw new TypeError(t('null4f',i));if(!s(r))throw new TypeError(t('null7f',r));if(!s(n))throw new TypeError(t('null2z',n));if(arguments.length>3){if(e=arguments[3],!v(e))throw new TypeError(t('null2V',e));if(g(e,"strict")){if(!c(e.strict))throw new TypeError(t('null2o',"strict",e.strict));a.strict=e.strict}}return p(i,r,n,a.strict,!1)}o.exports=w
});var f=u();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
