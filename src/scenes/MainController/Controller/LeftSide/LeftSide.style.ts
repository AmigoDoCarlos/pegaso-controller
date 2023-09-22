import styled from 'styled-components/native';
import { colors } from '../../../../colors';

export const Left = styled.View`
    width: 30%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${colors.darkGrey};
    border-radius: 20px 0 20px 20px;
`;

export const Section = styled.View`
    width: 100%;
    border-radius: 20px;
    border-width: 2px;
    padding: 10px 0;
    background: black;
`;

export const ButtonRow = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2px;
`;

export const Sliders = styled.View`
    display: flex;
    width: 100%;
    padding: 0 10px;
`;