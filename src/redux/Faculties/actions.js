import { ADD_FACULTY, SET_FACULTIES, DELETE_FACULTY } from "./types";

export const setFaculties = (data) => {
    return {
        type: SET_FACULTIES,
        payload: data
    };
}
export const addFaculty = (data) => {
    return {
        type: ADD_FACULTY,
        payload: data
    };
}

export const deleteFaculty = (faculty) => {
    return {
        type: DELETE_FACULTY,
        payload: faculty
    };
}

