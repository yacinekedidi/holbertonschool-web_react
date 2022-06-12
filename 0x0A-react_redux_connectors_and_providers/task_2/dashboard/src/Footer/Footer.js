import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

export const Footer = ({ user }) => {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && user.email ? (
        <p>
          <a href="/"> contact us </a>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

Footer.defaultProps = {
  user: {},
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Footer);
