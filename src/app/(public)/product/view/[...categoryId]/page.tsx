import { ProductGrid } from "@/components/product/productGrid";
import { getUser } from "@/lib/auth/actions/shared/session";
import { getCategoryInfo, getProductsForCategory } from "@/lib/products/actions/data";
import { buildProductGridProps } from "@/lib/products/props";

export default async function ProductGridPage({ params }: { params: { slug: string } }) {
    const categoryId: number = Number(params.slug);
    const catInfo = await getCategoryInfo(categoryId);
    if (!catInfo) {
        return (<div>Not found</div>);
    }
    const products = await getProductsForCategory(categoryId);
    const user = await getUser();
    const isAdmin = user?.role === "ADMIN";

    const gridProps = buildProductGridProps(categoryId, catInfo.name, products);
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
}