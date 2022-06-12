// import { bindActionCreators } from "redux";
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

export const loginSuccess = () => ({ type: uiActionTypes.LOGIN_SUCCESS });
export const loginFailure = () => ({ type: uiActionTypes.LOGIN_FAILURE });

export const loginRequest = (email, password) => (dispatch) => {
  dispatch(login(email, password));
  (async () => {
    try {
      const response = await fetch("http://localhost:8080/login-success.json");
      await response.json();
      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginFailure());
    }
  })();
};

// export const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     { login, logout, displayNotificationDrawer, hideNotificationDrawer },
//     dispatch
//   );
// };

export const mapDispatchToProps = (dispatch) => ({
  displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
  logout: () => dispatch(logout()),
});
