/** biome-ignore-all assist/source/organizeImports: Lazy */
import { formatCurrency } from "../formatting";
import type { ProductCardProps } from "@/components/product/productCard";
import type { Product } from "../../../generated/prisma/client";
import type { ProductGridProps } from "@/components/product/productGrid";

function getImageSrcPath(imageFilename?: string): string {
  return `/products/${imageFilename || "generic-printer.jpg"}`;
}

export function buildProductGridProps(
  catId: number,
  catName: string,
  products: Product[],
  cols?: 2 | 3 | 4
): ProductGridProps {
  const cardProps = products.map((product) => ({
    id: product.id.toString(),
    heading: product.name,
    subHeading: product.desc || undefined,
    workingSize: product.workingSize || undefined,
    packageSize: product.packageSize || undefined,
    volume: product.volume || undefined,
    packageWeight: product.packageWeight || undefined,
    image: {
      src: getImageSrcPath(product.imageFile || undefined) || "",
      alt: "product image",
    },
    localPrice: formatCurrency(product.localPrice, "ZAR"),
  }));

  const gridProps: ProductGridProps = {
    id: catId.toString(),
    heading: catName,
    columns: cols || 3,
    items: cardProps,
  };
  return gridProps;
}
