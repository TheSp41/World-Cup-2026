import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [isAppLoading, setIsAppLoading] = useState(true);
    const [username,setUsername]=useState("")

    const verifySession = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND+'/api/auth/refresh', {
                method: 'GET',
                credentials: 'include' 
            });
            const data = await response.json();
            if (response.ok) {
                setAccessToken(data.accessToken);
                setUsername(data.username)
            } else {
                setAccessToken(null);
                setUsername("");
            }
        } catch (error) {
            setAccessToken(null);
            setUsername("");
        } finally {
            setIsAppLoading(false);
        }
    };

    useEffect(() => {
        verifySession();
    }, []);

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken, username, setUsername, verifySession }}>
            {!isAppLoading ? children : <div>Loading...</div>}
        </AuthContext.Provider>
    );
};

export default AuthContext;