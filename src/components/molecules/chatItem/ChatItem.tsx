import perfil from '@/lib/assets/perfil.jpg'
import Image from "next/image";
import { ChatItemStyle } from "./style";

export default function ChatItem() {
    return(
        <ChatItemStyle>
            <Image className='rounded-full' width={48} height={48} alt='perfilImage.jpeg' src={perfil.src}/>
            <div>
                <span>Arthur Tosta</span>
            </div>
            <div className='status w-[8px] h-[8px] rounded-full bg-green-500'/>
        </ChatItemStyle>
    )
}