'use client'
import { KeyboardEvent, useState } from "react";
import { MsgAreaStyle } from "./style";
import { socket } from "@/app/layout";

export default function MsgArea() {
    const [msg, setMsg] = useState('');

    const keyPressMsg = (ev:KeyboardEvent) => {
        if (ev.key == 'Enter') {
            setMsg('');
            socket.emit('send-msg', {msg});
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