'use client'
import { Dispatch, createContext, useState } from "react"

export const SystemContext = createContext<[any, Dispatch<any>]>([] as any);

export default function SystemProvider({
    children
  }: {
    children: React.ReactNode
  }) {
    const [system, setSystem] = useState({
        viewMenu: false,
    });

    return (
        <SystemContext.Provider value={[system, setSystem]}>
            {children}
        </SystemContext.Provider>
    )
}