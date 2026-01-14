import { ur } from "zod/v4/locales";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export interface ProductImageProps {
    url: string,
    alt?: string,
    aspect?: string
}

function getRatio(aspect?: string): number {
    if (aspect) {
        const parts = aspect.split('/');
        if (parts.length === 2 && parts[0].length > 0 && parts[1].length > 0) {
            return Number(parts[0].trim()) / Number(parts[1].trim());
        }
    }
    return 16 / 9;
}

export function ProductImage({ url, alt, aspect }: ProductImageProps) {
    return (<AspectRatio ratio={getRatio(aspect)}>
        <Image
            fill
            src={url}
            alt={alt || "product image"}
            className="object-contain transition-transform duration-500 group-hover/usecase4:scale-105"
        />
    </AspectRatio>);
}