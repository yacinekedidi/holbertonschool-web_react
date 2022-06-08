import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";

const Footer = () => {
  return (
    <>
      <AppContext.Consumer>
        {(value) => (
          <div className="App-footer">
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {value.user.isLoggedIn ? (
              <p>
                <a href="#"> contact us </a>
              </p>
            ) : (
              ""
            )}
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
};

export default Footer;
