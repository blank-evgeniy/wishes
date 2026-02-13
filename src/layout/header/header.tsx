import Link from "next/link";

import { routes } from "@/shared/routes";
import { cn } from "@/shared/utils/cn";

import { HeaderNavigation } from "../header/ui/header-navigation";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => (
  <header
    className={cn("flex justify-between gap-8 items-center mb-8", className)}
  >
    <Link
      href={routes.home}
      className="leading-none text-xl text-primary font-semibold font-serif hover:text-primary/80 relative"
    >
      W<span className="absolute -left-1/4 text-primary/20">W</span>
    </Link>

    <HeaderNavigation />
  </header>
);
