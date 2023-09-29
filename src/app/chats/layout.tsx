import { redirect } from "next/navigation";
import { apiReq } from "../actions";
import UserProvider from "../authContext";

export default async function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const data:{response: {sub: string}} = await apiReq('/auth/validate/');

    if (!data?.response) {
        redirect('/')
    }

    return (
        <UserProvider value={{username: data.response.sub}}>
            {children}
        </UserProvider>
    )
}