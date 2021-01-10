import { ADD_POST, Post, PostActions, SET_CURRENT_POST, SET_POSTS, SET_POST_PENDING, INIT_POSTS } from "./types";

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

export const initPosts = () => {
    return {
        type: INIT_POSTS,
    };
}