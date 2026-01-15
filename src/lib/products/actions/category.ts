/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use server";

import prisma from "@/lib/prisma";
import { type EditCategoryFormState, editCategorySchema } from "../schemas";
import z from "zod";

export async function getCategory(id: number) {
  return prisma.category.findUnique({
    where: {
      id: id,
    },
  });
}

export async function updateCategory(
  prevState: EditCategoryFormState,
  formData: FormData
): Promise<EditCategoryFormState> {
  const result = editCategorySchema.safeParse(formData);
  const values = Object.fromEntries(
    formData
  ) as unknown as EditCategoryFormState["values"];
  if (!result.success) {
    const errs = z.flattenError(result.error).fieldErrors;
    return {
      values: values,
      success: false,
      errors: errs,
    };
  }

  await prisma.category.update({
    where: {
      id: result.data.id,
    },
    data: {
      name: result.data.name,
      desc: result.data.desc,
    },
  });

  return {
    errors: undefined,
    success: true,
  };
}
