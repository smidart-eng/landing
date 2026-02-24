"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { track } from "@/lib/track";

const PAINS_OPTIONS = [
  { id: "conversion", label: "Конверсия" },
  { id: "avg_check", label: "Средний чек" },
  { id: "speed", label: "Скорость обработки" },
  { id: "quality", label: "Качество" },
  { id: "churn", label: "Текучка" },
  { id: "scale", label: "Масштабирование" },
  { id: "management", label: "Система управления" },
];

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  company: z.string().min(2, "Введите компанию или нишу"),
  revenueBand: z.string().min(1, "Выберите оборот"),
  role: z.string().min(1, "Выберите роль"),
  pains: z.array(z.string()).optional(),
  contact: z.string().min(2, "Укажите контакт"),
  comment: z.string().optional(),
  website: z.string().optional(), // honeypot
});

type FormData = z.infer<typeof schema>;

export default function LeadForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [selectedPains, setSelectedPains] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const togglePain = (id: string) => {
    setSelectedPains((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      track("lead_submit", { role: data.role, revenueBand: data.revenueBand });
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          pains: selectedPains,
          pageUrl: window.location.href,
        }),
      });
      if (res.ok) {
        router.push("/thanks");
      } else {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Ошибка отправки. Попробуйте ещё раз.");
      }
    } catch {
      setError("Ошибка сети. Проверьте соединение и попробуйте снова.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot */}
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Имя *</Label>
          <Input id="name" placeholder="Иван Иванов" {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Компания / ниша *</Label>
          <Input id="company" placeholder="ООО «Ромашка», B2B SaaS" {...register("company")} />
          {errors.company && <p className="text-xs text-red-500">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="revenueBand">Оборот *</Label>
          <select
            id="revenueBand"
            {...register("revenueBand")}
            className="flex h-11 w-full rounded-xl border border-border bg-white px-4 py-2 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
          >
            <option value="">Выберите...</option>
            <option value="lt60">до 60 млн ₽</option>
            <option value="60-200">60–200 млн ₽</option>
            <option value="200-800">200–800 млн ₽</option>
            <option value="800+">800+ млн ₽</option>
          </select>
          {errors.revenueBand && <p className="text-xs text-red-500">{errors.revenueBand.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="role">Ваша роль *</Label>
          <select
            id="role"
            {...register("role")}
            className="flex h-11 w-full rounded-xl border border-border bg-white px-4 py-2 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
          >
            <option value="">Выберите...</option>
            <option value="owner">Собственник</option>
            <option value="rop">РОП</option>
            <option value="comdep">Коммерческий директор</option>
            <option value="other">Другое</option>
          </select>
          {errors.role && <p className="text-xs text-red-500">{errors.role.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Что болит? (можно несколько)</Label>
        <div className="flex flex-wrap gap-2">
          {PAINS_OPTIONS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => togglePain(p.id)}
              className={`rounded-pill border px-4 py-1.5 text-sm transition-colors ${
                selectedPains.includes(p.id)
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-muted hover:border-primary hover:text-primary"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact">Telegram или телефон *</Label>
        <Input id="contact" placeholder="@username или +7 900 000-00-00" {...register("contact")} />
        {errors.contact && <p className="text-xs text-red-500">{errors.contact.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="comment">Комментарий (необязательно)</Label>
        <Textarea
          id="comment"
          placeholder="Расскажите кратко о ситуации..."
          {...register("comment")}
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Отправляю..." : "Отправить заявку на аудит"}
      </Button>

      <p className="text-center text-xs text-muted">
        Отвечу в Telegram в течение нескольких часов.
      </p>
    </form>
  );
}
