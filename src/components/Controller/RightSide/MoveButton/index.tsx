import React from "react";
import Button from "../../../Button";
import { colors } from "../../../../colors";
import { Event } from "../../../../contexts/GlobalContextProvider";
import { Image, ImageSourcePropType } from "react-native";
import { ButtonContainer } from "./MoveButton.style";

interface MoveButtonProps {
    name: string;
    icon: ImageSourcePropType;
    onTouch: (e: Event) => void;
    onRelease: (e: Event) => void;
}

export default function MoveButton({name, icon, onTouch, onRelease}:MoveButtonProps){
    return (
        <ButtonContainer>
            <Button
                backgroundColor={colors.darkGrey}
                flex={1}
                onTouch={() => onTouch({type: 'move_axis', value: name})}
                onTouchEnd={() => onRelease({type: 'stop_axis', value: name})}
            >
                <Image source={icon} style={{width: 20, height: 20}}/>
            </Button>
        </ButtonContainer>
    );
}