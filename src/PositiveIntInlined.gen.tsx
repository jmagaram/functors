/* TypeScript file generated from PositiveIntInlined.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as PositiveIntInlinedBS__Es6Import from './PositiveIntInlined.bs';
const PositiveIntInlinedBS: any = PositiveIntInlinedBS__Es6Import;

// tslint:disable-next-line:max-classes-per-file 
export abstract class PositiveInt_t { protected opaque!: any }; /* simulate opaque types */

export const PositiveInt_make: (_1:number) => (null | undefined | PositiveInt_t) = PositiveIntInlinedBS.PositiveInt.make;

export const PositiveInt_value: (_1:PositiveInt_t) => number = PositiveIntInlinedBS.PositiveInt.value;

export const PositiveInt: { value: (_1:PositiveInt_t) => number; make: (_1:number) => (null | undefined | PositiveInt_t) } = PositiveIntInlinedBS.PositiveInt
