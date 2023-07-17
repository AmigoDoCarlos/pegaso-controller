import React from "react";
import { DimensionValue, FlexAlignType, StyleProp, View, ViewStyle } from "react-native";

interface sectionProps {
    children: JSX.Element | JSX.Element[];
    width?: DimensionValue;
    height?: DimensionValue;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    padding?: DimensionValue;
    margin?: number;
    align?: FlexAlignType;
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    flexDirection?: 'row' | 'column';
}

export default function Section({children, width, height, backgroundColor, borderColor, borderWidth, borderRadius, align, justify, flexDirection, padding, margin}: sectionProps){
    
    const sectionStyle: StyleProp<ViewStyle> = {
        backgroundColor: backgroundColor? backgroundColor : 'black',
        borderColor: borderColor? borderColor : '#AAAAAA',
        borderWidth: borderWidth? borderWidth : 0,
        borderRadius: borderRadius? borderRadius : 20,
        padding: padding? padding : 4,
        margin: margin? margin : 0,
        width: width? width : 'auto',
        height: height? height : 'auto',
        display: 'flex',
        flexDirection: flexDirection? flexDirection : 'column',
        alignItems: align? align : 'center',
        justifyContent: justify? justify : 'center',
    } 

    return (
        <View style={sectionStyle}>
            {children}
        </View>
    )
}