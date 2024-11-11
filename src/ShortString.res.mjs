// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Primitive from "./Primitive.res.mjs";
import * as Core__JSON from "@rescript/core/src/Core__JSON.res.mjs";

function parse(j) {
  var decoded = Core__JSON.Decode.string(j);
  if (decoded !== undefined) {
    if (decoded.length > 10) {
      return {
              TAG: "Error",
              _0: "string is too long"
            };
    } else {
      return {
              TAG: "Ok",
              _0: decoded
            };
    }
  } else {
    return {
            TAG: "Error",
            _0: "expected a string"
          };
  }
}

function toJson(s) {
  return s;
}

function eq(a, b) {
  return a === b;
}

var include = Primitive.Make({
      parse: parse,
      toJson: toJson,
      eq: eq
    });

var make = include.make;

var makeExn = include.makeExn;

var toJson$1 = include.toJson;

var parse$1 = include.parse;

var eq$1 = include.eq;

var neq = include.neq;

export {
  make ,
  makeExn ,
  toJson$1 as toJson,
  parse$1 as parse,
  eq$1 as eq,
  neq ,
}
/* include Not a pure module */
