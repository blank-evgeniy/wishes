import { GiftIcon, ListTodoIcon, Share2Icon } from "lucide-react";

const steps = [
  {
    icon: ListTodoIcon,
    title: "Соберите список желаний",
    description:
      "Добавьте названия подарков, ссылки на магазины, цены и заметки, чтобы список был понятным и полезным.",
  },
  {
    icon: Share2Icon,
    title: "Поделитесь вишлистом",
    description:
      "Отправьте готовую страницу друзьям, семье или коллегам одной ссылкой.",
  },
  {
    icon: GiftIcon,
    title: "Получайте именно то, что хотите",
    description:
      "Людям проще выбрать подарок, а вы избегаете случайных и ненужных покупок.",
  },
];

export const HomeStepsSection = () => {
  return (
    <section className="grid gap-6 rounded-4xl border bg-background/75 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
          Как это работает
        </p>
        <h2 className="text-3xl font-semibold text-balance lg:text-4xl">
          Превратите идею подарка в понятный список желаний за несколько минут
        </h2>
        <p className="text-muted-foreground leading-7">
          Главная задача Wishes не просто хранить хотелки, а помогать людям
          быстрее договориться о подарках без неловких переписок и бесконечных
          уточнений.
        </p>
      </div>

      <div className="grid gap-4">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className="flex gap-4 rounded-3xl border bg-background px-5 py-5"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </div>
              {index !== steps.length - 1 && (
                <div className="min-h-8 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
