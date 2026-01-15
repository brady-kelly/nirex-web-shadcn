import { auth } from "@/lib/auth/auth.server";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import "../../globals.css";

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
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session?.user.role !== "ADMIN") {
        console.log("User not admin!");
        redirect("/");
    }
    return (
        <html lang="en" >
            <body
                className={`bg-surface dark:bg-primary text-black dark:text-surface ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main className="px-11 py-5">
                    {children}
                </main>
            </body>
        </html >
    );
}
