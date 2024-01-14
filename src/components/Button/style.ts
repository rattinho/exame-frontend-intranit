import { css } from "styled-components";
import styled from "styled-components";



interface IButtonStyled {
    variant: string;
    active: boolean;
}

export const Vetor = styled.img`
    margin-left: 15px;
    width: clamp(20px, 3vw, 100px);
`

export const ButtonContainer = styled.button<IButtonStyled>`
    ${({ variant }) => variant === "primary" ? css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 3%;
        flex-shrink: 0;
        border-radius: 10px;
        background: rgba(251, 252, 253, 0.94);
        border: none;

        color: rgba(0, 0, 0, 0.50);

        /* títulos */
        font-family: Quicksand;
        font-size: clamp(5px,2vw,100px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        cursor: pointer;


    `: variant === "secondary" ? css`
        color: #000;

        text-align: center;
        font-family: Quicksand;
        font-size: clamp(5px,1.5vw,100px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;

        border-radius: 10px;
        border: 0px;
        padding: 15px 0;
        width: 100%;

        &:hover{
            opacity: 0.5;
        }

        transition: all 0.2s ease-in-out;
    `: variant === "terciary" && css`
        color: #000;
        text-align: center;
        font-family: Quicksand;
        font-size: clamp(5px,1.5vw,100px);
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        background: #F3AD3B;

        border: 0px;
        width: 30%;
        height: 40px;
        margin-right: 25px;

        transition: all 0.2s ease-in-out;

        &:hover{
            filter: brightness(0.5)
        }
    `}

    ${({active}) => active ? "background-color: #FFB41D" : "background-color: #E8E8E8" }
`