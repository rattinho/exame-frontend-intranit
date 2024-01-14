import styled from "styled-components";

import Lozango from '../../assets/Vetores/Lozango.svg'
import MapImg from '../../assets/Map/Map.jpeg'

export const List = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    flex-direction: column;
    padding: 5% 0 5% 0;

    h1 {
        margin-left: 10%;
        color: #000;
        font-family: Quicksand;
        font-size: clamp(10px,2vw,100px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }

    p {
        color: #000;
        font-family: Quicksand;
        font-size: clamp(5px,1.225vw,100px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 10% 10% 10%;
    }
`

export const ButtonsLayout = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 25%;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: 5%;
    gap: 10%;

`

export const ButtonImage = styled.div`
    display: flex;
    width: 25%;
    justify-content: center;
    align-items: center;
    
    margin: -5%;

    background-image: url(${Lozango});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: 80%;

    img {
        width: 45%;
    }
`

export const Button = styled.div`
    margin-left: 20%;
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;

    filter: grayscale(1);

    transition: all 0.2s ease-in-out;
    
    &:hover{
        filter: grayscale(0);
    }

    h2 {
        color: #000;
        font-family: Quicksand;
        font-size: clamp(5px,1.225vw,100px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        margin-left: 10%;
    }
`

export const MapIcons = styled.div<{posicaox: number, posicaoy:number, size:number, active: boolean}>`
    position: absolute;
    display: flex;
    width: 25%;
    justify-content: center;
    align-items: center;

    top: ${({posicaox}) => posicaox}%;
    left: ${({posicaoy}) => posicaoy}%;

    margin: -5%;

    background-image: url(${Lozango});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: 80%;

    transform: scale(${({size}) => size});

    opacity: ${({active}) => active ? 1 : 0};

    transition: all 0.2s ease-in-out;

    img {
        width: 45%;
    }
`
export const Map = styled.div`
    position: relative;
    display: flex;
    width: 70%;
    height: 100%;
    

    border-radius: 450px 0px 100px 0px;
    background: linear-gradient(0deg, rgba(243, 173, 59, 0.10) 0%, rgba(243, 173, 59, 0.10) 100%), url(${MapImg}), lightgray 50% / cover no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
`