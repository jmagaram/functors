import * as PositiveInt from "./PositiveInt.gen";

test("can make positive int", () => {
  const i = PositiveInt.make(3);
  const j = PositiveInt.value(i!);
  expect(j).toEqual(3);
});
