import React from "react";
import { ButtonColumn, Right, Section, Slider } from './RightSide.style';
import { Event, useGlobalContext } from "../../../contexts/GlobalContextProvider";
import ProgressBar from "../../ProgressBar";
import MoveButton from "./MoveButton";
import PlayButton from "./PlayButton";
import plusIcon from "../../../assets/icons/plus.png";
import minusIcon from "../../../assets/icons/minus.png";

interface RightSideProps {
    borderColor: string;
}

export default function RightSide({borderColor}: RightSideProps){

    const { setMicrostep, setDirection, setInfoText, setMoving } = useGlobalContext();

    const handleEvent = (e: Event) => {
        switch(e.type){
            case "move_axis":
                if(e.value === '+' || e.value === '-'){
                    setDirection(e.value);
                    setMoving(true);
                } else {
                    setInfoText([`'${e.value}' não implementado ainda.`]);
                }
                break;
            case "stop_axis":
                setMoving(false);
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

    return (
        <Right>
            <Section style={{borderColor}}>
                <ButtonColumn style={{width: '55%'}}>
                    <MoveButton name={"+"} icon={plusIcon} onTouch={handleEvent} onRelease={handleEvent}/>
                    <MoveButton name={"-"} icon={minusIcon} onTouch={handleEvent} onRelease={handleEvent}/>
                </ButtonColumn>
                <ButtonColumn style={{width: '45%'}}>
                    <PlayButton onClick={handleEvent}/>
                </ButtonColumn>
            </Section>
            <Slider>
                <ProgressBar type='set_res' onChange={handleEvent} color={borderColor} leftText="Res." rightTexts={[4, 8, 16, 32]}/>
            </Slider>   
        </Right>
    )
}