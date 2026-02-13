import { Container } from "@/shared/ui/container";

import { Header } from "../header";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="py-8 flex-1 flex flex-col">
      <Header />

      {children}

      <footer className="mt-auto pt-8 text-center text-sm text-muted-foreground">
        © {currentYear} Wishes. Все права защищены.
      </footer>
    </Container>
  );
};
