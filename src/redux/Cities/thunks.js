import {setCities, setSpecs} from './actions';
import kyClient from "../../api/kyClient";

export const fetchCities = () => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.get(`cities`);
        const data = await response.json();
        if (data) {
            dispatch(setCities(data));
        }
    } catch (e) {
    }

};
