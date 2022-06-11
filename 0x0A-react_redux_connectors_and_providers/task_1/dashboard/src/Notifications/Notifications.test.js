/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Notifications from "./Notifications";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
    expect(wrapper.find("#menuItem").exists()).toBe(true);
  });

  it("TEST CASE2: a check that the div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("#Notifications").exists()).toBe(false);
  });

  it("TEST CASE3: a check that the menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("#menuItem").exists()).toBe(true);
  });

  it("TEST CASE4: a check that the div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("#Notifications").exists()).toBe(true);
  });
});

describe("TEST SUIT3:", () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New revenge arc available" },
    { id: 4, type: "default", value: "New love arc available" },
  ];
  it("TEST CASE 1: verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("TEST CASE 2:  verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
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
//   describe("TEST SUIT 4", () => {
//     const listNotifications = [
//       { id: 1, type: "default", value: "New course available" },
//       { id: 2, type: "urgent", value: "New resume available" },
//       { id: 3, type: "urgent", value: "New revenge arc available" },
//       { id: 4, type: "default", value: "New love arc available" },
//     ];

//     afterEach(() => {
//       jest.restoreAllMocks();
//     });
//       it("TEST CASE1: ", () => {

//     const wrapper = mount(
//       <Notifications
//         listNotifications={listNotifications}
//         displayDrawer={true}
//       />
//     );

//         console.log = jest.fn();
//         const reactInstance = wrapper.instance();

//     const id = 2;
//         reactInstance.markAsRead(id);
//         expect(console.log).toHaveBeenCalledWith(
//           `Notification ${id} has been marked as read`
//         );
//     console.log(wrapper.props());

//     (async (wrapper) => {
//       await act(() => {
//         wrapper.props().markNotificationAsRead(id);
//         wrapper.update();
//       });
//     })(wrapper);

//     expect(wrapper.props().listNotifications).toHaveLength(3);
//   });
// });

// describe("TEST SUIT 5:", () => {
//   const listNotifications = [
//     { id: 1, type: "default", value: "New course available" },
//     { id: 2, type: "urgent", value: "New resume available" },
//     { id: 3, type: "urgent", value: "New revenge arc available" },
//     { id: 4, type: "default", value: "New love arc available" },
//   ];

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   it("TEST CASE 1: verify that when updating the props of the component with the same list,\
//   the component doesn’t rerender", () => {
//     //
//     const wrapper = shallow(
//       <Notifications listNotifications={listNotifications} />
//     );
//     const shouldUpdate = jest.spyOn(
//       Notifications.prototype,
//       "shouldComponentUpdate"
//     );
//     wrapper.setProps({ listNotifications: listNotifications });
//     expect(shouldUpdate).toHaveBeenCalled();
//     expect(shouldUpdate).toHaveLastReturnedWith(false);
//   });

//   it("TEST CASE 2:verify that when updating the props of the component with a longer list,\
//   the component does rerender", () => {
//     //
//     const wrapper = shallow(<Notifications listNotifications={[]} />);

//     const shouldUpdate = jest.spyOn(
//       Notifications.prototype,
//       "shouldComponentUpdate"
//     );
//     wrapper.setProps({ listNotifications: listNotifications });
//     expect(shouldUpdate).toHaveBeenCalled();
//     expect(shouldUpdate).toHaveLastReturnedWith(true);
//   });
// });

describe("TEST SUIT 6", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("TEST SUIT 1: verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("#menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("TEST SUIT 2:  verify that clicking on the button calls handleHideDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("#closeBtn").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
