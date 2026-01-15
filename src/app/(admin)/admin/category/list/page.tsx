import { CategoryList, columns } from "@/components/product/categoryList";
import { getAllCategories } from "@/lib/products/actions/category";

export default async function CategoryListPage() {
    const categories = await getAllCategories();
    return (
        <div className="container mx-auto py-10">
            <CategoryList columns={columns} data={categories} />
        </div>
    );
}