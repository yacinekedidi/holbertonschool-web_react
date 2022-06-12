/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./Footer";
import AppContext, { logOut, user } from "../App/AppContext";

describe("Test suit 1", () => {
  test("CASE 1: verify Footer component renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  test("CASE 2: Verify that it contains text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.html()).toContain("Copyright");
  });

  test("CASE 3: verify that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = shallow(<Footer />);
    wrapper.setProps({ user });

    expect(wrapper.find("a").exists()).toBe(false);
  });

  test("CASE 4: verify that the link is displayed when the user is logged in within the context", () => {
    const newUser = { email: "test@test.com", password: "123" };
    const wrapper = shallow(<Footer />);
    wrapper.setProps({ user: newUser });

    expect(wrapper.find("a").exists()).toBe(true);
  });
});
