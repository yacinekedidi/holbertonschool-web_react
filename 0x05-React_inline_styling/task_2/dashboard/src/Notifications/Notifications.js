import React from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length !==
      this.props.listNotifications.length
      ? true
      : false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { props } = this;
    return (
      <div className="notif-container">
        <div id="menuItem" className={css(styles.menuItem)}>
          Your notifications
        </div>
        {props.displayDrawer ? (
          <div
            id="Notifications"
            className={css(styles.notifications)}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ul>
                {!props.listNotifications.length ? (
                  <NotificationItem value="No new notification for now" />
                ) : (
                  <>
                    <p>Here is the list of notifications</p>
                    {props.listNotifications.map((notif) => {
                      return (
                        <NotificationItem
                          {...notif}
                          key={notif.id}
                          markAsRead={this.markAsRead}
                        />
                      );
                    })}
                  </>
                )}
              </ul>
            </div>
            <button
              style={{
                display: "inline",
                ariaLabel: "Close",
                alignSelf: "flex-start",
                border: "none",
                cursor: "pointer",
                background: "transparent",
              }}
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={close} alt="close" style={{ width: "1rem" }} />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  notifications: {
    border: "3px dotted crimson",
    padding: "1rem",
  },
  menuItem: {
    textAlign: "right",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
