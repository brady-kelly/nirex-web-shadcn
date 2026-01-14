import { headers } from "next/headers";
import { auth } from "../../auth.server";
import { User } from "../../../../../generated/prisma/client";

export async function getUser(): Promise<User | undefined> {
  const session = await getSession();

  if (session && session.user)
    return {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      role: session.user.role,
      createdAt: session.user.createdAt,
      updatedAt: session.user.updatedAt,
      emailVerified: session.user.emailVerified,
      image: session.user.image || null,
    };
  return undefined;
}

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}
