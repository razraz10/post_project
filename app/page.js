import Image from "next/image";

export const metadata = {
  title: "Home page",
  description: "Home page description",
  icons:{
    icon:`/Hfavicon.ico`
  }
};



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>home</div>
    </main>
  );
}
