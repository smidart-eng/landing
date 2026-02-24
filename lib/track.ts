"use client";

export function track(event: string, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.log(`[track] ${event}`, payload ?? "");
  }
}

let scrollTracked = false;

export function initScrollTrack() {
  if (typeof window === "undefined" || scrollTracked) return;

  const handler = () => {
    const scrolled = window.scrollY + window.innerHeight;
    const total = document.documentElement.scrollHeight;
    if (scrolled / total >= 0.75 && !scrollTracked) {
      scrollTracked = true;
      track("scroll_75");
      window.removeEventListener("scroll", handler);
    }
  };

  window.addEventListener("scroll", handler, { passive: true });
}
