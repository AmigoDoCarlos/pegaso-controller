import React from "react";
import Button from "../../../../../components/Button";
import { Text } from "react-native";
import { colors } from "../../../../../colors";
import { eventType } from "../../../../../contexts/types";
import { useGlobalContext } from "../../../../../contexts/GlobalContextProvider";

interface axisButtonProps {
    children: string;
    onClick: (e: eventType) => void;
    disabled: boolean;
}

export default function AxisButton({children, onClick, disabled}: axisButtonProps){
    const { axis, borderColor } = useGlobalContext();
    const color = (axis === children)? borderColor : colors.grey; 
    
    return (
        <Button disabled={disabled} borderColor={color} backgroundColor={colors.black} width={'30%'} height={80} onTouch={() => onClick({type: "set_axis", value: children})}>
            <Text style={{color: colors.darkWhite, fontSize: 18}}>
                {children}
            </Text>
        </Button>
    )
}