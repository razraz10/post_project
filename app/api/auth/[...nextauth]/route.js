import NextAuth from "next-auth"
import googleProvider from 'next-auth/providers/google'
export const authOption = {
    providers:[
        googleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: '/signin'
    }
}
const handler = NextAuth(authOption)

export {handler as GET, handler as POST}