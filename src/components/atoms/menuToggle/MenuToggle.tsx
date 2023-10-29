'use client'
import { SystemContext } from "@/app/systemContext";
import { Menu } from "lucide-react";
import { useContext, useLayoutEffect, useRef, useState } from "react";

interface Props {
    classes?: string
}

export default function MenuToggle({classes}:Props) {
    const [, setSystem] = useContext(SystemContext);
    const [width, setState] = useState(0);

    useLayoutEffect(() => {
        setState(innerWidth)
    })

    return width <= 570 ?
        <Menu onClick={() => {
            setSystem((val:{}) => {
                return {...val, viewMenu: true}
            })
        }} className={classes} size={30} />
    :<></>
}