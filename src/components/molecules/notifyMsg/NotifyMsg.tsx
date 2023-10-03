'use client'
import { NotifyContext } from "@/app/notifyContext";
import { NotifyMsgStyle } from "./style";
import { useContext, useEffect, useState } from 'react'
import { NotifyMsg } from "@/types/chatTypes";

export default function NotifyMsg() {
    const [notifys] = useContext(NotifyContext)
    const [nowNotify, setNowNotify] = useState<NotifyMsg|null>(null)

    useEffect(() => {
        console.log(notifys)
    }, [notifys, setNowNotify])

    return nowNotify?
        <NotifyMsgStyle>
            <span>{nowNotify.username}</span>
            <p>{nowNotify.msg}</p>
        </NotifyMsgStyle> : <></>
}