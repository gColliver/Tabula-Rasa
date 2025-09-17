import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tabula Rasa",
  description: "A fresh start",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#1e1e1e] min-h-screen w-screen flex flex-col items-center justify-center snap-y snap-mandatory">
          <NavigationMenu className=" fixed top-0.5">
  <NavigationMenuList >
    <NavigationMenuItem className="w-max bg-[#1e1e1e]">
      <NavigationMenuTrigger >Home</NavigationMenuTrigger>
      <NavigationMenuContent className="w-max">
        <NavigationMenuLink>
          <NavigationMenuLink className=" w-max" >
            <Link href={"/"}>
                      Tabula Rasa: Something New
              </Link>
          </NavigationMenuLink>
          </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Mission Page</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink ><Link href={"/mission_page"}>Mission Page</Link></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        {children}
        </div>
      </body>
    </html>
  );
}
