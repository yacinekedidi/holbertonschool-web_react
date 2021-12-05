import React from "react";

import Header from "./Header";
import { shallow } from "enzyme";

describe("TEST SUIT:", () => {
  const header = shallow(<Header />);
  it("test case1: renders Header", () => {
    expect(header.exists()).toBe(true);
  });

  it("test case2: Header contains img", () => {
    expect(header.find("img")).toHaveLength(1);
  });

  it("test case3: Header contains h1", () => {
    expect(header.find("h1")).toHaveLength(1);
  });
});
