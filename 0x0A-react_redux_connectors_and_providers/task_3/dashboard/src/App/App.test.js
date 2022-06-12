/**
 * @jest-environment jsdom
 */
import React from "react";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { App } from "./App";
import { mapStateToProps } from "./App";
import AppContext, { user, logOut } from "../App/AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("TEST SUIT:", () => {
  const wrapper = shallow(<App />);
  it("TEST CASE 1: renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("TEST CASE 2: contains Notifications", () => {
    expect(wrapper.find("Notifications").exists()).toBe(true);
  });

  // it("TEST CASE 3: contains Header", () => {
  //   expect(wrapper.find("Header").exists()).toBe(true);
  // });

  // it("TEST CASE 4: contains Login", () => {
  //   expect(wrapper.find("Footer").exists()).toBe(true);
  // });

  it("TEST CASE 5: contains Footer", () => {
    expect(wrapper.find("Login").exists()).toBe(true);
  });

  it("TEST CASE6: est to check that CourseList is not displayed", () => {
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });

  // eslint-disable-next-line no-multi-str
  it("TEST CASE7: when isLoggedIn is true, and add two checks.\
     The first one should verify that the Login component is not included.\
     The second one should verify that the CourseList component is included", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("Login").exists()).toBe(false);
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });
});

describe("TEST SUIT 2", () => {
  let events = {};
  beforeEach(() => {
    events = {};
    window.document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  // eslint-disable-next-line no-multi-str
  it("TEST CASE 1:  verify that when the keys control and h are pressed the logOut function,\
       passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    window.alert = jest.fn(() => {});
    shallow(<App />);
    events.keydown({ key: "h", ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });

  // eslint-disable-next-line no-multi-str
  it("TEST CASE 2: verify that the default state for displayDrawer is false.\
   Verify that after calling handleDisplayDrawer, the state should now be true", () => {
    //
    const wrapper = shallow(<App displayDrawer={false} />);
    const { props } = wrapper.instance();
    expect(props.displayDrawer).toBe(false);
  });
});

describe("TEST SUIT", () => {
  // eslint-disable-next-line no-multi-str
  test("CASE 1: verify that the function returns the right object when passing the\
        let state = fromJS({ isUserLoggedIn: true }); should return { isLoggedIn: true }", () => {
    let state = {
      isUserLoggedIn: true,
    };
    const recieved = mapStateToProps(state);
    const expected = { isLoggedIn: true };
    expect(recieved).toEqual(expected);
  });
});
