import { Background } from "./Bottom.style";
import { eventType } from "../../../../contexts/types";
import SequenceButton from "./SequenceButton";
import addPosIcon from '../../../../assets/icons/addPos.png';
import rmvPosIcon from '../../../../assets/icons/delPos.png';
import goToPosIcon from '../../../../assets/icons/goToPos.png';
import loadSeqIcon from '../../../../assets/icons/load.png';
import storeSeqIcon from '../../../../assets/icons/save.png';

interface sectionProps {
}

export default function Bottom({}: sectionProps){

    const handleEvent = (e: eventType) => {

    }

    return (
        <Background>
            <SequenceButton type="add_pos" icon={addPosIcon} onTouch={handleEvent}>
                Adicionar
            </SequenceButton>
            <SequenceButton type="rmv_pos" icon={rmvPosIcon} onTouch={handleEvent}>
                Remover
            </SequenceButton>
            <SequenceButton type="goto_pos" icon={goToPosIcon} onTouch={handleEvent}>
                Mover para
            </SequenceButton>
            <SequenceButton type="load_seq" icon={loadSeqIcon} onTouch={handleEvent}>
                Carregar
            </SequenceButton>
            <SequenceButton type="store_seq" icon={storeSeqIcon} onTouch={handleEvent}>
                Salvar
            </SequenceButton>
        </Background>
    )
}