import React from "react";
import { DimensionValue, StyleProp, View, ViewStyle } from "react-native";

interface buttonProps {
    width: DimensionValue;
    height: DimensionValue;
    children: JSX.Element | JSX.Element[];
    onTouch: () => void;
    onTouchEnd?: () => void;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    flex?: number;
}

export default function Button({width, height, children, onTouch, onTouchEnd, backgroundColor, borderColor, borderWidth, borderRadius, flex}: buttonProps){

    const buttonStyle: StyleProp<ViewStyle> = {
        width,
        height,
        minWidth: 40,
        minHeight: 40,
        backgroundColor: backgroundColor? backgroundColor : 'black',
        borderColor: borderColor? borderColor : '#AAAAAA',
        borderWidth: borderWidth? borderWidth : 2,
        borderRadius: borderRadius? borderRadius : 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: flex,
    } 

    const touchEnd = () => {
        if(typeof onTouchEnd !== 'undefined'){
            onTouchEnd();
        } 
    }
    
    return (
        <View style={buttonStyle} onTouchStart={onTouch} onTouchEnd={touchEnd}>
            {children}
        </View>
    )
}