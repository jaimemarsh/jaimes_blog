import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
//this page is causing login error
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        const res = await axios.post("/auth/login", inputs)
        setCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        await axios.post("/auth/logout", inputs)
        setCurrentUser(null)
    }

    useEffect(() => {
        const userJSON = JSON.stringify(currentUser);
        const storedUserJSON = localStorage.getItem("user");
    
        // Only update the localStorage if the user object has changed.
        if (userJSON !== storedUserJSON) {
            localStorage.setItem("user", userJSON);
        }
    }, [currentUser]);
    
    return (
        <AuthContextProvider value={{ currentUser, login, logout }}>
            {children}
        </AuthContextProvider>
    )

}