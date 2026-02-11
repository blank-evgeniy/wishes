import Link from "next/link";

import { Button } from "@/shared/ui/button";

import { LoginForm } from "./ui/login-form";
import { routes } from "@/shared/routes";

export const LoginPage = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 gap-8">
      <Button asChild variant={"ghost"} size={"xl"} className="font-semibold">
        <Link href={routes.home}>Wishes</Link>
      </Button>

      <LoginForm />
    </main>
  );
};
