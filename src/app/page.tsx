import { ProductGrid } from "@/components/product/productGrid";
import { auth } from "@/lib/auth/auth";
import { getProductGridCardProps } from "@/lib/data/products";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

async function getAllCategoriesWithProducts() {
  return prisma.category.findMany({
    include: {
      products: true,
    },
  });
}

export default async function Home() {

  const categories = await getAllCategoriesWithProducts();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== "admin") {
    notFound();
  }

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
