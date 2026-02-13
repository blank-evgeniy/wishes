import Link from "next/link";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";

import { RegisterForm } from "./ui/register-form";

export const RegistrationPage = () => {
  return (
    <main className="flex-1 flex flex-col items-center p-4 gap-8 mt-20">
      <Button asChild variant={"ghost"} size={"xl"} className="font-semibold">
        <Link href={routes.home}>Wishes</Link>
      </Button>

      <RegisterForm />
    </main>
  );
};
