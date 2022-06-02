import React from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <div className={css(styles.appBody)}>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <div className={css(styles.labelInputContainer)}>
        <label className={css(styles.label)} htmlFor="email">
          Email:
        </label>
        <input
          className={css(styles.input)}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className={css(styles.labelInputContainer)}>
        <label className={css(styles.label)} htmlFor="password">
          Password:
        </label>
        <input
          className={css(styles.input)}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
};

const responsive = {
  small: "@media (max-width: 900px)",
};

const styles = StyleSheet.create({
  appBody: {
    height: "60vh",
    padding: "3rem",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      width: "50%",
    },
  },
  p: {
    fontSize: "1.5rem",
  },
  label: {
    fontWeight: 550,
  },
  input: {
    width: "20vw",
    [responsive.small]: {
      display: "inline-block",
      border: "none",
    },
  },
  labelInputContainer: {
    display: "flex",
    flexDirection: "column",
    [responsive.small]: {
      flexDirection: "row",
    },
  },
  button: {
    background: "white",
    border: "2px ridge",
    cursor: "pointer",
    borderRadius: "5px",
    width: "8vw",
  },
});

export default Login;
