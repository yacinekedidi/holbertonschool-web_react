/* eslint-disable no-multi-str */
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";
import uiReducer, { initialState } from "./uiReducer";

describe("TEST SUIT", () => {
  const stateToJS = initialState.toJS();
  it("TEST CASE 1: verifying the state returned by the uiReducer function equals the initial state when no action is passed", () => {
    //
    expect(uiReducer(initialState).toJS()).toEqual(stateToJS);
  });

  it("TEST CASE 2: verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
    //
    expect(uiReducer(initialState, selectCourse(1)).toJS()).toEqual(stateToJS);
  });
  it("TEST CASE 3: verifying the state returned by the uiReducer function,\
      when the action DISPLAY_NOTIFICATION_DRAWER is passed,\
      changes correctly the isNotificationDrawerVisible property", () => {
    //
    expect(uiReducer(initialState, displayNotificationDrawer()).toJS()).toEqual(
      {
        ...stateToJS,
        isNotificationDrawerVisible: true,
      }
    );
  });
});
