import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, html, value, id, markAsRead }) => {
  return value ? (
    <li data-priority={type} onClick={() => markAsRead(id)}>
      {value}
    </li>
  ) : (
    <li
      data-priority={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    ></li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
    id: PropTypes.number,
    markAsRead: PropTypes.func,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
  id: 0,
  markAsRead: () => {},
};

export default NotificationItem;
