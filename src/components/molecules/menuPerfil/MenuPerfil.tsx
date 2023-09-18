import Image from "next/image";
import perfil from '@/lib/assets/perfil.jpg'
import { MenuPerfilStyle } from "./style";

export default function MenuPerfil() {
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
                    <span className="userName">Arthur Tosta</span>
                </div>
            </div>
        </MenuPerfilStyle>
    )
}