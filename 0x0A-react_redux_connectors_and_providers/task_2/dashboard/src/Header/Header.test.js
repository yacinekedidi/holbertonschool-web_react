/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

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

describe("TEST SUIT 2", () => {
  // eslint-disable-next-line no-multi-str
  test("CASE 1: a test that mounts the Header component with a default context value.\
        Verify that the logoutSection is not created", () => {
    const value = { user, logOut };
    const wrapper = shallow(
      <AppContext.Provider value={value}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  // eslint-disable-next-line no-multi-str
  test("CASE 2: a test that mounts the Header component with a user defined (isLoggedIn is true and an email is set).\
        Verify that the logoutSection is created", () => {
    const wrapper = shallow(<Header />);
    wrapper.setProps({
      user: { email: "test@test.com", password: "123" },
      logOut,
    });
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
  });

  // eslint-disable-next-line no-multi-str
  test("CASE 3: a test that mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logout is linked to a spy.\
        Verify that clicking on the link is calling the spy", () => {
    const spy = jest.fn();

    const wrapper = shallow(<Header />);
    wrapper.setProps({
      user: { email: "test@test.com", password: "123" },
      logout: spy,
    });
    wrapper.find("#logoutSection span").simulate("click");
    expect(spy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});
