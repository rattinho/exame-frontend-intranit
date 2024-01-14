import styled from "styled-components";

export const ContainerCheckBox = styled.div`
    width: 100%;
    margin-right: -100px;
    span {
        margin-left: 10px;
        color: #FFF;
        font-family: Roboto;
        font-size: clamp(5px,0.8vw,100px);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`

export const ErrorText = styled.p`
    color: #FFB41D !important;
    font-size: 20px !important;
    font-weight: 700 !important;
    margin-bottom: 14px;
`

export const InputCheck = styled.input`
    position: relative;
    -webkit-appearance: none;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: white;
    cursor: pointer;

    
    &:hover {
        background-color: #ccc ;
    }

    &:checked {
        background-color: #FFB41D !important;
    }

    &:checked::before {
        content: "✓";
        font-size: 20px;
        position: absolute;
        color: #fff;
        right: 0px;
        top: -8px;
    }
`