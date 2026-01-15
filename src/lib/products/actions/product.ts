/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: <explanation> */
"use server";

import prisma from "@/lib/prisma";
import { type EditProductFormState, editproductSchema } from "../schemas";
import z from "zod";

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

export async function updateProduct(
  prevState: EditProductFormState,
  formData: FormData
): Promise<EditProductFormState> {
  const result = editproductSchema.safeParse(formData);
  const values = Object.fromEntries(
    formData
  ) as unknown as EditProductFormState["values"];

  if (!result.success) {
    const errs = z.flattenError(result.error).fieldErrors;
    return {
      values: values,
      success: false,
      errors: errs,
    };
  }

  //return prisma.product.update({});

  return {
    errors: undefined,
    success: true,
  };
}
