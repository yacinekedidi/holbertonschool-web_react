import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
  thStyle,
}) => {
  const bgColorRow = { backgroundColor: "#f5f5f5ab" };
  const bgColorHeaderRow = { backgroundColor: "#deb5b545" };

  if (isHeader)
    return (
      <tr style={bgColorHeaderRow}>
        {textSecondCell === null ? (
          <th colSpan="2" className={thStyle}>
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
    <tr style={bgColorRow}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CourseListRow;
