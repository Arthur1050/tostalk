'use client'
import Image from "next/image";
import { MenuPerfilStyle } from "./style";
import { useContext } from "react";
import { AuthContext } from "@/app/authContext";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MenuPerfil() {
    const router = useRouter();
    const [{username, profile}] = useContext(AuthContext);

    return(
        <MenuPerfilStyle>
            <div>
                <Image  className="rounded-full h-[52px] w-[52px]" 
                    width={120} 
                    height={120} 
                    alt="perfil.jpg" 
                    src={profile}
                    style={{objectFit: "cover"}}
                />
                <div>
                    <span className="userName">{username}</span>
                </div>
                <div className="config">
                    <Settings onClick={() => router.push('chats/config')} size={24} />
                </div>
            </div>
        </MenuPerfilStyle>
    )
}