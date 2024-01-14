import styled from "styled-components";

export const Container = styled.div<{ img: string }>`
    width: 100%;
    height: 100%;
    border-radius: 100px 0px 600px 0px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${({ img }) => img});
    background-size: cover;

    display:flex;
    flex-direction: row;
    align-items: end;
    justify-content: start;
`

export const Content = styled.div`
    margin: 20px;
    width: 50%;

    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: start;

    h1{
        color: #FFF; 
        font-family: Quicksand;
        font-size: clamp(10px,4vw,100px);
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

`