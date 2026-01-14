import { ProductEditor } from "@/components/product/admin/productEditor";
import { getAllCategories } from "@/lib/products/actions/data";

export default async function ProductEditPage({ params }: { params: { slug: string } }) {

    const categories = await getAllCategories();
    const categoryId: number = Number(params.slug);

    //const gridProps = buildProductGridProps(categoryId, catInfo.name, products);
    return (
        // <ProductEditor />
    )
}