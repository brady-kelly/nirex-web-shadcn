/** biome-ignore-all lint/complexity/useOptionalChain: Later */
"use client"

import * as React from "react"
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

function getWorkingUrl(url?: string): string {
    return url || "#0";
}

export function HeaderMenu({ items }: { items: MenuItemDetails[] }) {
    // TODO: Find hook
    //const isMobile = useIsMobile()
    const isMobile = false;

    return (
        <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex-wrap">
                {items.map((item) => (
                    <NavigationMenuItem key={crypto.randomUUID()}>
                        {item.subItems?.length || 0}
                        <NavigationMenuTrigger>{item.text}</NavigationMenuTrigger>
                        {item.subItems && item.subItems.length > 0 && (
                            <NavigationMenuContent>
                                <ul className="grid w-50 gap-4">
                                    {item.subItems.map((item) => (
                                        <NavigationMenuLink asChild key={crypto.randomUUID()}>
                                            <Link href={getWorkingUrl(item.url)}>{item.text}</Link>
                                        </NavigationMenuLink>
                                    ))}
                                </ul>
                            </NavigationMenuContent>)}
                        {(!item.subItems || item.subItems.length === 0) && (
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href={getWorkingUrl(item.url)}>{item.text}</Link>
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
