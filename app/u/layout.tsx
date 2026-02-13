import { BaseLayout } from "@/layout/base-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
