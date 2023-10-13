'use client'

import styled, { css } from "styled-components"

export const MainButton = styled.button<{
    $primary?:boolean,
    $secondary?:boolean,
    $tertiary?:boolean
}>`
    padding: .5rem 1rem;
    border-radius: .25rem;
    display: block;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 600;
    background-color: var(rgb(--secondary-rgb));
    ${props => props.$primary && css`
        background-color: rgb(var(--contrast-rgb));
        border: 1px solid rgb(var(--contrast-rgb));
        color: #fff;
    `}
    ${props => props.$secondary && css`
        color: rgb(var(--contrast-rgb));
        border: 1px solid rgb(var(--contrast-rgb));
    `}
    ${props => props.$tertiary && css`
        color: rgb(var(--contrast-rgb));
    `}
`