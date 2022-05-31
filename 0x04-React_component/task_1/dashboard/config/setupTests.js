/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
