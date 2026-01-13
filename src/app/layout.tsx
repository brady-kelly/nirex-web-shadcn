/** biome-ignore-all assist/source/organizeImports: sfds */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactsBar from "@/components/header/contacts";
import prisma from "@/lib/prisma";
import type { SiteContactItem } from "@/lib/types/config";
import { getHeaderMenuItems } from "@/lib/config/actions/siteConfig";
import { SiteHeader } from "@/components/header/siteHeader";

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

  const headerMenuItems = await getHeaderMenuItems();
  const menuProps = { items: headerMenuItems, inCartCount: 0 };
  const contacts = await prisma.siteContact.findMany() as SiteContactItem[];

  return (
    <html lang="en" >
      <body
        className={`bg-white dark:bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactsBar {...contacts} />
        <SiteHeader {...menuProps} />
        {children}
      </body>
    </html >
  );
}
