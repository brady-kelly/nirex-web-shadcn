import { ProductEditor } from "@/components/product/admin/productEditor";
import { getAllCategories } from "@/lib/products/actions/category";
import { getProduct } from "@/lib/products/actions/product";
import { notFound } from "next/navigation";
import * as util from "node:util";

export default async function ProductEditPage({ params }: { params: Promise<{ productId: string }> }) {

    const resolved = await params;
    const productId = resolved.productId;
    const categories = await getAllCategories();
    const id: number = Number(productId);
    const prod = await getProduct(id);
    const price = Number(prod?.localPrice);
    if (!prod)
        notFound();

    return (
        <section>
            <ProductEditor
                id={id}
                name={prod.name}
                categoryId={prod.categoryId}
                categories={categories}
                localPrice={price}
                workingSize={prod.workingSize ?? undefined}
                packageSize={prod.packageSize ?? undefined}
                volume={prod.volume ?? undefined}
            />
        </section>
    );
}