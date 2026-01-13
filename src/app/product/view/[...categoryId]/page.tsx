import { ProductGrid } from "@/components/product/productGrid";
import { getProductsForCategory } from "@/lib/products/actions/data";
import { buildProductGridProps } from "@/lib/products/actions/props";

export async function ProductGridPage({ params }: { params: { slug: string } }) {
    const categoryId: number = Number(params.slug);
    const products = await getProductsForCategory(categoryId);

    const gridProps = buildProductGridProps(products);
    return (
        <ProductGrid
            key={gridProps.id}
            id={gridProps.id}
            heading={gridProps.heading}
            description={gridProps.description}
            items={gridProps.items}
            columns={gridProps.columns}
        />
    )
