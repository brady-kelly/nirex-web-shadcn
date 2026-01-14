import { ProductEditor } from "@/components/product/admin/productEditor";
import { getAllCategories, getProduct } from "@/lib/products/actions/data";

export default async function ProductEditPage({ params }: { params: { slug: string } }) {

    const categories = await getAllCategories();
    const id: number = Number(params.slug);
    const prod = await getProduct(id);
    if (!prod)
        return;

    //const gridProps = buildProductGridProps(categoryId, catInfo.name, products);
    return (
        <ProductEditor
            productId={id.toString()}
            name={prod.name}
            categoryId={prod.categoryId.toString()}
            categories={categories}
            localPrice={prod.localPrice.toString()}
        />
    )