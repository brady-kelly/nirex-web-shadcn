import { ProductGrid } from "@/components/product/productGrid";
import { getAllCategoriesWithProducts, getProductGridCardProps } from "@/lib/data/products";

export default async function Home() {

  const categories = await getAllCategoriesWithProducts();

  return (
    <main>
      {
        categories.map((cat) => (
          <ProductGrid
            key={cat.id}
            id={cat.id.toString()}
            heading={cat.name}
            description={cat.desc || ""}
            items={getProductGridCardProps(cat.products)}
            columns={3}
          />
        ))
      }
    </main >
  );
}
