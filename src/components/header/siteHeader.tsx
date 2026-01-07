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

export interface SiteHeaderProps {
    items: MenuItemDetails[];
    inCartCount: number;
}

export function SiteHeader(props: SiteHeaderProps) {
    const searchFormRef = useRef<HTMLFormElement>(null);
    const handleSearchClick = () => {
        console.log("Header search clicked!");
        setSearchFormVisibility(searchFormRef, true);
    };
    const handleSearchFormBlur = () => {
        setSearchFormVisibility(searchFormRef, false);
    };

    return (
        <header className="flex flex-row justify-between">
            <div className="order-first">
                <HeaderLogo />
            </div>
            <HeaderMenu items={props.items} />
            <div className="order-last">
                <div className="flex items-center text-right gap-2">
                    <div className="indicator">
                        <span className="indicator-item badge badge-primary bg-(--dev-red-background) w-4 h-4 p-1 text-[10px]">
                            {props.inCartCount}
                        </span>
                        <a
                            href={`${appConfig.baseUrl}/cart/`}
                            className="block relative pt-0 pb-0 text-[#373737] transition-all duration-300 ease-in-out delay-0"
                        >
                            <span className="sr-only">Cart Button</span>
                            <button className="btn">
                                <CartIcon />
                            </button>
                        </a>
                    </div>
                    <div className="block relative float-right min-w-8 h-12 pt-1">
                        <button className="btn" onClick={handleSearchClick}>
                            <span className="sr-only">Search Button</span>
                            <SearchIcon className="inline-flex" />
                        </button>
                        <form
                            ref={searchFormRef}
                            id="header-search"
                            role="search"
                            method="get"
                            action={`${appConfig.baseUrl}/`}
                            className="hidden relative top-auto bottom-auto right-auto m-0"
                        >
                            <label onBlur={handleSearchFormBlur}>
                                <span className="sr-only">Search for:</span>
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    name="s"
                                    className="hidden m-0 mt-[3px] w-8 h-8 pl-8 text-[32px] border-solid border-0 border-[#dddddd] bg-[#dddddd] text-[#dddddd] rounded-xs pr-0 [transition: width 400ms ease, background 400ms ease] z-1001"
                                    title="Search for:"
                                />
                            </label>
                            <input type="hidden" value="product" name="post_type" />
                            <input
                                type="submit"
                                value="Search"
                                className="hidden bg-[--dev-red-background] border-none rounded-[3px] text-white p-[11px 24px 11px]"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </header>);
}