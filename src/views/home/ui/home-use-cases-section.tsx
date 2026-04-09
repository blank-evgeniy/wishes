import Link from "next/link";

import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const useCases = [
  "Вишлист на день рождения",
  "Новогодний список подарков",
  "Список желаний для пары или семьи",
  "Подбор подарков для ребенка",
  "Личный список покупок и хотелок",
  "Подборка идей перед праздниками",
];

export const HomeUseCasesSection = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <Card className="rounded-4xl bg-background/80">
        <CardHeader className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
            Когда это особенно полезно
          </p>
          <CardTitle className="text-3xl leading-tight">
            Используйте Wishes как страницу с идеями подарков для любого повода
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-background px-4 py-4"
            >
              {item}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-4xl bg-primary text-primary-foreground">
        <CardHeader className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
            Зачем людям отправлять вишлист
          </p>
          <CardTitle className="text-3xl leading-tight">
            Меньше случайных подарков, больше точных попаданий
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-6 text-primary-foreground/85">
          <p>
            Когда список желаний собран заранее, друзьям и близким не нужно
            гадать, что подарить. Вы экономите время, избегаете дублей и
            получаете вещи, которые действительно нужны или радуют.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href={routes.register}>Попробовать бесплатно</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
