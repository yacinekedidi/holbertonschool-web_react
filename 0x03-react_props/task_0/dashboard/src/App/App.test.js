import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("TEST SUITE:", () => {
  const wrapper = shallow(<App />);
  it("TEST CASE 1: renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
