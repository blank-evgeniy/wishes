import { Metadata } from "next";

import { RegisterView } from "@/views/register";

export const metadata: Metadata = {
  title: "Создание аккаунта",
};

export default function Page() {
  return <RegisterView />;
}
