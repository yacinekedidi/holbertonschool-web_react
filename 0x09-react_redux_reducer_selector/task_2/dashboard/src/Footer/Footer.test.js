/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "./Footer";
import AppContext, { logOut, user } from "../App/AppContext";

describe("Test suit 1", () => {
  test("TEST CASE 1: verify Footer component renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  test("TEST CASE 2: Verify that it contains text Copyright ", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.html()).toContain("Copyright");
  });

  test("TEST CASE 3: verify that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").exists()).toBe(false);
  });

  test("TEST CASE 4: verify that the link is displayed when the user is logged in within the context", () => {
    const myUser = { ...user, isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user: myUser, logOut }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").exists()).toBe(true);
  });
});
