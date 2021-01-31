import {setPosts, addPost} from './actions';
import kyClient from "../../api/kyClient";

export const fetchPosts = (id, handler) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`trainer/${id}/posts`);
        const data = await response.json();
        if (data) {
            dispatch(setPosts(data.data));
        }
    } catch(e){
        handler();
    }
};

export const addPostToDatabase = (post, image) => async (
    dispatch
) => {
    try {
        const response = await kyClient.post('post', {json: post});
        const data = await response.json();
        if(image != null){
            const responseImage = await kyClient.post(`post/${data.featuredImage}/featuredImage`, {json: image});
        }
        if (data) {
            dispatch(addPost(data.data));
        }

    } catch (e) {
        console.log("ERROR")
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
