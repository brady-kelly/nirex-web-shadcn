import { usecase4Demo } from "@/components/beste/demo";
import { UseCase4 } from "@/components/beste/usecase4";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <UseCase4
          badge={usecase4Demo.badge}
          heading={usecase4Demo.heading}
          description={usecase4Demo.description}
          columns={4}
          items={usecase4Demo.items}
        />
      </main>
    </div>
  );
}
