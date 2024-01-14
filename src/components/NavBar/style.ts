import styled, { css } from "styled-components";

interface IButtonStyled { 
    variant?: string;
}

export const Container = styled.div`
    width: 18%;
    height: 100%;

    background-color: white;

    position: fixed;

    top: 0;
    left: 0;


    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const Logo = styled.img`
    width: 60%;
    height: auto;
    margin-top: 50px;
    margin-bottom: 100px;
    flex-shrink: 0;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
`

export const Bar = styled.div`
    background: #FFB41D;
    width: 30%;
    height: 2px;
`

export const SpanText = styled.span`
    width: 50%;

    text-decoration: none;
    font-size: 14px;
    font-family: Quicksand;
    font-weight: 400;
    margin: 0 0 0 10%;
    color: black;
`

export const Link = styled.a<IButtonStyled>`
    text-decoration: none;
    font-size: 24px;

    font-family: Quicksand;

    font-weight: 700;

    ${({ variant }) => variant !== "bold" && css`
        font-weight: 400;
    `}
    margin: 0 0 0 10%;
    color: black;
`