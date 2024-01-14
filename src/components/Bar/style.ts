import styled from "styled-components"

export const Hr = styled.hr<{ size: number }>`
    display: flex;
    flex-direction: row;
    height: 2px;
    background-color: #FFB41D;
    border: 0;
    width: ${({ size }) => size}%;
`

export const Container = styled.div<{ justify: string }>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ justify }) => justify};
    align-items: center;
    margin: -10px;
    width: 100%;
`

export const Vetor = styled.img<{ size: number }>`
    width: ${({ size }) => size}vw;
    height: ${({ size }) => size}vw;
    margin:0 -10px 0 -10px;
`