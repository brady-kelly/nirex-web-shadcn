import { promises as fs } from "fs";

import type { ProductGridProps } from "@/components/product/productGrid";
import type { Product } from "./types/product";

export async function getProductGridProps(): Promise<ProductGridProps> {
  const demoProps: ProductGridProps = { items: [] };

  const json = await fs.readFile("data/products.json", "utf-8");
  const data = JSON.parse(json) as Product[];

  demoProps.items = data.map((product) => ({
    id: product.id,
    heading: product.heading,
    subHeading: product.subHeading || "",
    workingSize: product.workingSize,
    packageSize: product.packageSize,
    volume: product.volume,
    packageWeight: product.packageWeight,
    image: { src: product.imageSrc || "", alt: "product image" },
    localPrice: product.localPrice,
  }));

  return demoProps;
}
