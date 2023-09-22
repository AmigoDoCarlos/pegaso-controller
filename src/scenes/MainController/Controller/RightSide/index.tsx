import React from "react";
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


interface RightSideProps {
    borderColor: string;
}

export default function RightSide({borderColor}: RightSideProps){

    const { setMicrostep, setDirection, setInfoText, direction } = useGlobalContext();

    const handleEvent = (e: eventType) => {
        switch(e.type){
            case "move_axis":
                if(e.value === '+' || e.value === '-'){
                    setDirection(e.value);
                } else {
                    setInfoText([`'${e.value}' não implementado ainda.`]);
                }
                break;
            case "stop_axis":
                setDirection('none');
                break;
            case "set_res":
                if(typeof e.value === "number"){
                    setInfoText([`Resolução dos motores alterada para ${e.value}.`])
                    setMicrostep(e.value);
                }
            break;
        }
    }

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
                <ProgressBar disabled={isDisabled} type='set_res' onChange={handleEvent} color={borderColor} leftText="Res." rightTexts={[4, 8, 16, 32]}/>
            </Slider>   
        </Right>
    )
}