/** biome-ignore-all assist/source/organizeImports: Later */
import LoginForm from '@/components/auth/loginForm';

export default function LoginPage() {
    return (
        <div className="w-full">
            <div className="flex items-center flex-col justify-center w-full md:py-10">
                <div className="w-full">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}