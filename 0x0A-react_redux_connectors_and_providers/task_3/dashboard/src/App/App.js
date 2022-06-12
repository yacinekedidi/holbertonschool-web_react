import React from "react";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { mapDispatchToProps } from "../actions/uiActionCreators";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.logMeOut = this.logMeOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      logOut: this.logOut,
      listNotifications,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.logMeOut);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.logMeOut);
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notif) => notif.id !== id
      ),
    });
  }

  logMeOut(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      // this.state.logOut();
    }
  }

  render() {
    const {
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      isLoggedIn,
      loginRequest,
    } = this.props;
    const { listNotifications } = this.state;
    return (
      <>
        <div className={css(styles.headerWithNotif)}>
          <Header />
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
        </div>
        <div className={css(styles.app)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={loginRequest} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </BodySection>
          <Footer />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  body: {
    minHeight: "100vh",
  },
  headerWithNotif: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "3px solid crimson",
  },
});

export const mapStateToProps = (state) => ({
  isLoggedIn: state.isUserLoggedIn,
  displayDrawer: state.isNotificationDrawerVisible,
  user: state.user,
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  loginRequest: PropTypes.func,
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  user: null,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  loginRequest: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
