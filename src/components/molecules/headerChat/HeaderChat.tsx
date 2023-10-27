'use client'
import Image from "next/image";
import { HeaderChatStyle } from "./style";
import { useContext } from "react";
import { ChanelContext } from "@/app/chats/[chanel]/context";
import MenuToggle from "@/components/atoms/menuToggle/MenuToggle";

export default function HeaderChat() {
    const [{profile, title}] = useContext(ChanelContext);

    return(
        <HeaderChatStyle>
            {innerWidth  <= 425 ? <MenuToggle /> : ''}
            <Image className='rounded-full' width={40} height={40} alt='perfilImage.jpeg' src={profile}/>
            <div>
                <span>{title}</span>
            </div>
        </HeaderChatStyle>
    )
}