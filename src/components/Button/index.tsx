import React from "react";
import { DimensionValue, StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../../colors";

interface buttonProps {
    width?: DimensionValue;
    height?: DimensionValue;
    children: JSX.Element | JSX.Element[];
    onTouch: () => void;
    onTouchEnd?: () => void;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    flex?: number;
    disabled?: boolean;
    fadeWithDisable?: number; 
}

export default function Button({width, height, children, onTouch, onTouchEnd, backgroundColor, borderColor, borderWidth, borderRadius, flex, disabled, fadeWithDisable}: buttonProps){

    const buttonStyle: StyleProp<ViewStyle> = {
        width,
        height,
        minWidth: 40,
        minHeight: 40,
        backgroundColor: backgroundColor? backgroundColor : 'black',
        borderColor: borderColor? borderColor : colors.grey,
        borderWidth: borderWidth? borderWidth : 2,
        borderRadius: borderRadius? borderRadius : 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: flex,
        opacity: (disabled && fadeWithDisable)? 0.4 : 1,
    } 

    const handleTouch = (e: 'start' | 'end') => {
        if(!disabled){
            if(e === "start"){
                return onTouch();
            }
            if(typeof onTouchEnd !== 'undefined'){
                return onTouchEnd();
            } 
        }
    }
    
    return (
        <View style={buttonStyle} onTouchStart={() => handleTouch('start')} onTouchEnd={() => handleTouch('end')}>
            {children}
        </View>
    )
}