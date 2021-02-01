import {setEventPending, setTariffs, addTariff, deleteTariff} from './actions';
import kyClient from "../../api/kyClient";
import {useSelector} from "react-redux"

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


export const addTariffToDatabase = (tariffs) => async (
    dispatch
) => {
    try {
        console.log("tariffs:", tariffs);
        const response = await kyClient.post(`trainer/pricing`, {json: {items: tariffs}});
        const data = await response.json();
        console.log("DATA:", data)
        if (data) {
            dispatch(setTariffs(data));
        }

    } catch (e) {
        console.log("ERROR")
    }
};


export const deleteTariffFromDatabase = (tariffs) => async (
    dispatch,
    useSelector
) => {
    try {
        console.log("T: ", tariffs);
        const response = await kyClient.post(`trainer/pricing`, {json: {items: tariffs}});
        console.log("3");
        const data = await response.json();
        console.log("4", data);
        if(data)
        {
            dispatch(setTariffs(data));
        }

    } catch (e) {
        console.log("ERROR")
    }
};