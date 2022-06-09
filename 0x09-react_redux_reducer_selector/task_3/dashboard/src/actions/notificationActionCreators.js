import { bindActionCreators } from "redux";

import * as notificationActionTypes from "./notificationActionTypes";

export const markAsAread = (index) => ({
  type: notificationActionTypes.MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: notificationActionTypes.SET_TYPE_FILTER,
  filter,
});

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ markAsAread, setNotificationFilter }, dispatch);
};
