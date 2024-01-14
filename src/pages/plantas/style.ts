import styled from "styled-components";


export const Planta = styled.div`
    position: relative;
    display: flex;
    width: 75%;
    height: 100%;
`

export const ImgPlanta = styled.div<{ img: string }>`
    border-radius: 100px 0px 314px 0px;
    background: linear-gradient(0deg, rgba(243, 173, 59, 0.20) 0%, rgba(243, 173, 59, 0.20) 100%), url(${({ img }) => img}), lightgray 50% / cover no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
`

export const List = styled.div`
    padding: 40px;

    display: flex;
    width: 25%;
    height: 100%;
    flex-direction: column;
    align-items: center;

    h1 {
    margin-left: 10%;
    width: 100%;
    color: #000;
    font-family: Quicksand;
    font-size: clamp(10px,2vw,100px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    text-align: start;
    }
`

export const Buttons = styled.div`
    margin-top: 40px;
    gap: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Lupa = styled.img`
    position: absolute;
    width: 10%;
    height: 10%;
    bottom: 5%;
    left: 5%;

    &:hover{
        opacity: 0.5;
    }

    transition: all 0.2s ease-in-out;
`

export const FullScreen = styled.div<{active: boolean, animation?: boolean}>`
    position: fixed;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    z-index: 2;

    background-color: #FFB41D;

    display: ${({active})=> active ? 'flex' : 'none'};

    opacity: ${({animation})=> animation ? 1 : 0};

    transition: 0.2s ease-in-out;

    img { 
        background-color: white;
        width: 100%;
        height: 100%;
        border-radius: 0px 314px 0px 0px;
        
        object-fit: contain;
    }

    span {
        position: absolute;
        top: 3%;
        right: 3%;


        color: #000;
        text-align: center;
        font-family: Quicksand;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }

`