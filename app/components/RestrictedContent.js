"use client"

import { useSession } from "next-auth/react"

export default function RestrictedContent({ children, fallback }) {
    const { status } = useSession()
    const isLoggedIn = status === 'authenticated';
    const isLoadingAuth = status === 'loading';

    if (isLoadingAuth) {
        return null
    }

    if (!isLoggedIn) {
        return fallback || null
    }

    return <>{children}</>



}
