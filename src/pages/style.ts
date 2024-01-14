import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: auto;
    display:flex;
    width: 100%;
    flex-direction: row;
    align-items: start;
    justify-content: end;

    overflow-x: hidden;
`

export const Sections = styled.div`
    display:flex;
    flex-direction: column;
    width: 82%;
    height: auto;
    gap: 20px;
`

export const Mandala = styled.img<{top?: number, right?: number, left?: number, bottom?: number, width?: number, rotate?: number}>`
    position: absolute;
    z-index: 1;
    top: ${({top})=> top}%;
    right: ${({right})=> right}%;
    left: ${({left})=> left}%;
    bottom: ${({bottom})=> bottom}%;
    width: ${({width})=> width}%;

    transform: rotateZ(${({rotate})=> rotate}deg);
    
`
