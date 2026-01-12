/** biome-ignore-all assist/source/organizeImports: <explanation> */
"use client"

import { Button } from "@/components/ui/button"
import { signUpEmail } from "@/lib/auth/signUp"
import { useActionState } from "react"

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
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
                <p aria-live="polite">{state?.errors.email}</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <label htmlFor="username">User name</label>
                <input type="text" id="username" name="username" placeholder="User name" />
                <p aria-live="polite">{state?.errors.username}</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <label htmlFor="password">User name</label>
                <input type="password" id="password" placeholder="Password" required />
                <p aria-live="polite">{state?.errors.password}</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <label htmlFor="email">User name</label>
                <input type="password" id="confirmPassword" placeholder="Confirm password" required />
                <p aria-live="polite">{state?.errors.confirmPassword}</p>
            </div>

            <Button type="submit" disabled={pending}>Submit</Button>
        </form>
    )
}