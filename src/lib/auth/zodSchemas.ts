import z from "zod";

const baseObject = z.object({
  email: z.email(),
  username: z.string().min(2).max(50),
  password: z.string().min(8),
  confirmPassword: z.string(),
});

export const signupSchema = baseObject.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
    when(payload) {
      return baseObject
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success;
    },
  }
);
