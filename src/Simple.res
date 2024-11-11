@genType
let hello = JSON.Encode.string("hello")

@genType
let add = (a, b) => a + b

@genType
let isNone = v => v->Option.isNone
