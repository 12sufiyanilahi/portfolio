"use client";

import { useEffect } from "react";

/**
 * Page-wide behaviour: reading progress bar, reveal-on-scroll,
 * count-up metrics and the cursor-following glow on cards.
 */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reading progress bar
    const bar = document.getElementById("progress");
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal on scroll
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    // Count-up metrics
    const counters = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = Number(el.dataset.count);
          let n = 0;
          const step = () => {
            n += Math.max(1, Math.ceil(target / 30));
            if (n >= target) {
              el.textContent = String(target);
              return;
            }
            el.textContent = String(n);
            requestAnimationFrame(step);
          };
          if (reduce) el.textContent = String(target);
          else step();
          counters.unobserve(el);
        }),
      { threshold: 0.6 },
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => counters.observe(el));

    // Cursor-following glow
    const spots = document.querySelectorAll<HTMLElement>(".spot");
    const onMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", e.clientX - r.left + "px");
      el.style.setProperty("--my", e.clientY - r.top + "px");
    };
    spots.forEach((el) => el.addEventListener("pointermove", onMove));

    return () => {
      window.removeEventListener("scroll", onScroll);
      reveal.disconnect();
      counters.disconnect();
      spots.forEach((el) => el.removeEventListener("pointermove", onMove));
    };
  }, []);

  return null;
}
