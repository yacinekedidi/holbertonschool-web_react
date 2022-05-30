import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = (props) => {
  return (
    <div className="notif-container">
      <div className="menuItem">Your notifications</div>
      {props.displayDrawer ? (
        <div
          className="Notifications"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ul>
              {!props.listNotifications.length ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                <>
                  <p>Here is the list of notifications</p>
                  {props.listNotifications.map((notif) =>
                    notif.html ? (
                      <NotificationItem
                        key={notif.id}
                        type={notif.type}
                        html={notif.html}
                      />
                    ) : (
                      <NotificationItem
                        key={notif.id}
                        type={notif.type}
                        value={notif.value}
                      />
                    )
                  )}
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
