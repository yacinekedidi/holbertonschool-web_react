import { shallow } from "enzyme";
import Notification from "./Notifications";

describe("TEST SUITE:", () => {
  const wrapper = shallow(<Notification />);
  it("test case1:", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("test case2: contains 3 list elements", () => {
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("test case1: renders text [Here is the list of notifications]", () => {
    expect(wrapper.find(".Notifications p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
