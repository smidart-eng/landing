const CARDS = [
  {
    icon: "⚙️",
    title: "Системно",
    desc: "Строим процесс, а не героизм. Результат не зависит от одного человека.",
  },
  {
    icon: "📊",
    title: "По данным",
    desc: "Решения через метрики, не ощущения. Сначала диагностика — потом выводы.",
  },
  {
    icon: "🛠",
    title: "Практично",
    desc: "Шаги, которые можно внедрить завтра. Без лишней теории.",
  },
  {
    icon: "🤝",
    title: "По-человечески",
    desc: "Без токсичности и продавливания. Уважение к команде — часть системы.",
  },
];

export default function HowIWork() {
  return (
    <section id="approach" className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Подход</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="rounded-card border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 text-3xl">{c.icon}</div>
            <h3 className="mb-2 font-semibold text-text">{c.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
