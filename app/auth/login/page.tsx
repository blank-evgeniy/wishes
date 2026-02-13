import { Metadata } from "next";

import { LoginPage } from "@/pages/login";

export const metadata: Metadata = {
  title: "Вход",
};

export default function Page() {
  return <LoginPage />;
}
