import {setPosts} from './actions';
import kyClient from "../../api/kyClient";

export const fetchPosts = (id, handler) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`trainer/${id}/posts`);
        const data = await response.json();
        if (data) {
            dispatch(setPosts(data));
        }
    } catch(e){
        handler();
    }

};

// export const fetchObservePosts = (handler)  => async (
//     dispatch,
//     getState
// ) => {
//     try {
//         const response = await kyClient.get(`user/posts`);
//         const data = await response.json();
//         if (data) {
//             dispatch(setObservePosts(data));
//         }
//     } catch(e){
//         // handler();
//     }
// };
