'use client'
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const InputTextStyled = styled.input`
    background-color: rgb(var(--tertiary-rgb));
    padding: .5rem 1rem;
    border-radius: .375rem;
    outline: none;
    border: 2px solid rgb(var(--border-rgb));
    transition: 150ms border;
    box-shadow: 0px 0px 0px 0px rgb(var(--contrast-rgb)/40%);
    &:focus-within {
        border-color: rgb(var(--contrast-rgb));
        box-shadow: 0px 0px 0px 2px rgb(var(--contrast-rgb)/40%);
    }
`

interface Props {
    placeholder?: string
    value: string
    setValue: Dispatch<SetStateAction<string>>
    onchange?: () => void
    onkeydown?: (ev:React.KeyboardEvent<HTMLInputElement>) => void
    name?: string
}

export function InputText({
    placeholder,
    value,
    setValue,
    onchange,
    onkeydown,
    name
} : Props) {

    return <InputTextStyled type="text" 
                onChange={(ev) => {setValue(ev.currentTarget.value); onchange && onchange()}}
                onKeyDown={(ev) => onkeydown && onkeydown(ev)}
                value={value}
                placeholder={placeholder}
                name={name}
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