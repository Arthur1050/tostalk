import styled, { css } from "styled-components";

export const SpecialButtonStyled = styled.button<{$disabled?:boolean}>`
    ${props => props.$disabled && css`
        filter: grayscale(1);
        pointer-events: none;
    `}
    user-select: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: .625rem 1rem;
    background-size: 300% 300%;
    backdrop-filter: blur(1rem);
    border-radius: .25rem;
    transition: 0.5s;
    ${props => !props.$disabled&&css`
        animation: gradient_301 5s ease infinite;
    `}
    border: double 2px transparent;
    background-image: linear-gradient(#212121,#212121),linear-gradient(137.48deg,#c3b059 10%,#b15f91 45%,#5a417e 67%,#4261b7 87%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    /* &:hover {
        background-origin: border-box;
        background-clip: content-box, border-box;
        animation: none;
        .circle {
            background: #FE53BB;
        }
    } */
    strong {
        z-index: 2;
        font-size: 12px;
        letter-spacing: 5px;
        color: #FFFFFF;
        text-shadow: 0 0 4px white;
    }
    .starsContainer {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: 0.5s;
        backdrop-filter: blur(1rem);
        border-radius: .5rem;
        .stars {
            position: relative;
            background: transparent;
            width: 200rem;
            height: 200rem;
            &::after {
                content: "";
                position: absolute;
                top: -10rem;
                left: -100rem;
                width: 100%;
                height: 100%;
                animation: animStarRotate 90s linear infinite;

                background-image: radial-gradient(#ffffff 1px, transparent 1%);
                background-size: 50px 50px;
            }
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: -50%;
                width: 170%;
                height: 500%;
                animation: animStar 60s linear infinite;

                background-image: radial-gradient(#ffffff 1px, transparent 1%);
                background-size: 50px 50px;
                opacity: 0.5;
            }
        }
    }
    .glow {
        position: absolute;
        display: flex;
        width: 12rem;
        .circle {
            width: 100%;
            height: 30px;
            filter: blur(2rem);
            animation: pulse_3011 4s infinite;
            z-index: -1;
            &:nth-of-type(1) {
                background: rgba(254, 83, 186, 0.636);
            }
            
            &:nth-of-type(2) {
                background: rgba(142, 81, 234, 0.704);
            }
        }
    }

    @keyframes animStar {
        from {
            transform: translateY(0);
        }
    
        to {
            transform: translateY(-135rem);
        }
    }
    
    @keyframes animStarRotate {
        from {
            transform: rotate(360deg);
        }
    
        to {
            transform: rotate(0);
        }
    }
    
    @keyframes gradient_301 {
        0% {
            background-position: 0% 50%;
        }
    
        50% {
            background-position: 100% 50%;
        }
    
        100% {
            background-position: 0% 50%;
        }
    }
    
    @keyframes pulse_3011 {
        0% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }
    
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
    
        100% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
`

interface Props {
    text: string
    disabled?:boolean
}

export default function SpecialButton({text, disabled}:Props) {
    return (
        <SpecialButtonStyled $disabled={disabled}>
            <strong>{text}</strong>
            <div className="starsContainer">
                <div className="stars"></div>
            </div>

            <div className="glow">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </SpecialButtonStyled>
    )
}