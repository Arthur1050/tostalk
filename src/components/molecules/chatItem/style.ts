'use client'
import styled from "styled-components";

export const ChatItemStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;
    background-color: rgb(var(--secondary-rgb));
    cursor: pointer;
    padding: .5rem 1rem;
    .status {
        margin-left: auto;
    }
    &:hover {
        background-color: rgb(255 255 255/3%);
    }
`