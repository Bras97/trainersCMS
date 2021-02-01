import { ADD_USER, EDIT_USER, DELETE_USER, SET_LOGGED_STATUS, SET_USERS } from "./types";

export const setUsers = (data) => {
    return {
        type: SET_USERS,
        payload: data
    };
}

export const addUser = (data) => {
    return {
        type: ADD_USER,
        payload: data
    };
}

export const editUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user
    };
}

export const deleteUser = (user) => {
    return {
        type: DELETE_USER,
        payload: user
    };
}

export const setUserLoggedStatus = (isLogged) => {
    return {
        type: SET_LOGGED_STATUS,
        payload: isLogged
    };
}