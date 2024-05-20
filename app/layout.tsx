import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Tracker",
  description: "Created by RAKS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-gray-100">
        <body className="h-full">
        <Header/>
        {children}
        </body>
        {/* <Footer/> */}
    </html>
  );
}
