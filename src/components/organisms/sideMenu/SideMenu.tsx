'use client'
import MenuPerfil from "@/components/molecules/menuPerfil/MenuPerfil";
import { SideMenuStyle } from "./style";
import ChatList from "../chatList/ChatList";
import { useContext, useRef, useState, useLayoutEffect, useEffect } from "react";
import { SystemContext } from "@/app/systemContext";

export default function SideMenu() {
    const [system, setSystem] = useContext(SystemContext);
    const sideMenu = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(innerWidth);
        window.addEventListener('resize', () => {
            ((width <= 570 && innerWidth > 570) || (width > 570 && innerWidth <= 570)) && setWidth(innerWidth);
        })
    })

    function closeSideMenu({target}:React.MouseEvent) {
        const {current} = sideMenu;

        if (current && current != target && !current.contains(target as Node)) {
            setSystem((val:any) => {
                return {...val, viewMenu: false}
            })
        }
    }

    return(  width <= 570 ?
        <SideMenuStyle className="sideMenuMob" $openned={system.viewMenu} onClick={closeSideMenu}>
            <div ref={sideMenu}>
                <MenuPerfil />
                <ChatList />
            </div>
        </SideMenuStyle> : 
        <div className="sideMenu flex flex-col">
            <MenuPerfil />
            <ChatList />
        </div>
    )
}