import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../AuthSlice";
import { Navigate } from "react-router";

export const Protected = ({children}) => {
    const loggedInUser = useSelector(selectLoggedInUser);

    // If no user is in Redux/Storage, send to login
    if (!loggedInUser) {
        return <Navigate to={'/login'} replace={true}/>;
    }

    // If user exists, allow them to see the page (children)
    // This allows them to stay on the home page or verification page
    return children;
};