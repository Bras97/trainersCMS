import { ADD_EVENT, Event, EventActions, SET_CURRENT_EVENT, SET_EVENTS, SET_EVENT_PENDING} from "./types";

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