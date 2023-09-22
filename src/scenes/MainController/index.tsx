import { colors } from '../../colors';
import { SafeAreaView, StatusBar } from 'react-native';
import { useGlobalContext } from '../../contexts/GlobalContextProvider';
import LeftSide from './Controller/LeftSide';
import RightSide from './Controller/RightSide';
import Bottom from './Controller/Bottom';
import Middle from './Controller/Middle';
import cartesianIcon from '../../assets/icons/cartesian.png';
import { Background, BottomSection, UpperSection } from './MainController.style';

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
                    <Bottom />
                </BottomSection>
            </Background>
        </SafeAreaView>
    )
}