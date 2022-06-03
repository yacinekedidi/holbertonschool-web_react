/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import { shallow, mount } from "enzyme";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import AppContext, { user, logOut } from "../App/AppContext";
import { act } from "react-dom/test-utils";

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

  it("TEST CASE 2: contains Notifications  ", () => {
    // shallow(<Notifications />);
    expect(wrapper.find("Notifications").exists()).toBe(true);
  });

  it("TEST CASE 3: contains Header ", () => {
    // shallow(<Header />);
    expect(wrapper.find("Header").exists()).toBe(true);
  });

  it("TEST CASE 4: contains Login ", () => {
    // shallow(<Footer />);
    expect(wrapper.find("Footer").exists()).toBe(true);
  });

  it("TEST CASE 5: contains Footer ", () => {
    // shallow(<Login />);
    expect(wrapper.find("Login").exists()).toBe(true);
  });

  it("TEST CASE6: est to check that CourseList is not displayed", () => {
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });

  it("TEST CASE7: when isLoggedIn is true, and add two checks.\
    The first one should verify that the Login component is not included.\
    The second one should verify that the CourseList component is included", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
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
  it("TEST CASE 1:  verify that when the keys control and h are pressed the logOut function,\
      passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    window.alert = jest.fn(() => {});
    const wrapper = mount(<App />);
    events.keydown({ key: "h", ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });

  it("TEST CASE 2: verify that the default state for displayDrawer is false.\
  Verify that after calling handleDisplayDrawer, the state should now be true", () => {
    //
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("TEST CASE 3: Verify that after calling handleDisplayDrawer, the state should now be true", () => {
    //
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });
});

describe("TEST SUIT 3", () => {
  test("TEST CASE 1: Create a test to verify that the logIn function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    (async (wrapper) => {
      await act(() => {
        wrapper.instance().logIn("test@test.com", "123");
        wrapper.update();
      });
    })(wrapper);

    expect(wrapper.state("user").isLoggedIn).toBe(true);

    (async (wrapper) => {
      await act(() => {
        wrapper.instance().logOut();
        wrapper.update();
      });
    })(wrapper);

    expect(wrapper.state("user").isLoggedIn).toBe(false);
  });
});
