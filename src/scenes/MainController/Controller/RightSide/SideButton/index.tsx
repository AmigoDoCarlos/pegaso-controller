import React from "react";
import Button from "../../../../../components/Button";
import { DimensionValue, Image, ImageSourcePropType } from "react-native";
import { ButtonContainer } from "./SideButton.style";
import { eventType } from "../../../../../contexts/types";

interface MoveButtonProps {
    onClick: (e: eventType) => void;
    height?: DimensionValue;
    width?: DimensionValue;
    value: string; 
    icon: ImageSourcePropType;
}

export default function SideButton({onClick, icon, value, width, height}: MoveButtonProps){
    return (
        <ButtonContainer>
            <Button onTouch={() => onClick({type: 'move_joint', value})} width={width?? "100%"} height={height?? 100}>
                <Image source={icon} style={{width: '40%', height: '40%'}} />
            </Button>
        </ButtonContainer>
    )
}