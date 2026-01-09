/** biome-ignore-all assist/source/organizeImports: sfds */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headerMenuItems } from "@/lib/config/headerMenuItems";
import { SiteHeader } from "@/components/header/siteHeader";
import ContactsBar from "@/components/header/contacts";
import prisma from "@/lib/prisma";
import { SiteContactItem } from "@/lib/types/config";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartProps = { items: headerMenuItems, inCartCount: 0 };
  const contacts = await prisma.siteContacts.findMany() as SiteContactItem[];

  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactsBar {...contacts} />
        <SiteHeader {...cartProps} />
        {children}
      </body>
    </html >
  );
}
