import "server-only";
import { SignJWT, jwtVerify } from "jose";
//import { cookies } from "next/dist/server/request/cookies";
import { cookies } from "next/headers";
import prisma from "./prisma";
import type { SessionPayload } from "./definitions";

export async function encrypt(payload: SessionPayload) {
  const secretKey = process.env.SESSION_SECRET;
  const encodedKey = new TextEncoder().encode(secretKey);

  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  const secretKey = process.env.SESSION_SECRET;
  const encodedKey = new TextEncoder().encode(secretKey);
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const newSession = await prisma.session.create({
    data: {
      userId: userId,
      expiresAt,
    },
  });
  const id = newSession.id;

  // 2. Encrypt the session ID
  const session = await encrypt({
    userId: userId.toString(),
    role: "user",
    expiresAt,
  });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
