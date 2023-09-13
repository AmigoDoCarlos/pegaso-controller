const HEADER = 'ANDROID'
export const INFINITE_LENGTH = 8;   //maior índice da barra de ajuste

//tipos de comando:
//REACT_sentido_junta_deslocamento_velocidade_resolução
//ou
//REACT_START_sentido_junta_velocidade_resolução
//ou
//REACT_END
//ou
//REACT_RESET

export const getStartMessage = (direction: string, joint: string, length: number, speed: number, microstep: number) => {
    return (length < INFINITE_LENGTH)
    ?`${HEADER}_${direction}_${joint}_${length}_${speed}_${microstep}`
    :`${HEADER}_START_${direction}_${joint}_${speed}_${microstep}`;
}

export const getEndMessage = () => {
    return `${HEADER}_END`;
}

export const getResetMessage = () => {
    return `${HEADER}_RESET`;
}