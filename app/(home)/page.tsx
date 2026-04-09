import { Metadata } from "next";

import { HomeView } from "@/views/home";

export const metadata: Metadata = {
  title: "Создать вишлист онлайн",
  description:
    "Wishes помогает создать вишлист онлайн, собрать идеи подарков, добавить ссылки и поделиться списком желаний с друзьями и семьей.",
};

export default function Page() {
  return <HomeView />;
}
