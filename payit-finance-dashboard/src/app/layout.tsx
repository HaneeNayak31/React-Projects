import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinDash - Personal Finance",
  description: "Experience the future of personal finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <div className="flex min-h-screen bg-black text-white relative">
            <Sidebar />
            <main className="flex-1 w-full md:pl-64 pb-20 md:pb-0 overflow-y-auto overflow-x-hidden">
                {children}
            </main>
            <MobileNav />
        </div>
      </body>
    </html>
  );
}
