'use client'
import styled from "styled-components";

export const MsgBoxStyle = styled.div<{$sender:boolean}>`
    margin-top: 1rem;
    display: flex;
    gap: .5rem;
    .containerMsg {
        background-color: rgb(var(${props => props.$sender? '--contrast-rgb':'--secondary-rgb'}));
        padding: .5rem;
        padding-top: .25rem;
        border-radius: .5rem;
        div:first-of-type {
            display: flex;
            gap: 1rem;
            align-items: center;
            opacity: .7;
            &>span {
                font-size: .875rem;
                line-height: 1.25rem;
            }
        }
    }
`