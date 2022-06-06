import React from "react";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";

const BodySectionWithMarginBottom = (props) => {
  return (
    <div
      id="bodySectionWithMargin"
      className={css(styles.bodySectionWithMargin)}
    >
      <BodySection {...props} />
    </div>
  );
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  },
});

export default BodySectionWithMarginBottom;
