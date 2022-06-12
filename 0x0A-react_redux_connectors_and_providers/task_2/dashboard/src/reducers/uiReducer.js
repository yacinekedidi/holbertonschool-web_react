import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN,
} from "../actions/uiActionTypes";

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
};

const uiReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case DISPLAY_NOTIFICATION_DRAWER:
        return { ...state, isNotificationDrawerVisible: true };
      case HIDE_NOTIFICATION_DRAWER:
        return { ...state, isNotificationDrawerVisible: false };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isUserLoggedIn: true,
        };
      case LOGIN_FAILURE:
        return { ...state, isUserLoggedIn: false };
      case LOGIN:
        const { email, password } = action.user;
        return {
          ...state,
          user: { email, password },
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          isUserLoggedIn: false,
        };
      default:
        break;
    }
  }
  return state;
};

export default uiReducer;
