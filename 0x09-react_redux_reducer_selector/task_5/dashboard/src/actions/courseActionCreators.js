import { bindActionCreators } from "redux";

import * as actionTypes from "./courseActionTypes";

export const selectCourse = (index) => ({
  type: actionTypes.SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: actionTypes.UNSELECT_COURSE,
  index,
});

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
};

// component receives props.selectCourse, props.unselectCourse
// connect(null, mapDispatchToProps)(CourseList)
