import { Reducer } from 'redux';
import initialState from './state';
import { ADD_USER, EDIT_USER, DELETE_USER, SET_LOGGED_STATUS } from './types';

const userReducer = (state = initialState, action) => {
    switch (action.type) {
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
                const currentUser = state.user.filter(function(el) { return el.id !== action.payload.id})
                return {
                    ...state,
                    user: currentUser,
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
