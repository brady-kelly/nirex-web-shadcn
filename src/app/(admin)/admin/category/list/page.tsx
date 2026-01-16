import { CategoryList } from "@/components/product/categoryList";
import { categoryListCols } from "@/components/product/categoryListCols";
import { getAllCategories } from "@/lib/products/actions/category";

export default async function CategoryListPage() {
    const categories = await getAllCategories();
    return (
        <div className="container mx-auto py-10">
            <CategoryList columns={categoryListCols} data={categories} />
        </div>
    );
}