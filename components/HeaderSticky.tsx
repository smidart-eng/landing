"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";
import { Button } from "@/components/ui/button";
import { Menu, X, Send } from "lucide-react";

const NAV = [
  { label: "Кому", href: "#pains" },
  { label: "Результаты", href: "#proof" },
  { label: "Аудит", href: "#offer" },
  { label: "Подход", href: "#approach" },
  { label: "Кейсы", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];

export default function HeaderSticky() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="text-lg font-bold text-text">
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.tgUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_tg")}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-primary transition-colors hover:bg-gray-100"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => {
              document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Получить аудит
          </Button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-white px-4 pb-4 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <Button
            className="mt-2 w-full"
            onClick={() => {
              setOpen(false);
              document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Получить аудит
          </Button>
        </nav>
      )}
    </header>
  );
}
