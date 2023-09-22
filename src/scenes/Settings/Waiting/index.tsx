import { Loader } from 'react-native-feather';
import { colors } from '../../../colors';
import { MainWaitingText } from './Waiting.style';
import * as Animatable from 'react-native-animatable';

interface waitingProps {
    text: string;
}

export default function Waiting({text}: waitingProps){
    return (
        <>
            <Animatable.View animation={'rotate'} duration={2000} iterationCount={'infinite'} useNativeDriver>
                <Loader style={{margin: 20}} color={colors.darkWhite} width={45} height={45}/>
            </Animatable.View>
            <MainWaitingText>
                {text}
            </MainWaitingText>
            <MainWaitingText>
                Por favor aguarde.
            </MainWaitingText>
        </>
    )
}