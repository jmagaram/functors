/* TypeScript file generated from PositiveInlined.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as PositiveInlinedBS__Es6Import from './PositiveInlined.bs';
const PositiveInlinedBS: any = PositiveInlinedBS__Es6Import;

// tslint:disable-next-line:max-classes-per-file 
export abstract class PositiveInt_t { protected opaque!: any }; /* simulate opaque types */

export const PositiveInt_make: (_1:number) => (null | undefined | PositiveInt_t) = PositiveInlinedBS.PositiveInt.make;

export const PositiveInt_value: (_1:PositiveInt_t) => number = PositiveInlinedBS.PositiveInt.value;

export const PositiveInt: { value: (_1:PositiveInt_t) => number; make: (_1:number) => (null | undefined | PositiveInt_t) } = PositiveInlinedBS.PositiveInt
