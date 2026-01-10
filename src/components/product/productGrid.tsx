"use client";

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
    columns: 2 | 3 | 4;
    className?: string;
}

export function ProductGrid({
    heading,
    description,
    items,
    columns = 3
}: ProductGridProps) {
    const getColumnClasses = () => {
        // TODO: Revise this Shit.
        switch (columns) {
            case 2:
                return "grid grid-cols-2";
            case 4:
                return "grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3";
            default:
                return "grid grid-cols-3 sm:grid-cols-2";
        }
    };

    return (
        <section>
            <div className="mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="my-6">
                    <div className="ml-3">
                        {heading && (
                            <h2 className="ml-3 text-2xl md:text-4xl font-semibold text-balance max-w-4xl">
                                {heading}
                            </h2>
                        )}
                        {description && (
                            <p className="ml-3 mt-4 text-base sm:text-lg text-muted-foreground text-balance max-w-3x">
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-3 gap-6">
                    {items.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
