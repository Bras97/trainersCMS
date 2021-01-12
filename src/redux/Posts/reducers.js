import { Reducer } from 'redux';
import initialState from './state';
import { PostsState, PostActions, SET_POSTS, ADD_POST, SET_POST_PENDING, SET_CURRENT_POST, INIT_POSTS, EDIT_POST } from './types';

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload,
            };
        case SET_POST_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case EDIT_POST:
            {
                const postIndex = state.posts.findIndex(post => post.id === action.payload.id)
                const currentPosts = [...state.posts]
                currentPosts[postIndex] = action.payload
                return {
                    ...state,
                    posts: currentPosts,
                };
            }
        default:
            return state;
    }
};

export default postReducer;
