import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

describe("TEST SUITE:", () => {
  const wrapper = shallow(<App />);
  it("TEST CASE 1: renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("TEST CASE 2: contains Notifications ", () => {
    shallow(<Notifications />);
  });

  it("TEST CASE 3: contains Header ", () => {
    shallow(<Header />);
  });

  it("TEST CASE 4: contains Login ", () => {
    shallow(<Footer />);
  });

  it("TEST CASE 5: contains Footer ", () => {
    shallow(<Login />);
  });
});
