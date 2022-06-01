import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("TEST SUIT 1", () => {
  const wrapper = shallow(<CourseList />);
  test("TEST CASE1: Check that it renders CourseList component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  // test("TEST CASE1: Check that it renders the 5 different rows", () => {
  //   expect(wrapper.find("CourseListRow")).toHaveLength(5);
  // });
});

describe("TEST SUIT 2", () => {
  let listCourses = [];

  beforeEach(() => {
    listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
      { id: 4, name: "Javascript", credit: 10 },
    ];
  });
  test("TEST CASE1: verify that when you pass a list of courses, the component renders it correctly", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find("CourseListRow")).toHaveLength(listCourses.length + 2);
  });
});
