import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("TEST SUIT1:", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  it("test case1:", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  // it("test case2: contains 3 list elements", () => {
  //   expect(wrapper.find("NotificationItem")).toHaveLength(3);
  // });

  // it("test case3: renders text [Here is the list of notifications]", () => {
  //   expect(wrapper.find(".Notifications p").text()).toBe(
  //     "Here is the list of notifications"
  //   );
  // });

  // it("test case4: verify that the first NotificationItem element renders the right html", () => {
  //   expect(wrapper.find("NotificationItem::first-child").html()).toEqual(
  //     '<li data-priority="default">New course available</li>'
  //   );
  // });
});

describe("TEST SUIT2", () => {
  it("TEST CASE1: a check that the menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("TEST CASE2: a check that the div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".Notifications").exists()).toBe(false);
  });

  it("TEST CASE3: a check that the menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
  });

  it("TEST CASE4: a check that the div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".Notifications").exists()).toBe(true);
  });
});

describe("TEST SUIT3:", () => {
  it("TEST CASE 1: verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("TEST CASE 2:  verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New revenge arc available" },
      { id: 4, type: "default", value: "New love arc available" },
    ];
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={true}
      />
    );
    expect(wrapper.find("NotificationItem")).toHaveLength(
      listNotifications.length
    );
  });

  it("TEST CASE 3:  verify that when listNotifications is empty the message Here is the list of notifications is not displayed,\
    but No new notification for now is", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("NotificationItem").html()).toContain(
      "No new notification for now"
    );
  });
});
