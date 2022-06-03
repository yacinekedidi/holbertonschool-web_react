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
      this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
      ? true
      : false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { props } = this;
    return (
      <div className={props.displayDrawer ? css(styles.notifContainer) : ""}>
        <div
          id="menuItem"
          className={
            !props.displayDrawer ? css(styles.menuItem) : css(styles.hideMenu)
          }
          onClick={props.handleDisplayDrawer}
        >
          Your notifications
        </div>
        {props.displayDrawer ? (
          <div
            id="Notifications"
            className={css(styles.notifications)}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <ul className={css(styles.ul)}>
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
              id="closeBtn"
              style={{
                display: "inline",
                ariaLabel: "Close",
                alignSelf: "flex-start",
                border: "none",
                cursor: "pointer",
                background: "transparent",
              }}
              onClick={props.handleHideDrawer}
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

const responsive = {
  small: "@media (max-width: 900px)",
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: "3px dotted crimson",
    padding: "1rem",
  },
  menuItem: {
    textAlign: "right",
    backgroundColor: "#fff8f8",
    whiteSpace: "nowrap",

    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  hideMenu: {
    display: "none",
  },
  notifContainer: {
    [responsive.small]: {
      position: "absolute",
      width: "100vw",
      height: "100vh",
      backgroundColor: "white",
    },
  },
  ul: {
    [responsive.small]: {
      padding: 0,
      listStyle: "none",
      fontSize: "20px",
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
