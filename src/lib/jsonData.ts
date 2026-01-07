import { promises as fs } from "node:fs";

import type { ProductGridProps } from "@/components/product/productGrid";
import { formatCurrency } from "./formatting";
import type { Product, ProductCategory } from "./types/product";

function getImageSrcPath(imageFilename?: string): string {
  return `/products/${imageFilename || "generic-printer.jpg"}`;
}

export async function loadAllProductCategories(): Promise<ProductCategory[]> {
  const json = await fs.readFile("data/products.json", "utf-8");
  const cats = JSON.parse(json) as ProductCategory[];
  return cats;
}

export async function getProductGridProps(
  category: ProductCategory
): Promise<ProductGridProps> {
  const demoProps: ProductGridProps = {
    id: crypto.randomUUID(),
    heading: category.heading,
    items: [],
  };

  const prods = category.products || [];

  demoProps.items = prods.map((product) => ({
    id: crypto.randomUUID(),
    heading: product.heading,
    subHeading: product.subHeading || "",
    workingSize: product.workingSize,
    packageSize: product.packageSize,
    volume: product.volume,
    packageWeight: product.packageWeight,
    image: {
      src: getImageSrcPath(product.imageSrc) || "",
      alt: "product image",
    },
    localPrice: formatCurrency(parseFloat(product.localPrice), "ZAR"),
  }));

  return demoProps;
}
