import { Reducer } from 'redux';
import initialState from './state';
import { SET_FACULTIES, ADD_FACULTY, DELETE_FACULTY } from './types';

const facultyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FACULTIES:
            return {
                ...state,
                faculties: action.payload,
            };
        case ADD_FACULTY:
            return {
                ...state,
                faculties: [...state.faculties, action.payload],
            };
        case DELETE_FACULTY:
            {
                const currentFaculties = state.faculties.filter(function(el) { return el != action.payload})
                return {
                    ...state,
                    faculties: currentFaculties,
                };
            }
        default:
            return state;
    }
};

export default facultyReducer;
