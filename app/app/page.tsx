import { Metadata } from "next";

import { DashboardPage } from "@/pages/dashboard";

export const metadata: Metadata = {
  title: "Мои вишлисты",
};

export default function Page() {
  return <DashboardPage />;
}
