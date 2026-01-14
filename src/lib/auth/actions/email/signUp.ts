/** biome-ignore-all assist/source/organizeImports: Later */
"use server";

import { auth } from "../../auth.server";
import z from "zod";
import { signupSchema } from "./schemas";
import { authClient } from "../../authClient";

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

  const { data, error } = await authClient.signUp.email({
    email: validatedFields.data.email,
    name: validatedFields.data.username,
    password: validatedFields.data.password,
  });
  console.error(`Signup error: ${error?.code}: ${error?.message}`);
}
