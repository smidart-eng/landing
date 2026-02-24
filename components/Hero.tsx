"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>Системно</Badge>
            <Badge>По данным</Badge>
            <Badge>Без токсичности</Badge>
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
            Строю управляемые отделы продаж: прогноз, контроль, рост.
          </h1>

          <p className="mb-8 text-lg text-muted leading-relaxed">
            14+ лет в продажах и управлении. 150+ продавцов в подчинении.
            Делал рост 20–30% год к году и масштабировал продажи в IT/SaaS.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("offer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Получить аудит отдела продаж
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

          <p className="mt-8 text-sm text-muted border-l-2 border-border pl-4">
            Сначала диагностика → затем план → затем внедрение.{" "}
            <span className="text-text font-medium">Никаких «магических скриптов».</span>
          </p>
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[420px] w-[340px] overflow-hidden rounded-card shadow-lg sm:h-[480px] sm:w-[380px]">
            <Image
              src="/photo.jpg"
              alt="Артём Смидюк"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 640px) 340px, 380px"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-sm">
              <p className="text-xs text-muted">Коммерческий директор · Финтабло</p>
              <p className="text-sm font-semibold text-text">Артём Смидюк</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
