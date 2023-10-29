'use client'
import { apiReq, saveCookie } from "@/app/actions";
import { SystemContext } from "@/app/systemContext";
import { MainButton } from "@/components/atoms/buttons/MainButton";
import SpecialButton from "@/components/atoms/buttons/SpecialButton";
import { InputPassword, InputText } from "@/components/atoms/inputText/inputText";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";

export default function FormLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setSystem] = useContext(SystemContext);

    const authFunction = async (fd:FormData) => {
        const data:{token:string, name:string} = await apiReq('/auth/login/', {
            username,
            password
        }, 'POST')

        if (data?.token) {
            saveCookie('token', data.token)
            /* setSystem((system:any) => {
                return {
                    ...system,
                    logged: true
                }
            }) */
            redirect('/chats')
        }
    }
    return(
        <form action={authFunction} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <InputText value={username} setValue={setUsername} placeholder="Usuario..."/>
                <InputPassword value={password} setValue={setPassword} placeholder="Senha..."/>
            </div>
            <SpecialButton disabled={!username || !password} text="ENTRAR" />
            {/* <button className="btn" type="submit">
                <strong>ENTRAR</strong>
                <div className="starsContainer">
                    <div id="stars"></div>
                </div>

                <div className="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </button> */}
            {/* <MainButton type="submit" $primary={true}>Entrar</MainButton> */}
        </form>
    )
}