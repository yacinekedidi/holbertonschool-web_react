import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("TEST SUIT", () => {
  const wrapper = shallow(<CourseList />);
  test("TEST CASE1: Check that it renders CourseList component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  test("TEST CASE1: Check that it renders the 5 different rows", () => {
    expect(wrapper.find("CourseListRow")).toHaveLength(5);
  });
});
