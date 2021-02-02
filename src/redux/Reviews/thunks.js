import {setReviews, deleteReview} from './actions';
import kyClient from "../../api/kyClient";
import {useSelector} from "react-redux"

export const fetchReviews = (handler) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`admin/reviews`);
        const data = await response.json();
        console.log("REVIEWS: ", data)
        if (data) {
            dispatch(setReviews(data));
        }
    } catch (e) {
        handler();
    }
};
