import { EDIT_POST, ADD_POST, Post, PostActions, SET_CURRENT_POST, SET_POSTS, SET_POST_PENDING, DELETE_POST, UPDATE_POST_INDEX} from "./types";

export const setPosts = (data) => {
    return {
        type: SET_POSTS,
        payload: data
    };
}

export const setCurrentPost = (data) => {
    return {
        type: SET_CURRENT_POST,
        payload: data
    };
}

export const addPost = (data) => {
    return {
        type: ADD_POST,
        payload: data
    };
}

export const setPending = (data) => {
    return {
        type: SET_POST_PENDING,
        payload: data
    };
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: post
    };
}

export const deletePost = (post) => {
    return {
        type: DELETE_POST,
        payload: post
    };
}

export const updateMaxIndex = () => {
    return {
        type: UPDATE_POST_INDEX
    };
}

