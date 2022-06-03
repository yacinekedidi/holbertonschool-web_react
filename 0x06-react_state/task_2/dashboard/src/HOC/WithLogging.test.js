/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("TEST SUIT", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("TEST CASE1: make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html ", () => {
    //
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapped = mount(<HOC />);
    expect(wrapped.exists()).toBe(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Component is mounted`
    );

    wrapped.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Component is going to unmount`
    );
  });

  it("TEST CASE2:make sure console.log was called on mount and on unmount with the name of the component\
        when the wrapped element is the Login component.\
        Component Login is mounted and Component Login is going to unmount should be sent to the console ", () => {
    //
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapped = mount(<HOC />);
    expect(wrapped.exists()).toBe(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Login is mounted`
    );

    wrapped.unmount();
    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Login is going to unmount`
    );
  });
});
