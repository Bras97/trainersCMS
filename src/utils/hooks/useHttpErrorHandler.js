import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearCurrentAuthorizationUser} from "../../redux/Authorization/thunks";

export function useHttpErrorHandler() {
    const history = useHistory();
    const dispatch = useDispatch();
    const handle = () => {
        dispatch(clearCurrentAuthorizationUser());
        if (history) {
            history.push('/');
        }
    }
    return handle;
}