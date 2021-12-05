import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <div
      className="Notifications"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem
            type="urgent"
            value=""
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          />
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
  );
};

export default Notifications;
