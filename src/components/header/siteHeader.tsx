
import { useRef } from "react";
import { setSearchFormVisibility } from "@/lib/search";
import HeaderLogo from "./headerLogo";

export function SiteHeader() {
    const searchFormRef = useRef<HTMLFormElement>(null);
    const handleSearchClick = () => {
        console.log("Header search clicked!");
        setSearchFormVisibility(searchFormRef, true);
    };
    const handleSearchFormBlur = () => {
        setSearchFormVisibility(searchFormRef, false);
    };

    return (
        <header>
            <HeaderLogo />
        </header>);
}