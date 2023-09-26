
import {io} from 'socket.io-client'
import React, { createContext } from "react"

const socket = io('http://localhost:3001');

export const SocketContext = createContext(socket);

export default function Socket({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}