import React from "react";
import playIcon from "../../../../assets/icons/play.png";
import Button from "../../../Button";
import { Image } from "react-native";
import { Event } from "../../../../contexts/GlobalContextProvider";
import { ButtonContainer } from "./PlayButton.style";

interface MoveButtonProps {
    onClick: (e: Event) => void;
}

export default function PlayButton({onClick}: MoveButtonProps){
    return (
        <ButtonContainer>
            <Button onTouch={() => onClick({type: 'move_axis', value: 'play'})} width="100%" height={100}>
                <Image source={playIcon} style={{width: 30, height: 30}} />
            </Button>
        </ButtonContainer>
    )
}