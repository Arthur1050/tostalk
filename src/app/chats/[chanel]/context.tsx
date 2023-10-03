'use client'

import { AuthContext } from "@/app/authContext"
import { Chanel } from "@/types/chatTypes"
import { createContext, useState, Dispatch, useEffect, useContext } from "react"

export const ChanelContext = createContext<[Chanel, Dispatch<Chanel>]>([] as any)

export default function ChanelProvider({
    children,
    value
  }: {
    children: React.ReactNode
    value: Chanel
  }) {
    const [chanel, setChanel] = useState(value)
    const [{friends}] = useContext(AuthContext)

    useEffect(() => {
      setChanel(chanel => {
        chanel.socketId = chanel.title;
        return {...chanel};
      })
    }, [])

    return (
        <ChanelContext.Provider value={[chanel, setChanel]}>
            {children}
        </ChanelContext.Provider>
    )
}