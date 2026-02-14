"use client";

import Link from "next/link";

import { useAuth } from "@/modules/auth";
import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";

import { MobileNavigation } from "./mobile-navigation";

export const HeaderNavigation = () => {
  const user = useAuth();

  if (!user)
    return (
      <>
        <nav className="hidden sm:flex gap-4">
          <Button variant={"outline"} asChild>
            <Link href={routes.register}>Создать аккаунт</Link>
          </Button>
          <Button asChild>
            <Link href={routes.settings}>Вход</Link>
          </Button>
        </nav>

        <MobileNavigation className="sm:hidden" />
      </>
    );

  return (
    <>
      <nav className="hidden sm:flex gap-4">
        <Button variant={"ghost"} asChild>
          <Link href={routes.dashboard}>Мои вишлисты</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link href={routes.settings}>Настройки</Link>
        </Button>
      </nav>

      <MobileNavigation className="sm:hidden" />
    </>
  );
};
