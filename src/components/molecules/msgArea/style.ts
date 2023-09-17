'use client'
import styled from 'styled-components'

export const MsgAreaStyle = styled.div`
    background-color: rgb(var(--tertiary-rgb));
    padding: 1rem 1rem 1.25rem 1rem;
    border-bottom-right-radius: 1rem;
    div[contentEditable] {
        background-color: rgb(var(--msgarea-rgb));
        line-height: 1.5rem;
        padding: .5rem 1rem;
        border-radius: .5rem;
        outline: none;
    }
`