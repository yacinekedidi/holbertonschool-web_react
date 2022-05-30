import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

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
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("Login").exists()).toBe(false);
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });
});
