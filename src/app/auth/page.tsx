import FormLogin from "@/components/molecules/formLogin/FormLogin";
import logo from "@/lib/assets/svg_logo.svg"
import Image from "next/image";
import './style.css';
import { MainButton } from "@/components/atoms/buttons/MainButton";
import IntroSystem from "@/components/molecules/introSystem/IntroSystem";

export default function Home() {
    
    return(
        <>
        <main className="flex-grow-0 flex items-center gap-4 h-fit p-8 m-auto">
            <Image className="w-[34rem]" src={logo} alt="logo.svg"/>
            <div>
                <div className="mb-4">
                    <p className="text-3xl">Login</p>
                    <span className="text-sm font-semibold text-gray-300">Insira suas credenciais.</span>
                </div>
                <FormLogin />
                <p className="text-xs text-center mt-6">
                    Não possui conta? 
                    <span className="text-purple-500 font-bold cursor-pointer">Registrar-se!</span>
                </p>
                {/* <div className="flex items-center gap-2 mt-3">
                    <div className="h-[1px] bg-zinc-500 flex-grow"/>
                    <span className="text-sm">ou</span>
                    <div className="h-[1px] bg-zinc-500 flex-grow"/>
                </div> */}
            </div>
        </main>
        </>
    )
}