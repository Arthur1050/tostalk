'use client'
import Image from "next/image";
import { ChatItemStyle } from "./style";
import { Friend } from '@/types/userTypes';
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SystemContext } from "@/app/chats/systemContext";

export default function ChatItem({username, profile, status}:Friend) {
    const [, setSystem] = useContext(SystemContext);
    const router = useRouter();

    const statusIndicator = {
        online: 'bg-green-500',
        offline: '',
        ocupado: ''
    }

    function redirectChat() {
        router.push(`/chats/${username}`)
        setSystem((val:any) => {
            return {...val, viewMenu: false}
        })
    }

    return(
        <ChatItemStyle onClick={redirectChat}>
            <Image className='rounded-full' width={44} height={44} alt='perfilImage.jpeg' src={profile}/>
            <div>
                <span>{username}</span>
            </div>
            <div className={`status w-[8px] h-[8px] rounded-full ${status ? statusIndicator[status]:''}`}/>
        </ChatItemStyle>
    )
}