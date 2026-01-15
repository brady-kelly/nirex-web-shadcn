"use server";

/** biome-ignore-all assist/source/organizeImports: Lazy */
import prisma from "@/lib/prisma";
import { editproductSchema } from "../schemas";
import z from "zod";

export async function getAllCategories(nameFilter?: string) {
  return prisma.category.findMany({
    where: { name: nameFilter ? { contains: nameFilter } : undefined },
  });
}

export async function getAllCategoriesWithProducts() {
  return prisma.category.findMany({
    include: {
      products: true,
    },
  });
}

export async function getCategoryInfo(catId: number) {
  return prisma.category.findUnique({
    where: {
      id: catId,
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

export async function getProduct(id: number) {
  return prisma.product.findUnique({
    where: {
      id: id,
    },
  });
}

export async function updateProduct(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validatedFields = editproductSchema.safeParse(data);

  if (!validatedFields.success) {
    const errList = z.flattenError(validatedFields.error).fieldErrors;
    return {
      errors: errList,
    };
  }

  //return prisma.product.update({});
}
