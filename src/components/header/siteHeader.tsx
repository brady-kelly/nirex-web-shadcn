/** biome-ignore-all lint/a11y/useButtonType: sdsa */
/** biome-ignore-all assist/source/organizeImports: lazy */
/** biome-ignore-all lint/a11y/useSemanticElements: dssad */

"use client";

import HeaderLogo from "./headerLogo";
import type { MenuItemDetails } from "../shared/menuItem";
import { PublicHeaderMenu } from "./publicHeaderMenu";
import { CartButton } from "./cartButton";
import { SearchButton } from "./searchButton";

export interface SiteHeaderProps {
    items: MenuItemDetails[];
    inCartCount: number;
    loggedIn: boolean
}

export function SiteHeader(props: SiteHeaderProps) {
    return (
        <header className="flex flex-row justify-between py-3 px-3">
            <div className="order-first">
                <HeaderLogo />
            </div>
            <div className="pt-10">
                <PublicHeaderMenu items={props.items} loggedIn={props.loggedIn} />
            </div>
            <div className="order-last flex flex-row justify-between pt-10">
                <CartButton inCartCount={props.inCartCount} />
                <SearchButton />
            </div>
        </header>);
}