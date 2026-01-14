import Link from 'next/link';
import { headers } from 'next/headers'; // Example of using server features

export default async function NotFound() {
    const headersList = await headers();
    const domain = headersList.get('host');

    return (
        <div>
            <h1>404 - {domain} Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Go home</Link>
        </div>
    );
}