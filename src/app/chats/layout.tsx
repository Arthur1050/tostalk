import { redirect } from "next/navigation";
import { apiReq } from "../actions";
import UserProvider from "../authContext";
import { User } from "@/types/userTypes";
import MenuPerfil from "@/components/molecules/menuPerfil/MenuPerfil";
import ChatList from "@/components/organisms/chatList/ChatList";
import './ws'

export default async function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const data:{response: {sub: string}} = await apiReq('/auth/validate/');
    
    if (!data?.response) {
      redirect('/')
    }
    
    const dataUser:User = await apiReq('/data/user/');

    return (
        <UserProvider value={dataUser}>
            <main>
              <div className="flex flex-col">
                <MenuPerfil />
                <ChatList />
              </div>
              {children}
            </main>
        </UserProvider>
    )
}