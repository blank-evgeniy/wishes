import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

const faq = [
  {
    question: "Зачем нужен вишлист?",
    answer:
      "Вишлист помогает заранее собрать идеи подарков и поделиться ими с близкими. Так меньше неловкости, дублей и случайных покупок.",
  },
  {
    question:
      "Можно ли использовать Wishes как список желаний на день рождения?",
    answer:
      "Да, это один из самых естественных сценариев. Вы можете собрать отдельный вишлист к празднику и отправить его друзьям одной ссылкой.",
  },
  {
    question: "Что можно добавлять в список желаний?",
    answer:
      "В список можно добавлять названия товаров, ссылки, изображения, цены и комментарии. Это помогает точнее объяснить, что именно вы хотите.",
  },
  {
    question: "Подходит ли сервис для семейных и общих подарков?",
    answer:
      "Да, вы можете хранить вишлисты разных людей, возвращаться к ним позже и использовать их как базу идей перед праздниками.",
  },
];

export const HomeFaqSection = () => {
  return (
    <section className="rounded-4xl border bg-background/80 p-6 lg:p-8">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
          FAQ
        </p>
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Частые вопросы о вишлистах
        </h2>
      </div>

      <Accordion type="single">
        {faq.map((item) => (
          <AccordionItem value={item.question} key={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
