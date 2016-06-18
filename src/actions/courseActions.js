import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

//Function below is action creater func and types.LOAD_COURSES_SUCCESS is an action
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(courses) {
  return {type: types.CREATE_COURSE_SUCCESS, courses};
}

export function updateCourseSuccess(courses) {
  return {type: types.UPDATE_COURSE_SUCCESS, courses};
}

//Function below is a thunk it returns another function
export function loadCourses() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}