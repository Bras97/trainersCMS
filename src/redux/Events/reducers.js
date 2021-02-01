import { Reducer } from 'redux';
import initialState from './state';
import {SET_EVENTS, ADD_EVENT, SET_EVENT_PENDING, SET_CURRENT_EVENT, EDIT_EVENT, DELETE_EVENT } from './types';

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.payload,
            };
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        case SET_CURRENT_EVENT:
            return {
                ...state,
                currentEvent: action.payload,
            };
        case SET_EVENT_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case EDIT_EVENT:
            {
                const eventIndex = state.events.findIndex(event => event._id === action.payload._id)
                const currentEvents = [...state.events]
                currentEvents[eventIndex] = action.payload
                return {
                    ...state,
                    events: currentEvents,
                };
            }
        case DELETE_EVENT:
            {
                const currentEvents = state.events.filter(function(el) { return el.id !== action.payload.id})
                return {
                    ...state,
                    events: currentEvents,
                };
            }
        default:
            return state;
    }
};

export default eventReducer;
