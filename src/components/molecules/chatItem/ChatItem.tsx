'use client'
import Image from "next/image";
import { ChatItemStyle } from "./style";
import { Friend } from '@/types/userTypes';
import { useRouter } from "next/navigation";

export default function ChatItem({username, profile, status}:Friend) {
    const router = useRouter();

    const statusIndicator = {
        online: 'bg-green-500',
        offline: '',
        ocupado: ''
    }

    return(
        <ChatItemStyle onClick={() => router.push(`/chats/${username}`)}>
            <Image className='rounded-full' width={44} height={44} alt='perfilImage.jpeg' src={profile}/>
            <div>
                <span>{username}</span>
            </div>
            <div className={`status w-[8px] h-[8px] rounded-full ${status ? statusIndicator[status]:''}`}/>
        </ChatItemStyle>
    )
}