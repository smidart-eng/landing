import { AlertCircle } from "lucide-react";

const PAINS = [
  "Выручка скачет месяц к месяцу",
  "Конверсия проседает — неясно где",
  "Лиды горят: скорость реакции низкая",
  "Скрипты есть, но качества нет",
  "РОП тушит пожары вместо управления",
  "Сильные уходят — всё падает",
  "Маркетинг и продажи не склеены",
  "Собственник в постоянном стрессе",
];

export default function PainCards() {
  return (
    <section id="pains" className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
          Если продажи сейчас — это лотерея
        </h2>
        <p className="text-muted text-lg">
          Скорее всего, у вас не «слабые люди», а нет системы.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PAINS.map((pain) => (
          <div
            key={pain}
            className="flex items-start gap-3 rounded-card border border-border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm font-medium text-text">{pain}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
