import MenuPerfil from '@/components/molecules/menuPerfil/MenuPerfil'
import ChatList from '@/components/organisms/chatList/ChatList'
import ChatTalk from '@/components/organisms/chatTalk/ChatTalk'
import './ws'

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
