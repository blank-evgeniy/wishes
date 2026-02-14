import { Metadata } from "next";

import { LoginView } from "@/views/login";

export const metadata: Metadata = {
  title: "Вход",
};

export default function Page() {
  return <LoginView />;
}
