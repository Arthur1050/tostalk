'use client'
import styled from "styled-components";

export const NotifyMsgStyle = styled.div`
    width: 250px;
    position: absolute;
    background-color: rgb(var(--tertiary-rgb));
    border-radius: .25rem;
    border: 2px solid rgb(var(--contrast-rgb));
    right: 1rem;
    bottom: 1rem;
    padding: .5rem;
    animation: fadeToTop 200ms forwards;
    span {
        margin-bottom: .5rem;
        font-size: .875rem;
    }
`