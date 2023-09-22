import { SafeAreaView, StatusBar } from "react-native";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { useNavigate } from "react-router-native";
import { ArrowLeft } from "react-native-feather";
import { colors } from "../../colors";
import { BackContainer, Background, Content, GoBackButton, Header, HeaderText, MainContainer, StatusContainer, StatusLight, StatusText } from "./Settings.style";
import Waiting from "./Waiting";
import RobotInput from "./RobotInputs";

type status = {
    color: string;
    text: string;
}

type statusOptions = {
    connected: status;
    disconnected: status;
}

const server: statusOptions = {
    disconnected: {
        color: colors.red,
        text: 'servidor desconectado',
    },
    connected: {
        color: colors.green,
        text: 'servidor conectado',
    }
}

const robot: statusOptions = {
    disconnected: {
        color: colors.red,
        text: 'nenhum robô vinculado',
    },
    connected: {
        color: colors.green,
        text: 'vinculado ao robô ',
    }
}

export default function Settings(){

    const { connection } = useGlobalContext();
    const serverStatus = (connection.server)? server.connected : server.disconnected;
    const robotStatus = (connection.server && connection.robot)? robot.connected : robot.disconnected;    
    const waitingText = 'Conectando aos servidores Pégaso...';
    const navigate = useNavigate();

    return (
        <SafeAreaView>
            <StatusBar hidden />
            <Background>
                <Header>
                    <GoBackButton onPress={() => navigate('/controller')}>
                        <ArrowLeft color={colors.darkWhite} width={30} height={30}/>
                    </GoBackButton>
                    <HeaderText>
                        Configurações
                    </HeaderText>
                </Header>
                <Content>
                    <BackContainer>
                        <StatusContainer>
                            <StatusLight style={{backgroundColor: serverStatus.color}}/>
                            <StatusText>{serverStatus.text}</StatusText>
                        </StatusContainer>
                        <StatusContainer>
                            <StatusLight style={{backgroundColor: robotStatus.color}}/>
                            <StatusText>{robotStatus.text}</StatusText>
                        </StatusContainer>
                        <MainContainer>
                            { (connection.server)
                                ? <RobotInput/>
                                : <Waiting text={waitingText}/>
                            }
                        </MainContainer>
                    </BackContainer>
                </Content>
            </Background>
        </SafeAreaView>
    )
}