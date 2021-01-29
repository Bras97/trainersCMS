import {Reducer} from 'redux';
import initialState from './state';
import {
    AuthorizationActions,
    AuthorizationState,
    CLEAR_CURRENT_AUTHORIZATION_USER,
    SET_AUTHORIZATION_USER,
    SET_AUTHORIZATION_USER_PENDING,
    SET_ERROR
} from './types';

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORIZATION_USER:
            return {
                ...state,
                authorization: action.payload,
            };
        case CLEAR_CURRENT_AUTHORIZATION_USER:
            return {
                ...state,
                authorization: undefined,
            };
        case SET_AUTHORIZATION_USER_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
