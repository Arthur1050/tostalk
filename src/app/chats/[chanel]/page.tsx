import ChatTalk from "@/components/organisms/chatTalk/ChatTalk";
import ChanelProvider, { ChanelContext } from "./context";
import { Chanel } from "@/types/chatTypes";
import { apiReq } from "@/app/actions";
import "./style.css"

interface Props {
    params: {
        chanel: string
    }
}

export default async function Home({params}:Props) {
    const chanel:Chanel = await apiReq('/data/chanel/', {id: params.chanel}, 'POST')
    return (
        <ChanelProvider value={chanel}>
            <ChatTalk />
        </ChanelProvider>
    )
}