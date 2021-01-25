import { EDIT_CURRENT_USER, ADD_CURRENT_USER, CurrentUser, CurrentUserActions, SET_CURRENT_USER, SET_CURRENT_USERS, SET_CURRENT_USER_PENDING, DELETE_CURRENT_USER, UPDATE_CURRENT_USER_INDEX} from "./types";

export const setCurrentUsers = (data) => {
    return {
        type: SET_CURRENT_USERS,
        payload: data
    };
}

export const setCurrentUser = (data) => {
    return {
        type: SET_CURRENT_USER,
        payload: data
    };
}

export const addCurrentUser = (data) => {
    return {
        type: ADD_CURRENT_USER,
        payload: data
    };
}

export const setPending = (data) => {
    return {
        type: SET_CURRENT_USER_PENDING,
        payload: data
    };
}

export const editCurrentUser = (currentUser) => {
    return {
        type: EDIT_CURRENT_USER,
        payload: currentUser
    };
}

export const deleteCurrentUser = (currentUser) => {
    return {
        type: DELETE_CURRENT_USER,
        payload: currentUser
    };
}

export const updateMaxIndex = () => {
    return {
        type: UPDATE_CURRENT_USER_INDEX
    };
}

