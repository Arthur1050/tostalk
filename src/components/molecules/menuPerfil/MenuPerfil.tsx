'use client'
import Image from "next/image";
import perfil from '@/lib/assets/perfil.jpg'
import { MenuPerfilStyle } from "./style";
import { useContext } from "react";
import { AuthContext } from "@/app/authContext";

export default function MenuPerfil() {
    const {username} = useContext(AuthContext);
    console.log(username)
    return(
        <MenuPerfilStyle>
            <div>
                <Image className="rounded-full" 
                    width={64} 
                    height={64} 
                    alt="perfil.jpg" 
                    src={perfil.src}
                    style={{objectFit: "cover"}}
                />
                <div>
                    <span className="userName">{username}</span>
                </div>
            </div>
        </MenuPerfilStyle>
    )
}