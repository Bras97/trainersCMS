import { ADD_TARIFF, Tariff, TariffActions, SET_CURRENT_TARIFF, SET_TARIFFS, SET_TARIFF_PENDING } from "./types";

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