import { redirect } from "next/navigation";
import { apiReq } from "../actions";
import UserProvider from "../authContext";
import { User } from "@/types/userTypes";
import './ws'
import NotifyProvider from "../notifyContext";
import NotifyMsg from "@/components/molecules/notifyMsg/NotifyMsg";
import OnlineToast from "@/components/molecules/onlineToast/OnlineToast";
import SideMenu from "@/components/organisms/sideMenu/SideMenu";

import "./style.css"

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
          <NotifyProvider value={null as any}>
              <OnlineToast />
              <main>
                <SideMenu /> 
                {children}
              </main>
              <NotifyMsg />
          </NotifyProvider>
        </UserProvider>
    )
}