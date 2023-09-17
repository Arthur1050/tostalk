import MsgBox from "@/components/molecules/msgArea/msgArea";
import { ChatTalkStyle } from "./style";
import HeaderChat from "@/components/molecules/headerChat/HeaderChat";
import DialogArea from "@/components/molecules/dialogBox/DialogBox";

export default function ChatTalk() {
    return(
        <ChatTalkStyle>
            <HeaderChat />
            <DialogArea />
            <MsgBox />
        </ChatTalkStyle>
    )
}