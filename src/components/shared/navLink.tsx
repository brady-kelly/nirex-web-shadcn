"use client";

import Link from 'next/link';
import { ur } from 'zod/v4/locales';

export interface NavLinkProps {
    text?: string;
    url: string;
}

export function NavLink({ url, text }: NavLinkProps) {
    return (
        <Link className="text-primary font-medium" href={url}>{text}</Link>
    )
}