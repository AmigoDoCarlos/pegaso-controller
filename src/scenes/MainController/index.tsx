import React, { useState } from 'react';
import LeftSide from '../../components/Controller/LeftSide';
import RightSide from '../../components/Controller/RightSide';
import Section from '../../components/Controller/Section';
import Middle from '../../components/Controller/Middle';
import cartesianIcon from '../../assets/icons/cartesian.png';
import { colors } from '../../colors';
import { SafeAreaView, StatusBar } from 'react-native';
import { Background, BottomSection, UpperSection } from './MainController.style';


export default function MainController(){
    
    const [borderColor, setBorderColor] = useState(() => colors.blue);
    
    const log = (msg: string) => {
        console.log("event:", msg);
        setBorderColor((previous) => {
            switch(previous){
                case colors.blue: return colors.red;
                case colors.red: return colors.green;
                default: return colors.blue;
            }
        });       
    }

    return (
        <SafeAreaView>
            <StatusBar hidden />
            <Background>
                <UpperSection>
                    <LeftSide borderColor={borderColor} onEvent={log}/>
                    <Middle leftSideIcon={cartesianIcon} onEvent={log}/>
                    <RightSide borderColor={borderColor} onEvent={log}/>
                </UpperSection>
                <BottomSection>
                    <Section backgroundColor={colors.darkGrey} width={'100%'} height={'100%'}>
                    </Section>
                </BottomSection>
            </Background>
        </SafeAreaView>
    )
}