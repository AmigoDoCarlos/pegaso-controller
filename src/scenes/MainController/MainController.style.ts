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
    align-items: flex-start;
`;
const sideSection = styled.View`
    width: 30%;
    height: 100%;
    padding: 10px;
    background: ${colors.darkGrey};
`;

export const Left = styled(sideSection)`
    border-radius: 20px 0 20px 20px;
`;

export const Right = styled(sideSection)`
    border-radius: 0 20px 20px 20px;
`;

export const Middle = styled.View`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${colors.darkGrey}
`;

export const MiddleTop = styled.View`
    width: 100%;
    height: 80%;
`;

export const MiddleBottom = styled.View`
    width: 100%;
    height: 20%;
    background-color: ${colors.black};
    border-radius: 30px 30px 0 0;
`;

export const BottomSection = styled.View`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;

export const LeftContainer = styled.View`
    flex: 1;
    background: ${colors.black};
    border-width: 2px;
    border-radius: 20px;
`;

export const ButtonsRow = styled.View`
    width: 100%;
    padding-top: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const PlayAndLoopRow = styled.View`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-evenly;
    padding-bottom: 10px;
`;
