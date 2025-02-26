import { createContext, useState, useEffect, useContext } from "react";
import RequestController from "../controller/RequestController";

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to access AuthContext
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }

    return context;
};

// AuthProvider component to provide AuthContext to the app
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in
        async function checkAuth() {
            try {
                const response = await RequestController.TestProtected();

                if (response.status === 200) {
                    // If the status code is 200, the user is authenticated
                    setIsAuthenticated(true);
                } else {
                    // If the status code is not 200, the user is not authenticated
                    setIsAuthenticated(false);
                }
            } catch (error) {
                // If there is an error (e.g., no token or expired token), set the user as unauthenticated
                setIsAuthenticated(false);
            }
        }
        checkAuth();
    }, []);

    const login = async ({username, password}) => {
        await RequestController.LoginUser({
            username: username,
            password: password,
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    setIsAuthenticated(true);  // Set authenticated after login
                }
            });
    };

    const logout = () => {
        // Clear authentication (e.g., remove token)
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
