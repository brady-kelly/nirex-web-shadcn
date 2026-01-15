// "use server";

import prisma from "@/lib/prisma";
import type { Category } from "../../../../generated/prisma/client";
import { EditCategoryFormState, editCategorySchema } from "../schemas";
import z, { success } from "zod";

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
  const data = Object.fromEntries(formData.entries());
  const validatedFields = editCategorySchema.safeParse(data);

  if (!validatedFields.success) {
    const errList = z.flattenError(validatedFields.error).fieldErrors;
    return {
      errors: errList,
      //success: false,
    };
  }
  return {
    errors: undefined, // No errors on success
  };
  //   await prisma.category.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "name",
  //       desc: "desc",
  //     },
  //   });
}
