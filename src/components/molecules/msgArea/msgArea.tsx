'use client'
import { KeyboardEvent, useContext, useState } from "react";
import { MsgAreaStyle } from "./style";
import { AuthContext } from "@/app/authContext";
import { socket } from "@/app/chats/ws";
import { ChanelContext } from "@/app/chats/[chanel]/context";

export default function MsgArea() {
    const [msg, setMsg] = useState('');
    const [{title}] = useContext(ChanelContext)
    const [{friends}] = useContext(AuthContext)

    const keyPressMsg = (ev:KeyboardEvent) => {
        if (ev.key == 'Enter') {
            setMsg('');
            socket.emit('send-msg', {
                msg, 
                to: (friends.filter(friend => friend.username == title)[0].socketId||''), 
                receiver: title
            });
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