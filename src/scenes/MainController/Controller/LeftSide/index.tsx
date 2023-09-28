import AxisButton from "./AxisButton";
import ProgressBar from "../../../../components/ProgressBar";
import { useGlobalContext } from "../../../../contexts/GlobalContextProvider";
import { ButtonRow, Left, Section, Sliders } from "./LeftSide.style";
import { INFINITE_LENGTH } from "../../../../contexts/constants";
import { eventType } from "../../../../contexts/types";

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

    const { setJoint, setSpeed, setLength, setInfoText, direction} = useGlobalContext();

    const handleEvent = (e: eventType) => {
        switch(e.type){
            case 'set_joint':
                if(typeof e.value === 'number'){
                    setJoint(e.value);
                }
                break;
            case 'set_des':
                if(typeof e.value === 'number'){
                    setInfoText(prev => [prev[0], ...getLengthText(e.value as number)]);
                    setLength(e.value);
                }
                break;
            case 'set_vel':
                if(typeof e.value === 'number'){
                    setInfoText(prev => [prev[0], getSpeedText(e.value as number)]);
                    setSpeed(e.value);
                }
                break;
        }
    }

    const isDisabled = (direction !== 'none');

    return (
        <Left>
            <Section style={{borderColor}}>
                <ButtonRow>
                    <AxisButton value={0} onClick={handleEvent} disabled={isDisabled}>BASE</AxisButton>
                    <AxisButton value={1} onClick={handleEvent} disabled={isDisabled}>A</AxisButton>
                    <AxisButton value={2} onClick={handleEvent} disabled={isDisabled}>B</AxisButton>
                </ButtonRow>
                <ButtonRow>
                    <AxisButton value={3} onClick={handleEvent} disabled={isDisabled}>C</AxisButton>
                    <AxisButton value={4} onClick={handleEvent} disabled={isDisabled}>D</AxisButton>
                    <AxisButton value={5} onClick={handleEvent} disabled={isDisabled}>E</AxisButton>
                </ButtonRow>
            </Section>
            <Sliders>
                <ProgressBar
                    disabled={isDisabled}
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
                    disabled={isDisabled}
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