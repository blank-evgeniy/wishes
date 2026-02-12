"use client";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";
import { MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const MobileNavigation = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        <MenuIcon />
      </button>

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col gap-4 items-stretch p-4 justify-center bg-primary/80 backdrop-blur-sm transition-all duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <PlusIcon className="rotate-45" />
        </button>

        <Button asChild variant={"secondary"} onClick={() => setIsOpen(false)}>
          <Link href={routes.dashboard}>Мои вишлисты</Link>
        </Button>
        <Button asChild variant={"secondary"} onClick={() => setIsOpen(false)}>
          <Link href={routes.settings}>Настройки</Link>
        </Button>
      </nav>
    </>
  );
};
