/* TypeScript file generated from ShortStringB.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as ShortStringBJS from './ShortStringB.res.mjs';

import type {t as JSON_t} from './JSON.gen';

export abstract class t { protected opaque!: any }; /* simulate opaque types */

export type error = string;

export const make: (_1:string) => 
    { TAG: "Ok"; _0: t }
  | { TAG: "Error"; _0: string } = ShortStringBJS.make as any;

export const makeExn: (_1:string) => t = ShortStringBJS.makeExn as any;

export const toJson: (_1:t) => JSON_t = ShortStringBJS.toJson as any;

export const parse: (_1:JSON_t) => 
    { TAG: "Ok"; _0: t }
  | { TAG: "Error"; _0: error } = ShortStringBJS.parse as any;

export const eq: (_1:t, _2:t) => boolean = ShortStringBJS.eq as any;

export const neq: (_1:t, _2:t) => boolean = ShortStringBJS.neq as any;
