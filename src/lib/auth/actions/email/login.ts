"use server";

import { auth } from "../../auth.server";
import * as util from "node:util";
import z from "zod";
import { loginSchema } from "./schemas";

export async function loginEmail(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const errList = z.flattenError(validatedFields.error).fieldErrors;
    return {
      errors: errList,
    };
  }

  const data = await auth.api.signInEmail({
    body: {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    },
  });
  console.log(util.inspect(data, { depth: null }));
}
