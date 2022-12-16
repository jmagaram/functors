module type Config = {
  type domain
  let validate: domain => option<domain>
}

module MakeValidateds = (C: Config): {
  type t
  @genType
  let make: C.domain => option<t>
  @genType
  let value: t => C.domain
} => {
  type t = C.domain
  let make = C.validate
  let value = v => v
}

@genType
module PositiveInt = MakeValidateds({
  type domain = int
  let validate = n =>
    if n > 0 {
      Some(n)
    } else {
      None
    }
})
