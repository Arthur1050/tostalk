'use client'
import { useContext } from "react";
import { IntroSystemStyle } from "./style";
import { SystemContext } from "@/app/systemContext";
import Image from "next/image";
import logo from "@/lib/assets/svg_logo.svg";

export default function IntroSystem() {
    const [{logged}] = useContext(SystemContext);

    return logged ? <IntroSystemStyle>
        <Image src={logo} alt="logo_svg.svg" />
    </IntroSystemStyle> : <></>
}