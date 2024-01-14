import styled from "styled-components";

import InputMask from "react-input-mask";

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    height: 30%;
    display: flex;
    align-items: start;
    margin-bottom: 20px;
    align-items: center;

    
    span {
        position: absolute;
        left: 0;

        padding-left: 30px;

        color: rgba(0, 0, 0, 0.50);
        font-family: Quicksand;
        font-size: clamp(5px,1.25vw,100px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        pointer-events: none;

        transition: all 0.2s ease-in-out;
    }

    :focus ~ span {
        color: white;
        background-color: #FFB41D;
        padding: 5px;
        border-radius: 5px;
        transform: translateX(2vw) translateY(-2.3vw);
        font-size: clamp(5px,1vw,100px);
    }

    :valid ~ span {
        color: white;
        background-color: #FFB41D;
        padding: 5px;
        border-radius: 5px;
        transform: translateX(2vw) translateY(-2.3vw);
        font-size: clamp(5px,1vw,100px);
    }

`

export const InputText = styled.input`
    border-radius: 10px;
    background-color: rgba(251, 252, 253, 0.94);
    color: black;
    border: 0;
    height: 100%;
    width: 100%;
    font-family: Quicksand;
    font-size: calc(1vw + 1vh);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    outline: none;
    padding-left: 10px;
`
export const InputMaskStyled = styled(InputMask)`
    border-radius: 10px;
    background-color: rgba(251, 252, 253, 0.94);
    color: black;
    border: 0;
    height: 100%;
    width: 100%;
    font-family: Quicksand;
    font-size: calc(1vw + 1vh);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    outline: none;
    padding-left: 10px;
`;


export const ErrorText = styled.p`
    color: #FFB41D !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    margin-bottom: 14px;
`

export const Vetor = styled.img`
    margin-left: -7%;
    width: 5vw;
`