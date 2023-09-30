'use client'
import Image from "next/image";
import { ChatItemStyle } from "./style";
import { Friend } from '@/types/userTypes';
import { useRouter } from "next/navigation";

export default function ChatItem({username, profile}:Friend) {
    const router = useRouter();

    return(
        <ChatItemStyle onClick={() => router.push(`/chats/${username}`)}>
            <Image className='rounded-full' width={48} height={48} alt='perfilImage.jpeg' src={profile}/>
            <div>
                <span>{username}</span>
            </div>
            <div className='status w-[8px] h-[8px] rounded-full bg-green-500'/>
        </ChatItemStyle>
    )
}