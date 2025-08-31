import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper"; //  wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tezos Jamia Hamdard",
  description: "Official Website of Tezos Jamia Hamdard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/icon1.png" />
        <title>Tezos Jamia Hamdard</title>
      </head>
      <body className="bg-black">
        {/* Navbar is now conditionally rendered */}
        <NavbarWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}