import Image from "next/image";
import perfil from '@/lib/assets/perfil.jpg'
import destinario from '@/lib/assets/manoel.jpg'
import { MsgBoxStyle } from "./style";

interface Props {
    msgText: string
    name: string
    temp: string
    author: number
}

export default function MsgBox({
    msgText,
    name,
    temp,
    author
}:Props) {
    return(
        <MsgBoxStyle $sender={author == 1}>
            <Image className="rounded-full inline-block h-[30px]" 
                width={30} 
                height={30} 
                alt="perfil.jpg" 
                src={author == 1 ? perfil.src : destinario.src}
                style={{objectFit: "cover"}}
            />
            <div className="containerMsg">
                <span>{name} - {temp}</span>
                <div>
                    {msgText}
                </div>
            </div>
        </MsgBoxStyle>
    )
}