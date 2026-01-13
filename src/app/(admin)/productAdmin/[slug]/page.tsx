import { ProductGrid } from "@/components/product/productGrid";
import { getSession } from "@/lib/auth/actions/session";
import { getAllCategoriesWithProducts } from "@/lib/products/actions/data";
import { buildProductGridProps } from "@/lib/products/actions/props";

export async function ProductEditPage() {
    const categories = await getAllCategoriesWithProducts();
    const session = await getSession();
    const isAdmin = session?.user.role === "ADMIN";
    return (
        <main>
            {categories.map((cat) => {
                const gridProps = buildProductGridProps(cat.id, cat.name, cat.products);
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
            })
            }
        </main >
    );
}