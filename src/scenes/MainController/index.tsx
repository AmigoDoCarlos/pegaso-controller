import LeftSide from '../../components/Controller/LeftSide';
import RightSide from '../../components/Controller/RightSide';
import Section from '../../components/Controller/Section';
import Middle from '../../components/Controller/Middle';
import cartesianIcon from '../../assets/icons/cartesian.png';
import { colors } from '../../colors';
import { SafeAreaView, StatusBar } from 'react-native';
import { Background, BottomSection, UpperSection } from './MainController.style';
import { useGlobalContext } from '../../contexts/GlobalContextProvider';

export default function MainController(){
    const { borderColor } = useGlobalContext();

    return (
        <SafeAreaView>
            <StatusBar hidden />
            <Background>
                <UpperSection>
                    <LeftSide borderColor={borderColor}/>
                    <Middle leftSideIcon={cartesianIcon}/>
                    <RightSide borderColor={borderColor}/>
                </UpperSection>
                <BottomSection>
                    <Section backgroundColor={colors.darkGrey} width={'100%'} height={'100%'}>
                    </Section>
                </BottomSection>
            </Background>
        </SafeAreaView>
    )
}