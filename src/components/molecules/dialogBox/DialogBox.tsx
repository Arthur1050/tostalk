import MsgBox from "../msgBox/MsgBox";
import { DialogBoxStyle } from "./style";

export default function DialogBox() {
    return(
        <DialogBoxStyle>
            <MsgBox msgText="Mensagem de texto exemplo remetente."/>
            <MsgBox msgText="Mensagem de texto exemplo destinatario."/>
        </DialogBoxStyle>
    )
}