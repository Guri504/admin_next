"use client";

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

if (typeof localStorage != "undefined") {
    let storedUser = localStorage.getItem("admin");
    if (storedUser) {
        let parsedUser = JSON.parse(storedUser);
        if (!parsedUser.token || Date.now() > parsedUser.expiresAt) {
            localStorage.removeItem("admin");
        }
    }
}

export default function UserProvider({ children }) {
    const [admin, setAdmin] = useState("");
    const [tempAdmin, setTempAdmin] = useState('');

    useEffect(() => {
        if (typeof localStorage !== "undefined") {
            let storedUser = localStorage.getItem("admin");
            if (storedUser) {
                let parsedUser = JSON.parse(storedUser);
                if (parsedUser.token && Date.now() < parsedUser.expiresAt) {
                    setAdmin(parsedUser);
                }
            }
        }
    }, []);

    return (
        <UserContext.Provider value={{ admin, setAdmin, tempAdmin, setTempAdmin }}>
            {children}
        </UserContext.Provider>
    );
}