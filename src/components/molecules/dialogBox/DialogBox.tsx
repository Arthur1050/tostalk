'use client'
import MsgBox from "../msgBox/MsgBox";
import { DialogBoxStyle } from "./style";
import { useEffect, useState, useContext } from "react";
import { Message } from "@/types/chatTypes";
import { socket } from "@/app/chats/ws";
import { ChanelContext } from "@/app/chats/[chanel]/context";
import { NotifyContext } from "@/app/notifyContext";
import { AuthContext } from "@/app/authContext";

export default function DialogBox() {
    const [{title, msgs}, setChanel] = useContext(ChanelContext)
    const [{username, profile, friends}] = useContext(AuthContext)
    const [, setNotify] = useContext(NotifyContext)

    function receptMsg({msg,date, sender, receiver, id}:Message) {

        if (title == sender) {
            setChanel(data => {
                return {
                    ...data,
                    msgs: [
                        ...(data.msgs ? data.msgs:[]),
                        {date, id, msg, receiver, sender}
                    ]
                }
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
            {msgs && msgs.map(({id, date, msg, receiver, sender}) => {
                const dateFormat = new Date(date);

                return <MsgBox profile={sender == username ? profile : (friends.filter(friend => friend.username == sender)[0].profile||'')} 
                        self={sender == username} 
                        key={id} 
                        name={sender} 
                        author={1} 
                        msgText={msg} 
                        temp={`${dateFormat.getHours()}:${dateFormat.getMinutes()}`}/>    
            })}
        </DialogBoxStyle>
    )
}