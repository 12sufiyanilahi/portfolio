"use client";

import { useEffect, useRef } from "react";

type Part = [cls: string, text: string];

const script: Part[] = [
  ["prompt", "$ "], ["cmd", "whoami\n"],
  ["out", "Shaikh Sufiyan Ilahi — Senior Full Stack Developer\n\n"],
  ["prompt", "$ "], ["cmd", "ls ./projects\n"],
  ["hl", "food-delivery/  "], ["out", "4 apps · 9 backend domains\n"],
  ["hl", "enterprise-mobile/ "], ["out", "Cordova → React Native\n\n"],
  ["prompt", "$ "], ["cmd", "npm run build -- --platform all\n"],
  ["out", "→ design review ..... "], ["ok", "done\n"],
  ["out", "→ tests (43) ....... "], ["ok", "passing\n"],
  ["out", "→ play store ....... "], ["ok", "published\n"],
  ["out", "→ app store ....... "], ["ok", "published\n\n"],
  ["ok", "✔ happy to help with yours"],
];

/** Typewriter terminal shown in the hero. */
export default function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      script.forEach(([cls, text]) => {
        const s = document.createElement("span");
        s.className = cls;
        s.textContent = text;
        body.appendChild(s);
      });
      body.insertAdjacentHTML("beforeend", '<span class="caret"></span>');
      return;
    }

    let line = 0;
    let ch = 0;
    let node: HTMLSpanElement | null = null;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      if (line >= script.length) {
        body.insertAdjacentHTML("beforeend", '<span class="caret"></span>');
        return;
      }
      const [cls, text] = script[line];
      if (ch === 0) {
        node = document.createElement("span");
        node.className = cls;
        body.appendChild(node);
      }
      node!.textContent += text[ch];
      ch++;
      const delay = text[ch - 1] === "\n" ? 260 : cls === "cmd" ? 38 : 14;
      if (ch >= text.length) {
        line++;
        ch = 0;
      }
      timer = setTimeout(type, delay);
    };

    timer = setTimeout(type, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="terminal" role="img" aria-label="Terminal showing a developer at work">
      <div className="term-bar">
        <i style={{ background: "#f87171" }} />
        <i style={{ background: "#fbbf24" }} />
        <i style={{ background: "#34d399" }} />
        <span className="t">sufiyan@dev ~ zsh</span>
      </div>
      <div className="term-body" ref={bodyRef} />
    </div>
  );
}
