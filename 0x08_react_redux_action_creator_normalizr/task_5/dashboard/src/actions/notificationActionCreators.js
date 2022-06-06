import * as notificationActionTypes from "./notificationActionTypes";

export const markAsAread = (index) => ({
  type: notificationActionTypes.MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: notificationActionTypes.SET_TYPE_FILTER,
  filter,
});
