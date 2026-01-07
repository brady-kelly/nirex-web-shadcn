/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

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
import { MenuItemDetails } from "../shared/menuItem"
import { get } from "http"

function getWorkingUrl(urlText?: string): string {
    return urlText ? urlText : "#0";
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
                        <NavigationMenuTrigger>{item.text}</NavigationMenuTrigger>
                        {item.subItems && item.subItems.length > 0 && (
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
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
