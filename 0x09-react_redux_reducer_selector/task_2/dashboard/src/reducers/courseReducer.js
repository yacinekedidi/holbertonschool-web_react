import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

export const initialState = [];

const courseReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        const newData = action.data.map((course) => ({
          ...course,
          isSelected: false,
        }));
        return [...state, ...newData];
      case SELECT_COURSE:
        return state.map((course) =>
          course.id === action.index ? { ...course, isSelected: true } : course
        );

      case UNSELECT_COURSE:
        return state.map((course) =>
          course.id === action.index ? { ...course, isSelected: false } : course
        );
      default:
        break;
    }
  }

  return state;
};

export default courseReducer;
