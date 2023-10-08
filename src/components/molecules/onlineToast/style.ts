'use client'
import styled from "styled-components";

export const OnlineToastStyle = styled.div`
    background-color: rgb(var(--tertiary-rgb));
    display: flex;
    align-items: center;
    width: fit-content;
    position: absolute;
    animation: fadeToBottom 200ms;
    top: 1rem;
    margin-inline: auto;
    padding: .5rem;
    gap: .5rem;
    border-radius: 1rem;
    img {
        width: 1.5rem;
        aspect-ratio: 1/1;
        border-radius: 100%;
    }
    p {
        font-size: .875rem;
    }
`