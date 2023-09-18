'use client'
import styled from "styled-components";

export const MenuPerfilStyle = styled.div`
    padding: .5rem;
    &>div {
        display: flex;
        gap: .5rem;
        background-color: rgb(var(--contrast-rgb));
        padding: .5rem;
        border-radius: 1rem;
        .userName {
            font-size: 1.125rem;

        }
    }
`