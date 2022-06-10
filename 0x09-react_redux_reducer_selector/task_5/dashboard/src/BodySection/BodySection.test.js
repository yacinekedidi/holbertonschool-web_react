import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("TEST SUIT", () => {
  it("TEST CASE1: checking that shallowing the component should render correctly the children and one h2 element", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>{" "}
      </BodySection>
    );

    expect(wrapper.find("h2").text()).toEqual("test title");
    expect(wrapper.find("p").text()).toEqual("test children node");
  });
});
