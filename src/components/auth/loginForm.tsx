/** biome-ignore-all assist/source/organizeImports: Later */
import { loginEmail } from '@/lib/auth/actions/email/login';
import { useActionState } from 'react';
import { Button } from '../ui/button';

const initialState = {
    message: "",
    errors: {
        email: undefined,
        username: undefined,
        password: undefined,
        confirmPassword: undefined,
    },
}

export default function LoginForm() {
    const [state, formAction, pending] = useActionState(loginEmail, initialState)
    return (
        <form action={formAction} className="space-y-8">
            <div className="grid w-full max-w-sm items-center gap-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
                <p aria-live="polite">{state?.errors.email}</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <label htmlFor="password">User name</label>
                <input type="password" id="password" placeholder="Password" required />
                <p aria-live="polite">{state?.errors.password}</p>
            </div>

            <Button type="submit" disabled={pending}>Submit</Button>
        </form>
    );
}