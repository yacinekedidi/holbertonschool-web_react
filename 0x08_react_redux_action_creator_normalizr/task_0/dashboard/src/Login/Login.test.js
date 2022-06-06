import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Login from "./Login";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("TEST SUIT 1", () => {
  const wrapper = shallow(<Login />);
  test("verify Login component renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("Verify that the components renderinput and label tags", () => {
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

describe("TEST SUIT 2", () => {
  test("TEST CASE 1: verify that the submit button is disabled by default", () => {
    //
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[type='submit']").prop("disabled")).toBe(true);
  });

  test("TEST CASE 2:  verify that after changing the value of the two inputs, the button is enabled", () => {
    //
    const wrapper = shallow(<Login />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { email: "test@test.com" } });
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { password: "test123" } });
    expect(wrapper.find("input").at(2).prop("disabled")).toBe(false);
  });
});
