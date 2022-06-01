import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

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
        <div className="header-with-notif">
          <Header />
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className="App">
          {!this.props.isLoggedIn ? (
            <Login />
          ) : (
            <CourseList listCourses={listCourses} />
          )}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
