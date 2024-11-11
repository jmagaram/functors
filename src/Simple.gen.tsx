/* TypeScript file generated from Simple.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as SimpleJS from './Simple.res.mjs';

import type {t as Core__JSON_t} from '@rescript/core/src/Core__JSON.gen';

export const hello: Core__JSON_t = SimpleJS.hello as any;

export const add: (a:number, b:number) => number = SimpleJS.add as any;

export const isNone: <T1>(v:(undefined | T1)) => boolean = SimpleJS.isNone as any;
