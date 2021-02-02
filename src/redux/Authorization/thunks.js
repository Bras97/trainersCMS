import {
    clearCurrentAuthorizationUser as clearCurrentAuthorizationUserAction, setAuthorizationUser,
    setAuthorizationUserPending, setError,
} from './actions';
import {
    readAuthorizationUserFromLocalStorage,
    removeAuthorizationUserFromLocalStorage,
    saveAuthorizationUserInLocalStorage
} from "./utils";
import kyClient from "../../api/kyClient";
import {useSelector} from "react-redux"

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
      console.log(e);
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
    try {
        console.log(newUser)
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
};

export const updateUser = (user) => async (
    dispatch,
    getState
) => {
    try {
        console.log("Do aktualizacji: ", user)
        const authorizationUser = JSON.parse(readAuthorizationUserFromLocalStorage());
        user.avatar = undefined;
        const response = await kyClient.put('user', {json: user});
        const userData = await response.json();
        authorizationUser.user = userData
        if (userData) {
            dispatch(setAuthorizationUser(authorizationUser));
            dispatch(setError(false));
            saveAuthorizationUserInLocalStorage(authorizationUser);
        }

    } catch (e) {
        dispatch(setError(true));
        console.log("ERROR")
    }
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
