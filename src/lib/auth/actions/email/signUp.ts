/** biome-ignore-all assist/source/organizeImports: Later */
"use server";

import { auth } from "../../auth";
import { signupSchema } from "./schemas";

export async function signUpEmail(initialState: any, formData: FormData) {
  const validatedFields = signupSchema.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await auth.api.signUpEmail({
    body: {
      name: validatedFields.data.username,
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    },
  });
}
