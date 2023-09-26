'use client'
import { socket } from "@/app/layout";
import MsgBox from "../msgBox/MsgBox";
import { DialogBoxStyle } from "./style";
import { useEffect, useState } from "react";
import { Message } from "@/types/chatTypes";

export default function DialogBox() {
    const [listMsg, setListMsg] = useState<JSX.Element[]>([])

    useEffect(() => {
        socket.on('recept-msg', ({msg,date, id}:Message) => {
            const dateFormat = new Date(date);
            const msgElemetn = <MsgBox key={id} name="Provisorio" author={1} msgText={msg} temp={`${dateFormat.getHours()}:${dateFormat.getMinutes()}`}/>;

            setListMsg(list => {
                return [
                    ...list,
                    msgElemetn
                ];
            })
        })
    }, [])

    return(
        <DialogBoxStyle>
            {/* <MsgBox author={2}
                name="Destinario Qualquer" 
                msgText="Mensagem de texto exemplo destinario."
                temp="01:56"
            />
            <MsgBox author={1}
                name="Arthur Tosta" 
                msgText="Mensagem de texto exemplo remetente."
                temp="01:58"
            /> */}
            {listMsg}
        </DialogBoxStyle>
    )
}