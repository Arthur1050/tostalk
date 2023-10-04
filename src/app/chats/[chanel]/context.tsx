'use client'
import { Chanel } from "@/types/chatTypes"
import { createContext, useState, Dispatch, useEffect, SetStateAction } from "react"

export const ChanelContext = createContext<[Chanel, Dispatch<SetStateAction<Chanel>>]>([] as any)

export default function ChanelProvider({
    children,
    value
  }: {
    children: React.ReactNode
    value: Chanel
  }) {
    const [chanel, setChanel] = useState(value)

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