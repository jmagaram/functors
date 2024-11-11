module T = ShortStringB

let a = T.makeExn("hello")
let b = T.makeExn("goodbye")
let areEqual = T.eq(a, b)
