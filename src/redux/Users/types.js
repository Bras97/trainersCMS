
export function User(id, name, surname, email, password, city, description, isLogged) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.city = city;
    this.description = description;
    this.isLogged = isLogged;
  }

export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_LOGGED_STATUS = 'SET_LOGGED_STATUS';
