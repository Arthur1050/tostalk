import ChatItem from '@/components/molecules/chatItem/ChatItem'
import MenuPerfil from '@/components/molecules/menuPerfil/MenuPerfil'
import ChatList from '@/components/organisms/chatList/ChatList'
import ChatTalk from '@/components/organisms/chatTalk/ChatTalk'

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
