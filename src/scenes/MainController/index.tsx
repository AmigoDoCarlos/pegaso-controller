import React, { useState } from 'react';
import Section from '../../components/Controller/Section';
import { colors } from '../../colors';
import { SafeAreaView, StatusBar } from 'react-native';
import { Background, BottomSection, ButtonsRow, Left, LeftContainer, Middle, MiddleBottom, MiddleTop, PlayAndLoopRow, Right, UpperSection } from './MainController.style';
import LeftSide from '../../components/Controller/LeftSide';

export default function MainController(){
    
    const [borderColor, setBorderColor] = useState(colors.blue);
    
    return (
        <SafeAreaView>
            <StatusBar hidden />
            <Background>
                <UpperSection>
                    <LeftSide borderColor={borderColor} onAxisButtonClick={() => console.log('love')}/>
                    <Middle>
                        <MiddleTop/>
                        <MiddleBottom/>
                    </Middle>
                    <Right>

                    </Right>
                </UpperSection>
                <BottomSection>
                    <Section backgroundColor={colors.darkGrey} width={'100%'} height={'100%'}>

                    </Section>
                </BottomSection>
            </Background>
        </SafeAreaView>
    )
}