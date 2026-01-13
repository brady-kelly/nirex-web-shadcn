import { ProductGrid } from "@/components/product/productGrid";
import { getProductGridCardProps } from "@/lib/data/products";
import prisma from "@/lib/prisma";

async function getAllCategoriesWithProducts() {
  return prisma.category.findMany({
    include: {
      products: true,
    },
  });
}

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
