"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function LegacyLocaleRedirect({
  target,
  locale = "fa",
}: {
  target: string;
  locale?: "fa" | "en";
}) {
  useEffect(() => {
    window.localStorage.setItem("silverfox-engineering-locale", locale);
    window.location.replace(target);
  }, [locale, target]);

  return (
    <main className="legacyRedirect" dir={locale === "fa" ? "rtl" : "ltr"}>
      <p>{locale === "fa" ? "در حال انتقال به نشانی اصلی…" : "Redirecting to the canonical route…"}</p>
      <Link href={target}>{locale === "fa" ? "ادامه" : "Continue"}</Link>
    </main>
  );
}
