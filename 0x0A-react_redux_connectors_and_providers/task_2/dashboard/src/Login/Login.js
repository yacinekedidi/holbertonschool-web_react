import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    this.setState((state) =>
      state.email !== "" && state.password !== ""
        ? { enableSubmit: true }
        : { enableSubmit: false }
    );
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
    this.setState((state) =>
      state.email !== "" && state.password !== ""
        ? { enableSubmit: true }
        : { enableSubmit: false }
    );
  }

  render() {
    return (
      <div className={css(styles.appBody)}>
        <p className={css(styles.p)}>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.labelInputContainer)}>
            <label className={css(styles.label)} htmlFor="email">
              Email:
            </label>
            <input
              className={css(styles.input)}
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
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
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

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
