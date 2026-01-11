import { cache } from 'react';
import { cookies } from 'next/headers';
import { User } from "../../../generated/prisma/client";

// Cached helper methods makes it easy to get the same value in many places
// without manually passing it around. This discourages passing it from Server
// Component to Server Component which minimizes risk of passing it to a Client
// Component.
export const getCurrentUser = cache(async () => {
    const token = (await cookies()).get('AUTH_TOKEN')?.value;
    const decodedToken = await decryptAndValidate(token);
    // Don't include secret tokens or private information as public fields.
    // Use classes to avoid accidentally passing the whole object to the client.
    return { id: decodedToken.userId, email: decodedToken.email } as User;
});