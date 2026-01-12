import 'server-only';
import { getCurrentUser } from '../auth';
import type { User } from "../../../generated/prisma/client";

function canSeeUsername(viewer: User) {
    // Public info for now, but can change
    return true;
}

function canSeePhoneNumber(viewer: User, team: string) {
    // Privacy rules
    // Just no, for quick lazy fix.
    //return viewer.isAdmin || team === viewer.team;
    return false;
}

export async function getProfileDTO(slug: string) {
    // Don't pass values, read back cached values, also solves context and easier to make it lazy

    // use a database API that supports safe templating of queries
    const [rows] = await sql`SELECT * FROM user WHERE slug = ${slug}`;
    const userData = rows[0];

    const currentUser = await getCurrentUser();

    // only return the data relevant for this query and not everything
    // <https://www.w3.org/2001/tag/doc/APIMinimization>
    return {
        username: canSeeUsername(currentUser) ? userData.username : null,
        phonenumber: canSeePhoneNumber(currentUser, userData.team)
            ? userData.phonenumber
            : null,
    };
}