'use client'
import styled from "styled-components";

export const MsgBoxStyle = styled.div<{$sender:boolean}>`
    margin-top: 1rem;
    display: flex;
    gap: .5rem;
    .containerMsg {
        background-color: rgb(var(${props => props.$sender? '--contrast-rgb':'--secondary-rgb'}));
        padding: .5rem;
        border-radius: .25rem;
        &>span {
            font-size: .875rem;
            line-height: 1.25rem;
        }
    }
`