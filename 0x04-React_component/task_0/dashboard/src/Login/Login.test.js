import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Test suit 1", () => {
  const wrapper = shallow(<Login />);
  test("verify Login component renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("Verify that the components render img and h1 tags", () => {
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
