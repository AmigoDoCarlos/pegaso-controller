import styled from "styled-components/native";
import { colors } from "../../../../../colors";

export const Background = styled.TouchableOpacity`
    padding: 10px;
    border: 1px solid ${colors.grey};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    min-width: 45%;
`;

export const ButtonText = styled.Text`
    color: ${colors.darkWhite};
    font-size: 15px;
`;