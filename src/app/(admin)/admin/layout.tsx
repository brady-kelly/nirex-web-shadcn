import { auth } from "@/lib/auth/auth.server";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import "../../globals.css";
import { getAdminMenuItems } from "@/lib/config/actions/siteConfig";
import { AdminHeaderMenu } from "@/components/header/adminHeaderMenu";
import { getUser } from "@/lib/auth/actions/shared/session";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const user = await getUser();
    // if (user?.role !== "ADMIN") {
    //     console.log("User not admin!");
    //     redirect("/");
    // }

    const adminMenuItems = await getAdminMenuItems();
    const menuProps = { items: adminMenuItems };
    return (
        <html lang="en" >
            <body
                className={`bg-surface dark:bg-primary text-black dark:text-surface ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <header className="flex justify-center">
                    <AdminHeaderMenu {...menuProps} />
                </header>
                <main className="px-11 py-5">
                    {children}
                </main>
            </body>
        </html >
    );
}
