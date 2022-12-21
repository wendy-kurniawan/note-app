import PropTypes from "prop-types";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    getAccessToken,
    getUserLogged,
    login,
    putAccessToken,
} from "../utils/network-data";

const AuthContext = createContext({
    user: {},
    isLoading: false,
    onLogin: async ({ email, password }) => {},
    onLogout: () => {},
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = useCallback(() => {
        const retrieveAuthedUser = async () => {
            setIsLoading(true);
            const { data, error } = await getUserLogged();
            setIsLoading(false);
            if (error) return;
            setUser(data);
        };

        retrieveAuthedUser();
    }, []);

    useEffect(() => {
        if (!getAccessToken()) {
            setIsLoading(false);
            return;
        }
        fetchUserData();
    }, [fetchUserData]);

    const handleLogin = useCallback(
        async ({ email, password }) => {
            setIsLoading(true);
            const { error, data } = await login({ email, password });
            setIsLoading(false);

            if (error) return;

            const { accessToken } = data;
            putAccessToken(accessToken);

            fetchUserData();
        },
        [fetchUserData]
    );

    const handleLogout = useCallback(() => {
        setUser(null);
        localStorage.removeItem("accessToken");
    }, []);

    const contextValue = useMemo(
        () => ({
            user,
            isLoading,
            onLogin: handleLogin,
            onLogout: handleLogout,
        }),
        [user, isLoading, handleLogin, handleLogout]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { useAuth, AuthProvider };
