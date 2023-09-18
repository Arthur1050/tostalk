import MsgBox from "../msgBox/MsgBox";
import { DialogBoxStyle } from "./style";

export default function DialogBox() {
    return(
        <DialogBoxStyle>
            <MsgBox author={2}
                name="Destinario Qualquer" 
                msgText="Mensagem de texto exemplo destinario."
                temp="01:56"
            />
            <MsgBox author={1}
                name="Arthur Tosta" 
                msgText="Mensagem de texto exemplo remetente."
                temp="01:58"
            />
        </DialogBoxStyle>
    )
}