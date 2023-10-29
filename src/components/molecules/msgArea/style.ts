'use client'
import styled from 'styled-components'

export const MsgAreaStyle = styled.div`
    background-color: rgb(var(--tertiary-rgb));
    padding: .75rem;
    padding-bottom: 1rem;
    border-radius: 0 0 1rem 1rem;
    input {
        background-color: rgb(var(--msgarea-rgb));
        line-height: 1.5rem;
        padding: .5rem 1rem;
        border-radius: .5rem ;
        outline: none;
        width: 100%;
    }
    @media screen and (max-width: 900px) {
        .msgArea {
            border-radius: 0;
        }
    }
`