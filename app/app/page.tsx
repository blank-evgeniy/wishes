import { DashboardPage } from "@/pages/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мои вишлисты",
};

export default function Page() {
  return <DashboardPage />;
}
