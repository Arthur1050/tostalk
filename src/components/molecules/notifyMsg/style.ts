'use client'
import styled from "styled-components";

export const NotifyMsgStyle = styled.div`
    width: 300px;
    position: absolute;
    background-color: rgb(var(--tertiary-rgb));
    border-radius: .5rem;
    border: 2px solid rgb(var(--contrast-rgb));
    right: 1rem;
    bottom: 1rem;
    padding: .5rem .75rem;
    animation: fadeToTop 200ms forwards, fadeShadow 200ms forwards;
    user-select: none;
    span {
        margin-bottom: .5rem;
    }
    p {
        font-size: .875rem;
        color: rgb(var(--text-rgb)/65%);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-top: .25rem;
        line-height: 120%;
    }
    @keyframes fadeShadow {
        from {
            box-shadow: 0px 0px 0px 0px rgb(var(--contrast-rgb));
        } to {
            box-shadow: 0px 0px 6px 0px rgb(var(--contrast-rgb));
        }
    }
`