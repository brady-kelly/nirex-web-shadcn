"use client";

import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/authClient";

export interface LoginMenuLinkProps {
    loggedIn: boolean;
    isAdmin: boolean;
}

export function LoginMenuLink({ loggedIn, isAdmin }: LoginMenuLinkProps) {
    const router = useRouter();

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    if (isAdmin) {
                        router.push("/login");
                    }
                    router.refresh();
                },
            },
        });
    };
    // let link = (<Link href="/login">Log In</Link>);

    // if (loggedIn) {
    //     link = (<Link href="#" onClick={handleLogout}></Link>);
    // }
    if (loggedIn) {
        return (
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href="#" onClick={handleLogout}>Log Out</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link href="/login">Log In</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}