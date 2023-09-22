import styled from 'styled-components/native';
import { colors } from '../../../../colors';

export const Right = styled.View`
    width: 30%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${colors.darkGrey};
    border-radius: 0 20px 20px 20px;
`;

export const Section = styled.View`
    width: 100%;
    border-radius: 20px;
    border-width: 2px;
    padding: 5px 10px;
    background: ${colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 5px;
`;

export const UpperButtonRow = styled.View`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 5px;
    padding: 0 10px;
`;

export const LowerButtonRow = styled(UpperButtonRow)`
    align-items: flex-start;
`;

export const Slider = styled.View`
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50px;
    margin-top: 10px;
`;