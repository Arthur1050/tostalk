'use client'
import { apiReq } from "@/app/actions";
import { AuthContext } from "@/app/authContext";
import { MainButton } from "@/components/atoms/buttons/MainButton";
import { InputText } from "@/components/atoms/inputText/inputText";
import MenuToggle from "@/components/atoms/menuToggle/MenuToggle";
import ImageN from "next/image";
import React, { ChangeEvent, useContext, useRef, useState } from "react";
import styled, { css } from "styled-components";

export default function Home() {
    const [{username, profile}] = useContext(AuthContext);
    const [usernameEdit, setUsernameEdit] = useState(username);
    const [edited, setEdited] = useState(false);
    const [sourceImg, setSourceImg] = useState(profile);
    const [loading, setLoading] = useState(false);
    const form = useRef<HTMLFormElement>(null)

    function cancelEdits() {
        setUsernameEdit(username);
        setSourceImg(profile)
        setEdited(false)
    }

    function handlerPic(ev:React.ChangeEvent<HTMLInputElement>) {
        const {files} = ev.currentTarget;
        setEdited(true)
        
        if (files) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                
                img.src = String(reader.result);
                img.onload = () => {
                    const canvas = document.createElement('canvas')
                    const ctx = canvas.getContext("2d")
                    const {width, height} = img;

                    const aspect = width <= height ? width : height;
                    const [sx, sy] = [
                        width == aspect ? 0 : ((width - aspect) / 2),
                        height == aspect ? 0 : ((height - aspect) / 2)
                    ]

                    canvas.width = 400
                    canvas.height = 400

                    ctx?.drawImage(img, sx, sy, aspect, aspect, 0, 0, 400, 400)
    
                    setSourceImg(canvas.toDataURL())
                }
            }
            reader.readAsDataURL(files[0])
        }
    }

    async function submitData(fd:FormData) {
        fd.set('profile', sourceImg);

        setLoading(true);
        const res = await apiReq('/update/userdata/', fd, 'POST');

        if(res) {
            window.location.reload();
        } else {
            setLoading(false)
        }
    }

    return (
        <div className="w-full p-4 relative">
            <div className="flex items-center gap-4 mb-4">
                <MenuToggle />
                <p className="text-2xl font-medium tracking-[-.75px]">Perfil</p>
            </div>
            <PerfilFormStyle $disabled={loading} ref={form} action={submitData}>
                <label>
                    <ImageN className="aspect-square rounded-full cursor-pointer" width={125} height={125} src={sourceImg} alt="profile.png" />
                    <input name="profile" className="hidden" onChange={(ev) => handlerPic(ev)} accept="image/*" type="file" />
                </label>
                <div>
                    <input name="oldUsername" type="hidden" value={username} />
                    <InputText 
                        label="Nome"
                        name="username"
                        onkeydown={(ev) => ev.currentTarget.value != username ? setEdited(true) : ''} 
                        value={usernameEdit} setValue={setUsernameEdit} 
                    />
                </div>
            </PerfilFormStyle>
            {edited && 
                <div className="animate-[fadeToTop_200ms_forwards] absolute bottom-0 items-center w-[-webkit-fill-available] mx-4 mb-4 flex justify-between p-2 rounded-lg bg-[rgb(var(--primary-rgb))]">
                    <p className="ml-4">Deseja salvar as alterações feitas aqui?</p>
                    <div className="flex gap-2">
                        <MainButton onClick={cancelEdits} $tertiary={true}>Cancelar</MainButton>
                        <MainButton onClick={() => form.current?.requestSubmit()} $primary={true}>Salvar</MainButton>
                    </div>
                </div>
            }
        </div>
    )
}

interface PropsStyled {
    $disabled?: boolean
}
const PerfilFormStyle = styled.form<PropsStyled>`
    display: flex;
    align-items: center;
    gap: 1rem;
    ${props => props.$disabled && css`
        > * {
            opacity: .5;
        }
    `}
`