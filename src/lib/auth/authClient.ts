import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "./auth.server";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000/api/auth",
  plugins: [inferAdditionalFields<typeof auth>()],
});

export const { signIn, signUp, useSession } = createAuthClient();
