const STATS = [
  { value: "14+ лет", label: "в продажах и управлении" },
  { value: "150+", label: "продавцов в подчинении" },
  { value: "20–30%", label: "рост выручки YoY" },
  { value: "×1.5", label: "рост продаж в IT/SaaS" },
];

export default function ProofStats() {
  return (
    <section id="proof" className="border-y border-border bg-white">
      <div className="mx-auto max-w-container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-3xl font-bold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Цифры — из опыта управления и проектов.
        </p>
      </div>
    </section>
  );
}
