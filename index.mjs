// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice-dimension-from@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function d(d,m,l){var p,j;if(j={strict:!0},!e(d))throw new TypeError(o("1lT4f",d));if(!r(m))throw new TypeError(o("1lT7f",m));if(!r(l))throw new TypeError(o("1lT2z",l));if(arguments.length>3){if(!s(p=arguments[3]))throw new TypeError(o("1lT2V",p));if(i(p,"strict")){if(!t(p.strict))throw new TypeError(o("1lT2o","strict",p.strict));j.strict=p.strict}}return n(d,m,l,j.strict,!1)}export{d as default};
//# sourceMappingURL=index.mjs.map
