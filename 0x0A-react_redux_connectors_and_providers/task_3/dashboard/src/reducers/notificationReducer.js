/* eslint-disable array-callback-return */
import { Map, setIn } from "immutable";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

export const initialState = Map({
  notifications: [],
  filter: "DEFAULT",
});

const notificationReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        const normalizedData = notificationsNormalizer(action.data);
        const { notifications } = normalizedData.entities;
        Object.keys(notifications).map((key) => {
          notifications[key] = {
            ...notifications[key],
            isRead: false,
          };
        });
        return state.merge({ notifications });

      case MARK_AS_READ:
        return setIn(state, ["notifications", action.index, "isRead"], true);

      case SET_TYPE_FILTER:
        return NotificationTypeFilters.includes(action.filter)
          ? setIn(state, ["filter"], action.filter)
          : state;

      default:
        break;
    }
  }

  return state;
};

export default notificationReducer;
