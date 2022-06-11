/* eslint-disable array-callback-return */
import { Map, setIn } from "immutable";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import coursesNormalizer from "../schema/courses";

export const initialState = Map([]);

const courseReducer = (state = initialState, action) => {
  state = Map(state);
  if (action) {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        const normalizedData = coursesNormalizer(action.data);
        const { courses } = normalizedData.entities;
        Object.keys(courses).map((key) => {
          courses[key] = {
            ...courses[key],
            isSelected: false,
          };
        });
        return state.merge(courses);

      case SELECT_COURSE:
        return setIn(state, [String(action.index), "isSelected"], true);

      case UNSELECT_COURSE:
        return setIn(state, [String(action.index), "isSelected"], false);

      default:
        break;
    }
  }

  return state;
};

export default courseReducer;
