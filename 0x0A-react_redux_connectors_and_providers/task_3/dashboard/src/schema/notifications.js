import * as data from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const notificationsNormalizer = (data) =>
  normalize(data, [notification]);

export const normalizedData = normalize(data.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const res = [];
  const { notifications, messages } = normalizedData.entities;

  for (const i in notifications) {
    if (notifications[i].author === userId)
      res.push(messages[notifications[i].context]);
  }
  return res;
};

export default getAllNotificationsByUser;
