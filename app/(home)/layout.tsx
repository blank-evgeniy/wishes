import { Header } from "@/app/layout/header";
import { Container } from "@/shared/ui/container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex-1 flex flex-col max-w-440">
      <Header />
      {children}
    </Container>
  );
}
