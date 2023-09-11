import React from "react";
import settingsIcon from '../../../assets/icons/settings.png';
import { Bottom, Icon, InfoText, MiddleView, Screen, ScreenBar, Title, Top } from "./Middle.style";
import { ImageSourcePropType } from "react-native";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";

interface middleProps {
    leftSideIcon: ImageSourcePropType;
}

export default function Middle({leftSideIcon}: middleProps){
    const { infoText } = useGlobalContext();

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
                    <InfoText>
                        {infoText}
                    </InfoText>
                </Screen>
            </Top>
            <Bottom/>
        </MiddleView>
    )
}