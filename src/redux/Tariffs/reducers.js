import { Reducer } from 'redux';
import initialState from './state';
import { SET_TARIFFS, ADD_TARIFF, SET_TARIFF_PENDING, SET_CURRENT_TARIFF, EDIT_TARIFF, DELETE_TARIFF } from './types';

const tariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARIFFS:
            return {
                ...state,
                tariffs: action.payload,
            };
        case ADD_TARIFF:
            return {
                ...state,
                tariffs: [...state.tariffs, action.payload],
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
        case EDIT_TARIFF:
            {
                const tariffIndex = state.tariffs.findIndex(tariff => tariff.id === action.payload.id)
                const currentTariffs = [...state.tariffs]
                currentTariffs[tariffIndex] = action.payload
                return {
                    ...state,
                    tariffs: currentTariffs,
                };
            }
        case DELETE_TARIFF:
            {
                const currentTariffs = state.tariffs.filter(function(el) 
                { return el.price != action.payload.price && 
                    el.category != action.payload.category && 
                    el.title != action.payload.title })
                return {
                    ...state,
                    tariffs: currentTariffs,
                };
            }
        default:
            return state;
    }
};

export default tariffReducer;
