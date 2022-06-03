import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  if (isHeader)
    return (
      <tr className={css(styles.bgColorHeaderRow)}>
        {textSecondCell === null ? (
          <th colSpan="2" className={css(styles.thColSpan, styles.multi)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  return (
    <tr className={css(styles.bgColorRow)}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

const styles = StyleSheet.create({
  thColSpan: {
    textAlign: "center",
  },
  multi: {
    borderCollapse: "collapse",
    border: "1px ridge",
  },
  bgColorRow: {
    backgroundColor: "#f5f5f5ab",
  },
  bgColorHeaderRow: { backgroundColor: "#deb5b545" },
});

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CourseListRow;
