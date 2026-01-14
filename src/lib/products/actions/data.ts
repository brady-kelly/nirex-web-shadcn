"use server";

/** biome-ignore-all assist/source/organizeImports: Lazy */
import prisma from "@/lib/prisma";
import { updateSchema } from "../schemas";
import z from "zod";

export async function getAllCategories() {
  return prisma.category.findMany({});
}

export async function getAllCategoriesWithProducts() {
  return prisma.category.findMany({
    select: {
      id: true,
      name: true,
      desc: true,
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

export async function updateProduct(prevState: any, formData: FormData) {
  const validatedFields = updateSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const errList = z.flattenError(validatedFields.error).fieldErrors;
    return {
      errors: errList,
    };
  }

  return prisma.product.update({});
}
