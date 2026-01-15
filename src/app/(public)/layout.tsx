/** biome-ignore-all assist/source/organizeImports: sfds */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ContactsBar from "@/components/header/contacts";
import prisma from "@/lib/prisma";
import type { SiteContactItem } from "@/lib/config/contactItem";
import { getHeaderMenuItems } from "@/lib/config/actions/siteConfig";
import { SiteHeader } from "@/components/header/siteHeader";
import { getSession } from "@/lib/auth/actions/session";
//import { cookies } from "next/headers";

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

  //const cookieStore = await cookies();
  const session = await getSession();
  console.log(JSON.stringify(session));
  const headerMenuItems = await getHeaderMenuItems();
  const headerProps = { items: headerMenuItems, inCartCount: 0, loggedIn: !!session };
  const contacts = await prisma.siteContact.findMany() as SiteContactItem[];

  return (
    <html lang="en" >
      <body
        className={`bg-surface dark:bg-primary text-black dark:text-sur ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactsBar {...contacts} />
        <SiteHeader {...headerProps} />
        <main>
          {children}
        </main>
      </body>
    </html >
  );
}
