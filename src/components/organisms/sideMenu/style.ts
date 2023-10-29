import styled, { css } from "styled-components";

interface Props {
    $openned: boolean
}

export const SideMenuStyle = styled.div<Props>`
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 100VW;
    pointer-events: none;
    transition: background 150ms linear;
    ${props => props.$openned && css`
        pointer-events: unset;
        background-color: #00000040;
    `}
    > div {
        width: 250px;
        height: 100%;
        border-radius: 0 1rem 1rem 0;
        background-color: rgb(var(--secondary-rgb));
        transition: transform 150ms ease-out;
        transform: ${props => props.$openned ? 'translateX(0%)' : 'translateX(-100%)'};
    }
`