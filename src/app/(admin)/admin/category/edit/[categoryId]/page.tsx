import { CategoryEditor } from "@/components/product/admin/categoryEditor";
import { getCategoryInfo } from "@/lib/products/actions/product";
import { notFound } from "next/navigation";
//import * as util from "node:util";

export default async function CategoryEditPage({ params }: { params: Promise<{ categoryId: string }> }) {
    const resolved = await params;
    //console.log(util.inspect(resolved, { depth: null }));
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