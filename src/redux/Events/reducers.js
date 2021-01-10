import { Reducer } from 'redux';
import initialState from './state';
import { EventsState, EventActions, SET_EVENTS, ADD_EVENT, SET_EVENT_PENDING, SET_CURRENT_EVENT, INIT_EVENTS } from './types';

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                posts: action.payload,
            };
        case ADD_EVENT:
            return {
                ...state,
                posts: [...state.posts, action.payload],
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
        case INIT_EVENTS:
            return state;
        default:
            return state;
    }
};

export default eventReducer;
