"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProductCard, type ProductCardProps } from "./productCard";
export interface ProductGridProps {
    id: string
    badge?: {
        label: string;
        variant?: "default" | "secondary" | "outline";
    };
    heading?: string;
    description?: string;
    items: ProductCardProps[];
    columns?: 2 | 3 | 4;
    className?: string;
}

export function ProductGrid({
    badge,
    heading,
    description,
    items,
    columns = 3,
    className,
}: ProductGridProps) {
    const getColumnClasses = () => {
        switch (columns) {
            case 2:
                return "md:grid-cols-2";
            case 4:
                return "sm:grid-cols-2 lg:grid-cols-4";
            default:
                return "sm:grid-cols-2 lg:grid-cols-3";
        }
    };

    return (
        <section className={cn("py-2.5 md:py-5", className)}>
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    {badge?.label && (
                        <div className="mb-6 flex justify-center">
                            <Badge variant={badge.variant ?? "secondary"}>
                                {badge.label}
                            </Badge>
                        </div>
                    )}
                    {heading && (
                        <h2 className="text-2xl md:text-4xl font-semibold text-balance max-w-4xl mx-auto">
                            {heading}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>

                {/* Grid Cards */}
                <div className={cn("grid gap-6", getColumnClasses())}>
                    {items.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
