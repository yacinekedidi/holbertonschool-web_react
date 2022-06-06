import * as data from "../../notifications.json";

console.log(data);
const getAllNotificationsByUser = (userId) => {
  return data.default
    .filter((user) => user.author.id === userId)
    .map(({ context }) => context);
};

export default getAllNotificationsByUser;
