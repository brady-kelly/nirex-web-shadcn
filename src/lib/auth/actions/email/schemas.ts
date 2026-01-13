import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

const signupObject = z.object({
  email: z.email(),
  username: z.string().min(2),
  password: z
    .string()
    .min(8, { error: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { error: "Contain at least one letter." })
    .regex(/[0-9]/, { error: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      error: "Contain at least one special character.",
    })
    .trim(),
  confirmPassword: z.string(),
});

export const signupSchema = signupObject.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
    when(payload) {
      return signupObject
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success;
    },
  }
);
