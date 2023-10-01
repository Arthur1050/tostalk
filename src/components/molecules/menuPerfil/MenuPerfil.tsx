'use client'
import Image from "next/image";
import perfil from '@/lib/assets/perfil.jpg'
import { MenuPerfilStyle } from "./style";
import { useContext } from "react";
import { AuthContext } from "@/app/authContext";
import { Settings } from "lucide-react";

export default function MenuPerfil() {
    const [{username, profile}] = useContext(AuthContext);

    return(
        <MenuPerfilStyle>
            <div>
                <Image className="rounded-full" 
                    width={64} 
                    height={64} 
                    alt="perfil.jpg" 
                    src={profile}
                    style={{objectFit: "cover"}}
                />
                <div>
                    <span className="userName">{username}</span>
                </div>
                <div className="ml-auto mr-4">
                    <Settings size={24} />
                </div>
            </div>
        </MenuPerfilStyle>
    )
}