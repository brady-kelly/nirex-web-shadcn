/** biome-ignore-all assist/source/organizeImports: Later */
"use server";

import { auth } from "../../auth.server";
import z from "zod";
import { signupSchema } from "./schemas";
import * as util from "node:util";

export async function signUpEmail(initialState: any, formData: FormData) {
  console.log(`Signup formdata: ${formData}`);
  const validatedFields = signupSchema.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    const errList = z.flattenError(validatedFields.error).fieldErrors;
    console.log(errList);
    return {
      errors: errList,
    };
  }

  const data = await auth.api.signUpEmail({
    body: {
      email: validatedFields.data.email,
      name: validatedFields.data.username,
      password: validatedFields.data.password,
    },
  });
  console.log(util.inspect(data, { depth: null }));
}
