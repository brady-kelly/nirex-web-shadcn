/** biome-ignore-all assist/source/organizeImports: Lazy */
import { formatCurrency } from "../formatting";
import type { ProductCardProps } from "@/components/product/productCard";
import type { Product } from "../../../generated/prisma/client";

function getImageSrcPath(imageFilename?: string): string {
  return `/products/${imageFilename || "generic-printer.jpg"}`;
}

/* Gets an array of ProductCardProps intended for a whole ProductGrid. */
export function getProductGridCardProps(
  products: Product[]
): ProductCardProps[] {
  const cardProps = products.map((product) => ({
    id: crypto.randomUUID(),
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

  return cardProps;
}
