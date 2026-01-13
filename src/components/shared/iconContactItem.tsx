import { Item, ItemActions, ItemContent, ItemDescription } from "../ui/item";

export interface IconContactItemProps {
    content: string,
    children: React.ReactNode,
    type?: string,
    alturl?: string,
}

function getUrl(content: string, type?: string): string {
    let href = content;
    switch (type) {
        case "email":
            href = `mailto:${content}`;
            break;
        case "phone":
            href = `tel:${content}`;
            break;
        case "address":
            href = "#";
            break;
        default:
            href = content;
            break;
    }
    return href;
}

export function IconContactItem({ type, content, alturl, children }: IconContactItemProps) {
    const url = alturl ? alturl : getUrl(content, type);
    return (
        < Item size="sm" >
            <ItemActions>
                {children}
            </ItemActions>
            <a
                href={url}
            >
                <ItemContent>
                    <ItemDescription className="text-white" >{content}</ItemDescription>
                </ItemContent>
            </a>
        </Item >
    )
}