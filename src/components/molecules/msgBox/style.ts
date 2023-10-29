'use client'
import styled from "styled-components";

export const MsgBoxStyle = styled.div<{$sender:boolean}>`
    margin-top: 1rem;
    display: flex;
    gap: .5rem;
    .containerMsg {
        background-color: rgb(var(${props => props.$sender? '--contrast-rgb':'--secondary-rgb'}));
        padding: .25rem .625rem .375rem .625rem;
        border-radius: .5rem;
        div:first-of-type {
            display: flex;
            gap: 1rem;
            justify-content: space-between;
            align-items: center;
            opacity: .7;
            &>span {
                font-size: .875rem;
                line-height: 1.25rem;
            }
        };
        div:last-of-type {
            font-size: .875rem;
        }
    }
`