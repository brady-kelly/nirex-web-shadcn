/** biome-ignore-all lint/complexity/useOptionalChain: Later */
"use client"

import Link from "next/link"

//import { useIsMobile } from "@/hooks/use-mobile"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import type { MenuItemDetails } from "../shared/menuItem"
import { ImageContactItem } from "../shared/imageContactItem";
import { LoginMenuLink } from "../shared/loginMenuLink";

function getWorkingUrl(url?: string): string {
    return url || "#0";
}

export interface PublicHeaderMenuProps {
    items: MenuItemDetails[];
    loggedIn: boolean;
}

export function PublicHeaderMenu({ items, loggedIn }: PublicHeaderMenuProps) {
    // TODO: Find hook
    //const isMobile = useIsMobile()
    const isMobile = false;

    return (
        <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex-wrap">
                {items.map((item) => (
                    <NavigationMenuItem key={crypto.randomUUID()}>
                        {item.subItems?.length ? (
                            <>
                                <NavigationMenuTrigger className="bg-surface">{item.text}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-50 gap-4">
                                        {item.subItems.map((item) => (
                                            <NavigationMenuLink asChild key={crypto.randomUUID()}>
                                                <Link href={getWorkingUrl(item.url)}>{item.text}</Link>
                                            </NavigationMenuLink>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>) : (
                            <NavigationMenuLink asChild>
                                <Link href={getWorkingUrl(item.url)}>{item.text}</Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
                <LoginMenuLink loggedIn={loggedIn} isAdmin={false} />
            </NavigationMenuList>
        </NavigationMenu>
    )
}
