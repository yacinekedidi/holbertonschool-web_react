/* eslint-disable no-multi-str */
import {
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import notificationReducer, { initialState } from "./notificationReducer";

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

  const stateAfterFetchNotificationsSuccess = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available",
      },
    ],
  };

  const stateAfterMarkAsRead = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        isRead: true,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available",
      },
    ],
  };

  const stateAfterSetNotificationType = {
    filter: "URGENT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available",
      },
    ],
  };

  it("TEST CASE 1: Test that the default state without action returns that same state", () => {
    expect(notificationReducer(initialState)).toEqual(initialState);
  });

  it("TEST CASE 1:\
        Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed\
        Test that MARK_AS_READ returns the data with the right item updated\
        Test that SET_TYPE_FILTER returns the data with the right item updated", () => {
    // FETCH_NOTIFICATIONS_SUCCESS
    expect(
      notificationReducer(initialState, fetchNotificationsSuccess())
    ).toEqual(stateAfterFetchNotificationsSuccess);
  });

  //MARK_AS_READ
  expect(
    notificationReducer(stateAfterFetchNotificationsSuccess, markAsAread(2))
  ).toEqual(stateAfterMarkAsRead);

  //SET_TYPE_FILTER
  expect(
    notificationReducer(
      stateAfterFetchNotificationsSuccess,
      setNotificationFilter("URGENT")
    )
  ).toEqual(stateAfterSetNotificationType);
});
