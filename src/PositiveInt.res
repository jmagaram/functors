@gentype
include Primitive.Make({
  type domain = int
  let validate = n =>
    if n > 0 {
      Some(n)
    } else {
      None
    }
})
