/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: <explanation> */
"use server";

import prisma from "@/lib/prisma";
import {
  type EditProductFormState,
  editproductSchema,
} from "../schemas/product";
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

  await prisma.product.update({
    where: {
      id: result.data.id,
    },
    data: {
      name: result.data.name,
      categoryId: result.data.categoryId,
      variant: result.data.variant,
      desc: result.data.desc,
      workingSize: result.data.workingSize,
      packageSize: result.data.packageSize,
      volume: result.data.volume,
      packageWeight: result.data.packageWeight,
      imageFile: result.data.imageFile,
      localPrice: result.data.localPrice,
    },
  });

  return {
    errors: undefined,
    success: true,
  };
}
