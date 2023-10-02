'use client'
import ChatItem from "@/components/molecules/chatItem/ChatItem";
import { ChatListStyle } from "./style";
import { useContext} from "react";
import { AuthContext } from "@/app/authContext";

export default function ChatList() {
    const [{friends}] = useContext(AuthContext);

    return(
        <ChatListStyle>
            {friends.map( ({username, profile, status}) => 
                <ChatItem status={status} key={username} username={username} profile={profile}/>)
            }
        </ChatListStyle>
    )
}