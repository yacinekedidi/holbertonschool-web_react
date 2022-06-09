import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";

export const initialState = {
  notifications: [],
  filter: "DEFAULT",
};

const notificationReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        const notifications = action.data.map((notification) => ({
          ...notification,
          isRead: false,
        }));
        return { ...state, notifications };
      case MARK_AS_READ:
        const updatedNotifications = state.notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        );
        return { ...state, notifications: updatedNotifications };
      case SET_TYPE_FILTER:
        return NotificationTypeFilters.includes(action.filter)
          ? { ...state, filter: action.filter }
          : state;
      default:
        break;
    }
  }

  return state;
};

export default notificationReducer;
