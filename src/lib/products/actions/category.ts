"use server";

import prisma from "@/lib/prisma";
import { type EditCategoryFormState, editCategorySchema } from "../schemas";
import z from "zod";
import * as util from "node:util";
import { FormMessage } from "@/components/ui/form";

export async function getCategory(id: number) {
  return prisma.category.findUnique({
    where: {
      id: id,
    },
  });
}

export async function updateCategory(
  // biome-ignore lint/correctness/noUnusedFunctionParameters: <explanation>
  prevState: EditCategoryFormState,
  formData: FormData
): Promise<EditCategoryFormState> {
  //const values = editCategorySchema.parse(formData);
  const result = editCategorySchema.safeParse(formData);

  if (!result.success) {
    return {
      values,
      success: false,
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  console.log(util.inspect(result.data, { depth: null }));
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
