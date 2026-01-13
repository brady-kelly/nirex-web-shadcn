import { ProductGrid } from "@/components/product/productGrid";
import { buildProductGridCardProps, buildProductGridProps } from "@/lib/data/products";
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

      {categories.map((cat) => {
        const gridProps = buildProductGridProps(cat.id, cat.name, cat.products);
        return (
          <ProductGrid
            key={gridProps.id}
            id={gridProps.id}
            heading={gridProps.heading}
            description={gridProps.description}
            items={gridProps.items}
            columns={gridProps.columns}
          />
        )
      })
      }
    </main >
  );
}
