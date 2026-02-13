import { Metadata } from "next";

import { RegistrationPage } from "@/pages/registration";

export const metadata: Metadata = {
  title: "Создание аккаунта",
};

export default function Page() {
  return <RegistrationPage />;
}
