/* TypeScript file generated from ShortStringA.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as ShortStringAJS from './ShortStringA.res.mjs';

import type {t as JSON_t} from './JSON.gen';

export type Config_domain = string;

export type Contents_t = __Papply_unsupported_genType___t;

export type Contents_error = string;

export const Contents_make: (_1:Config_domain) => 
    { TAG: "Ok"; _0: Contents_t }
  | { TAG: "Error"; _0: string } = ShortStringAJS.Contents.make as any;

export const Contents_makeExn: (_1:Config_domain) => Contents_t = ShortStringAJS.Contents.makeExn as any;

export const Contents_value: (_1:Contents_t) => Config_domain = ShortStringAJS.Contents.value as any;

export const Contents_toJson: (_1:Contents_t) => JSON_t = ShortStringAJS.Contents.toJson as any;

export const Contents_parse: (_1:JSON_t) => 
    { TAG: "Ok"; _0: Contents_t }
  | { TAG: "Error"; _0: Contents_error } = ShortStringAJS.Contents.parse as any;

export const Contents_eq: (_1:Contents_t, _2:Contents_t) => boolean = ShortStringAJS.Contents.eq as any;

export const Contents_neq: (_1:Contents_t, _2:Contents_t) => boolean = ShortStringAJS.Contents.neq as any;

export const Contents: {
  makeExn: (_1:Config_domain) => Contents_t; 
  parse: (_1:JSON_t) => 
    {
    TAG: "Ok"; 
    _0: Contents_t
  }
  | {
    TAG: "Error"; 
    _0: Contents_error
  }; 
  neq: (_1:Contents_t, _2:Contents_t) => boolean; 
  toJson: (_1:Contents_t) => JSON_t; 
  value: (_1:Contents_t) => Config_domain; 
  make: (_1:Config_domain) => 
    {
    TAG: "Ok"; 
    _0: Contents_t
  }
  | {
    TAG: "Error"; 
    _0: string
  }; 
  eq: (_1:Contents_t, _2:Contents_t) => boolean
} = ShortStringAJS.Contents as any;
