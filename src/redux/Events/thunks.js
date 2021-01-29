import {setEventPending, setEvents} from './actions';
import kyClient from "../../api/kyClient";
import {Event } from './types';

export const fetchEvents = (id, handler) => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.get(`trainer/${id}/events`);
        const data = await response.json();
        if (data) {
            dispatch(setEvents(data));
        }
    } catch (e) {
        handler();
    }
};
