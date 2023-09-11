import React from "react";
import AxisButton from "./AxisButton";
import ProgressBar from "../../ProgressBar";
import { Event, useGlobalContext } from "../../../contexts/GlobalContextProvider";
import { ButtonRow, Left, Section, Sliders } from "./LeftSide.style";

interface LeftSideProps {
    borderColor: string;
}

function getSpeedText(speed: number){
    if(speed ===0) return 'mínima';
    if(speed ===1) return 'média';
    return 'máxima'; 
}

export default function LeftSide({borderColor}: LeftSideProps){

    const { setAxis, setSpeed, setLength, setInfoText} = useGlobalContext();

    const handleEvent = (e: Event) => {
        switch(e.type){
            case 'set_axis':
                if(typeof e.value === 'string'){
                    setInfoText(`Junta ${e.value} selecionada.`);
                    setAxis(e.value);
                }
                break;
            case 'set_des':
                if(typeof e.value === 'number'){
                    setInfoText(`Deslocamento ajustado para ${e.value}°.`);
                    setLength(e.value);
                }
                break;
            case 'set_vel':
                if(typeof e.value === 'number'){
                    setInfoText(`Velocidade ajustada para ${getSpeedText(e.value)}.`);
                    setSpeed(e.value);
                }
                break;
        }
    }

    return (
        <Left>
            <Section style={{borderColor}}>
                <ButtonRow>
                    <AxisButton onClick={handleEvent}>BASE</AxisButton>
                    <AxisButton onClick={handleEvent}>A</AxisButton>
                    <AxisButton onClick={handleEvent}>B</AxisButton>
                </ButtonRow>
                <ButtonRow>
                    <AxisButton onClick={handleEvent}>C</AxisButton>
                    <AxisButton onClick={handleEvent}>D</AxisButton>
                    <AxisButton onClick={handleEvent}>E</AxisButton>
                </ButtonRow>
            </Section>
            <Sliders>
                <ProgressBar
                    type="set_vel"
                    onChange={handleEvent}
                    color={borderColor}
                    leftText="Vel."
                    rightTexts={[
                        {value: 0, text: "min."},
                        {value: 1, text: "méd."},
                        {value: 2, text: "máx."}
                    ]}
                />
                <ProgressBar
                    type="set_des"
                    onChange={handleEvent}
                    color={borderColor}
                    leftText="Des."
                    rightTexts={[1, 5, 15, 30, 45, 60, 90]}
                    extraText="°"
                />
            </Sliders>
        </Left>
    )
}