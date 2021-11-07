import App from "./App";
import { shallow } from "enzyme";

describe("TEST SUITE:", () => {
  const wrapper = shallow(<App />);
  it("TEST CASE 1: renders App", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('TEST CASE 2: if App contains <div className="App-header></div>" ', () => {
    expect(wrapper.find("div.App-header")).toHaveLength(1);
  });

  it('TEST CASE 3: if App contains <div className="App-body></div>" ', () => {
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });

  it('TEST CASE 4: if App contains <div className="App-footer></div>" ', () => {
    expect(wrapper.find("div.App-footer")).toHaveLength(1);
  });
});
