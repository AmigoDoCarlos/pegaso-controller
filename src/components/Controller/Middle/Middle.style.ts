import styled from 'styled-components/native';
import { colors } from '../../../colors';

export const MiddleView = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${colors.darkGrey}
`;

export const Top = styled.View`
    width: 100%;
    height: 80%;
    padding: 10px;
`;

export const Bottom = styled.View`
    width: 100%;
    height: 20%;
    background-color: ${colors.black};
    border-radius: 30px 30px 0 0;
`;

export const Screen = styled.View`
    width: 100%;
    height: 70%;
    border-radius: 20px;
    border: 2px solid ${colors.darkWhite};
    background: ${colors.darkWhite};
`;

export const ScreenBar = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30%;
    padding: 0 10px;
    border-radius: 20px 20px 0 0;
    background: ${colors.darkGrey};
`;

export const Icon = styled.Image`
    width: 25px;
    object-fit: scale-down;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.darkWhite};
`;

export const InfoText = styled.Text`
    width: 100%;
    height: 100%;
    padding: 10px;
    text-align: center;
    color: black;
    font-size: 14px;
`;