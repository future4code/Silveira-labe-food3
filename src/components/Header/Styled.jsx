import styled from 'styled-components'
import { blackColor, neutralColor } from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 7vh;
    border: 1px solid ${neutralColor};
`;

export const Btn = styled.button`
    width: 30px;
    background-color: white;
    font-size: 16px;
    border: 0;
    margin-left: 15px;
    color: ${blackColor};
`;

export const BlankSpace = styled.div`
    width: 30px;
    height: 20px;
    margin-right: 15px;
    background-color: transparent;
`;

export const Titulo = styled.h2`
    font-size: 18px;
    color: ${blackColor};
`;