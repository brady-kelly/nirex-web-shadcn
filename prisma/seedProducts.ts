import { promises as fs } from "node:fs";
import prisma from "@/lib/prisma";
import type { ProductCategory } from "@/lib/types/product";

export async function seedProducts() {
  const json = await fs.readFile("data/products.json", "utf-8");
  const categories = JSON.parse(json) as ProductCategory[];

  for (const cat of categories) {
    const c = await prisma.category.findUnique({
      where: {
        name: cat.heading,
      },
    });
    if (!c) {
      console.warn("Category not found for products:", cat.heading);
      continue;
    }
    console.info("Products for Category:", cat.heading, cat.id);

    for (const prod of cat.products || []) {
      console.info("Product:", prod.heading);

      await prisma.product.upsert({
        where: {
          name: prod.heading,
        },
        create: {
          name: prod.heading,
          variant: prod.subHeading,
          localPrice: prod.localPrice,
          categoryId: c.id,
          packageSize: prod.packageSize,
          packageWeight: prod.packageWeight,
          volume: prod.volume,
          workingSize: prod.workingSize,
          imageFile: prod.imageSrc,
        },
        update: {
          name: prod.heading,
          variant: prod.subHeading,
          localPrice: prod.localPrice,
          categoryId: c.id,
          packageSize: prod.packageSize,
          packageWeight: prod.packageWeight,
          volume: prod.volume,
          workingSize: prod.workingSize,
          imageFile: prod.imageSrc,
        },
      });
    }
  }
}
