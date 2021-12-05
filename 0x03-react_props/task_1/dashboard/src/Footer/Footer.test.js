import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("TEST SUIT:", () => {
  const footer = shallow(<Footer />);
  it("test case1: renders Footer", () => {
    expect(footer.exists()).toBe(true);
  });

  it("test case2: Footer contains text Copyright", () => {
    expect(footer.find("p").text()).toMatch("Copyright");
  });
});
