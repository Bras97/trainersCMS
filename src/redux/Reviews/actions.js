import { EDIT_REVIEW, ADD_REVIEW, Review, ReviewActions, SET_CURRENT_REVIEW, SET_REVIEWS, SET_REVIEW_PENDING, DELETE_REVIEW, UPDATE_REVIEW_INDEX} from "./types";

export const setReviews = (data) => {
    return {
        type: SET_REVIEWS,
        payload: data
    };
}

export const setCurrentReview = (data) => {
    return {
        type: SET_CURRENT_REVIEW,
        payload: data
    };
}

export const addReview = (data) => {
    return {
        type: ADD_REVIEW,
        payload: data
    };
}

export const setPending = (data) => {
    return {
        type: SET_REVIEW_PENDING,
        payload: data
    };
}

export const editReview = (review) => {
    return {
        type: EDIT_REVIEW,
        payload: review
    };
}

export const deleteReview = (review) => {
    return {
        type: DELETE_REVIEW,
        payload: review
    };
}

export const updateMaxIndex = () => {
    return {
        type: UPDATE_REVIEW_INDEX
    };
}

