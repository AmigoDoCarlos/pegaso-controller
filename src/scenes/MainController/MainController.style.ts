import styled from 'styled-components/native';
import { colors } from '../../colors';

export const Background = styled.View`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.black};
`;

export const UpperSection = styled.View`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BottomSection = styled.View`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;
