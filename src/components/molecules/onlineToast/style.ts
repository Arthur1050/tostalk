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
    padding: .5rem 1rem;
    gap: .5rem;
    border-radius: 9999px;
    z-index: 1;
    & > div {
        border: 2px solid rgb(var(--green-rgb));
        border-radius: 9999px;
    }
    img {
        width: 1.75rem;
        aspect-ratio: 1/1;
        border-radius: 100%;
        border: 3px solid transparent;
    }
    p {
        font-size: .875rem;
    }
`