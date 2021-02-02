// export const Comment = {
//     id: "",
//     creator: null,
//     content: "",
//     commentId: ""
// }

// export const Comment = {
//     id: "",
//     title: "",
//     creator: null,
//     content: "",
//     comments: null,
//     type: null,
//     image: null
// }
// export const CommentsState = {
//     comments: null,
//     currentComment: null,
//     pending: false
// }
  
export function Comment(id, description, type, objectId, objectContent, objectRate) {
    this.id = id;
    this.description = description;
    this.type = type;
    this.objectId = objectId;
    this.objectContent = objectContent;
    this.objectRate = objectRate;
  }

export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_CURRENT_COMMENT = 'SET_CURRENT_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const SET_COMMENT_PENDING = 'SET_COMMENT_PENDING';
export const UPDATE_COMMENT_INDEX = 'UPDATE_COMMENT_INDEX';

export const SetCommentsAction = (comment) => {
    return{
        type: SET_COMMENTS,
        payload: comment
    }
}

export const SetCurrentCommentAction = (comment) => {
    return{
        type: SET_CURRENT_COMMENT,
        payload: comment
    }
}

export const AddCommentAction = (comment) => {
    return{
        type: ADD_COMMENT,
        payload: comment
    }
}

export const SetCommentPending = (booleanValue) => {
    return{
        type: SET_COMMENT_PENDING,
        payload: booleanValue
    }
}
