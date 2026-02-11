import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import {
  BookmarkIcon,
  LightbulbIcon,
  Share2Icon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";

export const Home = () => {
  return (
    <Container className="flex-1 flex flex-col pt-20 max-w-440">
      <main className="rounded-t-xl border-border bg-secondary flex-1 flex flex-col items-center overflow-hidden relative p-8">
        <div className="mt-20 text-center space-y-6 relative z-10">
          <h1 className="text-5xl font-semibold font-serif text-pr">Wishes</h1>
          <p className="text-xl font-semibold">
            Собери все свои желания в одном месте
          </p>
        </div>

        <Button size="xl" className="mt-20 z-10" asChild>
          <Link href={routes.dashboard}>Вперед</Link>
        </Button>

        <div className="flex-1 z-10 max-w-2xl w-full mt-32 grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border bg-background/80 flex flex-col items-start gap-2">
            <StarIcon className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-medium">Создавай списки желаний</h2>
            <p className="text-sm text-muted-foreground">
              Организуй все свои желания в одном месте, чтобы ничего не забыть
            </p>
          </div>

          <div className="p-4 rounded-lg border bg-background/80 flex flex-col items-start gap-2">
            <Share2Icon className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-medium">Делись с друзьями</h2>
            <p className="text-sm text-muted-foreground">
              Поделись своими списками желаний с друзьями и семьей легко и
              быстро
            </p>
          </div>

          <div className="p-4 rounded-lg border bg-background/80 flex flex-col items-start gap-2">
            <BookmarkIcon className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-medium">Сохраняй чужие списки</h2>
            <p className="text-sm text-muted-foreground">
              Добавляй в избранное вишлисты друзей, чтобы быть в курсе их
              желаний
            </p>
          </div>

          <div className="p-4 rounded-lg border bg-background/80 flex flex-col items-start gap-2">
            <LightbulbIcon className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-medium">Идеи для вдохновения</h2>
            <p className="text-sm text-muted-foreground">
              Черпай идеи для своих желаний и находи новые способы радовать себя
              и друзей
            </p>
          </div>
        </div>
      </main>
    </Container>
  );
};
