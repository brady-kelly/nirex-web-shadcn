/** biome-ignore-all assist/source/organizeImports:  */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headerMenuItems } from "@/lib/config/headerMenuItems";
import { SiteHeader } from "@/components/header/siteHeader";
import ContactsBar from "@/components/header/contacts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirex Tech",
  description: "Nirex Tech Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartProps = { items: headerMenuItems, inCartCount: 0 };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactsBar />
        <SiteHeader {...cartProps} />
        {children}
      </body>
    </html>
  );
}
