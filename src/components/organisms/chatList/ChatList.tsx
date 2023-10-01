'use client'
import ChatItem from "@/components/molecules/chatItem/ChatItem";
import { ChatListStyle } from "./style";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/app/authContext";
import { socket } from "@/app/chats/ws";
import { UserStatus } from "@/types/userTypes";

export default function ChatList() {
    const [data] = useContext(AuthContext);
    const [friends, setFriends] = useState(data.friends)

    useEffect(() => {
        socket.on("user-status", (users:UserStatus[]) => {
            setFriends(friends => {
                console.log(friends)
                users.forEach(user => {
                    const index = friends.findIndex(el => el.username == user.username);
                    friends[index] && (friends[index].status = user.status)
                })
                return [...friends]
            })
        })
    }, [])

    return(
        <ChatListStyle>
            {friends.map( ({username, profile, status}) => 
                <ChatItem status={status} key={username} username={username} profile={profile}/>)
            }
        </ChatListStyle>
    )
}