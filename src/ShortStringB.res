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

// This approach is closer to what I want but it is annoying because I need to
// repeat the type definition of the module type in the *.resi file and insert
// @gentype annotations everywhere. I'm also getting an error on ./JSON.gen.
include Primitive.Make(Config)
