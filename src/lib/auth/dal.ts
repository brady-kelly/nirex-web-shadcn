/** biome-ignore-all assist/source/organizeImports: <explanation> */
import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "../session";
import { redirect } from "next/navigation";
import { cache } from "react";
import prisma from "../prisma";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await prisma.user.findMany({
      where: { id: session.userId },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    const user = data[0];

    return user;
  } catch (error) {
    console.error("Failed to fetch user");
    return null;
  }
});
