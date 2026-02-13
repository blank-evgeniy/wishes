import { Metadata } from "next";

import { SettingsPage } from "@/pages/settings/settings";

export const metadata: Metadata = {
  title: "Настройки",
};

export default function Page() {
  return <SettingsPage />;
}
