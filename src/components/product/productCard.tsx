/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client";

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "../ui/button";
import { LinkAsButton } from "../shared/linkAsButton";
import { ProductImage } from "./productImage";

export interface ProductCardProps {
    productId: string;
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
    showEdit: boolean
}

function getEditLink(productid: string) {
    return `productAdmin/${productid}`;
}

export function ProductCard({
    productId,
    heading,
    subHeading,
    workingSize,
    packageSize,
    volume,
    packageWeight,
    localPrice,
    image,
    showEdit = false
}: ProductCardProps) {
    return (
        <Card>
            <CardContent>
                {showEdit && (
                    <LinkAsButton href={getEditLink(productId)} text="Edit" />
                )}
                <ProductImage url={image.src} alt={image.alt} aspect="16/9" />
                <div className="h-36">
                    <div className="my-6 text-sm">
                        <p className="mb-1">{heading}</p>
                        {subHeading && <p>{subHeading}</p>}
                    </div>
                    <div className="my-1.5 text-sm">
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