import { ProductGrid } from "@/components/product/productGrid";
import { productGridDemo } from "@/components/product/productGridDemo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ProductGrid
          badge={productGridDemo.badge}
          heading={productGridDemo.heading}
          description={productGridDemo.description}
          columns={4}
          items={productGridDemo.items}
        />
      </main>
    </div>
  );
}
