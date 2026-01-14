import { ProductEditor } from "@/components/product/admin/productEditor";
import { getAllCategories, getProduct } from "@/lib/products/actions/data";
import { notFound } from "next/navigation";
import * as util from "node:util";

export default async function ProductEditPage({ params }: { params: Promise<{ productId: string }> }) {

    const resolved = await params;
    console.log(util.inspect(resolved, { depth: null }));
    const productId = resolved.productId;
    const categories = await getAllCategories();
    const id: number = Number(productId);
    const prod = await getProduct(id);
    if (!prod)
        notFound();

    return (
        <ProductEditor
            productId={id.toString()}
            name={prod.name}
            categoryId={prod.categoryId.toString()}
            categories={categories}
            localPrice={prod.localPrice.toString()}
        />
    );
}