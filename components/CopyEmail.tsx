"use client";

import { useState } from "react";

const EMAIL = "18ilahi@gmail.com";

/** Copies the contact email to the clipboard with brief feedback. */
export default function CopyEmail() {
  const [label, setLabel] = useState("Copy email");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setLabel("Copied ✓");
    } catch {
      setLabel(EMAIL);
    }
    setTimeout(() => setLabel("Copy email"), 2000);
  };

  return (
    <button type="button" className="btn ghost" onClick={copy}>
      {label}
    </button>
  );
}
