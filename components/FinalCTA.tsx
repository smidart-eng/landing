"use client";

import { SITE } from "@/lib/site";
import { track } from "@/lib/track";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8 text-center">
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
        Хотите прогнозируемые продажи<br className="hidden sm:block" /> и спокойную голову?
      </h2>
      <p className="mb-8 text-muted text-lg">
        Начните с аудита — узнаете, где теряются деньги.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          size="lg"
          onClick={() =>
            document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Получить аудит
        </Button>
        <Button
          size="lg"
          variant="secondary"
          asChild
          onClick={() => track("click_tg")}
        >
          <a href={SITE.tgUrl} target="_blank" rel="noopener noreferrer">
            Написать в Telegram
          </a>
        </Button>
      </div>
      <p className="mt-6 text-sm text-muted">
        Тел:{" "}
        <a
          href={SITE.phoneTel}
          className="font-medium text-text hover:text-primary"
          onClick={() => track("click_phone")}
        >
          {SITE.phone}
        </a>
      </p>
    </section>
  );
}
