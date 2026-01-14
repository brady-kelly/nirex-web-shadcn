import { auth } from "@/lib/auth/auth.server";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

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
        redirect("/");
    }
    return (
        <html lang="en" >
            <body
                className={`bg-white dark:bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html >
    );
}
