import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export interface ProductCardProps {
    id: string;
    heading: string;
    subHeading?: string;
    workingSize?: string;
    packageSize?: string;
    volume?: string;
    packageWeight?: string;
    localPrice: string;
    image: {
        src: string;
        alt: string;
    };
}

export function ProductCard({
    id,
    heading,
    subHeading,
    workingSize,
    packageSize,
    volume,
    packageWeight,
    localPrice,
    image
}: ProductCardProps) {
    return (
        <Card>
            <CardContent>
                <AspectRatio ratio={16 / 9}>
                    <Image
                        fill
                        src={image.src}
                        alt={image.alt}
                        className="object-contain transition-transform duration-500 group-hover/usecase4:scale-105"
                    />
                </AspectRatio>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}