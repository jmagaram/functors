module Config = {
  type domain = string

  let parse = j => {
    let decoded = j->JSON.Decode.string
    switch decoded {
    | None => Error("expected a string")
    | Some(s) =>
      let s = s->String.trim
      if s->String.length > 10 {
        Error("string is too long; must be 10 characters or fewer")
      } else {
        Ok(s)
      }
    }
  }

  let toJson = s => JSON.String(s)

  let eq = (a: string, b: string) => a == b
}

// This is NOT what I want to do. My pattern is to define each time in its own
// module, not a sub-module like this. And in any case the resultant TypeScript
// has errors.

@genType
module Contents = Primitive.Make(Config)
