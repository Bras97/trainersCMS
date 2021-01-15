import { ADD_USER, EDIT_USER, DELETE_USER } from "./types";

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