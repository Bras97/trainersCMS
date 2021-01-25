import { ADD_CITY, SET_CITIES, DELETE_CITY } from "./types";

export const setCities = (data) => {
    return {
        type: SET_CITIES,
        payload: data
    };
}
export const addCity = (data) => {
    return {
        type: ADD_CITY,
        payload: data
    };
}

export const deleteCity = (city) => {
    return {
        type: DELETE_CITY,
        payload: city
    };
}

