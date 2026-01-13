import Link from "next/link"

import { Button } from "@/components/ui/button"

export interface LinkAsButtonProps {
    text: string,
    href: string
}

export function LinkAsButton({ href, text }: LinkAsButtonProps) {
    return (
        <Button asChild>
            <Link href={href}>{text}</Link>
        </Button>
    )
}