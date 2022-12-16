/* TypeScript file generated from PositiveExtracted.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as PositiveExtractedBS__Es6Import from './PositiveExtracted.bs';
const PositiveExtractedBS: any = PositiveExtractedBS__Es6Import;

// tslint:disable-next-line:max-classes-per-file 
export abstract class T_t { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
export abstract class T_domain { protected opaque!: any }; /* simulate opaque types */

// tslint:disable-next-line:max-classes-per-file 
export abstract class PositiveInt_t { protected opaque!: any }; /* simulate opaque types */

export const T_make: (_1:T_domain) => (null | undefined | T_t) = PositiveExtractedBS.T.make;

export const T_value: (_1:T_t) => T_domain = PositiveExtractedBS.T.value;

export const PositiveInt_make: (_1:number) => (null | undefined | PositiveInt_t) = PositiveExtractedBS.PositiveInt.make;

export const PositiveInt_value: (_1:PositiveInt_t) => number = PositiveExtractedBS.PositiveInt.value;

export const T: { value: (_1:T_t) => T_domain; make: (_1:T_domain) => (null | undefined | T_t) } = PositiveExtractedBS.T

export const PositiveInt: { value: (_1:PositiveInt_t) => number; make: (_1:number) => (null | undefined | PositiveInt_t) } = PositiveExtractedBS.PositiveInt
