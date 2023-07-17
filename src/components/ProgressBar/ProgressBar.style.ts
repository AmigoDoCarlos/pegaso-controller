import styled from 'styled-components/native';
import { colors } from '../../colors';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Legend = styled.Text`
    font-size: 16px;
    color: ${colors.darkWhite};
`;