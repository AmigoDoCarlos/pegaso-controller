import React from "react";
import settingsIcon from '../../../assets/icons/settings.png';
import { Bottom, Icon, MiddleView, Screen, ScreenBar, Title, Top } from "./Middle.style";
import { ImageSourcePropType } from "react-native";

interface middleProps {
    leftSideIcon: ImageSourcePropType;
    onEvent: (e: string) => void;
}

export default function Middle({leftSideIcon, onEvent }: middleProps){
    return (
        <MiddleView>
            <Top>
                <Screen>
                    <ScreenBar>
                        <Icon source={leftSideIcon}/>
                        <Title>
                            Central de Comando
                        </Title>
                        <Icon source={settingsIcon}/>
                    </ScreenBar>
                </Screen>
            </Top>
            <Bottom/>
        </MiddleView>
    )
}