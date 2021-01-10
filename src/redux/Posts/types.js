export const Comment = {
    id: "",
    creator: null,
    content: "",
    postId: ""
}

export const Post = {
    id: "",
    title: "",
    creator: null,
    content: "",
    comments: null,
    type: null
}

export const PostsState = {
    posts: null,
    currentPost: null,
    pending: false
}

export const SET_POSTS = 'SET_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const ADD_POST = 'ADD_POST';
export const SET_POST_PENDING = 'SET_POST_PENDING';
export const INIT_POSTS = 'INIT_POSTS';

export const SetPostsAction = (post) => {
    return{
        type: SET_POSTS,
        payload: post
    }
}

export const SetCurrentPostAction = (post) => {
    return{
        type: SET_CURRENT_POST,
        payload: post
    }
}

export const AddPostAction = (post) => {
    return{
        type: ADD_POST,
        payload: post
    }
}

export const SetPostPending = (booleanValue) => {
    return{
        type: SET_POST_PENDING,
        payload: booleanValue
    }
}