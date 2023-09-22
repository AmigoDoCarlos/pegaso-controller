import { Image, ImageSourcePropType } from "react-native";
import { eventType } from "../../../../../contexts/types";
import { Background, ButtonText } from "./BottomButton.style";
import { useGlobalContext } from "../../../../../contexts/GlobalContextProvider";

interface bottomButtonProps {
    children: string;
    type: eventType['type'];
    icon: ImageSourcePropType;
    onTouch: (e: eventType) => void;
}

export default function BottomButton({children, type, icon, onTouch}: bottomButtonProps){
    const { direction } = useGlobalContext();

    return (
        <Background disabled={(direction !== 'none')} onPress={() => onTouch({type, value: children})}>
            <Image source={icon} style={{width: 35, height: 25, objectFit: 'contain'}}/>
            <ButtonText>
                {children}
            </ButtonText>
        </Background>
    )
}