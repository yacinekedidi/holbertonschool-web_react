import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <div className={css(styles.appBody)}>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <label className={css(styles.label)} htmlFor="email">
        Email:
      </label>
      <input
        className={css(styles.input)}
        type="email"
        name="email"
        id="email"
      />
      <label className={css(styles.label)} htmlFor="password">
        Password:
      </label>
      <input
        className={css(styles.input)}
        type="password"
        name="password"
        id="password"
      />
      <button className={css(styles.button)}>OK</button>
    </div>
  );
};

const styles = StyleSheet.create({
  appBody: {
    height: "60vh",
    padding: "3rem",
  },
  p: {
    fontSize: "1.5rem",
  },
  label: {
    fontWeight: 550,
  },
  input: {
    margin: "0 1rem",
  },
  button: {
    background: "white",
    border: "2px ridge",
    cursor: "pointer",
    borderRadius: "5px",
  },
});

export default Login;
