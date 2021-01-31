import {setEventPending, setTariffs} from './actions';
import kyClient from "../../api/kyClient";

export const fetchTariffs = (id, handler) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`trainer/${id}/pricing`);
        const data = await response.json();
        console.log("TARIFFS: ", data)
        if (data) {
            dispatch(setTariffs(data));
        }
    } catch (e) {
        handler();
    }
};
