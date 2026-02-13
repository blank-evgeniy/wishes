import Link from "next/link";

import { routes } from "@/shared/routes";
import { Container } from "@/shared/ui/container";

import { HeaderNavigation } from "./ui/header-navigation";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="py-8 flex-1 flex flex-col">
      <header className="flex justify-between gap-8 items-center mb-8">
        <Link
          href={routes.home}
          className="leading-none text-xl text-primary font-semibold font-serif hover:text-primary/80 relative"
        >
          W<span className="absolute -left-1/4 text-primary/20">W</span>
        </Link>

        <HeaderNavigation />
      </header>

      {children}

      <footer className="mt-auto pt-8 text-center text-sm text-muted-foreground">
        © {currentYear} Wishes. Все права защищены.
      </footer>
    </Container>
  );
};
