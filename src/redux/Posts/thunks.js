import {setPosts, addPost, editPost, deletePost} from './actions';
import {Post} from './types';
import kyClient from "../../api/kyClient";
import {readBackTo, setBackTo} from "../Authorization/utils"

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
        let data = await response.json();
        console.log("post to add:", data)
        if(image != null){
            const formData = new FormData();
            formData.append('featuredImage', image);
            const responseImage = await kyClient.post(`post/${data._id}/featuredImage`, {
              body: formData
            });
            data = await responseImage.json();
        }
        if (data) {
            dispatch(addPost(data));
        }

    } catch (e) {
        console.log("ERROR")
    }
};


export const updatePostInDatabase = (post, id, image) => async (
    dispatch
) => {
    try {
        console.log(id, "Post to update: ", post);
        const response = await kyClient.put(`post/${id}`, {json: post});
        let data = await response.json();
        console.log("Post after update: ", data);
        if(image != null){
          const formData = new FormData();
          formData.append('featuredImage', image);
          const responseImage = await kyClient.post(`post/${data._id}/featuredImage`, {
            body: formData
          });
          data = await responseImage.json();
        }
        if (data) {
            dispatch(editPost(data));
        }

    } catch (e) {
        console.log("ERROR")
    }
};

export const deletePostFromDatabase = (post) => async (
    dispatch
) => {
    try {
        const response = await kyClient.delete(`post/${post._id}`, {json: post});
        const data = await response.json();
        if (data) {
            dispatch(deletePost(data));
        }

    } catch (e) {
        console.log("ERROR");
    }
};

export const fetchAllPosts = () => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`admin/posts`);
        const data = await response.json();
        if (data) {
            dispatch(setPosts(data));
        }
    } catch(e){
        console.log("ERROR");
    }
};