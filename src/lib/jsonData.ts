import { promises as fs } from "node:fs";

import type { ProductGridProps } from "@/components/product/productGrid";
import type { Product, ProductCategory } from "./types/product";
import { formatCurrency } from "./formatting";

function getImageSrcPath(imageFilename?: string): string {
  return `/products/${imageFilename || "generic-printer.jpg"}`;
}

const formatter = new Intl.NumberFormat("en-US");

export async function getProductGridProps(): Promise<ProductGridProps> {
  const demoProps: ProductGridProps = { items: [] };

  const json = await fs.readFile("data/products.json", "utf-8");
  const cats = JSON.parse(json) as ProductCategory[];
  const prods = cats[0].products || [];

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
