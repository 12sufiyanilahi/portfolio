"use client";

import { useState } from "react";

const types = [
  { icon: "🍔", name: "Food delivery", desc: "Ordering, cart and checkout, couriers with live routes, and a kitchen board for restaurants." },
  { icon: "✈️", name: "Aviation operations", desc: "A field operations app for fueling, crew and maintenance workflows that keeps working offline." },
  { icon: "🛍️", name: "E-commerce", desc: "Product catalogues, carts, orders and Razorpay payments." },
  { icon: "🎓", name: "Learning platforms", desc: "Course and academy apps with Angular frontends and REST APIs." },
  { icon: "☀️", name: "Energy platforms", desc: "Hybrid mobile features and API integrations for a solar energy platform." },
  { icon: "📶", name: "Network management", desc: "Web and mobile features for managing Wi-Fi access." },
];

/** Clickable app-type cards with a detail panel. */
export default function AppTypes() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="type-grid">
        {types.map((t, i) => (
          <div
            key={t.name}
            role="button"
            tabIndex={0}
            className={`type spot${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(i);
              }
            }}
          >
            <span>{t.icon}</span>
            {t.name}
          </div>
        ))}
      </div>
      <div className="type-detail" aria-live="polite">
        {active === null ? "Click or tap an app type to see an example." : types[active].desc}
      </div>
    </>
  );
}
