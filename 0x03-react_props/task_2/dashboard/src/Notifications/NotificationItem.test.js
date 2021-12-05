import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("TEST SUIT:", () => {
  it("test case1: component renders without crahing", () => {
    shallow(<NotificationItem />);
  });

  it("test case2: Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)", () => {
    const notificationItem = shallow(
      <NotificationItem type="default" value="test" />
    );

    expect(notificationItem.html()).toContain(
      '<li data-notification-type="default">test</li>'
    );
  });

  it("test case3: Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }}))", () => {
    const notificationItem = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );

    expect(notificationItem.html()).toContain("<u>test</u>");
  });
});
