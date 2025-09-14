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
          <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuContent>
        <NavigationMenuTrigger >Home</NavigationMenuTrigger>
        <NavigationMenuLink asChild>
          <a className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/">
                  <div className="mt-4 mb-2 text-lg font-medium">
                      Tabula Rasa: Something New
                    </div>
          </a>
          </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuContent>
        <NavigationMenuTrigger>Mission Page</NavigationMenuTrigger>
        <NavigationMenuLink asChild><Link href={"/mission_page"}>Mission Page</Link></NavigationMenuLink>
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
