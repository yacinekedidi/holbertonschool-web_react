import React from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

const CourseList = (props) => {
  return (
    <table id="CourseList" className={css(styles.courseList, styles.multi)}>
      <thead className={css(styles.thead, styles.multi)}>
        <CourseListRow
          isHeader={true}
          textFirstCell="Available courses"
          thStyle={css(styles.thColSpan, styles.multi)}
        />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {!props.listCourses.length ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : (
          <>
            {props.listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                isHeader={false}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  courseList: {
    margin: "3rem",
  },
  multi: {
    borderCollapse: "collapse",
    border: "1px ridge",
  },
  thead: {
    textAlign: "left",
  },
  thColSpan: {
    textAlign: "center",
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
