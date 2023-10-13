'use client'
import styled from "styled-components";

export const MenuPerfilStyle = styled.div`
    padding: .5rem;
    &>div {
        display: flex;
        align-items: center;
        gap: .5rem;
        background-color: rgb(var(--contrast-rgb));
        padding: .5rem;
        border-radius: 1rem;
        .userName {
            font-size: 1.125rem;

        }
    }
    .config {
        margin-left: auto;
        margin-right: 1rem;
        padding: .5rem;
        border-radius: 9999px;
        transition: 150ms background;
        cursor: pointer;
        &:hover {
            background-color: rgb(255 255 255 / 10%);
        }
    }
`