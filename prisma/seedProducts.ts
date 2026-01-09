import prisma from "@/lib/prisma";
import type { ProductCategory } from "@/lib/types/product";

export async function seedProducts(cat: ProductCategory, catId: number) {
  for (const prod of cat.products || []) {
    await prisma.product.upsert({
      where: {
        name: prod.heading,
      },
      create: {
        name: prod.heading,
        variant: prod.subHeading,
        localPrice: prod.localPrice,
        categoryId: catId,
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
        categoryId: catId,
        packageSize: prod.packageSize,
        packageWeight: prod.packageWeight,
        volume: prod.volume,
        workingSize: prod.workingSize,
        imageFile: prod.imageSrc,
      },
    });
  }
}
