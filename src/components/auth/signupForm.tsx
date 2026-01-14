/** biome-ignore-all assist/source/organizeImports: Later */
"use client"

import { Button } from "@/components/ui/button"
import { signUpEmail } from "@/lib/auth/actions/email/signUp"
import { useActionState } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const initialState = {
    message: "",
    errors: {
        email: undefined,
        username: undefined,
        password: undefined,
        confirmPassword: undefined,
    },
}

export function SignupForm() {
    const [state, formAction, pending] = useActionState(signUpEmail, initialState)
    return (
        <form action={formAction} className="space-y-8">
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Your email" required />
                <p aria-live="polite">{state?.errors.email}</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="username">User name</Label>
                <Input id="username" name="username" type="text" placeholder="User name" required minLength={2} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Password" required />
                <p aria-live="polite">{state?.errors.password}</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="econfirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm password" required />
                <p aria-live="polite">{state?.errors.confirmPassword}</p>
            </div>

            <Button type="submit" disabled={pending}>Submit</Button>
        </form>
    )
}