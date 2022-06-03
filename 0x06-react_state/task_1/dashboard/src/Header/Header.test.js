import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Test suit 1", () => {
  const wrapper = shallow(<Header />);
  test("verify Header component renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("Verify that the components render img and h1 tags", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("img").exists()).toBe(true);
  });
});
