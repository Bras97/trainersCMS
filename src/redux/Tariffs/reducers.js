import { Reducer } from 'redux';
import initialState from './state';
import { TariffsState, TariffActions, SET_TARIFFS, ADD_TARIFF, SET_TARIFF_PENDING, SET_CURRENT_TARIFF, INIT_TARIFFS } from './types';

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
        case INIT_TARIFFS:
            return state;
        default:
            return state;
    }
};

export default tariffReducer;
