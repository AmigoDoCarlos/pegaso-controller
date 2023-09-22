import { Image, ImageSourcePropType } from "react-native";
import { eventType } from "../../../../../contexts/types";
import { Background, ButtonText } from "./SequenceButton.style";

interface SequenceButtonProps {
    children: string;
    type: eventType['type'];
    icon: ImageSourcePropType;
    onTouch: (e: eventType) => void;
}

export default function SequenceButton({children, type, icon, onTouch}: SequenceButtonProps){
    return (
        <Background onPress={() => onTouch({type, value: ''})}>
            <Image source={icon} style={{width: 30, height: 30, objectFit: 'contain'}}/>
            <ButtonText>
                {children}
            </ButtonText>
        </Background>
    )
}