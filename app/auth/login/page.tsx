import { LoginPage } from "@/pages/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход",
};

export default function Page() {
  return <LoginPage />;
}
