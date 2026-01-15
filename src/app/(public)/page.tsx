/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { ProductGrid } from "@/components/product/productGrid";
import { getUser } from "@/lib/auth/actions/shared/session";
import { auth } from "@/lib/auth/auth.server";
import { getAllCategoriesWithProducts } from "@/lib/products/actions/product";
import { buildProductGridProps } from "@/lib/products/props";
import { headers } from "next/headers";

export default async function Home() {
  const user = await getUser();

  const isAdmin = user?.role === "ADMIN";

  const categories = await getAllCategoriesWithProducts();
  return (
    <main>
      {categories.map((cat) => {
        const gridProps = buildProductGridProps(cat.id, cat.name, cat.products, cat.desc || "", 3, isAdmin);
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
