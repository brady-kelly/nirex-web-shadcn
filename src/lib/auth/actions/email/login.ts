"use server";

import { auth } from "../../auth.server";
import z from "zod";
import { loginSchema } from "./schemas";
import { authClient } from "../../authClient";

export async function loginEmail(initialState: any, formData: FormData) {
  console.log(`Login formdata: ${formData}`);
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const errList = z.flattenError(validatedFields.error).fieldErrors;
    console.log(errList);
    return {
      errors: errList,
    };
  }

  console.log(validatedFields);

  const { data, error } = await authClient.signIn.email({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  });
  console.error(`Login error: ${error?.code}: ${error?.message}`);
}
