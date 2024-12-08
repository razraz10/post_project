import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import  SessionProvider from "@/app/components/SessionProvider";
import { getServerSession } from "next-auth";
import { AuthOptions, authOption } from "@/app/api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  
  icons:{
    icon:`/Lfavicon.ico`
  }
};



export default async function RootLayout({ children }) {

  const session = await getServerSession(authOption)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>

        
        <Header/>
        <main className="max-w-5xl mx-auto py-6 px-5">
          
          {children}
        </main>
        </SessionProvider>
      </body>
    </html>
  );
}
