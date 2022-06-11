/* eslint-disable no-multi-str */
import { markAsAread } from "../actions/notificationActionCreators";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import notificationReducer, {
  initialState,
} from "../reducers/notificationReducer";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("TEST SUIT", () => {
  //
  const fetchNotificationsSuccess = () => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
      },
    ],
  });
  it("TEST CASE 1:\
    - filterTypeSelected works as expected\
    - getNotifications returns a list of the message entities within the reducer\
    -  getUnreadNotifications return a list of the message entities within the reducer", () => {
    //
    const newState = notificationReducer(
      initialState,
      fetchNotificationsSuccess()
    );
    expect(filterTypeSelected(newState)).toEqual(newState.get("filter"));
    expect(getNotifications(newState)).toEqual(newState.get("notifications"));
    const stateWithRead = notificationReducer(newState, markAsAread(2));
    const expected = [
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      { id: 3, type: "urgent", value: "New data available", isRead: false },
    ];
    expect(getUnreadNotifications(stateWithRead)).toEqual(expected);
  });
});
