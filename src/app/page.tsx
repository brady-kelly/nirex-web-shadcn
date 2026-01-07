import { ProductGrid } from "@/components/product/productGrid";
import { getProductGridProps } from "@/lib/jsonData";

export default async function Home() {

  const prods = await getProductGridProps();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ProductGrid
          badge={prods.badge}
          heading={prods.heading}
          description={prods.description}
          columns={3}
          items={prods.items}
        />
      </main>
    </div>
  );
}
