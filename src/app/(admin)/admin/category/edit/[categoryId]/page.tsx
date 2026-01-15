import { CategoryEditor } from "@/components/product/admin/categoryEditor";
import { getAllCategories, getCategoryInfo } from "@/lib/products/actions/product";
import { notFound } from "next/navigation";

export async function CategoryEditPage({ params }: { params: Promise<{ categoryId: string }> }) {
    const resolved = await params;
    const catId = resolved.categoryId;
    const id: number = Number(catId);
    const cat = await getCategoryInfo(id);
    if (!cat)
        notFound();

    return (
        <section>
            <CategoryEditor id={catId} name={cat.name} desc={cat.desc ?? undefined} />
        </section>
    );
}