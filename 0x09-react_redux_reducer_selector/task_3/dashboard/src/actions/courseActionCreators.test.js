import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("TEST SUIT", () => {
  it("TEST CASE 1: Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }", () => {
    const expected = { type: "SELECT_COURSE", index: 1 };
    expect(selectCourse(1)).toEqual(expected);
  });
  it("TEST CASE 2: Calling the creator with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }", () => {
    const expected = { type: "UNSELECT_COURSE", index: 1 };
    expect(unSelectCourse(1)).toEqual(expected);
  });
});
