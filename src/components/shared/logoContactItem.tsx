import { Item, ItemMedia } from "../ui/item";
import Image from "next/image";

export interface LogoContactItemProps {
    url: string,
    type: string,
    logoSrc: string,
}

export function LogoContactItem({ url, type, logoSrc }: LogoContactItemProps) {
    const title = `${type} Link`;
    const alt = `${type} Logo`;
    const src = `/icons/${logoSrc}`;

    return (<Item size="sm">
        <ItemMedia>
            <a href={url} title={title}>
                <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                    className="aspect-square w-full object-cover"
                ></Image>
            </a>
        </ItemMedia>
    </Item>);
}