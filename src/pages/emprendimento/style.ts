import styled from "styled-components";


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Images = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 20px);

    span {
        text-align: center;
        margin: 0 0 10px;
        color: #808080;
        font-family: Quicksand;
        font-size: clamp(10px,2vw,100px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: lowercase;
    }
`


export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 100%;

    h1 {
        color: #000;
        font-family: Quicksand;
        font-size: clamp(10px,2vw,100px);
        font-style: bold;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        margin: 20px;
        margin-top: 35px;
        margin-bottom: 0;
    }

    p {
        color: #000;
        font-family: Quicksand;
        font-size: clamp(5px,1.225vw,100px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 10px 15% 10px 15%;
    }
`



export const Right = styled.div<{active?: boolean, position?: number}>`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;

    img {
        border-radius: 400px 0px 100px 0px;
        height: 100%;
        object-fit: cover;
        z-index: 1;

        object-position: ${({position})=> position}%;

        opacity: ${({ active }) => active ? 0 : 1};

        transition: opacity 0.2s ease-in-out;
    }
    
    
`

export const Container = styled.div`
    display: flex;
    width:100%;
    height: 100vh;
`

export const ImagesSelect = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 100%;
    justify-content: center;
`

export const StyledImgs = styled.img<{ active?: boolean }>`
    border-radius: 20px 0px 100px 0px;
    height: 100%;
    width: 30%;
    object-fit: cover;

    opacity: ${({ active }) => active ? 0 : 1};

    transition: all 0.2s ease-in-out;
`

export const InputSlider = styled.input`
    margin: 15px 10% 10px 10%;
    background: transparent;
    cursor: pointer;
    opacity: 1;

    &::-webkit-slider-runnable-track {
        background: #E8E8E8;
        height: 2px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #FFB41D !important;
        margin-top: -6px;
        color: #FFB41D !important;
        height: 2rem;
        width: 1rem;    
        
    }

    &:hover::-webkit-slider-thumb {
        opacity: 0.5;
    }
`