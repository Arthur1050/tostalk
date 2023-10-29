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
            <div className={`status w-[8px] h-[8px] rounded-full bg-green-500`}/>
            {/* <div>
                <Image src={toast.profile} width={32} height={32} alt="perfil.png"/>
            </div> */}
            <p>{toast.username}</p>
        </OnlineToastStyle> : <></>
    )
}