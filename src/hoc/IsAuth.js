import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

const IsAuth = (Component) => {
    const WrapperComponent = (props) => {
        const { isAuthenticated } = useMoralis();
        return isAuthenticated
            ? <Component {...props} />
            : <Navigate to={'/'} />
    }

    return WrapperComponent;
};

export default IsAuth;
