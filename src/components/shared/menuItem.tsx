// A IU agnostic structure of info about a menu item.
/** biome-ignore-all lint/suspicious/noArrayIndexKey: Later */

"use client";

export interface MenuItemDetails {
    text: string;
    url?: string;
    subItems?: MenuItemDetails[];
}

// A IU targeted structure of implementation info about a menu item defined by a `MenuItemDetails` type object.
export interface MenuItemProps {
    item: MenuItemDetails;
    depth: number;
}

function getWorkingUrl(urlText?: string): string {
    return urlText ? urlText : "#0";
}

const MenuItemY: React.FC<MenuItemProps> = ({ item, depth }) => {
    const keyPrefix = `depth-${depth}-${item.text}`;
    return (
        <>
            <li>
                <a href={getWorkingUrl(item.url)}>{item.text}</a>
            </li>
            {item.subItems && item.subItems.length > 0 && (
                <ul className="p-2 ml-4">
                    {item.subItems.map((item, index) => (
                        <MenuItemY key={`${keyPrefix}-${index}`} item={item} depth={0} />
                    ))}
                </ul>
            )}
        </>
    );
};

const MenuItemX: React.FC<MenuItemProps> = ({ item, depth }) => {
    const keyPrefix = `depth-${depth}-${item.text}`;
    if (item.subItems && item.subItems.length > 0) {
        return (
            <li>
                <details>
                    <summary className="whitespace-nowrap">{item.text}</summary>
                    <ul className="p-2">
                        {item.subItems.map((item, index) => (
                            <MenuItemX key={`${keyPrefix}-${index}`} item={item} depth={0} />
                        ))}
                    </ul>
                </details>
            </li>
        );
    } else {
        return (
            <li>
                <a href={getWorkingUrl(item.url)} className="whitespace-nowrap">
                    {item.text}
                </a>
            </li>
        );
    }
};

export { MenuItemX, MenuItemY };
