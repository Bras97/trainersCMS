import {setEventPending, setEvents, addEvent} from './actions';
import kyClient from "../../api/kyClient";
import {Event } from './types';
import {
    readAuthorizationUserFromLocalStorage,
    removeAuthorizationUserFromLocalStorage,
    saveAuthorizationUserInLocalStorage
} from "../../redux/Authorization/utils";

export const fetchEvents = (id, handler) => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.get(`trainer/${id}/events`);
        const data = await response.json();
        if (data) {
            dispatch(setEvents(data.data));
        }
    } catch (e) {
        handler();
    }
};

export const addEventToDatabase = (event, image) => async (
    dispatch
) => {
    try {
        console.log("EVENT: ",event)
        const response = await kyClient.post('post', {json: event});
        const data = await response.json();
        if(image != null){
            const responseImage = await kyClient.post(`post/${data.featuredImage}/featuredImage`, {json: image});
        }
        if (data) {
            console.log("DATA: ", data)
            dispatch(addEvent(data));
        }

    } catch (e) {
        console.log("ERROR")
    }
};
