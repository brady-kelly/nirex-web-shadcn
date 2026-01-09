import { promises as fs } from "node:fs";
import prisma from "@/lib/prisma";
import type { Category } from "../generated/prisma/client";
import { ProductCategory } from "@/lib/types/product";
import { seedProducts } from "./seedProducts";

export async function seedCategories() {
  const json = await fs.readFile("data/products.json", "utf-8");
  const categories = JSON.parse(json) as ProductCategory[];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: {
        name: cat.heading,
      },
      update: {
        desc: null,
      },
      create: {
        name: cat.heading,
        desc: null,
      },
    });
    const c: Category | null = await prisma.category.findUnique({
      where: {
        name: cat.heading,
      },
    });
    if (!c) {
      continue;
    }
    seedProducts(cat, c.id);
  }
}
