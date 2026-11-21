"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import GoogleTag from "@/components/tracking/GoogleTag";
import { onConsentOpen, readConsent, saveConsent, subscribeConsent, type ConsentChoice } from "@/components/tracking/consent";
import { GA4_MEASUREMENT_ID } from "@/lib/ga4";

type Props = {
  /** Identifiant Google Ads (AW-…), si le site diffuse des annonces. */
  adsId?: string;
  /** Conversion Google Ads « clic téléphone » (AW-…/libellé). */
  phoneConversion?: string;
  /** Page décrivant les cookies (politique de confidentialité). */
  privacyHref: string;
};

const SSR = "ssr" as const;

/**
 * Bandeau de consentement + balise Google. À placer une fois dans app/layout.
 * Refuser est aussi simple qu'accepter ; chaque finalité est indépendante.
 */
export default function TrackingRoot({ adsId, phoneConversion, privacyHref }: Props) {
  const consent = useSyncExternalStore<ConsentChoice | null | typeof SSR>(subscribeConsent, readConsent, () => SSR);
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [draft, setDraft] = useState<ConsentChoice>({ analytics: false, ads: false });

  const hasAnalytics = GA4_MEASUREMENT_ID !== null;
  const hasAds = !!adsId;

  useEffect(
    () =>
      onConsentOpen(() => {
        const current = readConsent();
        setDraft(current ?? { analytics: false, ads: false });
        setCustom(true);
        setOpen(true);
      }),
    [],
  );

  if (consent === SSR) return null;

  const choice = consent ?? { analytics: false, ads: false };
  const needsChoice = consent === null && (hasAnalytics || hasAds);
  const showBanner = (needsChoice || open) && (hasAnalytics || hasAds);

  const decide = (next: ConsentChoice) => {
    saveConsent(next);
    setOpen(false);
    setCustom(false);
  };

  return (
    <>
      <GoogleTag
        analytics={choice.analytics}
        ads={choice.ads}
        adsId={adsId}
        phoneConversion={phoneConversion}
      />
      {showBanner && (
        <div role="dialog" aria-live="polite" aria-label="Préférences de cookies" style={styles.wrap}>
          <div style={styles.inner}>
            <p style={styles.title}>Vos préférences de cookies</p>
            <p style={styles.text}>
              Avec votre accord, nous utilisons des cookies Google
              {hasAnalytics && hasAds
                ? " pour mesurer l’audience du site et l’efficacité de nos annonces."
                : hasAnalytics
                  ? " pour mesurer l’audience du site."
                  : " pour mesurer l’efficacité de nos annonces."}{" "}
              Votre choix n’a aucun effet sur la prise de contact.{" "}
              <Link href={privacyHref} style={styles.link}>En savoir plus</Link>
            </p>
            {custom && (
              <div style={styles.options}>
                {hasAnalytics && (
                  <label style={styles.option}>
                    <input
                      type="checkbox"
                      checked={draft.analytics}
                      onChange={(e) => setDraft({ ...draft, analytics: e.currentTarget.checked })}
                    />
                    Mesure d’audience (Google Analytics)
                  </label>
                )}
                {hasAds && (
                  <label style={styles.option}>
                    <input
                      type="checkbox"
                      checked={draft.ads}
                      onChange={(e) => setDraft({ ...draft, ads: e.currentTarget.checked })}
                    />
                    Publicité (Google Ads)
                  </label>
                )}
              </div>
            )}
            <div style={styles.actions}>
              <button type="button" style={styles.button} onClick={() => decide({ analytics: false, ads: false })}>
                Tout refuser
              </button>
              {custom ? (
                <button type="button" style={styles.button} onClick={() => decide(draft)}>
                  Enregistrer
                </button>
              ) : (
                <button type="button" style={styles.button} onClick={() => { setDraft(choice); setCustom(true); }}>
                  Personnaliser
                </button>
              )}
              <button type="button" style={styles.button} onClick={() => decide({ analytics: hasAnalytics, ads: hasAds })}>
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  wrap: {
    position: "fixed",
    left: 12,
    right: 12,
    bottom: 12,
    zIndex: 2147483000,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none",
  },
  inner: {
    pointerEvents: "auto",
    maxWidth: 720,
    width: "100%",
    background: "#0f172a",
    color: "#f1f5f9",
    borderRadius: 12,
    padding: "16px 18px",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
    fontFamily: "inherit",
    fontSize: 14,
    lineHeight: 1.5,
  },
  title: { margin: "0 0 4px", fontWeight: 700, fontSize: 15, color: "#fff" },
  text: { margin: 0, color: "#e2e8f0" },
  link: { color: "#fff", textDecoration: "underline" },
  options: { display: "flex", flexWrap: "wrap", gap: "8px 20px", marginTop: 12 },
  option: { display: "flex", alignItems: "center", gap: 8, cursor: "pointer" },
  actions: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 },
  button: {
    flex: "1 1 140px",
    minHeight: 44,
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid #cbd5e1",
    background: "#f8fafc",
    color: "#0f172a",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
  },
};
