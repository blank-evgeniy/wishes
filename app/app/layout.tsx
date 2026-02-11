import { BaseLayout } from "@/layout/base";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
