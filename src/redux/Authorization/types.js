
export const AuthorizationUser = {
    user: null,
    token: ""
}

export const AuthorizationState = {
    authorization: null,
    pending: null,
    error: null
}

export const SET_ERROR = 'SET_ERROR';
export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';
export const SET_AUTHORIZATION_USER = 'SET_AUTHORIZATION_USER';
export const SET_AUTHORIZATION_USER_PENDING = 'SET_AUTHORIZATION_USER_PENDING';
export const CLEAR_CURRENT_AUTHORIZATION_USER = 'CLEAR_CURRENT_AUTHORIZATION_USER';

export const SetErrorAction = (boolean) => {
    return{
        type: SET_ERROR,
        payload: boolean
    }
}

export const SetAuthorizationUserAction = (user) => {
    return{
        type: SET_AUTHORIZATION_USER,
        payload: user
    }
}

export const ClearCurrentAuthorizationUserAction = () => {
    return{
        type: CLEAR_CURRENT_AUTHORIZATION_USER
    }
}

export const SetAuthorizationUserPending = (boolean) => {
    return{
    type: SET_AUTHORIZATION_USER_PENDING,
    payload: boolean
    }
}
