'use client'
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const InputTextStyled = styled.input`
    padding: .5rem 1rem;
    border-radius: .25rem;
    outline: none;
    border: 1px solid rgb(var(--border-rgb));
    color: #252525;
    &:focus-within {
        border-color: rgb(var(--contrast-rgb));
    }
`

interface Props {
    placeholder?: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

export function InputText({
    placeholder,
    value,
    setValue
} : Props) {

    return <InputTextStyled type="text" 
                onChange={(ev) => setValue(ev.currentTarget.value)}
                value={value}
                placeholder={placeholder}
            />
}

export function InputPassword({
    placeholder,
    setValue,
    value
} : Props) {
    
    return <InputTextStyled type="password" 
                onChange={(ev) => setValue(ev.currentTarget.value)}
                value={value}
                placeholder={placeholder}
            />
}