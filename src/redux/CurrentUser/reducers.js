import { Reducer } from 'redux';
import initialState from './state';
import { SET_CURRENT_USERS, ADD_CURRENT_USER, SET_CURRENT_USER_PENDING, SET_CURRENT_USER, EDIT_CURRENT_USER, DELETE_CURRENT_USER, UPDATE_CURRENT_USER_INDEX } from './types';

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USERS:
            return {
                ...state,
                currentUsers: action.payload,
            };
        case ADD_CURRENT_USER:
            return {
                ...state,
                currentUsers: [...state.currentUsers, action.payload],
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case SET_CURRENT_USER_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case EDIT_CURRENT_USER:
            {
                const currentUserIndex = state.currentUsers.findIndex(currentUser => currentUser.id === action.payload.id)
                const currentUsers = [...state.currentUsers]
                currentUsers[currentUserIndex] = action.payload
                return {
                    ...state,
                    currentUsers: currentUsers,
                };
            }
        case DELETE_CURRENT_USER:
            {
                const currentUsers = state.currentUsers.filter(function(el) { return el.id !== action.payload.id})
                return {
                    ...state,
                    currentUsers: currentUsers,
                };
            }
        case UPDATE_CURRENT_USER_INDEX:
            {
                const newMaxIndex = state.maxIndex + 1;
                return {
                    ...state,
                    maxIndex: newMaxIndex,
                };
            }
        default:
            return state;
    }
};

export default currentUserReducer;
