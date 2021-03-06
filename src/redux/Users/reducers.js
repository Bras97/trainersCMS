import { Reducer } from 'redux';
import initialState from './state';
import { ADD_USER, EDIT_USER, DELETE_USER, SET_LOGGED_STATUS, SET_USERS } from './types';

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case EDIT_USER:
            {
                const userIndex = state.users.findIndex(user => user.id === action.payload.id)
                const currentUsers = [...state.users]
                currentUsers[userIndex] = action.payload
                return {
                    ...state,
                    users: currentUsers,
                };
            }
        case DELETE_USER:
            {
                const currentUser = state.users.filter(function(el) { return el._id !== action.payload._id})
                return {
                    ...state,
                    users: currentUser,
                };
            }
        case SET_LOGGED_STATUS:
            {
                const currentUsers = [...state.users]
                currentUsers[0].isLogged = action.payload
                return {
                    ...state,
                    users: currentUsers,
                };
            }
        default:
            return state;
    }
};

export default userReducer;
