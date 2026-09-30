"use client";

import { useEffect } from "react";

const STORAGE_KEY = "silverfox-engineering-locale";

export default function LegacyLocaleRedirect({ cleanPath }: { cleanPath: string }) {
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "fa");
    } catch {
      // Redirect still works when persistence is unavailable.
    }

    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.documentElement.dataset.locale = "fa";
    window.location.replace(cleanPath);
  }, [cleanPath]);

  return (
    <main className="legacyRedirect" lang="fa" dir="rtl">
      <p>در حال انتقال به نشانی اصلی…</p>
      <a href={cleanPath}>ادامه</a>
    </main>
  );
}
