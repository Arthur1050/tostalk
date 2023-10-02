'use client'
import { User, UserStatus } from "@/types/userTypes";
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

      socket.on("user-status", (users:UserStatus[]) => {
        setAuth(auth => {
          const {friends} = auth;
          users.forEach(user => {
              const index = friends.findIndex(el => el.username == user.username);
              if (friends[index]) {
                friends[index].status = user.status
                friends[index].socketId = user.socketId
              } 
          })
          return {...auth, friends}
        })
      })

    }, [])
    
    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}