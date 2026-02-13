import { SettingsPage } from "@/pages/settings/settings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Настройки",
};

export default function Page() {
  return <SettingsPage />;
}
