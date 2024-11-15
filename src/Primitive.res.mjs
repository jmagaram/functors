// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Core__Result from "@rescript/core/src/Core__Result.res.mjs";

function Make(C) {
  var parse = function (v) {
    return C.parse(v);
  };
  var make = function (v) {
    var v$1 = C.toJson(v);
    return C.parse(v$1);
  };
  var makeExn = function (v) {
    return Core__Result.getExn(make(v));
  };
  var toJson = function (v) {
    return C.toJson(v);
  };
  var eq = function (a, b) {
    return C.eq(a, b);
  };
  var neq = function (a, b) {
    return !C.eq(a, b);
  };
  return {
          make: make,
          makeExn: makeExn,
          toJson: toJson,
          parse: parse,
          eq: eq,
          neq: neq
        };
}

function MakeAnnotated(C) {
  var parse = function (v) {
    return C.parse(v);
  };
  var make = function (v) {
    var v$1 = C.toJson(v);
    return C.parse(v$1);
  };
  var makeExn = function (v) {
    return Core__Result.getExn(make(v));
  };
  var toJson = function (v) {
    return C.toJson(v);
  };
  var eq = function (a, b) {
    return C.eq(a, b);
  };
  var neq = function (a, b) {
    return !C.eq(a, b);
  };
  return {
          make: make,
          makeExn: makeExn,
          toJson: toJson,
          parse: parse,
          eq: eq,
          neq: neq
        };
}

export {
  Make ,
  MakeAnnotated ,
}
/* No side effect */
