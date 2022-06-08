/* eslint-disable no-multi-str */
import courseReducer, { initialState } from "./courseReducer";
import { selectCourse, unSelectCourse } from "../actions/courseActionCreators";

describe("TEST SUIT", () => {
  it("TEST CASE 1: Test that the default state returns an empty array", () => {
    expect(courseReducer(initialState)).toEqual([]);
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

    const afterFetchCourseSuccess = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    expect(courseReducer(initialState, fetchCourseSuccess())).toEqual(
      afterFetchCourseSuccess
    );

    const afterSelectCourse = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];
    expect(courseReducer(afterFetchCourseSuccess, selectCourse(2))).toEqual(
      afterSelectCourse
    );

    const afterUnselectCourse = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    expect(courseReducer(afterSelectCourse, unSelectCourse(2))).toEqual(
      afterUnselectCourse
    );
  });
});
