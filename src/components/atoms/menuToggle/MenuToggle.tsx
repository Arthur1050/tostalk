'use client'
import { SystemContext } from "@/app/chats/systemContext";
import { Menu } from "lucide-react";
import { useContext } from "react";

interface Props {
    classes?: string
}

export default function MenuToggle({classes}:Props) {
    const [, setSystem] = useContext(SystemContext);

    return (
        <Menu onClick={() => {
            setSystem((val:{}) => {
                return {...val, viewMenu: true}
            })
        }} className={classes} size={30} />
    )
}