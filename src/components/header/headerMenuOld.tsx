/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import HamburgerButton from "../shared/hamburgerButton";
import { type MenuItemDetails, MenuItemX, MenuItemY } from "../shared/menuItem";

export default function HeaderMenuOld({ items }: { items: MenuItemDetails[] }) {
    return (
        <div className="navbar p-2">
            <div className="justify-start w-1/3">
                <div className="dropdown">
                    <HamburgerButton />
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {items.map((item, index) => (
                            <MenuItemY key={`top-level-${index}`} item={item} depth={0} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="items-center shrink-0 hidden lg:flex">
                <ul className="justify-center menu menu-horizontal px-1 z-99999">
                    {items.map((item, index) => (
                        <MenuItemX key={`top-level-${index}`} item={item} depth={0} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
