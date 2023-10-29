import Image from "next/image";
import { MsgBoxStyle } from "./style";

interface Props {
    msgText: string
    name: string
    temp: string
    author: number
    self: boolean
    profile: string
}

export default function MsgBox({
    msgText,
    name,
    temp,
    author,
    self,
    profile
}:Props) {
    return(
        <MsgBoxStyle $sender={self}>
            <Image className="rounded-full inline-block h-[30px]" 
                width={30} 
                height={30} 
                alt="perfil.jpg" 
                src={profile}
                style={{objectFit: "cover"}}
            />
            <div className="containerMsg">
                <div>
                    <span>{name}</span>
                    <span>{temp}</span>
                </div>
                <div>
                    {msgText}
                </div>
            </div>
        </MsgBoxStyle>
    )
}