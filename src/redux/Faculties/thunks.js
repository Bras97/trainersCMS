import {setFaculties} from './actions';
import kyClient from "../../api/kyClient";

export const fetchFaculties = () => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`specializations`);
        const data = await response.json();
        if (data) {
            dispatch(setFaculties(data));
        }
    } catch (e) {
    }

};
