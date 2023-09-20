import { createContext, useEffect, useState } from "react"
import axios from "axios";


export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrectUser] = useState(JSON.parse(localStorage.getItem("user") || null))

    const login = async (inputs) => {
        const res = await axios.post("auth/login", inputs)
        setCurrectUser(res.data)
    }

    const logout = async (inputs) => {
        const res = await axios.post("auth/logout", inputs)
        setCurrectUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }} >
            {children}
        </ AuthContext.Provider>
    )
}