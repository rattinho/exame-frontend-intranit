import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        
    }

    body {
        background-color: White;
        color: #FFFFFF;
    }

    html, body, #root, .App {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
    }

`

export const Container = styled.div`
    display: flex;
    width:100%;
    height: calc(56.7vw);
    @media screen and (min-width: 1500px){
        height: calc(100vh);
    }   

`