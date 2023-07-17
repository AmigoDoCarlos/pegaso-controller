import React, { useState } from "react";
import Slider from '@react-native-community/slider';
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../colors";
import { Container, Legend } from "./ProgressBar.style";

interface ProgressBarProps {
    color: string;
    leftText: string;
    rightTexts: string[];
    onChange?: (newValue: string) => void;
}

export default function ProgressBar({color, leftText, rightTexts, onChange}: ProgressBarProps){
    
    const [value, setValue] = useState(() => Math.floor(rightTexts.length / 2));

    const style: StyleProp<ViewStyle> = {
        flex: 1,
        height: 40,
    }

    return (
        <Container>
            <Legend>
                {leftText}
            </Legend>
            <Slider
                style={style}
                step={1}
                value={value}
                minimumValue={0}
                maximumValue={rightTexts.length - 1}
                thumbTintColor={color}
                minimumTrackTintColor={color}
                maximumTrackTintColor={colors.darkWhite}
                onValueChange={(newValue) => {
                    setValue(newValue);
                    onChange && onChange(rightTexts[newValue]);
                }}
            />
            <Legend>
                {rightTexts[value]}
            </Legend>
        </Container>
    )
}