import { ImageSourcePropType, Image } from "react-native";
import { eventType } from "../../../../../contexts/types";
import { Button } from "./PositionButton.style";
import { colors } from "../../../../../colors";

interface PositionButtonProps {
    color?: string;
    type: eventType['type'];
    icon: ImageSourcePropType;
    onTouch: (e: eventType) => void;
}

export default function PositionButton({color, type, icon, onTouch}: PositionButtonProps){
    return (
        <Button style={{borderColor: (color)?? colors.grey}} onPress={() => onTouch({type, value: ''})}>
            <Image source={icon} style={{width: 40, height: 20, objectFit: 'contain'}}/>
        </Button>
    )
}
