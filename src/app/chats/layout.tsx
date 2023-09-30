import { redirect } from "next/navigation";
import { apiReq } from "../actions";
import UserProvider from "../authContext";
import { User } from "@/types/userTypes";

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
            {children}
        </UserProvider>
    )
}