import { MsgBoxStyle } from "./style";

interface Props {
    msgText: string
}

export default function MsgBox({
    msgText
}:Props) {
    return(
        <MsgBoxStyle>
            {msgText}
        </MsgBoxStyle>
    )
}