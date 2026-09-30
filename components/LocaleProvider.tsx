"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/content";

const STORAGE_KEY = "silverfox-engineering-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  document.documentElement.dataset.locale = locale;
}

function updateClientMetadata(locale: Locale) {
  if (typeof document === "undefined") return;

  requestAnimationFrame(() => {
    const root = document.querySelector("main");
    const heading = root?.querySelector("h1")?.textContent?.trim();
    const lead =
      root?.querySelector(
        ".detailLead, .platformHero p, .packageHero p, .packageDetailHero p, .publicationHero p, .publicationArticleHero p, .heroCopy > p",
      )?.textContent?.trim() ?? "";

    if (heading) {
      document.title = heading.includes("Silver Fox")
        ? heading
        : heading + " | Silver Fox Engineering";
    }

    if (lead) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = lead.slice(0, 180);
    }

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  });
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    applyDocumentLocale(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // The active session still works if persistence is unavailable.
    }
  }, []);

  useLayoutEffect(() => {
    let persisted: Locale = "en";

    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      if (value === "fa" || value === "en") persisted = value;
    } catch {
      const fromDocument = document.documentElement.dataset.locale;
      if (fromDocument === "fa" || fromDocument === "en") persisted = fromDocument;
    }

    applyDocumentLocale(persisted);
    setLocaleState(persisted);

    requestAnimationFrame(() => {
      delete document.documentElement.dataset.localePending;
    });
  }, []);

  useEffect(() => {
    applyDocumentLocale(locale);
    updateClientMetadata(locale);
  }, [locale, pathname]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === "fa" ? "en" : "fa"),
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}
