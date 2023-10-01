'use client'
import { User } from "@/types/userTypes";
import React, { createContext, useEffect, useState, Dispatch, SetStateAction } from "react"
import { socket } from "./chats/ws";

export const AuthContext = createContext<[User, Dispatch<User>]>(null as any);

export default function UserProvider({
    children,
    value
  }: {
    children: React.ReactNode
    value: User
  }) {
    const [auth, setAuth] = useState(value)

    useEffect(() => {
      socket.auth = {username: value.username, status: 'online'};
      socket.connect();
    }, [])
    
    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}