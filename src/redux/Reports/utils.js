import {setReports, deleteReport} from './actions';
import kyClient from "../../api/kyClient";
import {useSelector} from "react-redux"

export const getComment = (id) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`admin/comments`);
        const data = await response.json();
        console.log("Response: ", data);
        if (data) {
            const currentComment = data.filter(function(el) { return el.id == id})
            console.log("CHECK", currentComment[0]);
            if(currentComment != null){
                return currentComment[0];
            }
            else return null;
        }
        else 
            return null;
    } catch (e) {
        console.log("ERROR");
    }
    return null;
};