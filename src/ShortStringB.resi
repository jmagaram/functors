@genType
type t

@genType
type error = string

@genType
let make: string => result<t, string>

@genType
let makeExn: string => t

@genType
external value: t => string = "%identity"

@genType
let toJson: t => JSON.t

@genType
let parse: JSON.t => result<t, error>

@genType
let eq: (t, t) => bool

@genType
let neq: (t, t) => bool
