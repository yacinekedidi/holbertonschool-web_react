/* eslint-disable no-multi-str */
import * as notificationActionTypes from "./notificationActionTypes";
import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";

describe("TEST SUIT", () => {
  it("TEST CASE 1: Calling the creator with 1 as an argument should return:\
        { type: MARK_AS_READ, index: 1}", () => {
    const expected = { type: notificationActionTypes.MARK_AS_READ, index: 1 };
    expect(markAsAread(1)).toEqual(expected);
  });

  it("TEST CASE 2: Calling the creator with one of the filters from NotificationTypeFilters as an argument should return:\
    { type: SET_TYPE_FILTER, filter: DEFAULT }", () => {
    const expected = {
      type: notificationActionTypes.SET_TYPE_FILTER,
      filter: "DEFAULT",
    };
    expect(setNotificationFilter("DEFAULT")).toEqual(expected);
  });
});
