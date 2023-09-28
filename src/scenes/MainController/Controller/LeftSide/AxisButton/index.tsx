import React from "react";
import Button from "../../../../../components/Button";
import { Text } from "react-native";
import { colors } from "../../../../../colors";
import { eventType } from "../../../../../contexts/types";
import { useGlobalContext } from "../../../../../contexts/GlobalContextProvider";

interface axisButtonProps {
    value: number;
    children: string;
    onClick: (e: eventType) => void;
    disabled: boolean;
}

export default function AxisButton({value, children, onClick, disabled}: axisButtonProps){
    const { joint, borderColor, setInfoText } = useGlobalContext();
    const color = (joint === value)? borderColor : colors.grey; 
    
    const handleClick = (e: eventType) => {
        setInfoText(prev => [prev[0], `Junta ${children} selecionada.`]);
        onClick(e);
    }

    return (
        <Button disabled={disabled} borderColor={color} backgroundColor={colors.black} width={'30%'} height={80} onTouch={() => handleClick({type: "set_joint", value})}>
            <Text style={{color: colors.darkWhite, fontSize: 18}}>
                {children}
            </Text>
        </Button>
    )
}