import React from "react";
import Button from "../../../../../components/Button";
import { colors } from "../../../../../colors";
import { eventType } from "../../../../../contexts/types";
import { Image, ImageSourcePropType } from "react-native";
import { ButtonContainer } from "./MoveButton.style";
import { useGlobalContext } from "../../../../../contexts/GlobalContextProvider";

interface MoveButtonProps {
    name: string;
    icon: ImageSourcePropType;
    onTouch: (e: eventType) => void;
    onRelease: (e: eventType) => void;
}

export default function MoveButton({name, icon, onTouch, onRelease}:MoveButtonProps){
    const { direction, borderColor } = useGlobalContext();
    const color = (direction === name)? borderColor : colors.grey; 
    return (
        <ButtonContainer>
            <Button
                borderColor={color}
                flex={1}
                onTouch={() => onTouch({type: 'move_axis', value: name})}
                onTouchEnd={() => onRelease({type: 'stop_axis', value: name})}
            >
                <Image source={icon} style={{width: 20, height: 20}}/>
            </Button>
        </ButtonContainer>
    );
}