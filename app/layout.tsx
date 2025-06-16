import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeButton from "@/components/DarkModeButton";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mr.Lee's | Personal Portfolio |",
  description: "Mr.Lee (Libeesh) is a frontend React[Next.js] developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#62c5d6]`}>
        <div className="bg-pink-400 absolute top-[0em] right-0 h-[12.25rem] w-full rounded-full blur-[8rem]"></div>
        <div></div>
        {children}
        <DarkModeButton />
      </body>
    </html>
  );
}
