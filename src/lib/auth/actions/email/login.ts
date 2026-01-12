import { auth } from "../../auth";
import z from "zod";
import { loginSchema } from "./schemas";

export async function loginEmail(initialState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }

  const data = await auth.api.signInEmail({
    body: {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    },
  });
}
