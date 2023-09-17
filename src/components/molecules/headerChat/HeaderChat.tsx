import Image from "next/image";
import { HeaderChatStyle } from "./style";
import perfil from '@/lib/assets/perfil.jpg'

export default function HeaderChat() {
    return(
        <HeaderChatStyle>
            <Image className='rounded-full' width={40} height={40} alt='perfilImage.jpeg' src={perfil.src}/>
            <div>
                <span>Arthur Tosta</span>
            </div>
        </HeaderChatStyle>
    )
}