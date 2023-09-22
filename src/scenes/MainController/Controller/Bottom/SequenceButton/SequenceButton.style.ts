import styled from "styled-components/native";
import { colors } from "../../../../../colors";

export const Background = styled.TouchableOpacity`
    min-width: 15%;
    padding: 2px 10px;
    height: 80%;
    border-radius: 20px;
    background: black;
    border: 1px solid ${colors.grey};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    color: ${colors.darkWhite};
`;