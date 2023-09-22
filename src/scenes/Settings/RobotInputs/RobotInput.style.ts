import styled from "styled-components/native";
import { colors } from "../../../colors";

export const InputContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.View`
    display: flex;
    width: 100%;
    gap: 14px;
`;

export const Title = styled.Text`
    font-size: 17px;
    font-weight: bold;
    align-self: flex-start;
    text-transform: uppercase;
    color: ${colors.darkWhite};
`;

export const InputTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${colors.darkWhite};
`;

export const InputView = styled.View`
    width: 100%;
    padding: 0 10px;
    border: 1px solid ${colors.darkWhite};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const InputText = styled.TextInput`
    color: ${colors.acqua};
    font-size: 16px;
    width: 100%;
`;

export const Auxiliary = styled.Text`
    color: ${colors.white};
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 2px 10px;
`;

export const BindButton = styled.View`
    padding: 5px 30px;
    background: ${colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    max-width: 50%;
    margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: ${colors.white};
`;
