'use client'
import { Eye, EyeOff } from "lucide-react";
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
    label?:string
    placeMove?: boolean
}

export function InputText({
    placeholder,
    value,
    setValue,
    onchange,
    onkeydown,
    name,
    label = ''
} : Props) {

    const Input = <InputTextStyled type="text" 
        onChange={(ev) => {setValue(ev.currentTarget.value); onchange && onchange()}}
        onKeyDown={(ev) => onkeydown && onkeydown(ev)}
        value={value}
        placeholder={placeholder}
        name={name}
    />

    if(!label) {
        return Input;
    } else {
        return <label className="flex flex-col">
            <span className="text-xs ms-1">{label}</span>
            {Input}
        </label>
    }
}

export function InputPassword({
    placeholder,
    setValue,
    value,
    placeMove
} : Props) {
    const [focused, setFocused] = useState(false);
    const [view, setView] = useState(false)

    /* incompleto */
    const placeHolderMove = 
        <span className={`${focused||value ? 'top-[0%] scale-75' : 'top-[50%]'} bg-[rgb(var(--tertiary-rgb))] origin-left translate-y-[-50%] pointer-events-none absolute transition-all h-fit my-auto ms-[1.125rem] text-[#99a0ab]`}>
            {placeholder}
        </span>
    
    return <label className="relative">
        {placeMove && placeHolderMove}
        <InputTextStyled onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} type={view ? "text": "password"}
                onChange={(ev) => setValue(ev.currentTarget.value)}
                value={value}
                placeholder={placeMove ? '' : placeholder}
            />
        <span onClick={() => setView(!view)} className="cursor-pointer top-0 bottom-0 my-auto right-[1.125rem] h-fit absolute">
            {view ? <Eye size={20}/> : <EyeOff size={20}/>}
        </span>
    </label> 
}