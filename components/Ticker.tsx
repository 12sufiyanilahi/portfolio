"use client";

import { useEffect, useRef } from "react";

const skills = [
  "react.js", "react native", "angular", "typescript", "node.js", "express", "fastapi",
  "postgresql + postgis", "mysql", "mongodb", "redis", "aws ecs · rds · terraform",
  "github actions", "expo · eas", "stripe · razorpay", "oauth 2.0 · jwt", "websockets", "ai apis", ".Net Core"
];

/**
 * Auto-sliding tech strip. It slides on its own; dragging, swiping or the
 * arrow keys take over, and auto-slide resumes after 3 seconds of rest.
 */
export default function Ticker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    const track = trackRef.current;
    if (!ticker || !track) return;

    const autoSpeed = 0.7; // px per frame
    const idleDelay = 3000; // ms of no interaction before auto-slide resumes
    let x = 0;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let lastInteract = -Infinity;
    let frame = 0;

    const touch = () => (lastInteract = performance.now());

    const tick = () => {
      if (!dragging) {
        if (Math.abs(velocity) > 0.05) {
          x += velocity;
          velocity *= 0.94;
        } else {
          velocity = 0;
        }
        const resting = performance.now() - lastInteract > idleDelay;
        if (resting && velocity === 0) x -= autoSpeed;
      }
      const h = track.scrollWidth / 2;
      if (h > 0) {
        x = ((x % h) + h) % h;
        x -= h; // seamless loop
      }
      track.style.transform = `translate3d(${x}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      velocity = 0;
      touch();
      ticker.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      x += dx;
      velocity = dx * 0.6;
      touch();
    };
    const release = () => {
      if (dragging) {
        dragging = false;
        touch();
      }
    };
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // horizontal swipes only
      x -= e.deltaX;
      velocity = 0;
      touch();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { x += 60; touch(); e.preventDefault(); }
      if (e.key === "ArrowRight") { x -= 60; touch(); e.preventDefault(); }
    };

    ticker.addEventListener("pointerdown", onDown);
    ticker.addEventListener("pointermove", onMove);
    ticker.addEventListener("pointerup", release);
    ticker.addEventListener("pointercancel", release);
    ticker.addEventListener("wheel", onWheel, { passive: true });
    ticker.addEventListener("keydown", onKey);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      ticker.removeEventListener("pointerdown", onDown);
      ticker.removeEventListener("pointermove", onMove);
      ticker.removeEventListener("pointerup", release);
      ticker.removeEventListener("pointercancel", release);
      ticker.removeEventListener("wheel", onWheel);
      ticker.removeEventListener("keydown", onKey);
    };
  }, []);

  const set = (
    <div className="ticker-set">
      {skills.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );

  return (
    <div className="ticker" role="region" aria-label="Skills" ref={tickerRef} tabIndex={0}>
      <div className="ticker-track" ref={trackRef}>
        {set}
        {set}
      </div>
    </div>
  );
}
