import React, { useState } from "react";
import Slider from '@react-native-community/slider';
import { StyleProp, ViewStyle } from "react-native";
import { colors } from "../../colors";
import { Container, Legend } from "./ProgressBar.style";
import { Event } from "../../contexts/GlobalContextProvider";

type Alias = {
   value: number,
   text: string, 
}
interface ProgressBarProps {
    color: string;
    type: Event['type'];
    leftText: string;
    rightTexts: string[] | number[] | Alias[];
    extraText?: string;
    onChange?: (e: Event) => void;
}

function get(info: 'value' | 'text', what: string | number | Alias){
    if(typeof what === 'number' || typeof what === 'string'){
        return what;
    }
    return (info === 'value')? what.value : what.text;
}

export default function ProgressBar({color, type, leftText, rightTexts, extraText, onChange}: ProgressBarProps){
    
    const [value, setValue] = useState(() => Math.floor(rightTexts.length / 2));

    const style: StyleProp<ViewStyle> = {
        flex: 1,
        height: 40,
    }

    const rightText = () => {
        const item = rightTexts.at(value);
        if(item){
            const text = get('text', item);
            const trailingText = extraText? extraText : '';
            return `${text}${trailingText}`;
        }
        return '';
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
                    onChange && onChange({type: type, value: get('value', rightTexts[newValue])});
                }}
            />
            <Legend>
                {rightText()}
            </Legend>
        </Container>
    )
}