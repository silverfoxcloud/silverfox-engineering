"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export default function NotFound() {
  const { locale } = useLocale();
  const fa = locale === "fa";

  return (
    <main className="notFound" lang={locale} dir={fa ? "rtl" : "ltr"}>
      <div className="mark large" aria-hidden="true">SF</div>
      <p>404</p>
      <h1>{fa ? "این صفحه پیدا نشد" : "Page not found"}</h1>
      <p>
        {fa
          ? "نشانی ممکن است تغییر کرده باشد یا این صفحه دیگر منتشر نشود."
          : "The route may have moved or is no longer published."}
      </p>
      <Link className="button primary" href="/">
        {fa ? "بازگشت به مهندسی" : "Back to Engineering"}
      </Link>
    </main>
  );
}
