'use client'
import React, { createContext, useState, Dispatch, SetStateAction } from "react"
import { NotifyMsg } from "@/types/chatTypes";

export const NotifyContext = createContext<[NotifyMsg[], Dispatch<SetStateAction<NotifyMsg[]>>]>(null as any);

export default function NotifyProvider({
    children,
    value
  }: {
    children: React.ReactNode
    value: NotifyMsg[]
  }) {
    const [notify, setNotify] = useState(value)
    
    return(
        <NotifyContext.Provider value={[notify, setNotify]}>
            {children}
        </NotifyContext.Provider>
    )
}