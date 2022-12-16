module type Config = {
  type domain
  let validate: domain => option<domain>
}

module type T = {
  type t
  type domain
  @genType
  let make: domain => option<t>
  @genType
  let value: t => domain
}

module Make = (C: Config): (T with type domain := C.domain) => {
  type t = C.domain
  let make = C.validate
  let value = v => v
}

@genType
module PositiveInt = Make({
  type domain = int
  let validate = n =>
    if n > 0 {
      Some(n)
    } else {
      None
    }
})
