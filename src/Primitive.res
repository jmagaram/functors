module type T = {
  type domain
  type t
  type error = string

  let make: domain => result<t, string>
  let makeExn: domain => t

  external value: t => domain = "%identity"

  let toJson: t => JSON.t
  let parse: JSON.t => result<t, error>

  let eq: (t, t) => bool
  let neq: (t, t) => bool
}

module Make = (
  C: {
    type domain
    let parse: JSON.t => result<domain, string>
    let toJson: domain => JSON.t
    let eq: (domain, domain) => bool
  },
): (T with type domain := C.domain) => {
  type domain = C.domain
  type t = C.domain
  type error = string

  let parse = v => v->C.parse
  let make = v => v->C.toJson->parse
  let makeExn = v => v->make->Result.getExn

  external value: t => domain = "%identity"

  let toJson = v => v->C.toJson

  let eq = (a: t, b: t) => C.eq(a->value, b->value)
  let neq = (a, b) => !eq(a, b)
}
