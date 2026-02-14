import { Metadata } from "next";

import { SettingsView } from "@/views/settings";

export const metadata: Metadata = {
  title: "Настройки",
};

export default function Page() {
  return <SettingsView />;
}
