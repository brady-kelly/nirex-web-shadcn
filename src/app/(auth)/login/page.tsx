/** biome-ignore-all assist/source/organizeImports: Later */
import LoginForm from '@/components/auth/loginForm';
import Loading from '@/components/shared/loading';
import { Suspense } from 'react';

export default function LoginPage() {
    return (
        <div className="w-full">
            <div className="flex items-center flex-col justify-center w-full md:py-10">
                <div className="w-full max-w-md">
                    <Suspense fallback={<Loading />}>
                        <LoginForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}