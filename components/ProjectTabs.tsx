"use client";

import { Fragment, useState } from "react";

const shot = (file: string) => `/assets/neyo/${file}`;

const panels = {
  customer: {
    label: "Customer app",
    title: "Order food in a few taps, track it live.",
    body: "A React Native customer app with discovery, search, favourites, cart with promo codes and live order tracking on a map.",
    points: [
      "Home discovery with categories, lifestyle filters and delivery promos",
      "Cart with live fee breakdown and checkout via Stripe",
      "Order tracking: confirmed → preparing → courier → on the way",
    ],
    flow: ["Order Confirmed", "Restaurant Preparing", "Courier Assigned", "Picked Up", "On the Way"],
  },
  courier: {
    label: "Courier app",
    title: "Couriers get offers, routes and earnings.",
    body: "A courier app built around map-first navigation, preferred routes and transparent earnings, with location tracking over Redis Pub/Sub.",
    points: [
      "Nearby orders on a live map, with delivery offers and acceptance flow",
      "Preferred-route earnings and daily limits",
      "Rewards, settings, documents and vehicle profile",
    ],
    flow: [],
  },
  merchant: {
    label: "Merchant portal",
    title: "Restaurants run the kitchen from one screen.",
    body: "A merchant portal with live order management, a kanban kitchen view, menu management and analytics.",
    points: [
      "Live dashboard: active orders, delays, courier status and revenue",
      "Kitchen view: New → Preparing → Ready, with notes from customers",
      "Menu management, promotions and analytics",
    ],
    flow: [],
  },
} as const;

type Key = keyof typeof panels;

/** Tabs for the three food-delivery surfaces. */
export default function ProjectTabs() {
  const [tab, setTab] = useState<Key>("customer");
  const p = panels[tab];

  return (
    <>
      <div className="tabs reveal" role="tablist" aria-label="Food-delivery app screens">
        {(Object.keys(panels) as Key[]).map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={tab === key}
            className={`tab${tab === key ? " active" : ""}`}
            onClick={() => setTab(key)}
          >
            {panels[key].label}
          </button>
        ))}
      </div>

      <div className="panel active" key={tab} role="tabpanel">
        <div className="panel-copy">
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <ul>
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
          {p.flow.length > 0 && (
            <div className="order-flow">
              {p.flow.map((step, i) => (
                <Fragment key={step}>
                  <span>{step}</span>
                  {i < p.flow.length - 1 && <em>→</em>}
                </Fragment>
              ))}
            </div>
          )}
        </div>

        {tab === "customer" && (
          <div className="screens">
            <Phone src={shot("customer-home.png")} alt="Food-delivery customer home screen" />
            <Phone src={shot("customer-cart.png")} alt="Food-delivery cart and checkout screen" lift />
            <Phone src={shot("customer-tracking.png")} alt="Food-delivery live order tracking screen" />
          </div>
        )}
        {tab === "courier" && (
          <div className="screens">
            <Phone src={shot("courier-orders.png")} alt="Food-delivery courier orders screen" />
            <Phone src={shot("courier-route.png")} alt="Food-delivery courier preferred route screen" lift />
            <Phone src={shot("courier-rewards.png")} alt="Food-delivery courier rewards screen" />
          </div>
        )}
        {tab === "merchant" && (
          <div className="screens-col" style={{ width: "100%" }}>
            <Browser src={shot("merchant-dashboard.png")} alt="Food-delivery merchant dashboard" url="merchant portal · dashboard" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <Browser src={shot("merchant-kitchen.png")} alt="Food-delivery kitchen view" />
              <Browser src={shot("merchant-menu.png")} alt="Food-delivery menu management" />
              <Browser src={shot("merchant-analytics.png")} alt="Food-delivery analytics page" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Phone({ src, alt, lift }: { src: string; alt: string; lift?: boolean }) {
  return (
    <div className={`phone${lift ? " lift" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function Browser({ src, alt, url }: { src: string; alt: string; url?: string }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <i />
        <i />
        <i />
        {url && <span className="url">{url}</span>}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
