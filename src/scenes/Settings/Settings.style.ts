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

export const Header = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
`;

export const HeaderText = styled.Text`
    font-size: 22px;
    color: ${colors.darkWhite};
`;

export const Content = styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
`;

export const BackContainer = styled.View`
    width: 50%;
    height: 100%;
    padding-bottom: 10px;
`;

export const StatusContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: ${colors.darkWhite};
`;

export const StatusLight = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
`;

export const StatusText = styled.Text`
    color: ${colors.darkWhite};
    font-size: 16px;
`;

export const MainContainer = styled.View`
    padding: 10px;
    border: 1px solid ${colors.darkWhite};
    border-radius: 10px;
    flex: 1;
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GoBackButton = styled.TouchableOpacity``;