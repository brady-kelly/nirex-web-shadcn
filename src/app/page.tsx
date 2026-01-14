/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { ProductGrid } from "@/components/product/productGrid";
import { getAllCategoriesWithProducts } from "@/lib/products/actions/data";
import { buildProductGridProps } from "@/lib/products/props";

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
