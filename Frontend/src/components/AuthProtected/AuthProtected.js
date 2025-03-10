import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthProtected = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    return (
        <>
            {isAuthenticated ? children : <h1>Please Login First</h1>}
        </>
    )
};

export default AuthProtected;