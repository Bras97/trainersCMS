import { Reducer } from 'redux';
import initialState from './state';
import { SET_CITIES, ADD_CITY, DELETE_CITY } from './types';

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES:
            return {
                ...state,
                cities: action.payload,
            };
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload],
            };
        case DELETE_CITY:
            {
                const currentCities = state.cities.filter(function(el) { return el != action.payload})
                return {
                    ...state,
                    cities: currentCities,
                };
            }
        default:
            return state;
    }
};

export default cityReducer;
