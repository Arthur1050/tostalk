'use client'
import MenuPerfil from "@/components/molecules/menuPerfil/MenuPerfil";
import { SideMenuStyle } from "./style";
import ChatList from "../chatList/ChatList";
import { useContext, useRef, useState } from "react";
import { SystemContext } from "@/app/chats/systemContext";

export default function SideMenu() {
    const [system, setSystem] = useContext(SystemContext);
    const sideMenu = useRef<HTMLDivElement>(null)

    function closeSideMenu({target}:React.MouseEvent) {
        const {current} = sideMenu;

        if (current && current != target && !current.contains(target as Node)) {
            setSystem((val:any) => {
                return {...val, viewMenu: false}
            })
        }
    }

    return(  innerWidth <= 425 ?
        <SideMenuStyle $openned={system.viewMenu} onClick={closeSideMenu}>
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