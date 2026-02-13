"use client";

import { MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useAuth } from "@/context/auth-context";
import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";

export const MobileNavigation = ({ className }: { className?: string }) => {
  const user = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <button onClick={handleOpen} className={className}>
        <MenuIcon />
      </button>

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col gap-4 items-center p-4 justify-center bg-primary/80 backdrop-blur-sm transition-all duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <button onClick={handleClose} className="absolute top-4 right-4">
          <PlusIcon className="rotate-45" />
        </button>

        {user ? (
          <>
            <Button
              asChild
              variant={"secondary"}
              className="max-w-md w-full"
              onClick={handleClose}
            >
              <Link href={routes.dashboard}>Мои вишлисты</Link>
            </Button>
            <Button
              asChild
              variant={"secondary"}
              className="max-w-md w-full"
              onClick={handleClose}
            >
              <Link href={routes.settings}>Настройки</Link>
            </Button>
          </>
        ) : (
          <>
            <Button
              asChild
              variant={"secondary"}
              className="max-w-md w-full"
              onClick={handleClose}
            >
              <Link href={routes.register}>Создать аккаунт</Link>
            </Button>
            <Button
              asChild
              variant={"secondary"}
              className="max-w-md w-full"
              onClick={handleClose}
            >
              <Link href={routes.login}>Вход</Link>
            </Button>
          </>
        )}
      </nav>
    </>
  );
};
