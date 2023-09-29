'use client'
import { redirect } from "next/navigation"
import { apiReq } from "./actions"
import { useContext, useEffect } from "react";

export default function Home() {
    redirect('/auth');
    return(
        <div>

        </div>
    )
}