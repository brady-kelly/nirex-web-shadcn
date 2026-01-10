/** biome-ignore-all lint/correctness/noUnusedImports:  */
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
import { Button } from "../ui/button";

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
                <div className="h-40">
                    <div className="my-6 text-sm">
                        <p className="mb-1">{heading}</p>
                        {subHeading && <p>{subHeading}</p>}
                    </div>
                    <div className="my-1.5">
                        {workingSize && <div>Working Size: {workingSize}</div>}
                        {packageSize && <div>Package Size: {packageSize}</div>}
                        {volume && <div>Volume: {volume}</div>}
                        {packageWeight && <div>Package Weight: {packageWeight}</div>}
                    </div>
                </div>
                <div className="ml-3">
                    {localPrice}
                </div>
                <br />
                <div>
                    <Button variant="outline" size="sm">ADD TO CART</Button>
                </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    );
}