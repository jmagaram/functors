include Primitive.Make({
  type domain = string
  let parse = j => {
    let decoded = j->JSON.Decode.string
    switch decoded {
    | None => Error("expected a string")
    | Some(s) =>
      if s->String.length > 10 {
        Error("string is too long")
      } else {
        Ok(s)
      }
    }
  }
  let toJson = s => JSON.String(s)
  let eq = (a: string, b: string) => a == b
})
