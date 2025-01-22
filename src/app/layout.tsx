import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creambun",
  icons: {
    icon: '/bun.png'
  },
  description: "Creambun is a creative agency that specializes in web development and video editing. We offer a wide range of services to help you bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavbarComponent/>
        {children}
        </body>
    </html>
  );
}
