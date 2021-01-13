import { ADD_TARIFF, SET_CURRENT_TARIFF, SET_TARIFFS, SET_TARIFF_PENDING, EDIT_TARIFF, DELETE_TARIFF } from "./types";

export const setTariffs = (data) => {
    return {
        type: SET_TARIFFS,
        payload: data
    };
}

export const setCurrentTariff = (data) => {
    return {
        type: SET_CURRENT_TARIFF,
        payload: data
    };
}

export const addTariff = (data) => {
    return {
        type: ADD_TARIFF,
        payload: data
    };
}

export const setPending = (data) => {
    return {
        type: SET_TARIFF_PENDING,
        payload: data
    };
}

export const editTariff = (tariff) => {
    return {
        type: EDIT_TARIFF,
        payload: tariff
    };
}

export const deleteTariff = (tariff) => {
    return {
        type: DELETE_TARIFF,
        payload: tariff
    };
}