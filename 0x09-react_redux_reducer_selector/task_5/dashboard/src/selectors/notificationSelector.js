/* eslint-disable array-callback-return */
export const filterTypeSelected = (state) => state.get("filter");
export const getNotifications = (state) => state.get("notifications");
export const getUnreadNotifications = (state) => {
  const notifications = getNotifications(state);
  return Object.values(notifications).filter(
    (notification) => notification.isRead === false
  );
};
