import { ADD_EVENT, Event, EventActions, SET_CURRENT_EVENT, SET_EVENTS, SET_EVENT_PENDING, EDIT_EVENT, DELETE_EVENT} from "./types";

export const setEvents = (data) => {
    return {
        type: SET_EVENTS,
        payload: data
    };
}

export const setCurrentEvent = (data) => {
    return {
        type: SET_CURRENT_EVENT,
        payload: data
    };
}

export const addEvent = (data) => {
    return {
        type: ADD_EVENT,
        payload: data
    };
}

export const setPending = (data) => {
    return {
        type: SET_EVENT_PENDING,
        payload: data
    };
}

export const editEvent = (event) => {
    return {
        type: EDIT_EVENT,
        payload: event
    };
}

export const deleteEvent = (event) => {
    return {
        type: DELETE_EVENT,
        payload: event
    };
}