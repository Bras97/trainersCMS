import { EDIT_COMMENT, ADD_COMMENT, Comment, CommentActions, SET_CURRENT_COMMENT, SET_COMMENTS, SET_COMMENT_PENDING, DELETE_COMMENT, UPDATE_COMMENT_INDEX} from "./types";

export const setComments = (data) => {
    return {
        type: SET_COMMENTS,
        payload: data
    };
}

export const setCurrentComment = (data) => {
    return {
        type: SET_CURRENT_COMMENT,
        payload: data
    };
}

export const addComment = (data) => {
    return {
        type: ADD_COMMENT,
        payload: data
    };
}

export const setPending = (data) => {
    return {
        type: SET_COMMENT_PENDING,
        payload: data
    };
}

export const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        payload: comment
    };
}

export const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        payload: comment
    };
}

export const updateMaxIndex = () => {
    return {
        type: UPDATE_COMMENT_INDEX
    };
}

