const CASES = [
  {
    result: "+60% за месяц",
    subtitle: "за счёт скорости обработки",
    points: [
      "Сократили реакцию на лид: 1 час → 10 минут",
      "Ввели контроль касаний",
      "Пересобрали этапы воронки",
    ],
    tag: "B2B услуги",
  },
  {
    result: "Рост ×1.5",
    subtitle: "в IT/SaaS за 1,5 года",
    points: [
      "Структура команды с нуля",
      "Контроль качества коммуникаций",
      "Регулярный план-факт",
    ],
    tag: "IT/SaaS",
  },
  {
    result: "Рост 20–30% YoY",
    subtitle: "в большом отделе",
    points: [
      "Управление через KPI и ритм недели",
      "Обучение и адаптация новых",
      "Прогнозируемая воронка",
    ],
    tag: "Крупный отдел",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="bg-white">
      <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Примеры результатов</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {CASES.map((c) => (
            <div
              key={c.result}
              className="rounded-card border border-border bg-[#F7F8FA] p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-1 inline-block rounded-pill bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {c.tag}
              </div>
              <div className="mt-4 mb-1 text-2xl font-bold text-text">{c.result}</div>
              <div className="mb-5 text-sm text-muted">{c.subtitle}</div>
              <ul className="space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Результат зависит от исходной точки и внедрения.
        </p>
      </div>
    </section>
  );
}
