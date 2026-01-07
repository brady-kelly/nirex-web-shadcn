import Image from "next/image";
import { appConfig } from "@/lib/config/appConfig";

export default function HeaderLogo() {
    return (
        <a href={appConfig.baseUrl} title="Nirex Tech Home Page" rel="home">
            <span>
                <Image
                    src="/graphics/trans-nirex-logo.png"
                    title="Nirex Tech Logo"
                    alt="Nirex Tech Logo"
                    width={160}
                    height={105}
                />
            </span>
        </a>
    );
}
