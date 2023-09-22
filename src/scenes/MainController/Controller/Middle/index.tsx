import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-native';
import { ImageSourcePropType } from "react-native";
import { useGlobalContext } from "../../../../contexts/GlobalContextProvider";
import { getGoHomeMessage, getResetHomeMessage } from '../../../../lib/commands';
import { eventType } from '../../../../contexts/types';
import BottomButton from './BottomButtons';
import SocketConnection from '../../../../lib/socket';
import settingsIcon from '../../../../assets/icons/settings.png';
import resetHomeIcon from '../../../../assets/icons/resetHome.png';
import goHomeIcon from '../../../../assets/icons/goHome.png';
import leftTriangle from '../../../../assets/icons/left-triangle.png';
import rightTriangle from '../../../../assets/icons/right-triangle.png';
import PositionButton from './PositionButton';
import { Bottom, Icon, IconButton, InfoText, InfoTextView, MiddleView, PositionCounter, PositionView, Screen, ScreenBar, Title, Top } from "./Middle.style";

interface middleProps {
    leftSideIcon: ImageSourcePropType;
}


function getCommand(type: eventType['type']){
    switch(type){
        case 'rst_home': return getResetHomeMessage();
        case 'goto_home': return getGoHomeMessage();
    }
}


export default function Middle({leftSideIcon}: middleProps){
    const navigate = useNavigate();
    const { sequence, infoText, borderColor, setInfoText } = useGlobalContext();
    const [currentPosition, setCurrentPosition] = useState<number>(() => 0);
    const hasChangedPosition = useRef(false);

    useEffect(() => {
        if((currentPosition === 0) && (sequence.length > 0)){       //acabou de colocar a primeira posição na fila
            setCurrentPosition(1);
        } else if(currentPosition >= sequence.length){              //acabou de remover uma posição da fila
            setCurrentPosition(sequence.length);
        }
    }, [sequence]);

    useEffect(() => {
        if(hasChangedPosition.current){
            setInfoText([`${currentPosition}° posição da sequência:`, sequence[currentPosition - 1]]);
            hasChangedPosition.current = false;
        }
    }, [currentPosition])

    const handlePosition = (e: eventType) => {
        let iterator;
        switch(e.type){
            case 'left_pos':
                iterator = (currentPosition > 1)? -1 : 0;
                break; 
            case 'right_pos':
                iterator = (currentPosition < sequence.length)? 1 : 0; 
                break;
        }
        setCurrentPosition(prev => prev + iterator);
        hasChangedPosition.current = (iterator !== 0);
    }

    const handleEvent = (e: eventType) => {
        const socket = SocketConnection.getInstance();
        let msg = getCommand(e.type);
        socket.sendMessageToRobot(msg);
    }

    return (
        <MiddleView>
            <Top>
                <Screen>
                    <ScreenBar>
                        <Icon source={leftSideIcon}/>
                        <Title>
                            Central de Comando
                        </Title>
                        <IconButton onPress={() => navigate('/settings')}>
                            <Icon source={settingsIcon}/>
                        </IconButton>
                    </ScreenBar>
                    <InfoTextView>
                        {infoText.map((text, index) =>(
                            <InfoText key={index}>
                                {text}
                            </InfoText>
                        ))}
                    </InfoTextView>
                </Screen>
                <PositionView>
                    <PositionButton type='left_pos' icon={leftTriangle} onTouch={handlePosition}/>
                    <PositionCounter style={{color: borderColor}}>
                        {currentPosition} / {sequence.length}
                    </PositionCounter>
                    <PositionButton type='right_pos' icon={rightTriangle} onTouch={handlePosition}/>
                </PositionView>
            </Top>
            <Bottom>
                <BottomButton icon={resetHomeIcon} type='rst_home' onTouch={handleEvent}>
                    reset HOME
                </BottomButton>
                <BottomButton icon={goHomeIcon} type='goto_home' onTouch={handleEvent}>
                    ir para HOME
                </BottomButton>
            </Bottom>
        </MiddleView>
    )
}