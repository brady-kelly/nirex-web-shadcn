import { headers } from "next/headers";
import { auth } from "../auth.server";

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}
