'use client'
import MsgBox from "../msgBox/MsgBox";
import { DialogBoxStyle } from "./style";
import { useEffect, useState, useContext } from "react";
import { Message } from "@/types/chatTypes";
import { socket } from "@/app/chats/ws";
import { ChanelContext } from "@/app/chats/[chanel]/context";
import { NotifyContext } from "@/app/notifyContext";

export default function DialogBox() {
    const [listMsg, setListMsg] = useState<JSX.Element[]>([])
    const [{title}] = useContext(ChanelContext)
    const [, setNotify] = useContext(NotifyContext)

    function receptMsg({msg,date, sender, receiver, id}:Message) {
        const dateFormat = new Date(date);

        if (title == sender) {
            setListMsg(list => {
                return [
                    ...list,
                    <MsgBox key={id} name={sender} author={1} msgText={msg} temp={`${dateFormat.getHours()}:${dateFormat.getMinutes()}`}/>
                ];
            })
        } else {
            setNotify(notifys => [
                ...(notifys ? notifys : []),
                {msg, username: sender}
            ])
        }
    }

    useEffect(() => {
        socket.on('recept-msg', receptMsg)

        return () => {
            socket.off('recept-msg', receptMsg)
        }
    }, [])

    return(
        <DialogBoxStyle>
            {listMsg}
        </DialogBoxStyle>
    )
}