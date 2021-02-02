// export const Comment = {
//     id: "",
//     creator: null,
//     content: "",
//     reviewId: ""
// }

// export const Review = {
//     id: "",
//     title: "",
//     creator: null,
//     content: "",
//     comments: null,
//     type: null,
//     image: null
// }
// export const ReviewsState = {
//     reviews: null,
//     currentReview: null,
//     pending: false
// }
  
export function Review(id, description, type, objectId, objectContent, objectRate) {
    this.id = id;
    this.description = description;
    this.type = type;
    this.objectId = objectId;
    this.objectContent = objectContent;
    this.objectRate = objectRate;
  }

export const SET_REVIEWS = 'SET_REVIEWS';
export const SET_CURRENT_REVIEW = 'SET_CURRENT_REVIEW';
export const ADD_REVIEW = 'ADD_REVIEW';
export const EDIT_REVIEW = 'EDIT_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const SET_REVIEW_PENDING = 'SET_REVIEW_PENDING';
export const UPDATE_REVIEW_INDEX = 'UPDATE_REVIEW_INDEX';

export const SetReviewsAction = (review) => {
    return{
        type: SET_REVIEWS,
        payload: review
    }
}

export const SetCurrentReviewAction = (review) => {
    return{
        type: SET_CURRENT_REVIEW,
        payload: review
    }
}

export const AddReviewAction = (review) => {
    return{
        type: ADD_REVIEW,
        payload: review
    }
}

export const SetReviewPending = (booleanValue) => {
    return{
        type: SET_REVIEW_PENDING,
        payload: booleanValue
    }
}
