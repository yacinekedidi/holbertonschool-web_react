import React from "react";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logMeOut = this.logMeOut.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.logMeOut);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.logMeOut);
  }

  logMeOut(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    return (
      <>
        <div className={css(styles.headerWithNotif)}>
          <Header />
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className={css(styles.app)}>
          {!this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>testing</p>
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
