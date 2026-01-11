/** biome-ignore-all assist/source/organizeImports: Lazy */
/** biome-ignore-all lint/correctness/noUnusedImports: Lazy */
/** biome-ignore-all lint/style/useImportType: Lazy */
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { use } from "react";
import { User } from "./generated/prisma/client";
import NextAuth from "next-auth";

async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.pwd);
          if (passwordsMatch)
            return {
              id: user.id.toString(),
              email: user.email,
              name: user.name,
            };
        }

        return null;
      },
    }),
  ],
});
