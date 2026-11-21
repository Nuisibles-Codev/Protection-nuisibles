"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA4_MEASUREMENT_ID, ensureGtag, getGtag, setGA4Active, trackGA4Event } from "@/lib/ga4";

type Props = {
  /** Le visiteur a accepté la mesure d'audience (GA4). */
  analytics: boolean;
  /** Le visiteur a accepté les cookies publicitaires (Google Ads). */
  ads?: boolean;
  /** Identifiant Google Ads (AW-…), si le site en utilise un. */
  adsId?: string;
  /** Conversion Google Ads « clic téléphone » (AW-…/libellé), déclenchée sur un vrai clic tel:. */
  phoneConversion?: string;
};

const GTAG_SRC = "https://www.googletagmanager.com/gtag/js";
const ALLOWED_PARAMS = new Set([
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid",
]);

/** Charge gtag.js une seule fois pour toute la page, même si plusieurs balises Google coexistent. */
function loadGtagScript(id: string): void {
  if (document.querySelector(`script[src^="${GTAG_SRC}"]`)) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `${GTAG_SRC}?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

/** Supprime les cookies Google déjà déposés lors d'un retrait de consentement. */
function clearGoogleCookies(prefixes: string[]): void {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0]?.trim())
    .filter((n): n is string => !!n && prefixes.some((p) => n === p || n.startsWith(p)));
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = new Set(["", host, `.${host}`]);
  if (parts.length >= 2) domains.add(`.${parts.slice(-2).join(".")}`);
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

/** URL sans paramètres libres (pouvant contenir des données personnelles) ni ancre. */
function cleanLocation(): string {
  const url = new URL(window.location.href);
  for (const key of [...url.searchParams.keys()]) {
    if (!ALLOWED_PARAMS.has(key)) url.searchParams.delete(key);
  }
  url.hash = "";
  return url.toString();
}

/**
 * Balise Google unique (gtag.js) partagée par GA4 et Google Ads, en Consent Mode v2.
 * - Rien n'est chargé tant qu'aucune finalité n'est acceptée.
 * - Les pages vues GA4 sont envoyées par ce composant (initiale + navigations Next.js) :
 *   désactiver la « mesure améliorée › pages vues sur changement d'historique » dans GA4.
 * - Clics tel:/mailto: : événements GA4 phone_click / email_click (sans le numéro ni l'adresse).
 */
export default function GoogleTag({ analytics, ads = false, adsId, phoneConversion }: Props) {
  const pathname = usePathname();
  const allowAnalytics = analytics && GA4_MEASUREMENT_ID !== null;
  const allowAds = ads && !!adsId;
  const started = useRef(false);
  const configured = useRef({ analytics: false, ads: false });
  const lastLocation = useRef<string | null>(null);
  const state = useRef({ allowAnalytics, allowAds });
  state.current = { allowAnalytics, allowAds };

  // Consentement et configuration des balises.
  useEffect(() => {
    setGA4Active(allowAnalytics);

    if (!allowAnalytics && !allowAds) {
      const gtag = getGtag();
      if (started.current && gtag) {
        gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
        clearGoogleCookies(["_ga", "_gid", "_gcl_", "_gac_"]);
      }
      lastLocation.current = null;
      return;
    }

    const existed = getGtag() !== null;
    const gtag = ensureGtag();
    if (!started.current) {
      if (!existed) {
        gtag("consent", "default", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
        gtag("js", new Date());
      }
      started.current = true;
    }

    gtag("consent", "update", {
      analytics_storage: allowAnalytics ? "granted" : "denied",
      ad_storage: allowAds ? "granted" : "denied",
      ad_user_data: allowAds ? "granted" : "denied",
      ad_personalization: allowAds ? "granted" : "denied",
    });
    if (!allowAnalytics) clearGoogleCookies(["_ga", "_gid"]);
    if (!allowAds) clearGoogleCookies(["_gcl_", "_gac_"]);

    if (allowAds && adsId && !configured.current.ads) {
      gtag("config", adsId);
      configured.current.ads = true;
    }
    if (allowAnalytics && GA4_MEASUREMENT_ID && !configured.current.analytics) {
      gtag("config", GA4_MEASUREMENT_ID, { send_page_view: false });
      configured.current.analytics = true;
    }

    loadGtagScript((allowAds ? adsId : GA4_MEASUREMENT_ID) as string);
  }, [allowAnalytics, allowAds, adsId]);

  // Pages vues GA4 (sans doublon).
  useEffect(() => {
    if (!allowAnalytics || !GA4_MEASUREMENT_ID) return;
    const gtag = getGtag();
    if (!gtag) return;
    const location = cleanLocation();
    if (lastLocation.current === location) return;
    lastLocation.current = location;
    gtag("event", "page_view", {
      send_to: GA4_MEASUREMENT_ID,
      page_location: location,
      page_path: pathname,
      page_title: document.title,
    });
  }, [allowAnalytics, pathname]);

  // Clics sur les liens téléphone et e-mail (délégation, aucun composant à modifier).
  useEffect(() => {
    let lastPhoneConversion = 0;
    const onClick = (event: MouseEvent) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="tel:"], a[href^="mailto:"]');
      if (!link) return;
      const isPhone = link.getAttribute("href")?.startsWith("tel:") ?? false;
      const placement = link.closest("header") ? "header" : link.closest("footer") ? "footer" : "content";
      trackGA4Event(isPhone ? "phone_click" : "email_click", { placement });

      const { allowAds: adsOk } = state.current;
      const gtag = getGtag();
      if (isPhone && adsOk && phoneConversion && gtag) {
        const now = Date.now();
        if (now - lastPhoneConversion < 2000) return;
        lastPhoneConversion = now;
        try {
          gtag("event", "conversion", { send_to: phoneConversion, transport_type: "beacon" });
        } catch {
          // Le suivi ne doit jamais bloquer l'appel.
        }
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [phoneConversion]);

  return null;
}
