"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    q: "Сколько занимает аудит?",
    a: "16 часов в течение 1–2 недель.",
  },
  {
    q: "Какие данные нужны?",
    a: "CRM/воронка, отчётность, 10–20 звонков или переписок.",
  },
  {
    q: "Если нет CRM?",
    a: "Соберём минимальный контур и точки контроля.",
  },
  {
    q: "С кем вы работаете?",
    a: "B2B/прямые продажи, малый и средний бизнес.",
  },
  {
    q: "Вы дадите скрипты?",
    a: "Если нужно — да, но главное — система и контроль качества.",
  },
  {
    q: "Можно ли без РОПа?",
    a: "Да, но нужен ответственный за внедрение.",
  },
  {
    q: "Есть гарантии?",
    a: "Гарантирую качество диагностики и план. Итог зависит от внедрения.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Вопросы и ответы</h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto max-w-2xl">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
