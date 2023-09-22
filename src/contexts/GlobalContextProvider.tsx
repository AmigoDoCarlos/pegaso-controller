import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { getEndMessage, getStartMessage } from '../lib/commands';
import { INFINITE_LENGTH, SERVER, PORT } from './constants';
import { colors } from '../colors';
import { connections, msgType } from './types';
import SocketConnection from '../lib/socket';

interface GlobalProviderProps {
    children: ReactNode;
}

interface GlobalValues {
    msgReceived: msgType;
    infoText: string[];
    sequence: string[];
    borderColor: string;
    axis: string,
    direction: string,
    speed: number,
    length: number,
    microstep: number,
    connection: connections,
    setInfoText: React.Dispatch<React.SetStateAction<string[]>>,
    setBorderColor: React.Dispatch<React.SetStateAction<string>>,
    setAxis: React.Dispatch<React.SetStateAction<string>>,
    setDirection: React.Dispatch<React.SetStateAction<string>>,
    setSpeed: React.Dispatch<React.SetStateAction<number>>,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    setMicrostep: React.Dispatch<React.SetStateAction<number>>,
}

const initial: GlobalValues = {
    msgReceived: {type: 'info', content: ['aplicativo inicializado.']},
    infoText: ['Bem Vindo(a) ao projeto Pégaso!', 'acesse as configurações para vincular o robô.'],
    sequence: [],
    borderColor: colors.blue,
    axis: 'BASE',
    direction: 'none',
    speed: 1,
    length: 3,
    microstep: 16,
    connection: {server: false, robot: false},
    setInfoText: () => {},
    setBorderColor: () => {},
    setAxis: () => {},
    setDirection: () => {},
    setSpeed: () => {},
    setLength: () => {},
    setMicrostep: () => {},
};

const GlobalContext = createContext<GlobalValues>(initial);

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (typeof context !== 'undefined') {
        return context;
    } else {
        console.log('Global Context cannot be accessed from here.');
    }
}

export default function GlobalProvider(props: GlobalProviderProps) {
    const [msgReceived, setMsgReceived] = useState<msgType>();
    const [infoText, setInfoText] = useState<string[]>(initial.infoText);
    const [sequence, setSequence] = useState<string[]>(initial.sequence);
    const [borderColor, setBorderColor] = useState<string>(initial.borderColor);
    const [axis, setAxis] = useState<GlobalValues['axis']>(initial.axis);
    const [direction, setDirection] = useState<GlobalValues['direction']>(initial.direction);
    const [speed, setSpeed] = useState<GlobalValues['speed']>(initial.speed);
    const [length, setLength] = useState<GlobalValues['length']>(initial.length);
    const [microstep, setMicrostep] = useState<GlobalValues['microstep']>(initial.microstep);

    const [connection, setConnection] = useState<connections>(initial.connection);                  //global (guarda estado de conexão com server e com robô)
    const [connectionWithServer, setConnectionWithServer] = useState<boolean>(() => false);         //local (esse é o trigger do useState acima para o atributo 'server')

    //start-up
    const socket = SocketConnection.getInstance();

    useEffect(() => {
        socket.set('app', {name: 'Pegaso Robot Controller', password: 'some password I have to change later'});
        socket.connect(`${SERVER}:${PORT}`, setConnectionWithServer);
        socket.addEventListener('msg-from-server', (msg: string) => {
            const content: msgType = JSON.parse(msg);
            setMsgReceived(content);
        });
    }, []);


    useEffect(() => {
        if(connectionWithServer){
            socket.sendAppInfo();
            socket.bindRobot();                                                                     
        }
        setConnection((prev) => ({...prev, server: connectionWithServer}));
    }, [connectionWithServer]);


    useEffect(() => {
        if(connection.server){
            if (direction !== 'none') {
                setInfoText(['enviando...']);
                socket.sendMessageToRobot(getStartMessage(direction, axis, length, speed, microstep));
            } else {
                (length === INFINITE_LENGTH) &&
                socket.sendMessageToRobot(getEndMessage());
            }
        } else {
            setInfoText(['Impossível enviar comando:','você não está conectado ao servidor.']);
        }
    }, [direction]);


    useEffect(() => {
        if(msgReceived){
            const received = msgReceived.content[0];
            if(received.includes('sequence-update')){
                const newSeq = received.split('|');
                newSeq.splice(0, 1);
                console.log('nova sequência enviada pelo robô:', newSeq);
                setSequence(newSeq);
            } else {
                switch(msgReceived.type){
                    case 'bind-success': setConnection(prev => ({...prev, robot: true})); break;
                    case 'unbind-success': setConnection(prev => ({...prev, robot: false})); break;
                    case 'bind-error': setConnection(prev => ({...prev, robot: false})); break;
                    case 'bind-recover': 
                        setConnection(prev => ({...prev, robot: true}));
                        socket.set('robot', {
                            name: msgReceived.content[1],
                            password: msgReceived.content[2],
                        });
                    break;
                }
                setInfoText([received]);
            }
        }
    }, [msgReceived]);


    const value: GlobalValues = {
        msgReceived,
        infoText,
        sequence,
        borderColor,
        axis,
        direction,
        speed,
        length,
        microstep,
        connection,
        setInfoText,
        setBorderColor,
        setAxis,
        setDirection,
        setSpeed,
        setLength,
        setMicrostep,
    };

    const { children } = props;

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}
