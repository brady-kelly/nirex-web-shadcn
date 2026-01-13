/** biome-ignore-all assist/source/organizeImports: Lazy */
import prisma from "@/lib/prisma";

export async function getAllCategoriesWithProducts() {
  return prisma.category.findMany({
    include: {
      products: true,
    },
  });
}

export async function getProductsForCategory(categoryId: number) {
  return prisma.product.findMany({
    where: {
      categoryId: categoryId,
    },
    include: {
      category: true,
    },
  });
}
