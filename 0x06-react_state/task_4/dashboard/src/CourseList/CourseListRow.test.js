import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import CourseListRow from "./CourseListRow";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("TEST SUIT", () => {
  // When isHeader is true
  test("TEST CASE1:  test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="text1" />
    );
    expect(wrapper.find("th[colSpan='2']")).toHaveLength(1);
  });

  test("TEST CASE2: test the component renders two cells when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="text1"
        textSecondCell="text2"
      />
    );
    expect(wrapper.find("th")).toHaveLength(2);
  });

  //   When isHeader is false
  test("TEST CASE3: test the component renders correctly two td elements within a tr element", () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="text1" textSecondCell="text2" />
    );
    expect(wrapper.find("tr > td")).toHaveLength(2);
  });
});
