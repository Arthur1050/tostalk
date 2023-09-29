import MenuPerfil from '@/components/molecules/menuPerfil/MenuPerfil'
import ChatList from '@/components/organisms/chatList/ChatList'
import ChatTalk from '@/components/organisms/chatTalk/ChatTalk'
import { io } from "socket.io-client";

export const socket = io('http://localhost:3001');

export default function Home() {
  return (
    <main>
      <div>
        <MenuPerfil />
        <ChatList />
      </div>
      <ChatTalk />
    </main>
  )
}
