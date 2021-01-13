import { Reducer } from 'redux';
import initialState from './state';
import { SET_TARIFFS, ADD_TARIFF, SET_TARIFF_PENDING, SET_CURRENT_TARIFF } from './types';

const tariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARIFFS:
            return {
                ...state,
                posts: action.payload,
            };
        case ADD_TARIFF:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case SET_CURRENT_TARIFF:
            return {
                ...state,
                currentTariff: action.payload,
            };
        case SET_TARIFF_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        default:
            return state;
    }
};

export default tariffReducer;
