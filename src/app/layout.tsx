import type { Metadata } from "next";
import { Amatic_SC } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Menu from "@/stories/Menu/Menu";
// Load the font with the desired configurations
const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
});

import "./globals.css";
import MenuToggle from "@/stories/MenuToggle/MenuToggle";

export const metadata: Metadata = {
  title: "Parusha Pradhan",
  description: "Developer + Illustrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cat.ico" type="image/x-icon"/>
      </head>
      <body  className={amatic.className}>
        <div className="pagewrap">
        <MenuToggle/>
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
// mx-auto max-w-screen-xl  px-5
// xs:text-[16px] md:text-[18px] 