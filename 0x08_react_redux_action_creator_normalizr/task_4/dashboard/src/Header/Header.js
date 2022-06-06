import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.jpg";
import AppContext from "../App/AppContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <div className={css(styles.appHeader)}>
          <img src={logo} alt="" className={css(styles.img)} />
          <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
        {user && user.isLoggedIn ? (
          <section id="logoutSection">
            Welcome {user.email}{" "}
            <span className={css(styles.logOutSpan)} onClick={logOut}>
              (logout)
            </span>
          </section>
        ) : (
          ""
        )}
      </>
    );
  }
}

Header.contextType = AppContext;

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
  logOutSpan: {
    cursor: "pointer",
  },
});

export default Header;
