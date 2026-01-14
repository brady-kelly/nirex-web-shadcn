/** biome-ignore-all assist/source/organizeImports: Lazy */
import prisma from "@/lib/prisma";
import { tr } from "zod/v4/locales";

export async function getAllCategoriesWithProducts() {
  return prisma.category.findMany({
    include: {
      products: true,
    },
  });
}

export async function getCategoryInfo(catid: number) {
  return prisma.category.findUnique({
    where: {
      id: catid,
    },
    select: {
      name: true,
      desc: true,
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
