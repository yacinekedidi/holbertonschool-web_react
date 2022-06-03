import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.jpg";

const Header = () => {
  return (
    <div className={css(styles.appHeader)}>
      <img src={logo} alt="" className={css(styles.img)} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    display: "flex",
    padding: "1rem",
  },
  img: {
    width: "200px",
    height: "200px",
  },
  h1: {
    fontSize: "2.5rem",
    padding: "2rem",
    color: "crimson",
  },
});

export default Header;
