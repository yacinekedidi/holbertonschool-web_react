/* eslint-disable no-multi-str */
import courseReducer, { initialState } from "./courseReducer";
import { selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { Map } from "immutable";

describe("TEST SUIT", () => {
  it("TEST CASE 1: Test that the default state returns an empty array", () => {
    expect(courseReducer(initialState).toArray()).toEqual([]);
  });

  it("TEST CASE 2:\
        Test that FETCH_COURSE_SUCCESS returns the data passed\
        Test that SELECT_COURSE returns the data with the right item updated\
        Test that UNSELECT_COURSE returns the data with the right item updated", () => {
    //
    const fetchCourseSuccess = () => ({
      type: "FETCH_COURSE_SUCCESS",
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          credit: 40,
        },
      ],
    });

    const afterFetchCourseSuccess = {
      1: { credit: 60, id: 1, isSelected: false, name: "ES6" },
      2: { credit: 20, id: 2, isSelected: false, name: "Webpack" },
      3: { credit: 40, id: 3, isSelected: false, name: "React" },
    };

    // const recieved = courseReducer(initialState, fetchCourseSuccess())
    //   .toArray()
    //   .map((course) => ({ ...course[1] }));
    // expect(recieved).toEqual(afterFetchCourseSuccess);
    expect(courseReducer(initialState, fetchCourseSuccess()).toJS()).toEqual(
      afterFetchCourseSuccess
    );

    const afterSelectCourse = {
      1: { credit: 60, id: 1, isSelected: false, name: "ES6" },
      2: { credit: 20, id: 2, isSelected: true, name: "Webpack" },
      3: { credit: 40, id: 3, isSelected: false, name: "React" },
    };
    expect(
      courseReducer(afterFetchCourseSuccess, selectCourse(2)).toJS()
    ).toEqual(afterSelectCourse);

    const afterUnselectCourse = {
      1: { credit: 60, id: 1, isSelected: false, name: "ES6" },
      2: { credit: 20, id: 2, isSelected: false, name: "Webpack" },
      3: { credit: 40, id: 3, isSelected: false, name: "React" },
    };

    expect(courseReducer(afterSelectCourse, unSelectCourse(2)).toJS()).toEqual(
      afterUnselectCourse
    );
  });
});
