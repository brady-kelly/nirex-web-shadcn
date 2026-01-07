import {
    Building,
    Check,
    Cloud,
    GraduationCap,
    HeartPulse,
    Landmark,
    ShoppingCart,
} from "lucide-react";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { ProductFeature } from "./productGrid";

interface ProductCardProps {
    id: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
    image?: {
        src: string;
        alt: string;
    };
    features?: ProductFeature[];
}

export function ProductCard({ id, image, icon, title, description, features }: ProductCardProps) {
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
                    {icon && (
                        <span className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover/usecase4:bg-primary group-hover/usecase4:text-background">
                            {icon}
                        </span>
                    )}
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {description}
                </p>

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