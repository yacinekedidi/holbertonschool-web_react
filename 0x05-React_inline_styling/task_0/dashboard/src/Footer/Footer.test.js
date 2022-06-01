import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Test suit 1", () => {
  const wrapper = shallow(<Footer />);
  test("verify Footer component renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("Verify that the components render img and h1 tags", () => {
    expect(wrapper.text()).toContain("Copyright");
  });
});
