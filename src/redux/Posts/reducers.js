import { Reducer } from 'redux';
import initialState from './state';
import { SET_POSTS, ADD_POST, SET_POST_PENDING, SET_CURRENT_POST, EDIT_POST, DELETE_POST, UPDATE_POST_INDEX } from './types';

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
                const postIndex = state.posts.findIndex(post => post._id === action.payload._id)
                const currentPosts = [...state.posts]
                currentPosts[postIndex] = action.payload
                return {
                    ...state,
                    posts: currentPosts,
                };
            }
        case DELETE_POST:
            {
                const currentPosts = state.posts.filter(function(el) { return el._id !== action.payload._id})
                return {
                    ...state,
                    posts: currentPosts,
                };
            }
        case UPDATE_POST_INDEX:
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

export default postReducer;
