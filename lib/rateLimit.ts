const hits = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 10;

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = hits.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_HITS) return false;

  recent.push(now);
  hits.set(ip, recent);
  return true;
}
