'use client'
import { apiReq, saveCookie } from "@/app/actions";
import { MainButton } from "@/components/atoms/buttons/MainButton";
import { InputPassword, InputText } from "@/components/atoms/inputText/inputText";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authFunction = async (fd:FormData) => {
        const data:{token:string, name:string} = await apiReq('/auth/login/', {
            username,
            password
        }, 'POST')

        if (data?.token) {
            saveCookie('token', data.token)
            redirect('/chats');
        }
    }
    return(
        <form action={authFunction} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <InputText value={username} setValue={setUsername} placeholder="Usuario..."/>
                <InputPassword value={password} setValue={setPassword} placeholder="Senha..."/>
            </div>
            <MainButton type="submit" $primary={true}>Entrar</MainButton>
        </form>
    )
}