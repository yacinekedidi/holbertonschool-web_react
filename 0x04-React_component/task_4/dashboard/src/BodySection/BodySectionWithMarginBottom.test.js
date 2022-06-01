import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("TEST SUIT", () => {
  it("TEST CASE 1: checking that shallowing the component should render correctly a BodySection component\
    and that the props are passed correctly to the child component", () => {
    //
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find("BodySection").prop("title")).toBe("test title");
    expect(wrapper.find("BodySection > p").text()).toEqual("test children");

    expect(wrapper.find(".bodySectionWithMargin").exists()).toBe(true);
  });
});
