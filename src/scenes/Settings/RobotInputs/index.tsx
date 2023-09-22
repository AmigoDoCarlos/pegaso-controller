import { useEffect, useRef, useState } from "react";
import { BindButton, ButtonText, Auxiliary, InputContainer, InputText, InputTitle, InputView, Content, Title } from "./RobotInput.style";
import { colors } from "../../../colors";
import { Loader } from 'react-native-feather';
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import SocketConnection from "../../../lib/socket";
import * as Animatable from 'react-native-animatable';

type auxiliaryText = {
    color: string,
    msg: string,
}

export default function RobotInput(){
    const { msgReceived, connection } = useGlobalContext();
    const [auxText, setAuxText] = useState<auxiliaryText>(() => ({color: colors.red, msg: ''}));
    const [waiting, setWaiting] = useState<boolean>(false);
    const [allInputsHaveText, setAllInputsHaveText] = useState<boolean>(false);
    const nameInput = useRef<string>('');
    const passwordInput = useRef<string>('');

    const socket = SocketConnection.getInstance();

    useEffect(() => {
        const name = (socket.get('robot'))? socket.get('robot').name : '';
        const password = (socket.get('robot'))? socket.get('robot').password : '';
        nameInput.current = name;
        passwordInput.current = name;
        setAllInputsHaveText(
            (name.length > 0) && 
            (password.length > 0)
        );
    }, []);

    useEffect(() => {
        if((msgReceived) && (msgReceived.type !== 'robot')){
            let textColor = '';
            switch(msgReceived.type){
                case 'unbind-error':
                case 'bind-error': textColor = colors.red; break;
                case 'bind-success': textColor = colors.green; break;
                default: textColor = colors.darkWhite;
            }
            setAuxText({color: textColor, msg: msgReceived.content.at(0)});
            setWaiting(false);
        }
    }, [msgReceived]);

    const toggleBind = () => {
        if(!allInputsHaveText) return;
        if(!connection.robot){   
           socket.bindRobot({name: nameInput.current, password: passwordInput.current});
        } else {
           socket.unbindRobot(); 
        }
        setWaiting(true);
    }

    const updateTextInput = (newText: string, ofWhat: 'name' | 'password') => {
        const trimmedText = newText.trim();
        if(ofWhat === 'name'){
            nameInput.current = trimmedText;
        } else {
            passwordInput.current = trimmedText;
        }
        setAuxText((prev) => ({...prev, msg: ''}));
        setAllInputsHaveText(
            (nameInput.current.length > 0) && 
            (passwordInput.current.length > 0)
        );
    }

    const getButtonStyle = () => {
        if(connection.robot){
            return {
                backgroundColor: colors.pink,
            }
        } else {
            return {
                backgroundColor: (allInputsHaveText)? colors.blue : colors.grey,
            }
        } 
    }

    return (
        <InputContainer>
          <Content>
          <Title>
            {connection.robot? 'Robô vinculado:' : 'Dados do robô a ser vinculado'}
          </Title>
            <InputView>
                <InputTitle>Nome:</InputTitle>
                <InputText
                    value={nameInput.current}
                    editable={!connection.robot}
                    onChangeText={(e) => updateTextInput(e, 'name')}
                />
            </InputView>
            <InputView>
                <InputTitle>Senha:</InputTitle>
                <InputText 
                    value={passwordInput.current}
                    editable={!connection.robot}
                    secureTextEntry
                    onChangeText={(e) => updateTextInput(e, 'password')}
                />
            </InputView>
          </Content>
          <Auxiliary style={{color: auxText.color}}>
            {auxText.msg}
          </Auxiliary>
          <BindButton
            style={getButtonStyle()}
            onTouchStart={toggleBind}
          >
            {waiting ? (
                <Animatable.View animation={'rotate'} duration={2000} iterationCount={'infinite'} useNativeDriver>
                    <Loader color={colors.white} />
                </Animatable.View>
            ) : (
                <ButtonText>
                  {connection.robot? 'desvincular' : 'vincular'}
                </ButtonText>
            )}
          </BindButton>
        </InputContainer>
    )
}