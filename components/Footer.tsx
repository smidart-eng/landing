import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {SITE.name}. Аудит и построение отдела продаж.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href={SITE.phoneTel}
            className="text-muted transition-colors hover:text-text"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.tgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-text"
          >
            {SITE.tg}
          </a>
        </div>
      </div>
    </footer>
  );
}
