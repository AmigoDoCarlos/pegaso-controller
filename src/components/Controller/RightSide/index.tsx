import React from "react";
import { ButtonColumn, Right, Section, Slider } from './RightSide.style';
import ProgressBar from "../../ProgressBar";
import MoveButton from "./MoveButton";
import PlayButton from "./PlayButton";
import plusIcon from "../../../assets/icons/plus.png";
import minusIcon from "../../../assets/icons/minus.png";

interface RightSideProps {
    borderColor: string;
    onEvent: (e: string) => void;
}

export default function RightSide({borderColor, onEvent}: RightSideProps){
    return (
        <Right>
            <Section style={{borderColor}}>
                <ButtonColumn style={{width: '55%'}}>
                    <MoveButton name={"+"} icon={plusIcon} onTouch={onEvent} onRelease={onEvent}/>
                    <MoveButton name={"-"} icon={minusIcon} onTouch={onEvent} onRelease={onEvent}/>
                </ButtonColumn>
                <ButtonColumn style={{width: '45%'}}>
                    <PlayButton onClick={onEvent}/>
                </ButtonColumn>
            </Section>
            <Slider>
                <ProgressBar onChange={onEvent} color={borderColor} leftText="Res." rightTexts={["4", "8", "16", "32"]}/>
            </Slider>   
        </Right>
    )
}