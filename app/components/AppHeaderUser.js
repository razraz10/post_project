"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link";
import RestrictedContent from "./RestrictedContent";

export default function AppHeaderUser() {

    const { data: session } = useSession();

    function handleLogOut() {
        signOut()
    }

    return (
        <div className='ml-auto flex gap-4'>
            <RestrictedContent fallback={<Link className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm py-1 px-2 rounded ml-auto" href="/signin">signIn</Link>
}>
                <span className="text-white">{session?.user?.name}</span>
                <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white font-medium text-sm py-1 px-2 rounded ml-auto">log out</button>
            </RestrictedContent>
            {/* {
                session ? (
                    <>

                    </>
                ) : (
                )
            } */}

        </div>
    )
}
