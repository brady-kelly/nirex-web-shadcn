import { ProductGrid } from "@/components/product/productGrid";
import { getProductGridProps, loadAllProductCategories } from "@/lib/jsonData";

export default async function Home() {

  const categories = await loadAllProductCategories();
  const prodPromise = await categories.map(async category => await getProductGridProps(category));
  const prods = await Promise.all(prodPromise);

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-between py-2.5 px-16 bg-white dark:bg-black sm:items-start">
        {prods.map((item) => (
          <ProductGrid key={crypto.randomUUID()} {...item} />
        ))}
      </main>
    </div>
  );
}
