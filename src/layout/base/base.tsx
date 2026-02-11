import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";

import { LogoutAction } from "./ui/logout-action";
import { ModeSwitcher } from "./ui/mode-switcher";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="py-8 flex-1 flex flex-col">
      <header className="hidden lg:flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <Button variant={"ghost"} className="font-semibold">
            Wishes
          </Button>
          <Button variant={"ghost"} className="font-semibold">
            Мой профиль
          </Button>
          <Button variant={"ghost"} className="font-semibold"></Button>
        </div>

        <ModeSwitcher />

        <LogoutAction />
      </header>

      {children}

      <footer className="mt-auto pt-8 text-center text-sm text-muted-foreground">
        © {currentYear} Wishes. Все права защищены.
      </footer>
    </Container>
  );
};
