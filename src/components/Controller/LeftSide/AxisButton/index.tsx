import React from "react";
import Button from "../../../Button";
import { Text } from "react-native";
import { colors } from "../../../../colors";

interface axisButtonProps {
    children: string;
    onClick: (axis: string) => void;
}

export default function AxisButton({children, onClick}: axisButtonProps){
    return (
        <Button backgroundColor={colors.darkGrey} width={'30%'} height={80} onTouch={() => onClick(children)}>
            <Text style={{color: colors.darkWhite, fontSize: 18}}>
                {children}
            </Text>
        </Button>
    )
}