import React from "react";
import AxisButton from "./AxisButton";
import { ButtonRow, Left, Section, Sliders } from "./LeftSide.style";
import ProgressBar from "../../ProgressBar";

interface LeftSideProps {
    borderColor: string;
    onAxisButtonClick: (axis: string) => void;
}

export default function LeftSide({borderColor, onAxisButtonClick}: LeftSideProps){
    return (
        <Left>
            <Section style={{borderColor}}>
                <ButtonRow>
                    <AxisButton onClick={() => onAxisButtonClick('BASE')}>BASE</AxisButton>
                    <AxisButton onClick={() => onAxisButtonClick('A')}>A</AxisButton>
                    <AxisButton onClick={() => onAxisButtonClick('B')}>B</AxisButton>
                </ButtonRow>
                <ButtonRow>
                    <AxisButton onClick={() => onAxisButtonClick('C')}>C</AxisButton>
                    <AxisButton onClick={() => onAxisButtonClick('D')}>D</AxisButton>
                    <AxisButton onClick={() => onAxisButtonClick('E')}>E</AxisButton>
                </ButtonRow>
            </Section>
            <Sliders>
                <ProgressBar onChange={() => {}} color={borderColor} leftText="Vel." rightTexts={["min.", "méd.", "máx."]}/>
                <ProgressBar onChange={() => {}} color={borderColor} leftText="Des." rightTexts={["1°", "5°", "15°", "30°", "45°", "60°", "90°"]}/>
            </Sliders>
        </Left>
    )
}