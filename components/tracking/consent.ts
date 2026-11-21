/**
 * Consentement par finalité (mesure d'audience GA4 / publicité Google Ads).
 * - Aucun consentement présumé : tant qu'aucun choix n'est enregistré, rien de Google ne se charge.
 * - Choix conservé 6 mois dans le navigateur, puis redemandé (recommandation CNIL).
 * - Vercel Web Analytics fonctionne sans cookie et ne dépend pas de ce choix.
 */

export type ConsentChoice = { analytics: boolean; ads: boolean };

const STORAGE_KEY = "site-consent-v1";
const MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000;
const CHANGE_EVENT = "site-consent-change";
const OPEN_EVENT = "site-consent-open";

let cachedRaw: string | null | undefined;
let cachedValue: ConsentChoice | null = null;

/** Choix enregistré, ou null si aucun choix valide (jamais / expiré / illisible). */
export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  let raw: string | null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Stockage bloqué : seul un choix fait pendant cette page est connu.
    return cachedValue;
  }
  // Valeur stable entre deux lectures (exigé par useSyncExternalStore).
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  cachedValue = null;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { analytics?: unknown; ads?: unknown; date?: unknown };
    if (
      typeof parsed.analytics === "boolean" &&
      typeof parsed.ads === "boolean" &&
      typeof parsed.date === "number" &&
      Date.now() - parsed.date <= MAX_AGE_MS
    ) {
      cachedValue = { analytics: parsed.analytics, ads: parsed.ads };
    }
  } catch {
    // Valeur corrompue : on redemande.
  }
  return cachedValue;
}

export function saveConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...choice, date: Date.now() }));
  } catch {
    // Stockage indisponible : le choix vaut pour la page en cours.
    cachedRaw = undefined;
    cachedValue = choice;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeConsent(onChange: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onChange();
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Rouvre le bandeau (lien « Gérer les cookies »). */
export function openConsentPreferences(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentOpen(listener: () => void): () => void {
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
}
