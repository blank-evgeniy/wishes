import {
  BookmarkIcon,
  LightbulbIcon,
  Share2Icon,
  StarIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const features = [
  {
    icon: StarIcon,
    title: "Создавайте вишлисты под любой повод",
    description:
      "Соберите подарки на день рождения, Новый год, свадьбу или просто список своих хотелок в одном месте.",
  },
  {
    icon: Share2Icon,
    title: "Делитесь ссылкой без лишних объяснений",
    description:
      "Отправьте вишлист друзьям и близким, чтобы они сразу видели, что вам действительно хочется получить.",
  },
  {
    icon: BookmarkIcon,
    title: "Сохраняйте списки друзей",
    description:
      "Держите под рукой вишлисты близких и возвращайтесь к ним, когда придет время выбирать подарок.",
  },
  {
    icon: LightbulbIcon,
    title: "Собирайте идеи и не теряйте вдохновение",
    description:
      "Добавляйте понравившиеся товары, заметки и ссылки, чтобы желание не потерялось через пару дней.",
  },
];

export const HomeFeaturesSection = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {features.map(({ icon: Icon, title, description }) => (
        <Card key={title} className="rounded-[1.75rem] bg-background/80">
          <CardHeader className="space-y-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
              <Icon className="size-6 text-primary" />
            </div>
            <CardTitle className="text-xl leading-tight">{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            {description}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
