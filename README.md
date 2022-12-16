# Exploration of functors with GenType

## The problem

`PositiveExtracted` and `PositiveInline` are two version of the same thing. The only difference is that in one of them the return type of a functor is named and referenced, and in the other the return type is inlined. The inlined version works from TypeScript while the other won't load. You can see the `.gen.tsx` files look very different. Why does one work but the other does not? What rules should be followed to ensure GenType produces the desired result?

## Run the tests with `npm test`

`positiveInlined.test.ts` succeeds and `positiveExtracted.test.ts` won't load.
