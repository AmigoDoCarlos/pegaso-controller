import { createContext, ReactNode, useContext, useState, useEffect, useRef } from 'react';
import { colors } from '../colors';
import SocketConnection from '../lib/socket';
import { INFINITE_LENGTH, getEndMessage, getStartMessage } from '../lib/commands';
export interface Event {
    type: 'set_axis' | 'set_vel' | 'set_des' | 'set_res' | 'move_axis' | 'stop_axis';
    value: string | number;
}

interface GlobalProviderProps {
    children: ReactNode;
}

interface GlobalValues {
    infoText: string[];
    borderColor: string;
    axis: string,
    direction: string,
    speed: number,
    length: number,
    microstep: number,
    moving: boolean,
    setMoving: React.Dispatch<React.SetStateAction<boolean>>,
    setInfoText: React.Dispatch<React.SetStateAction<string[]>>,
    setBorderColor: React.Dispatch<React.SetStateAction<string>>,
    setAxis: React.Dispatch<React.SetStateAction<string>>,
    setDirection: React.Dispatch<React.SetStateAction<string>>,
    setSpeed: React.Dispatch<React.SetStateAction<number>>,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    setMicrostep: React.Dispatch<React.SetStateAction<number>>,
}

const initial: GlobalValues = {
    infoText: ['Bem Vindo(a) ao projeto Pégaso!'],
    borderColor: colors.blue,
    axis: 'BASE',
    direction: 'none',
    speed: 1,
    length: 30,
    microstep: 16,
    moving: false,
    setMoving: () => {},
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
    const [msgFromRobot, setMsgFromRobot] = useState<string>('');
    const [infoText, setInfoText] = useState<string[]>(initial.infoText);
    const [borderColor, setBorderColor] = useState<string>(initial.borderColor);
    const [axis, setAxis] = useState<GlobalValues['axis']>(initial.axis);
    const [direction, setDirection] = useState<GlobalValues['direction']>(initial.direction);
    const [speed, setSpeed] = useState<GlobalValues['speed']>(initial.speed);
    const [length, setLength] = useState<GlobalValues['length']>(initial.length);
    const [microstep, setMicrostep] = useState<GlobalValues['microstep']>(initial.microstep);
    const [moving, setMoving] = useState<GlobalValues['moving']>(initial.moving);

    //start-up
    const socket = SocketConnection.getInstance();
    useEffect(() => {
        socket.connect('http://192.168.0.132:2222');
        socket.addEventListener('robot-msg', (msg) => {
            setMsgFromRobot(msg);
            setInfoText([msg]);
        });
    }, []);

    useEffect(() => {
        if(direction !== 'none'){
            setInfoText(['enviando...']);
            socket.emit('robot-msg', getStartMessage(direction, axis, length, speed, microstep));
        } else {
            (length === INFINITE_LENGTH) && socket.emit('robot-msg', getEndMessage());
        }
    }, [direction]);

    const value: GlobalValues = {
        infoText,
        borderColor,
        axis,
        direction,
        speed,
        length,
        microstep,
        moving,
        setMoving,
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
