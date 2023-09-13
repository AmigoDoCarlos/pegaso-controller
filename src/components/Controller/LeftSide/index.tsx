import AxisButton from "./AxisButton";
import ProgressBar from "../../ProgressBar";
import { Event, useGlobalContext } from "../../../contexts/GlobalContextProvider";
import { ButtonRow, Left, Section, Sliders } from "./LeftSide.style";
import { INFINITE_LENGTH } from "../../../lib/commands";

interface LeftSideProps {
    borderColor: string;
}

const speeds = [
    {value: 0, text: "mínima"},
    {value: 1, text: "média"},
    {value: 2, text: "máxima"}
]

const lengths = [
    {value: 0, text: "1°"},
    {value: 1, text: "5°"},
    {value: 2, text: "15°"},
    {value: 3, text: "30°"},
    {value: 4, text: "45°"},
    {value: 5, text: "60°"},
    {value: 6, text: "75°"},
    {value: 7, text: "90°"},
    {value: INFINITE_LENGTH, text: "∞"},
]


function getSpeedText(index: number){
    return `Velocidade ajustada para ${speeds[index].text}.`; 
}

function getLengthText(index: number){
    if(index < INFINITE_LENGTH) return [
        `Deslocamento ajustado para ${lengths[index].text}.`
    ];
    return [
        'Deslocamento ajustado para ilimitado.',
        'Mantenha os botões + ou - pressionados para mexer o robô. Solte para parar.'
    ];
}

export default function LeftSide({borderColor}: LeftSideProps){

    const { setAxis, setSpeed, setLength, setInfoText} = useGlobalContext();

    const handleEvent = (e: Event) => {
        switch(e.type){
            case 'set_axis':
                if(typeof e.value === 'string'){
                    setInfoText([`Junta ${e.value} selecionada.`]);
                    setAxis(e.value);
                }
                break;
            case 'set_des':
                if(typeof e.value === 'number'){
                    setInfoText(getLengthText(e.value));
                    setLength(e.value);
                }
                break;
            case 'set_vel':
                if(typeof e.value === 'number'){
                    setInfoText([getSpeedText(e.value)]);
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
                    rightTexts={speeds.map(s => ({
                        value: s.value,
                        text: s.text.substring(0, 3)
                    }))}
                    extraText="."
                />
                <ProgressBar
                    type="set_des"
                    onChange={handleEvent}
                    color={borderColor}
                    leftText="Des."
                    rightTexts={lengths}
                />
            </Sliders>
        </Left>
    )
}