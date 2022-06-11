/**
 * @jest-environment jsdom
 */
import { fromJS } from "immutable";
import { StyleSheetTestUtils } from "aphrodite";

import { mapStateToProps } from "./App";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("TEST SUIT", () => {
  // eslint-disable-next-line no-multi-str
  test("CASE 1: verify that the function returns the right object when passing the\
        let state = fromJS({ isUserLoggedIn: true }); should return { isLoggedIn: true }", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });
    const recieved = mapStateToProps(state);
    const expected = { isLoggedIn: true };
    expect(recieved).toEqual(expected);
  });
});
