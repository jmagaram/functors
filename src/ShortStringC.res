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

// No TypeScript is generated from the .resi file. Maybe @genType annotations are ignored when using include statements.
include Primitive.Make(Config)
