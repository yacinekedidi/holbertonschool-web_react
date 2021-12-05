import React from "react";
import { shallow } from "enzyme";
import Notification from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("TEST SUITE:", () => {
  const wrapper = shallow(<Notification />);
  it("test case1:", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("test case2: contains 3 list elements", () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("test case1: renders text [Here is the list of notifications]", () => {
    expect(wrapper.first(NotificationItem).text()).toContain(
      "Here is the list of notifications<NotificationItem /><NotificationItem /><NotificationItem />"
    );
  });
});
