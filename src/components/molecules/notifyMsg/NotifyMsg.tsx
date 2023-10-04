'use client'
import { NotifyContext } from "@/app/notifyContext";
import { NotifyMsgStyle } from "./style";
import { useContext, useEffect, useState, useRef } from 'react'
import { NotifyMsg } from "@/types/chatTypes";

export default function NotifyMsg() {
    const [notifys] = useContext(NotifyContext)
    const [nowNotify, setNowNotify] = useState<NotifyMsg|null>(null)
    const popup = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log('Notificacao: ',notifys)
        if (notifys) {
            const {msg, username} = notifys[notifys.length - 1]
            notifys && setNowNotify({msg, username})
            setTimeout(() => {
                if (popup.current) {
                    const animation = popup.current.getAnimations()[0];
                    animation.reverse();
                    animation && (animation.onfinish = () => setNowNotify(null))
                }
            }, 4000)
        }
    }, [notifys])

    return nowNotify?
        <NotifyMsgStyle ref={popup}>
            <span>{nowNotify.username}</span>
            <p>{nowNotify.msg}</p>
        </NotifyMsgStyle> : <></>
}