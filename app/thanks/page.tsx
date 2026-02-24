import Link from "next/link";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <div className="mb-6 text-5xl">✅</div>
        <h1 className="mb-4 text-3xl font-bold">Заявка отправлена!</h1>
        <p className="mb-8 text-muted">
          Артём получил вашу заявку и ответит в Telegram в течение нескольких часов.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" asChild>
            <a href={SITE.tgUrl} target="_blank" rel="noopener noreferrer">
              Написать в Telegram
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/">Вернуться на сайт</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
