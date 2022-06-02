import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, html, value, id, markAsRead } = this.props;
    return value ? (
      <li
        className={css(
          type === "default" ? styles.defaultDataPrio : styles.urgentDataPrio
        )}
        data-priority={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    ) : (
      <li
        className={css(
          type === "default" ? styles.defaultDataPrio : styles.urgentDataPrio
        )}
        data-priority={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }
}

const styles = StyleSheet.create({
  defaultDataPrio: {
    color: "blue",
  },
  urgentDataPrio: {
    color: "red",
  },
});

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
