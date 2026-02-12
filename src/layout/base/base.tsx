import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";

import Link from "next/link";
import { routes } from "@/shared/routes";
import { MobileNavigation } from "./ui/mobile-navigation";

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

        <nav className="hidden sm:flex gap-4">
          <Button variant={"ghost"} asChild>
            <Link href={routes.dashboard}>Мои вишлисты</Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href={routes.settings}>Настройки</Link>
          </Button>
        </nav>

        <MobileNavigation className="sm:hidden" />
      </header>

      {children}

      <footer className="mt-auto pt-8 text-center text-sm text-muted-foreground">
        © {currentYear} Wishes. Все права защищены.
      </footer>
    </Container>
  );
};
