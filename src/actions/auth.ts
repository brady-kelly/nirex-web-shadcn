import { redirect } from "next/navigation";
import { type FormState, SignupFormSchema } from "@/lib/definitions";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const oldUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (oldUser) {
    return {
      message: "A user with this email already exists.",
    };
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      pwd: hashedPassword,
    },
  });

  if (!newUser) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(newUser.id);

  redirect("/profile");
}

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const oldUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (oldUser) {
    return {
      message: "A user with this email already exists.",
    };
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      pwd: hashedPassword,
    },
  });

  if (!newUser) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(newUser.id);

  redirect("/profile");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
