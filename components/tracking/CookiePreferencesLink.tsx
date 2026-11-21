"use client";

import type { CSSProperties } from "react";
import { openConsentPreferences } from "@/components/tracking/consent";

/** Lien permanent (pied de page) pour modifier ou retirer son consentement. */
export default function CookiePreferencesLink({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className={className}
      style={{ background: "none", border: 0, padding: 0, font: "inherit", color: "inherit", cursor: "pointer", ...style }}
    >
      Gérer les cookies
    </button>
  );
}
