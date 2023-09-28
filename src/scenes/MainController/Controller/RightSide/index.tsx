import React, { useEffect } from "react";
import { LowerButtonRow, Right, Section, Slider, UpperButtonRow } from './RightSide.style';
import { useGlobalContext } from "../../../../contexts/GlobalContextProvider";
import { eventType } from "../../../../contexts/types";
import ProgressBar from "../../../../components/ProgressBar";
import MoveButton from "./MoveButton";
import SideButton from "./SideButton";
import plusIcon from "../../../../assets/icons/plus.png";
import minusIcon from "../../../../assets/icons/minus.png";
import playIcon from "../../../../assets/icons/right-triangle.png";
import loopIcon from "../../../../assets/icons/loop.png";
import SocketConnection from "../../../../lib/socket";
import { INFINITE_LENGTH } from "../../../../contexts/constants";
import { getEndMessage, getStartMessage } from "../../../../lib/commands";


interface RightSideProps {
    borderColor: string;
}

const resolutions = [
    {value: 0, text: "4"},
    {value: 1, text: "8"},
    {value: 2, text: "16"},
    {value: 3, text: "32"},
]

export default function RightSide({borderColor}: RightSideProps){

    const { setMicrostep, setDirection, setInfoText, connection, direction, joint, length, speed, microstep } = useGlobalContext();

    const socket = SocketConnection.getInstance();

    const handleEvent = (e: eventType) => {
        switch(e.type){
            case "move_joint":
                if(e.value === '+' || e.value === '-'){
                    setDirection(e.value);
                } else {
                    setInfoText(prev => [prev[0], `'${e.value}' não implementado ainda.`]);
                }
                break;
            case "stop_joint":
                setDirection('none');
                break;
            case "set_res":
                if(typeof e.value === "number"){
                    const currentRes = resolutions.filter(r => r.value === e.value).at(0).text;
                    setInfoText(prev => [prev[0], `Resolução dos motores alterada para ${currentRes}.`])
                    setMicrostep(e.value);
                }
            break;
        }
    }

    useEffect(() => {
        if(connection.server){
            if (direction !== 'none') {
                setInfoText(prev => [prev[0], 'enviando...']);
                socket.sendMessageToRobot(getStartMessage(direction, joint, length, speed, microstep));
            } else if (length === INFINITE_LENGTH) {
                socket.sendMessageToRobot(getEndMessage());
                setInfoText(prev => [prev[0], 'parando...']);
            }
        } else {
            setInfoText(['Impossível enviar comando:','você não está conectado ao servidor.']);
        }
    }, [direction]);

    const isDisabled = (direction !== 'none');    

    return (
        <Right>
            <Section style={{borderColor}}>
                <UpperButtonRow>
                    <MoveButton name={"+"} icon={plusIcon} onTouch={handleEvent} onRelease={handleEvent}/>
                    <SideButton icon={playIcon} value='play' onClick={handleEvent} width={75} height={75}/>                
                </UpperButtonRow>
                <LowerButtonRow>
                    <MoveButton name={"-"} icon={minusIcon} onTouch={handleEvent} onRelease={handleEvent}/>
                    <SideButton icon={loopIcon} value='loop' onClick={handleEvent} width={65} height={65}/>
                </LowerButtonRow>
            </Section>
            <Slider>
                <ProgressBar disabled={isDisabled} type='set_res' onChange={handleEvent} color={borderColor} leftText="Res." rightTexts={resolutions}/>
            </Slider>   
        </Right>
    )
}