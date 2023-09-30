'use client'

import { Chanel } from "@/types/chatTypes"
import { createContext } from "react"

export const ChanelContext = createContext({} as Chanel)

export default function ChanelProvider({
    children,
    value
  }: {
    children: React.ReactNode
    value: Chanel
  }) {
    return (
        <ChanelContext.Provider value={value}>
            {children}
        </ChanelContext.Provider>
    )
}