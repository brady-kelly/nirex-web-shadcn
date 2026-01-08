/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/useSemanticElements: <explanation> */

"use client";

import { useRef } from "react";
import { ShoppingCart as CartIcon, Search as SearchIcon } from "lucide-react";
import { setSearchFormVisibility } from "@/lib/search";
import HeaderLogo from "./headerLogo";
import HeaderMenuOld from "./headerMenuOld";
import type { MenuItemDetails } from "../shared/menuItem";
import { appConfig } from "@/lib/config/appConfig";
import { HeaderMenu } from "./headerMenu";
import { HeaderButtons } from "./headerButtons";
import { CartButton } from "./cartButton";
import { SearchButton } from "./searchButton";

export interface SiteHeaderProps {
    items: MenuItemDetails[];
    inCartCount: number;
}

export function SiteHeader(props: SiteHeaderProps) {
    return (
        <header className="flex flex-row justify-between px-3">
            <div className="order-first">
                <HeaderLogo />
            </div>
            <div className="pt-10">
                <HeaderMenu items={props.items} />
            </div>
            <div className="order-last flex flex-row justify-between pt-10">
                <CartButton inCartCount={props.inCartCount} />
                <SearchButton />
            </div>
        </header>);
}