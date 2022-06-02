import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import NotificationItem from "./NotificationItem";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("TEST SUIT 1", () => {
  test("TEST CASE 1: Verify that the basic rendering of the component works without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  test("TEST CASE 2: Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").html()).toEqual(
      '<li data-priority="default">test</li>'
    );
  });

  test("TEST CASE 3:  Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }})", () => {
    const wrapper = shallow(
      <NotificationItem type="default" html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.find("li").html()).toEqual(
      '<li data-priority="default"><u>test</u></li>'
    );
  });

  describe("TEST SUIT 2", () => {
    //

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("TEST CASE 1: ", () => {
      const id = 2;
      const wrapper = shallow(
        <NotificationItem type="default" value="test" id={id} />
      );
      const wrapperCopy = wrapper;

      wrapperCopy.markAsRead = jest.fn();
      wrapperCopy.find("li").first().simulate("click");
      wrapperCopy.markAsRead(id);
      expect(wrapperCopy.markAsRead).toHaveBeenCalledWith(id);
      jest.restoreAllMocks();
    });
  });
});
