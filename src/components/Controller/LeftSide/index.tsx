import React from "react";
import AxisButton from "./AxisButton";
import { ButtonRow, Left, Section, Sliders } from "./LeftSide.style";
import ProgressBar from "../../ProgressBar";

interface LeftSideProps {
    borderColor: string;
    onEvent: (e: string) => void;
}

export default function LeftSide({borderColor, onEvent}: LeftSideProps){
    return (
        <Left>
            <Section style={{borderColor}}>
                <ButtonRow>
                    <AxisButton onClick={onEvent}>BASE</AxisButton>
                    <AxisButton onClick={onEvent}>A</AxisButton>
                    <AxisButton onClick={onEvent}>B</AxisButton>
                </ButtonRow>
                <ButtonRow>
                    <AxisButton onClick={onEvent}>C</AxisButton>
                    <AxisButton onClick={onEvent}>D</AxisButton>
                    <AxisButton onClick={onEvent}>E</AxisButton>
                </ButtonRow>
            </Section>
            <Sliders>
                <ProgressBar onChange={onEvent} color={borderColor} leftText="Vel." rightTexts={["min.", "méd.", "máx."]}/>
                <ProgressBar onChange={onEvent} color={borderColor} leftText="Des." rightTexts={["1°", "5°", "15°", "30°", "45°", "60°", "90°"]}/>
            </Sliders>
        </Left>
    )
}