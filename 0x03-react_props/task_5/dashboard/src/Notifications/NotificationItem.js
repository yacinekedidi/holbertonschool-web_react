import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, html, value }) => {
  return value ? (
    <li data-priority={type}>{value}</li>
  ) : (
    <li data-priority={type} dangerouslySetInnerHTML={html}></li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
