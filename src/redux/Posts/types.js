  
export function Post(title, content, type, featuredImage, eventsDetails) {
    this.title = title;
    this.content = content;
    this.type = type;
    this.featuredImage = featuredImage;
    this.eventDetails = eventsDetails;
  }

export const SET_POSTS = 'SET_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_POST_PENDING = 'SET_POST_PENDING';
export const UPDATE_POST_INDEX = 'UPDATE_POST_INDEX';

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
