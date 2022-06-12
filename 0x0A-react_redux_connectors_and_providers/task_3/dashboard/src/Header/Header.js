import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.jpg";
import { logout } from "../actions/uiActionCreators";

export class Header extends React.Component {
  render() {
    const { user, logout } = this.props;
    return (
      <>
        <div className={css(styles.appHeader)}>
          <img src={logo} alt="" className={css(styles.img)} />
          <h1 className={css(styles.h1)}>School dashboard</h1>
        </div>
        {user && user.email ? (
          <section id="logoutSection">
            Welcome {user.email}{" "}
            <span className={css(styles.logOutSpan)} onClick={logout}>
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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: {},
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
