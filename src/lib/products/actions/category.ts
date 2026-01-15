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
  //const data = Object.fromEntries(formData.entries());
  console.log(util.inspect(formData, { depth: null }));
  const id = formData.get("id");
  const values = {
    id: Number(id),
    name: formData.get("name") as string,
    desc: formData.get("desc") as string,
  };
  const result = editCategorySchema.safeParse(values);

  if (!result.success) {
    const errs = z.flattenError(result.error).fieldErrors;
    console.log(util.inspect(errs, { depth: null }));
    return {
      values,
      success: false,
      errors: errs,
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
