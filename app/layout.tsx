import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-sm font-medium tracking-wide">Tabula Rasa</Link>
            <div className="flex items-center gap-6 text-sm">
              <Link className="hover:underline underline-offset-4" href="/">Home</Link>
              <Link className="hover:underline underline-offset-4" href="/bulletin">Bulletin</Link>
              <Link className="hover:underline underline-offset-4" href="/stats">Statistics</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
