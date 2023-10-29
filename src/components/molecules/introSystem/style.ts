'use client'

import styled from "styled-components"

export const IntroSystemStyle = styled.div`
    display: grid;
    place-items: center;
    position: absolute;
    inset: 0;
    background-color: rgb(var(--primary-rgb));
    z-index: 1;
    img {
        animation: showLogo 1s forwards cubic-bezier(0, 0, 0.77, 1.21);
    }
    @keyframes showLogo {
        0% {
            opacity: 0;
            transform: scale(.5);
            filter: drop-shadow(0px 0px 10px rgb(255 255 255 / 0%));
            stroke-dashoffset: 728;
        }
        50% {
            opacity: 1;
            filter: drop-shadow(0px 0px 10px rgb(255 255 255 / 40%));
        }
        90% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 0;
            opacity: 1;
            filter: drop-shadow(0px 0px 20px rgb(255 255 255 / 80%));
            transform: scale(1);
        }
    }
`