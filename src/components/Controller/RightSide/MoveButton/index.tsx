import React from "react";
import Button from "../../../Button";
import { colors } from "../../../../colors";
import { Image, ImageSourcePropType } from "react-native";
import { ButtonContainer } from "./MoveButton.style";

interface MoveButtonProps {
    name: string;
    icon: ImageSourcePropType;
    onTouch: (e: string) => void;
    onRelease: (e: string) => void;
}

export default function MoveButton({name, icon, onTouch, onRelease}:MoveButtonProps){
    return (
        <ButtonContainer>
            <Button backgroundColor={colors.darkGrey} flex={1} onTouch={() => onTouch(name)} onTouchEnd={() => onRelease(name + ' released')}>
                <Image source={icon} style={{width: 20, height: 20}}/>
            </Button>
        </ButtonContainer>
    );
}