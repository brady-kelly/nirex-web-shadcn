"use client";

import Image from "next/image";
import type { ProductFeature } from "@/lib/types/product";
import { Check } from "lucide-react";

function getImageSrcPath(imageFilename: string): string {
    return `products/${imageFilename}`;
}

export interface ProductCardProps {
    id: string;
    icon?: React.ReactNode;
    heading: string;
    subHeading: string;
    workingSize?: string;
    packageSize?: string;
    volume?: string;
    packageWeight?: string;
    localPrice: string;
    image?: {
        src: string;
        alt: string;
    };
    features?: ProductFeature[];
}

export function ProductCard({
    id,
    image,
    heading,
    subHeading,
    workingSize,
    packageSize,
    volume,
    packageWeight,
    localPrice,
    features }: ProductCardProps) {
    return (
        <div
            key={id}
            className="group/usecase4 rounded-lg overflow-hidden transition-all duration-300 bg-muted/30 ring-1 ring-foreground/5"
        >
            {/* Card Media */}
            {image && (
                <div className="aspect-[16/10] overflow-hidden">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/usecase4:scale-105"
                    />
                </div>
            )}

            {/* Card Content */}
            <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-lg font-semibold">{heading}</h4>
                </div>

                {subHeading && subHeading.length > 0 && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {subHeading}
                    </p>
                )}

                {subHeading && subHeading.length > 0 && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {subHeading}
                    </p>
                )}

                {workingSize && workingSize.length > 0 && (
                    <p className="text-sm text-foreground/80 mb-1">
                        <span className="font-medium">Working Size:</span> {workingSize}
                    </p>
                )}

                {packageSize && packageSize.length > 0 && (
                    <p className="text-sm text-foreground/80 mb-1">
                        <span className="font-medium">Package Size:</span> {packageSize}
                    </p>
                )}

                {volume && volume.length > 0 && (
                    <p className="text-sm text-foreground/80 mb-1">
                        <span className="font-medium">Volume:</span> {volume}
                    </p>
                )}

                {packageWeight && packageWeight.length > 0 && (
                    <p className="text-sm text-foreground/80 mb-1">
                        <span className="font-medium">Package Weight:</span> {packageWeight}
                    </p>
                )}

                {features && features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {features.map((feature) => (
                            <span
                                key={feature.id}
                                className="inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full bg-foreground/5 text-foreground/70"
                            >
                                <Check className="size-3" />
                                {feature.text}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>)
};