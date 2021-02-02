import {setComments, deleteComment} from './actions';
import kyClient from "../../api/kyClient";
import {useSelector} from "react-redux"

export const fetchComments = (handler) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`admin/comments`);
        const data = await response.json();
        if (data) {
            dispatch(setComments(data));
        }
    } catch (e) {
        handler();
    }
};
