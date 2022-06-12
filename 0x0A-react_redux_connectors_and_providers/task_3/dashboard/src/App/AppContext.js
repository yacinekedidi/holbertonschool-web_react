import React from "react";

export const user = { email: "", password: "" };
export const logOut = () => {};

const AppContext = React.createContext({ user, logOut });

export default AppContext;
