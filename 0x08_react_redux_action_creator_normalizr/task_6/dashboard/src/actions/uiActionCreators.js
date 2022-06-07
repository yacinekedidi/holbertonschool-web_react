import { bindActionCreators } from "redux";

import * as uiActionTypes from "./uiActionTypes";

export const login = (email, password) => ({
  type: uiActionTypes.LOGIN,
  user: { email, password },
});

export const logout = () => ({ type: uiActionTypes.LOGOUT });
export const displayNotificationDrawer = () => ({
  type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
});
export const hideNotificationDrawer = () => ({
  type: uiActionTypes.HIDE_NOTIFICATION_DRAWER,
});

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { login, logout, displayNotificationDrawer, hideNotificationDrawer },
    dispatch
  );
};
