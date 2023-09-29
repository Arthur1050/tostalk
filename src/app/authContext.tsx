'use client'
import { User } from "@/types/userTypes";
import React, { createContext, useState } from "react"

export const AuthContext = createContext<User>({} as User);

export default function UserProvider({
    children,
    value
  }: {
    children: React.ReactNode
    value: User
  }) {
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}