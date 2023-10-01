'use client'
import { KeyboardEvent, useContext, useState } from "react";
import { MsgAreaStyle } from "./style";
import { AuthContext } from "@/app/authContext";
import { socket } from "@/app/chats/ws";

export default function MsgArea() {
    const [msg, setMsg] = useState('');
    const [{username}] = useContext(AuthContext)

    const keyPressMsg = (ev:KeyboardEvent) => {
        if (ev.key == 'Enter') {
            setMsg('');
            socket.emit('send-msg', {msg, sender: username});
        }
    }

    return(
        <MsgAreaStyle>
            <input value={msg} 
                onChange={ev => setMsg(ev.target.value)}
                onKeyDown={ev => keyPressMsg(ev)}
                type="text" 
                placeholder="Digitar mensagem..."/>
        </MsgAreaStyle>
    )
}