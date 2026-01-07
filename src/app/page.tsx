import { ProductGrid } from "@/components/product/productGrid";
import { getProductGridProps, loadAllProductCategories } from "@/lib/jsonData";

export default async function Home() {

  const categories = await loadAllProductCategories();
  const prodPromise = categories.map(async category => await getProductGridProps(category));
  const prods = await Promise.all(prodPromise);

  return (
    <main className="bg-white dark:bg-black">
      {prods.map((item) => (
        <ProductGrid key={crypto.randomUUID()} {...item} />
      ))}
    </main>
  );
}
