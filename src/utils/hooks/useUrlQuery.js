import {
    useLocation
} from "react-router-dom";

export default useQuery = () => {
    return URLSearchParams(useLocation().search);
}