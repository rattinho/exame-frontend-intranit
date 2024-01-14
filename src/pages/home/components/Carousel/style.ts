import styled from "styled-components";

export interface IItems {
    enable: boolean;
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Item = styled.div<IItems>`
    position: absolute;
    width: 100%;
    height: 100%;

    opacity: ${({enable}) => enable ? 1 : 0 };

    transition: all 0.5s ease-in-out;
`