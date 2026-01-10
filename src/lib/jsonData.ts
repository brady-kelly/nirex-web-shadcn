import { promises as fs } from "node:fs";
import type { Category } from "../../generated/prisma/client";

function getImageSrcPath(imageFilename?: string): string {
  return `/products/${imageFilename || "generic-printer.jpg"}`;
}

export async function loadAllProductCategories(): Promise<Category[]> {
  const json = await fs.readFile("data/products.json", "utf-8");
  const cats = JSON.parse(json) as Category[];
  return cats;
}
