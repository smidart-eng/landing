import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rateLimit";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  revenueBand: z.string().min(1),
  role: z.string().min(1),
  pains: z.array(z.string()).optional().default([]),
  contact: z.string().min(2),
  comment: z.string().optional().default(""),
  website: z.string().optional().default(""), // honeypot
  pageUrl: z.string().optional().default(""),
});

const REVENUE_LABELS: Record<string, string> = {
  lt60: "до 60 млн ₽",
  "60-200": "60–200 млн ₽",
  "200-800": "200–800 млн ₽",
  "800+": "800+ млн ₽",
};

const ROLE_LABELS: Record<string, string> = {
  owner: "Собственник",
  rop: "РОП",
  comdep: "Коммерческий директор",
  other: "Другое",
};

const PAIN_LABELS: Record<string, string> = {
  conversion: "Конверсия",
  avg_check: "Средний чек",
  speed: "Скорость обработки",
  quality: "Качество",
  churn: "Текучка",
  scale: "Масштабирование",
  management: "Система управления",
};

function formatMessage(data: z.infer<typeof schema>): string {
  const pains = (data.pains ?? []).map((p) => PAIN_LABELS[p] ?? p).join(", ") || "—";
  return [
    "🔔 *Новая заявка — Аудит*",
    "",
    `👤 *Имя:* ${data.name}`,
    `🏢 *Компания/ниша:* ${data.company}`,
    `💰 *Оборот:* ${REVENUE_LABELS[data.revenueBand] ?? data.revenueBand}`,
    `👔 *Роль:* ${ROLE_LABELS[data.role] ?? data.role}`,
    `😤 *Боли:* ${pains}`,
    `📬 *Контакт:* ${data.contact}`,
    `💬 *Комментарий:* ${data.comment || "—"}`,
    `🔗 *URL:* ${data.pageUrl || "—"}`,
  ].join("\n");
}

async function sendToTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.log("Lead received (Telegram not configured):", text);
    return;
  }
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Слишком много запросов" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Неверный формат" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Ошибка валидации" }, { status: 422 });
  }

  const data = parsed.data;

  // Honeypot check
  if (data.website) {
    return new NextResponse(null, { status: 204 });
  }

  const message = formatMessage(data);
  await sendToTelegram(message);

  return NextResponse.json({ ok: true }, { status: 200 });
}
