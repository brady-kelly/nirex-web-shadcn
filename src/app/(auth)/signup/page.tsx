/** biome-ignore-all assist/source/organizeImports: Later */
import { SignupForm } from '@/components/auth/signupForm';
import Loading from '@/components/shared/loading';
import { Suspense } from 'react';

export default function LoginPage() {
    return (
        <div className="w-full">
            <div className="flex items-center flex-col justify-center w-full md:py-10">
                <div className="w-full max-w-md">
                    {/* <Suspense fallback={<Loading />}> */}
                    <SignupForm />
                    {/* </Suspense> */}
                </div>
            </div>
        </div>
    );
}