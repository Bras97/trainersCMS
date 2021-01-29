import {
    clearCurrentAuthorizationUser as clearCurrentAuthorizationUserAction, setAuthorizationUser,
    setAuthorizationUserPending, setError,
} from './actions';
import {AuthorizationUser} from './types';
import {
    readAuthorizationUserFromLocalStorage,
    removeAuthorizationUserFromLocalStorage,
    saveAuthorizationUserInLocalStorage
} from "./utils";
import kyClient from "../../api/kyClient";
import {User} from "../Users/types";

export const fetchCurrentAuthorizationUser = () => async (
    dispatch,
    getState
) => {
    const response = readAuthorizationUserFromLocalStorage();
    if (response) {
        const parsedResponse = JSON.parse(response);
        dispatch(setAuthorizationUser(parsedResponse));
    }
};

export const login = (user) => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.post('user/login', {json: user});
        const data = await response.json();
        console.log("data: ", data)
        if (data) {
            dispatch(setAuthorizationUser(data));
            dispatch(setError(false));
            saveAuthorizationUserInLocalStorage(data);
        }

    } catch (e) {
        dispatch(setError(true));
    }
};

export const RegisterUser = {
    password: "",
    type: "",
    city: "",
    name: "",
    phone: null,
    email: "",
    description: "",
    specializations: null,
    firstName: "",
    lastName: ""
}

export const register = (newUser) => async (
    dispatch,
    getState
) => {
    dispatch(setAuthorizationUserPending(true));
    try {
        const response = await kyClient.post('user/register', {json: newUser});
        const data = await response.json();
        if (data) {
            dispatch(setAuthorizationUser(data));
            dispatch(setError(false));
            saveAuthorizationUserInLocalStorage(data);
        }

    } catch (e) {
        dispatch(setError(true));
    }
    dispatch(setAuthorizationUserPending(false));
};

export const saveAuthorizationUser = (user) => async (
    dispatch,
    getState
) => {
        dispatch(setAuthorizationUserPending(true));
        saveAuthorizationUser(user);
        dispatch(setAuthorizationUser(user));
        dispatch(setAuthorizationUserPending(false));
};

export const clearCurrentAuthorizationUser = () => async (
    dispatch,
    getState
) => {
    removeAuthorizationUserFromLocalStorage();
    dispatch(clearCurrentAuthorizationUserAction());
};
