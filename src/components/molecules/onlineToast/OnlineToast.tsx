"use client"
import { socket } from "@/app/chats/ws"
import Image from "next/image"
import { useEffect, useState } from "react"
import { OnlineToastStyle } from "./style";

export default function OnlineToast() {
    const [toast, setToast] = useState<{username: string, profile: string}|null>(null as any);
    useEffect(() => {
        socket.on('online-user', (data:{username: string, profile: string}) => {
            setToast(data)
            setTimeout(() => {
                setToast(null)
            }, 2000)
        })
    }, [])
    return(
        toast ?
        <OnlineToastStyle>
            <Image src={toast.profile} width={32} height={32} alt="perfil.png"/>
            <p>{toast.username}</p>
        </OnlineToastStyle> : <></>
    )
}