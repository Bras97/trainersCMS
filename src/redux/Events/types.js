// export const Comment = {
//     id: "",
//     creator: null,
//     content: "",
//     postId: ""
// }

// export const Event = {
//     id: "",
//     title: "",
//     creator: null,
//     date: null,
//     content: "",
//     comments: null,
//     type: null
// }

// export const EventsState = {
//     posts: null,
//     currentEvent: null,
//     pending: false
// }


export function Event(id, title, date, content, image) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.content = content;
    this.image = image;
  }


export const SET_EVENTS = 'SET_EVENTS';
export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
export const ADD_EVENT = 'ADD_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_EVENT_PENDING = 'SET_EVENT_PENDING';

export const SetEventsAction = (post) => {
    return{
        type: SET_EVENTS,
        payload: post
    }
}

export const SetCurrentEventAction = (post) => {
    return{
        type: SET_CURRENT_EVENT,
        payload: post
    }
}

export const AddEventAction = (post) => {
    return{
        type: ADD_EVENT,
        payload: post
    }
}

export const SetEventPending = (booleanValue) => {
    return{
        type: SET_EVENT_PENDING,
        payload: booleanValue
    }
}
