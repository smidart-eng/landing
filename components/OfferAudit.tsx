import { CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const DELIVERABLES = [
  "Карта воронки: где теряются деньги",
  "Разбор качества: звонки/переписки/этапы",
  "Скорость обработки и дисциплина",
  "Метрики: конверсии, средний чек, план-факт",
  "План внедрения на 2–4 недели",
];

const FORMAT = [
  "Интервью: собственник + РОП",
  "Разбор CRM/воронки и 10–20 коммуникаций",
  "Финальный созвон с дорожной картой",
];

export default function OfferAudit() {
  return (
    <section id="offer" className="bg-white">
      <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Аудит отдела продаж за 16 часов
          </h2>
          <p className="text-lg text-muted">
            Найдём 3 ограничения и дадим план роста на 20–30%.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — details */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 font-semibold text-text">Что получите</h3>
              <ul className="space-y-3">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-text">Формат</h3>
              <ul className="space-y-3">
                {FORMAT.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="rounded-xl bg-[#F7F8FA] border border-border px-5 py-4 text-sm text-muted">
              Оставьте заявку — отвечу в Telegram и уточню детали.
            </p>
          </div>

          {/* Right — form */}
          <div className="rounded-card border border-border bg-[#F7F8FA] p-6 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
