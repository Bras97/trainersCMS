
export function CurrentUser(id, name, surname, email, password, city, description, avatar, isLogged) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.city = city;
    this.description = description;
    this.avatar = avatar;
    this.isLogged = isLogged;
  }

export const SET_CURRENT_USERS = 'SET_CURRENT_USERS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const ADD_CURRENT_USER = 'ADD_CURRENT_USER';
export const EDIT_CURRENT_USER = 'EDIT_CURRENT_USER';
export const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';
export const SET_CURRENT_USER_PENDING = 'SET_CURRENT_USER_PENDING';
export const UPDATE_CURRENT_USER_INDEX = 'UPDATE_CURRENT_USER_INDEX';

export const SetCurrentUsersAction = (currentUser) => {
    return{
        type: SET_CURRENT_USERS,
        payload: currentUser
    }
}

export const SetCurrentCurrentUserAction = (currentUser) => {
    return{
        type: SET_CURRENT_USER,
        payload: currentUser
    }
}

export const AddCurrentUserAction = (currentUser) => {
    return{
        type: ADD_CURRENT_USER,
        payload: currentUser
    }
}

export const SetCurrentUserPending = (booleanValue) => {
    return{
        type: SET_CURRENT_USER_PENDING,
        payload: booleanValue
    }
}
