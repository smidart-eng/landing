import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS = [
  "Еженедельные сессии с собственником/РОПом",
  "План внедрения и контроль исполнения",
  "Нормы качества и разбор коммуникаций",
  "Метрики и ритм управления",
  "Чат для быстрых решений",
];

export default function Mentorship() {
  return (
    <section className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-card border border-border bg-card p-8 sm:p-12 lg:flex lg:items-center lg:gap-12">
        <div className="lg:flex-1">
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
            Сопровождение (после аудита)
          </h2>
          <p className="mb-6 text-muted">
            Если нужно не «поговорить», а внедрить.
          </p>
          <ul className="space-y-3">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 lg:mt-0 lg:shrink-0">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("offer")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Обсудить сопровождение
          </Button>
        </div>
      </div>
    </section>
  );
}
