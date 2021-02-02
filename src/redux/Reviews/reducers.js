import { Reducer } from 'redux';
import initialState from './state';
import { SET_REVIEWS, ADD_REVIEW, SET_REVIEW_PENDING, SET_CURRENT_REVIEW, EDIT_REVIEW, DELETE_REVIEW, UPDATE_REVIEW_INDEX } from './types';

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
            };
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
            };
        case SET_CURRENT_REVIEW:
            return {
                ...state,
                currentReview: action.payload,
            };
        case SET_REVIEW_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case EDIT_REVIEW:
            {
                const reviewIndex = state.reviews.findIndex(review => review.id === action.payload.id)
                const currentReviews = [...state.reviews]
                currentReviews[reviewIndex] = action.payload
                return {
                    ...state,
                    reviews: currentReviews,
                };
            }
        case DELETE_REVIEW:
            {
                const currentReviews = state.reviews.filter(function(el) { return el._id !== action.payload._id})
                return {
                    ...state,
                    reviews: currentReviews,
                };
            }
        case UPDATE_REVIEW_INDEX:
            {
                const newMaxIndex = state.maxIndex + 1;
                return {
                    ...state,
                    maxIndex: newMaxIndex,
                };
            }
        default:
            return state;
    }
};

export default reviewReducer;
