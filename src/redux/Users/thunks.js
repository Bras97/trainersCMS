import {setUsers, deleteUser} from './actions';
import kyClient from "../../api/kyClient";
import {useSelector} from "react-redux"

export const fetchUsers = (handler) => async (
    dispatch
) => {
    try {
        const response = await kyClient.get(`admin/users`);
        const data = await response.json();
        if (data) {
            dispatch(setUsers(data));
        }
    } catch (e) {
        handler();
    }
};

export const deleteUserFromDatabase = (user) => async (
    dispatch
) => {
    try {
        const response = await kyClient.delete(`admin/users/${user._id}`, {json: user});
        const data = await response.json();
        console.log("USER: ", data)
        if (data) {
            dispatch(deleteUser(user));
        }

    } catch (e) {
        console.log("ERROR")
    }
};