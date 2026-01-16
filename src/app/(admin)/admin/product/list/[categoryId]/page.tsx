import { ProductList } from "@/components/product/productList";
import { productListCols } from "@/components/product/productListCols";
import { getCategoryInfo } from "@/lib/products/actions/category";
import { getProductsForCategory } from "@/lib/products/actions/product";

export default async function ProductListPage({ params }: { params: Promise<{ categoryId: string }> }) {
    const resolved = await params;
    const catId = resolved.categoryId;
    const id: number = Number(catId);
    const cat = await getCategoryInfo(id);
    const products = await getProductsForCategory(id);
    return (
        <div className="container mx-auto py-10">
            <ProductList columns={productListCols} data={products} />
        </div>
    );
}