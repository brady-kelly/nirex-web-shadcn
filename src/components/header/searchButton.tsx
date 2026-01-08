/** biome-ignore-all lint/a11y/useSemanticElements: <explanation> */
import { setSearchFormVisibility } from "@/lib/search";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { appConfig } from "@/lib/config/appConfig";

export function SearchButton() {
    const searchFormRef = useRef<HTMLFormElement>(null);
    const handleSearchClick = () => {
        console.log("Header search clicked!");
        setSearchFormVisibility(searchFormRef, true);
    };
    const handleSearchFormBlur = () => {
        setSearchFormVisibility(searchFormRef, false);
    };
    return (
        <div>
            <Button variant="ghost" size="lg" onClick={handleSearchClick}>
                <Search />
            </Button>
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
    );
}