import { Reducer } from 'redux';
import initialState from './state';
import { SET_COMMENTS, ADD_COMMENT, SET_COMMENT_PENDING, SET_CURRENT_COMMENT, EDIT_COMMENT, DELETE_COMMENT, UPDATE_COMMENT_INDEX } from './types';

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            };
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };
        case SET_CURRENT_COMMENT:
            return {
                ...state,
                currentComment: action.payload,
            };
        case SET_COMMENT_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        case EDIT_COMMENT:
            {
                const commentIndex = state.comments.findIndex(comment => comment.id === action.payload.id)
                const currentComments = [...state.comments]
                currentComments[commentIndex] = action.payload
                return {
                    ...state,
                    comments: currentComments,
                };
            }
        case DELETE_COMMENT:
            {
                const currentComments = state.comments.filter(function(el) { return el._id !== action.payload._id})
                return {
                    ...state,
                    comments: currentComments,
                };
            }
        case UPDATE_COMMENT_INDEX:
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

export default commentReducer;
