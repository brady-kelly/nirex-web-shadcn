import { ProductEditor } from "@/components/product/admin/productEditor";

export default async function ProductEditPage({ params }: { params: { slug: string } }) {
    const categoryId: number = Number(params.slug);

    //const gridProps = buildProductGridProps(categoryId, catInfo.name, products);
    return (
        // <ProductEditor />
    )
}