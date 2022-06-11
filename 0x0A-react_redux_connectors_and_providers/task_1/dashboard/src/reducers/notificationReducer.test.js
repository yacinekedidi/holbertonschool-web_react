/* eslint-disable no-multi-str */
import { Map } from "immutable";
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
    notifications: {
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      2: {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
      3: {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      },
    },
  };

  const stateAfterMarkAsRead = {
    filter: "DEFAULT",
    notifications: {
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      2: {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: true,
      },
      3: {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      },
    },
  };

  const stateAfterSetNotificationType = {
    filter: "URGENT",
    notifications: {
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      2: {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false,
      },
      3: {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      },
    },
  };

  it("TEST CASE 1: Test that the default state without action returns that same state", () => {
    expect(notificationReducer(initialState).toJS()).toEqual(
      initialState.toJS()
    );
  });

  it("TEST CASE 2:\
        Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed\
        Test that MARK_AS_READ returns the data with the right item updated\
        Test that SET_TYPE_FILTER returns the data with the right item updated", () => {
    // FETCH_NOTIFICATIONS_SUCCESS
    expect(
      notificationReducer(initialState, fetchNotificationsSuccess()).toJS()
    ).toEqual(stateAfterFetchNotificationsSuccess);

    // //MARK_AS_READ
    expect(
      notificationReducer(
        Map(stateAfterFetchNotificationsSuccess),
        markAsAread(2)
      ).toJS()
    ).toEqual(stateAfterMarkAsRead);

    // //SET_TYPE_FILTER
    expect(
      notificationReducer(
        Map(stateAfterFetchNotificationsSuccess),
        setNotificationFilter("URGENT")
      ).toJS()
    ).toEqual(stateAfterSetNotificationType);
  });
});
