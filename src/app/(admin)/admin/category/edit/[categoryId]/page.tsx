/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { CategoryEditor } from "@/components/product/admin/categoryEditor";
import { getCategoryInfo } from "@/lib/products/actions/category";
import { notFound } from "next/navigation";
//import * as util from "node:util";

export default async function CategoryEditPage({ params }: { params: Promise<{ categoryId: string }> }) {
    const resolved = await params;
    const catId = resolved.categoryId;
    const id: number = Number(catId);
    const cat = await getCategoryInfo(id);
    if (!cat)
        notFound();

    return (
        <section>
            <CategoryEditor id={id} name={cat.name} desc={cat.desc ?? undefined} />
        </section>
    );
}