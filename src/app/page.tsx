import ChatItem from '@/components/molecules/chatItem/ChatItem'
import ChatList from '@/components/organisms/chatList/ChatList'
import ChatTalk from '@/components/organisms/chatTalk/ChatTalk'

export default function Home() {
  return (
    <main>
      <ChatList />
      <ChatTalk />
    </main>
  )
}
