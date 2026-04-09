import { ArrowRightIcon, CheckIcon, PartyPopperIcon } from "lucide-react";
import Link from "next/link";

import { routes } from "@/shared/routes";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const useCases = [
  "Вишлист на день рождения",
  "Новогодний список подарков",
  "Подбор подарков для ребенка",
  "Список покупок и хотелок",
];

const highlights = [
  "Добавляйте подарки, цены и ссылки",
  "Делитесь вишлистом с друзьями и семьей",
  "Храните идеи к праздникам в одном месте",
];

const sampleWishes = [
  "Беспроводные наушники",
  "Настольная лампа для рабочего стола",
  "Сертификат в любимый магазин",
];

export const HomeHeroSection = () => {
  return (
    <section className="overflow-hidden rounded-lg border bg-background/85 px-6 py-6 shadow-lg lg:px-10 lg:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
            <CheckIcon className="size-4 text-primary" />
            Сервис для создания и публикации вишлистов
          </div>

          <div className="space-y-4">
            <p className="text-primary font-serif lg:text-3xl text-2xl">
              Wishes
            </p>
            <h1 className="max-w-3xl text-2xl font-semibold sm:leading-[100%] text-balance sm:text-4xl lg:text-6xl">
              Создайте вишлист онлайн и делитесь идеями подарков одной ссылкой
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:text-lg">
              Wishes помогает собрать список желаний на день рождения, Новый
              год, свадьбу или любой другой повод. Добавляйте товары, ссылки,
              цены и заметки, чтобы близким было проще выбрать нужный подарок.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="xl-responsive" asChild>
              <Link href={routes.register}>
                Создать вишлист
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button size="xl-responsive" variant="outline" asChild>
              <Link href={routes.login}>У меня уже есть аккаунт</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="gap-4 rounded-[1.75rem] border-primary/15 bg-linear-to-br from-background to-primary/5 py-0">
            <CardHeader className="px-5 pt-5">
              <CardTitle className="flex items-center gap-2 text-lg">
                <PartyPopperIcon className="size-5 text-primary" />
                Вишлист на день рождения
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 px-5 pb-5 text-sm text-muted-foreground">
              {sampleWishes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-background/90 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[1.75rem] border-dashed bg-background/80 py-0">
            <CardContent className="grid gap-3 px-5 py-5 text-sm">
              <p className="font-medium">Подходит для популярных сценариев:</p>
              <div className="flex flex-wrap gap-2 text-muted-foreground">
                {useCases.map((item) => (
                  <Badge
                    key={item}
                    variant={"secondary"}
                    className="max-sm:text-xs w-fit shrink-0 min-w-0"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-3 text-sm text-center font-medium text-muted-foreground sm:grid-cols-3 lg:mt-12 mt-6">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-2xl border-2 bg-background px-4 py-3"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
