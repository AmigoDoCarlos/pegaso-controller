import styled from 'styled-components/native';
import { colors } from '../../../../../colors';

export const Button = styled.TouchableOpacity`
    background-color: ${colors.black};
    padding: 4px;
    border-radius: 10px;
    border: 1px solid ${colors.grey};
`;