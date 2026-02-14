import { Metadata } from "next";

import { DashboardView } from "@/views/dashboard";

export const metadata: Metadata = {
  title: "Мои вишлисты",
};

export default function Page() {
  return <DashboardView />;
}
