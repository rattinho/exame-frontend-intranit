import styled from "styled-components";

import backgroundimg from '../../assets/Home Images/img2.jpeg'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    width:100%;
    height: calc(56.7vw);
    @media screen and (min-width: 1500px){
        height: calc(100vh);
    } 
    justify-content: end;

    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${backgroundimg});
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 100px 0px 582.5px 0px;
`

export const LogoIntranit = styled.div`
    position: absolute;
    right: 5%;
    bottom: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    img {
        width: 10vw;
        max-width: 100px;
    }

    h4 {
        color: #000;
        text-align: right;
        font-family: Roboto;
        font-size: clamp(10px, 1.2vw, 15px);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`

export const Form = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 15%;

    height: 60%;
    
    gap: 20px;

    padding-right: 10%;

    form {
        width: 100%;
        height: 40%;
    }

    h1 {
        color: #FFF;
        font-family: Quicksand;
        font-size: clamp(10px, 2.5vw, 100px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        margin-right: 50%;
    }

    p {
        color: #FFF;
        font-family: Quicksand;
        font-size: clamp(10px, 1.5vw, 100px);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`

export const FormEnd = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex: row;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

    div {
        width: 50% !important;
    }
`