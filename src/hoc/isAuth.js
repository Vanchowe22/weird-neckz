import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

const isAuth = (Component) => {
    const wrapperComponent = (props) => {
        const { isAuthenticated } = useMoralis();
        console.log(isAuthenticated);
        return isAuthenticated
            ? <Component {...props} />
            : <Navigate to={'/'} />
    }

    return wrapperComponent;
};

export default isAuth;
