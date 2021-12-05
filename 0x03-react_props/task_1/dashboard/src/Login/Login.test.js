import React from "react";

import Login from "./Login";
import { shallow } from "enzyme";

describe("TEST SUIT:", () => {
  const login = shallow(<Login />);
  it("test case1: renders Login", () => {
    expect(login.exists()).toBe(true);
  });

  it("test case2: Login contains 2 inputs", () => {
    expect(login.find("input")).toHaveLength(2);
  });

  it("test case3: Login contains 2 labels", () => {
    expect(login.find("label")).toHaveLength(2);
  });
});
